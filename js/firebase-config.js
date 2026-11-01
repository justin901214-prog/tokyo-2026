// 到 Firebase Console → 專案設定 → 你的應用程式 → SDK 設定，把 firebaseConfig 貼過來。
// 這些值本來就會公開在網頁上，安全靠 firestore.rules 控管，放進 GitHub 沒問題。
// apiKey 留空時，網站會用「示範模式」：投票、留言只存在這支手機。
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
