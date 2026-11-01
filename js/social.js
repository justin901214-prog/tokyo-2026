// 投票／按讚／留言／登入。有 Firebase 設定就用 Firestore，沒有就用 localStorage 示範模式。
// 資料結構：
//   votes/{poll}_{uid}    { poll, opt, uid, name, at }
//   likes/{item}_{uid}    { item, uid, name, at }
//   comments/{auto}       { target, text, uid, name, at }
import { firebaseConfig } from './firebase-config.js';

const V = '10.12.2';
const FB = `https://www.gstatic.com/firebasejs/${V}`;

export const state = {
  mode: 'local',
  user: null, // { uid, name, photo, kind: 'google' | 'nick' }
  votes: {}, // poll -> { uid: { opt, name } }
  likes: {}, // item -> { uid: name }
  comments: {}, // target -> [ { id, text, uid, name, at } ]
};

const listeners = new Set();
export const onChange = fn => listeners.add(fn);
const emit = () => listeners.forEach(fn => fn(state));

let api = null;

export async function init() {
  if (firebaseConfig.apiKey) {
    try {
      api = await firebaseApi();
      state.mode = 'firebase';
      return;
    } catch (e) {
      console.error('Firebase 載入失敗，改用示範模式', e);
    }
  }
  api = localApi();
  state.mode = 'local';
}

export const signInGoogle = () => api.signInGoogle();
export const signInNick = name => api.signInNick(clean(name, 20));
export const rename = name => api.rename(clean(name, 20));
export const signOut = () => api.signOut();

export function vote(poll, opt) {
  const mine = state.votes[poll]?.[state.user.uid];
  return mine?.opt === opt ? api.unvote(poll) : api.vote(poll, opt);
}
export function toggleLike(item) {
  return state.likes[item]?.[state.user.uid] ? api.unlike(item) : api.like(item);
}
export const addComment = (target, text) => api.addComment(target, clean(text, 500));
export const deleteComment = id => api.deleteComment(id);

const clean = (s, max) => String(s || '').trim().slice(0, max);

// ---------- 把三個 collection 的文件整理成查詢用的 map ----------
function index(votes, likes, comments) {
  state.votes = {};
  for (const v of votes) (state.votes[v.poll] ||= {})[v.uid] = { opt: v.opt, name: v.name };
  state.likes = {};
  for (const l of likes) (state.likes[l.item] ||= {})[l.uid] = l.name;
  state.comments = {};
  for (const c of comments) (state.comments[c.target] ||= []).push(c);
  for (const list of Object.values(state.comments)) list.sort((a, b) => a.at - b.at);
}

// ---------- Firebase ----------
async function firebaseApi() {
  const [{ initializeApp }, A, F] = await Promise.all([
    import(`${FB}/firebase-app.js`),
    import(`${FB}/firebase-auth.js`),
    import(`${FB}/firebase-firestore.js`),
  ]);
  const app = initializeApp(firebaseConfig);
  const auth = A.getAuth(app);
  const db = F.getFirestore(app);

  const setUser = u => {
    state.user = u ? {
      uid: u.uid,
      name: u.displayName || '旅伴',
      photo: u.photoURL || '',
      kind: u.isAnonymous ? 'nick' : 'google',
    } : null;
    emit();
  };
  await new Promise(res => A.onAuthStateChanged(auth, u => { setUser(u); res(); }));

  const docs = { votes: [], likes: [], comments: [] };
  for (const name of Object.keys(docs)) {
    F.onSnapshot(F.collection(db, name), snap => {
      docs[name] = snap.docs.map(d => {
        const x = d.data();
        return { ...x, id: d.id, at: x.at?.toMillis?.() ?? Date.now() };
      });
      index(docs.votes, docs.likes, docs.comments);
      emit();
    }, err => console.error(name, err));
  }

  const me = () => auth.currentUser;
  const base = () => ({ uid: me().uid, name: me().displayName || '旅伴', at: F.serverTimestamp() });

  return {
    async signInGoogle() {
      const p = new A.GoogleAuthProvider();
      try {
        await A.signInWithPopup(auth, p);
      } catch (e) {
        if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
          await A.signInWithRedirect(auth, p);
        } else throw e;
      }
    },
    async signInNick(name) {
      const { user } = await A.signInAnonymously(auth);
      await A.updateProfile(user, { displayName: name });
      setUser(auth.currentUser);
    },
    async rename(name) {
      await A.updateProfile(me(), { displayName: name });
      setUser(auth.currentUser);
    },
    signOut: () => A.signOut(auth),
    vote: (poll, opt) => F.setDoc(F.doc(db, 'votes', `${poll}_${me().uid}`), { poll, opt, ...base() }),
    unvote: poll => F.deleteDoc(F.doc(db, 'votes', `${poll}_${me().uid}`)),
    like: item => F.setDoc(F.doc(db, 'likes', `${item}_${me().uid}`), { item, ...base() }),
    unlike: item => F.deleteDoc(F.doc(db, 'likes', `${item}_${me().uid}`)),
    addComment: (target, text) => F.addDoc(F.collection(db, 'comments'), { target, text, ...base() }),
    deleteComment: id => F.deleteDoc(F.doc(db, 'comments', id)),
  };
}

// ---------- 示範模式：只存在這台裝置 ----------
function localApi() {
  const KEY = 'trip-demo-v1';
  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  };
  const db = Object.assign({ user: null, votes: [], likes: [], comments: [] }, load());
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch {}
    state.user = db.user;
    index(db.votes, db.likes, db.comments);
    emit();
  };
  save();
  const uid = () => db.user.uid;
  const drop = (list, fn) => list.filter(x => !fn(x));
  return {
    async signInGoogle() { throw Object.assign(new Error('demo'), { code: 'demo' }); },
    async signInNick(name) { db.user = { uid: 'local-' + Date.now(), name, photo: '', kind: 'nick' }; save(); },
    async rename(name) { db.user.name = name; save(); },
    async signOut() { db.user = null; save(); },
    async vote(poll, opt) { db.votes = drop(db.votes, v => v.poll === poll && v.uid === uid()); db.votes.push({ poll, opt, uid: uid(), name: db.user.name }); save(); },
    async unvote(poll) { db.votes = drop(db.votes, v => v.poll === poll && v.uid === uid()); save(); },
    async like(item) { db.likes.push({ item, uid: uid(), name: db.user.name }); save(); },
    async unlike(item) { db.likes = drop(db.likes, l => l.item === item && l.uid === uid()); save(); },
    async addComment(target, text) { db.comments.push({ id: 'c' + Date.now(), target, text, uid: uid(), name: db.user.name, at: Date.now() }); save(); },
    async deleteComment(id) { db.comments = drop(db.comments, c => c.id === id); save(); },
  };
}
