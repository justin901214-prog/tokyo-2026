import { TRIP, AREAS, TYPES, PRICES, FOOD, STAYS, DAYS, POLLS, TRANSPORT, BUDGET, TIPS } from './data.js';
import * as S from './social.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const areaName = id => AREAS.find(a => a.id === id)?.name || id;
const priceLabel = v => PRICES.find(p => p.v === v)?.label || '';
const priceHint = v => PRICES.find(p => p.v === v)?.hint || '';
const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const nt = n => 'NT$' + n.toLocaleString('en-US');
const isLine = /\bLine\//i.test(navigator.userAgent);

const ICON = {
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  move: '<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-4M15 21l-1.5-4"/>',
  meal: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  spot: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  stay: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
  poll: '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  wallet: '<path d="M20 7H5a2 2 0 0 1 0-4h13v4"/><path d="M3 5v14a2 2 0 0 0 2 2h15V7"/><circle cx="16" cy="14" r="1"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  link: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
};
const icon = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICON[n] || ICON.spot}</svg>`;

// ---------- 路由 ----------
function route() {
  const [path, qs] = location.hash.slice(1).split('?');
  const [tab = 'day', arg] = path.split('/');
  return { tab: tab || 'day', arg, q: new URLSearchParams(qs || '') };
}

function defaultDay() {
  const now = new Date();
  const d = DAYS.findIndex(x => {
    const [m, day] = x.date.split('/').map(Number);
    return now.getFullYear() === 2026 && now.getMonth() + 1 === m && now.getDate() === day;
  });
  if (d >= 0) return d + 1;
  try { return Number(localStorage.getItem('trip-day')) || 1; } catch { return 1; }
}

function render() {
  const r = route();
  const view = $('#view');
  if (r.tab === 'vote') view.innerHTML = voteView(r.arg);
  else if (r.tab === 'food') view.innerHTML = foodView(r.q);
  else if (r.tab === 'stay') view.innerHTML = stayView();
  else if (r.tab === 'info') view.innerHTML = infoView(r.arg);
  else {
    const n = Math.min(Math.max(Number(r.arg) || defaultDay(), 1), DAYS.length);
    try { localStorage.setItem('trip-day', n); } catch {}
    view.innerHTML = dayView(DAYS[n - 1]);
    $('.days [aria-current]')?.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
  $$('.frow [aria-current]').forEach(el => { el.parentElement.scrollLeft = el.offsetLeft - el.parentElement.offsetLeft - 16; });
  $$('.tabbar a').forEach(a => a.toggleAttribute('aria-current', a.dataset.tab === (r.tab || 'day')));
  refreshSocial();
  const target = r.tab === 'vote' && r.arg ? $('#poll-' + r.arg) : null;
  if (target) target.scrollIntoView({ block: 'start' });
  else window.scrollTo(0, 0);
}

// ---------- 行程 ----------
function dayChips(cur) {
  return `<nav class="days" aria-label="選擇日期">${DAYS.map(d => `
    <a href="#day/${d.n}" ${d.n === cur ? 'aria-current="page"' : ''}>
      <small>${d.date.split('/')[0]}月</small><b>${d.date.split('/')[1]}</b><small>${d.dow}${d.items.some(i => i.type === 'poll') ? ' <i class="dot-poll" title="有投票"></i>' : ''}</small>
    </a>`).join('')}</nav>`;
}

function dayView(d) {
  const stay = STAYS.find(s => s.id === d.stay);
  return `
    ${dayChips(d.n)}
    <section class="hero">
      <img src="img/${d.img}.jpg" alt="" loading="eager">
      <div class="hero-txt">
        <p class="eyebrow">DAY ${d.n} · ${d.date}（${d.dow}）</p>
        <h1>${esc(d.title)}</h1>
      </div>
    </section>
    <div class="pad">
      <p class="lede">${esc(d.lede)}</p>
      <div class="chips-row">
        ${stay ? `<a class="pill" href="#stay">${icon('stay')}宿：${esc(stay.name)}</a>` : `<span class="pill">${icon('plane')}回程日</span>`}
        <span class="pill">${icon('wallet')}${esc(d.cost)}</span>
      </div>
      <section class="card key">
        <h2>${icon('clock')}重要時程</h2>
        <ul>${d.key.map(k => `<li><b>${esc(k.t)}</b><span>${esc(k.text)}</span></li>`).join('')}</ul>
      </section>
      <h2 class="sec">建議時間安排</h2>
      <ol class="tl">${d.items.map(tlItem).join('')}</ol>
      <nav class="pager">
        ${d.n > 1 ? `<a href="#day/${d.n - 1}">‹ Day ${d.n - 1}</a>` : '<span></span>'}
        ${d.n < DAYS.length ? `<a href="#day/${d.n + 1}">Day ${d.n + 1} ›</a>` : '<span></span>'}
      </nav>
    </div>`;
}

function tlItem(it) {
  let extra = '';
  if (it.type === 'meal' && it.area) extra = foodRail(it.area);
  if (it.type === 'meal' && it.pollArea) {
    const p = POLLS.find(x => x.id === it.pollArea);
    extra = `<p class="hint">看投票結果決定，各地點推薦：</p><div class="chips-row">${p.options.flatMap(o => o.areas).filter((a, i, arr) => arr.indexOf(a) === i)
      .map(a => `<a class="pill pill-link" href="#food?area=${a}">${esc(areaName(a))}</a>`).join('')}</div>`;
  }
  if (it.type === 'poll') extra = pollCard(POLLS.find(p => p.id === it.poll), true);
  return `
    <li class="tl-i t-${it.type}">
      <time>${esc(it.t)}</time>
      <span class="tl-dot">${icon(it.type)}</span>
      <div class="tl-body">
        <h3>${it.meal ? `<span class="tag">${esc(it.meal)}</span>` : ''}${esc(it.title)}</h3>
        ${it.desc ? `<p>${esc(it.desc)}</p>` : ''}
        ${it.img ? `<img class="thumb" src="img/${it.img}.jpg" alt="${esc(it.title)}" loading="lazy">` : ''}
        ${extra}
      </div>
    </li>`;
}

const likeCount = id => Object.keys(S.state.likes['food:' + id] || {}).length;

function foodRail(area) {
  const list = FOOD.filter(f => f.area === area).sort((a, b) => likeCount(b.id) - likeCount(a.id));
  return `
    <div class="rail">
      ${list.slice(0, 4).map(f => `
        <a class="rail-card" href="#food?area=${area}&focus=${f.id}">
          <b>${esc(f.name)}</b>
          <span>${esc(f.type)} · ${priceLabel(f.price)}</span>
          <span class="rc-like">${icon('heart')}<i data-like-count="food:${f.id}">0</i></span>
        </a>`).join('')}
      <a class="rail-card more" href="#food?area=${area}">${esc(areaName(area))}<br>全部 ${list.length} 間 ›</a>
    </div>`;
}

// ---------- 投票 ----------
function pollCard(p, compact) {
  return `
    <article class="poll ${compact ? 'compact' : 'card'}" data-poll="${p.id}" ${compact ? '' : `id="poll-${p.id}"`}>
      ${compact ? '' : `<p class="eyebrow">${esc(p.when)} · ${esc(p.deadline)} 截止</p><h2>${esc(p.title)}</h2><p class="muted">${esc(p.desc)}</p>`}
      <div class="opts">${p.options.map(o => `
        <div class="opt" data-opt-wrap="${p.id}:${o.id}">
          ${!compact && o.img ? `<img src="img/${o.img}.jpg" alt="" loading="lazy">` : ''}
          <div class="opt-main">
            <div class="opt-head">
              <h3>${esc(o.title)}</h3>
              <button class="vote-btn" data-vote="${p.id}" data-opt="${o.id}" aria-pressed="false"><span class="vb-on">已投</span><span class="vb-off">投這個</span></button>
            </div>
            ${compact ? '' : `
              <p class="meta">${esc(o.time)} · ${esc(o.cost)}</p>
              <ul class="points">${o.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
              ${o.areas.length ? `<div class="chips-row">${o.areas.map(a => `<a class="pill pill-link" href="#food?area=${a}">${icon('meal')}${esc(areaName(a))}美食</a>`).join('')}</div>` : ''}`}
            <div class="bar"><i data-bar="${p.id}:${o.id}"></i></div>
            <p class="voters"><b data-vcount="${p.id}:${o.id}">0</b> 票 <span data-voters="${p.id}:${o.id}"></span></p>
          </div>
        </div>`).join('')}
      </div>
      ${compact ? `<a class="more-link" href="#vote/${p.id}">看詳細介紹與留言 ›</a>` : commentBox('poll:' + p.id)}
    </article>`;
}

function voteView() {
  return `
    <div class="pad">
      <header class="page-head">
        <h1>行程候選</h1>
        <p class="muted">每題每人一票，可以改票；再按一次取消。投票結果大家都看得到。</p>
      </header>
      ${POLLS.map(p => pollCard(p, false)).join('')}
    </div>`;
}

// ---------- 美食 ----------
function foodView(q) {
  const area = q.get('area') || '', type = q.get('type') || '', price = Number(q.get('price')) || 0, sort = q.get('sort') || 'like';
  const link = (k, v) => {
    const n = new URLSearchParams(q);
    n.delete('focus');
    if (!v || q.get(k) === String(v)) n.delete(k); else n.set(k, v);
    return '#food?' + n.toString();
  };
  let list = FOOD.filter(f => (!area || f.area === area) && (!type || f.type === type) && (!price || f.price === price));
  list = sort === 'price' ? list.sort((a, b) => a.price - b.price) : list.sort((a, b) => likeCount(b.id) - likeCount(a.id));
  const areaCount = id => FOOD.filter(f => f.area === id).length;
  return `
    <div class="pad">
      <header class="page-head">
        <h1>餐食推薦</h1>
        <p class="muted">依區域、種類、價格篩選。按 ♥ 推薦給大家，熱門的會排前面。</p>
      </header>
      <div class="filters">
        <div class="frow" role="group" aria-label="區域">
          <a class="chip" href="${link('area', '')}" ${!area ? 'aria-current="true"' : ''}>全部區域</a>
          ${AREAS.map(a => `<a class="chip" href="${link('area', a.id)}" ${area === a.id ? 'aria-current="true"' : ''}>${esc(a.name)}<small>D${a.days.join('·')}</small></a>`).join('')}
        </div>
        <div class="frow" role="group" aria-label="種類">
          ${TYPES.map(t => `<a class="chip" href="${link('type', t)}" ${type === t ? 'aria-current="true"' : ''}>${esc(t)}</a>`).join('')}
        </div>
        <div class="frow" role="group" aria-label="價格">
          ${PRICES.map(p => `<a class="chip" href="${link('price', p.v)}" ${price === p.v ? 'aria-current="true"' : ''}>${p.label}<small>${p.hint}</small></a>`).join('')}
          <a class="chip sort" href="${link('sort', sort === 'price' ? '' : 'price')}">排序：${sort === 'price' ? '價格低→高' : '人氣'}</a>
        </div>
      </div>
      <p class="count muted">${area ? esc(areaName(area)) + ' · ' : ''}${list.length} 間${area ? `（共 ${areaCount(area)} 間）` : ''}</p>
      <div class="food-list">${list.map(foodCard).join('') || '<p class="empty">沒有符合的餐廳，換個條件試試。</p>'}</div>
    </div>`;
}

function foodCard(f) {
  const id = 'food:' + f.id;
  return `
    <article class="card food" id="f-${f.id}">
      <div class="food-head">
        <div>
          <h3>${esc(f.name)}</h3>
          <p class="jp">${esc(f.jp)}</p>
        </div>
        <button class="like" data-like="${id}" aria-pressed="false" aria-label="推薦">${icon('heart')}<b data-like-count="${id}">0</b></button>
      </div>
      <p class="meta"><a href="#food?area=${f.area}">${esc(areaName(f.area))}</a> · ${esc(f.type)} · <b>${priceLabel(f.price)}</b> <small>${priceHint(f.price)}</small></p>
      <p>${esc(f.desc)}</p>
      ${f.tip ? `<p class="tip">${esc(f.tip)}</p>` : ''}
      <p class="liked-by" data-liked-by="${id}"></p>
      <div class="food-foot">
        <a class="btn-ghost" href="${mapUrl(f.jp + ' ' + areaName(f.area).replace(/（.*）/, ''))}" target="_blank" rel="noopener">${icon('map')}地圖</a>
        <details>
          <summary class="btn-ghost">${icon('chat')}留言 <span data-ccount="${id}">0</span></summary>
          ${commentBox(id)}
        </details>
      </div>
    </article>`;
}

// ---------- 住宿 ----------
function stayView() {
  return `
    <div class="pad">
      <header class="page-head">
        <h1>住宿</h1>
        <p class="muted">六晚四個地方。點照片可以左右滑。</p>
      </header>
      ${STAYS.map(s => `
        <article class="card stay" id="stay-${s.id}">
          ${s.photos.length ? `<div class="gallery">${s.photos.map(([f, cap]) => `<figure><img src="img/stay/${f}.jpg" alt="${esc(cap)}" loading="lazy"><figcaption>${esc(cap)}</figcaption></figure>`).join('')}</div>` : ''}
          <div class="stay-body">
            <p class="eyebrow">${esc(s.nights)} · ${s.night} 晚 · ${s.people} 人</p>
            <h2>${esc(s.name)}</h2>
            <p class="muted">${esc(s.jp)} · ${esc(s.area)}</p>
            <dl class="facts">
              <dt>入住</dt><dd>${esc(s.checkin)}</dd>
              <dt>退房</dt><dd>${esc(s.checkout)}</dd>
              <dt>交通</dt><dd>${esc(s.station)}</dd>
              <dt>費用</dt><dd>${esc(s.price)}</dd>
            </dl>
            <ul class="points">${s.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>
            <div class="food-foot">
              ${s.url ? `<a class="btn-ghost" href="${s.url}" target="_blank" rel="noopener">${icon('link')}訂房頁</a>` : ''}
              <a class="btn-ghost" href="${mapUrl(s.name + ' ' + s.area)}" target="_blank" rel="noopener">${icon('map')}地圖</a>
            </div>
          </div>
        </article>`).join('')}
    </div>`;
}

// ---------- 交通・預算・須知 ----------
function infoView(arg = 'transport') {
  const tabs = [['transport', '交通'], ['budget', '預算'], ['tips', '須知']];
  let body = '';
  if (arg === 'budget') {
    const lo = BUDGET.rows.reduce((s, r) => s + r.lo, 0), hi = BUDGET.rows.reduce((s, r) => s + r.hi, 0);
    body = `
      <section class="card">
        <h2>每人預算</h2>
        <p class="muted">新台幣 · ${esc(BUDGET.note)}</p>
        <table class="budget">
          <tbody>${BUDGET.rows.map(r => `<tr><td>${esc(r.item)}${r.est ? ' <span class="tag est">估</span>' : ''}</td><td>${r.lo === r.hi ? nt(r.lo) : `${nt(r.lo)}–${r.hi.toLocaleString('en-US')}`}</td></tr>`).join('')}</tbody>
          <tfoot><tr><td>合計</td><td>${nt(lo)}–${hi.toLocaleString('en-US')}</td></tr></tfoot>
        </table>
      </section>
      <section class="card">
        <h2>依投票可能再加</h2>
        <ul class="kv">${BUDGET.addons.map(a => `<li><span>${esc(a.item)}</span><b>¥${a.yen.toLocaleString('en-US')} ≈ ${nt(Math.round(a.yen / TRIP.rate))}</b></li>`).join('')}</ul>
      </section>
      <section class="card">
        <h2>匯率換算</h2>
        <p class="muted">1 台幣 ≈ ${TRIP.rate} 日圓</p>
        <div class="conv">
          <label>日圓<input id="yen" inputmode="numeric" placeholder="1000"></label>
          <span>≈</span>
          <label>台幣<input id="twd" inputmode="numeric" placeholder="210"></label>
        </div>
      </section>`;
  } else if (arg === 'tips') {
    body = TIPS.map(t => `<section class="card"><h2>${esc(t.h)}</h2><p>${esc(t.p)}</p></section>`).join('') + `
      <section class="card"><h2>照片來源</h2><p class="muted small">景點照片取自 Wikimedia Commons（CC BY／CC BY-SA／CC0），住宿照片取自各訂房頁面。作者與授權見 <a href="credits.html">credits</a>。</p></section>`;
  } else {
    arg = 'transport';
    body = `
      <section class="card">
        <h2>航班</h2>
        <ul class="kv">${TRIP.flights.map(f => `<li><span>${f.label} ${f.date}</span><b>${f.time}</b></li>`).join('')}</ul>
      </section>
      <section class="card">
        <h2>票券與交通工具</h2>
        <ul class="passes">${TRANSPORT.passes.map(p => `<li><div><b>${esc(p.name)}</b><span class="price">${esc(p.price)}</span></div><p>${esc(p.note)}</p></li>`).join('')}</ul>
      </section>
      <section class="card">
        <h2>每日路線</h2>
        <ol class="routes">${TRANSPORT.routes.map(r => `<li><a href="#day/${r.day}">D${r.day} ${DAYS[r.day - 1].date}</a><p>${esc(r.text)}</p></li>`).join('')}</ol>
      </section>
      <section class="card">
        <h2>赤羽出發（11/19–22）</h2>
        <ul class="kv">${TRANSPORT.base.map(b => `<li><span>→ ${esc(b.to)}</span><b>${esc(b.text)}</b></li>`).join('')}</ul>
      </section>`;
  }
  return `
    <div class="pad">
      <header class="page-head"><h1>交通・預算</h1></header>
      <nav class="seg">${tabs.map(([k, l]) => `<a href="#info/${k}" ${k === arg ? 'aria-current="true"' : ''}>${l}</a>`).join('')}</nav>
      ${body}
    </div>`;
}

// ---------- 留言 ----------
function commentBox(target) {
  return `
    <div class="cbox">
      <ul class="clist" data-clist="${target}"></ul>
      <form class="cform" data-cform="${target}">
        <input name="t" maxlength="500" autocomplete="off" placeholder="留言…" aria-label="留言">
        <button type="submit">送出</button>
      </form>
    </div>`;
}

function ago(ms) {
  const m = Math.round((Date.now() - ms) / 60000);
  if (m < 1) return '剛剛';
  if (m < 60) return m + ' 分鐘前';
  if (m < 1440) return Math.round(m / 60) + ' 小時前';
  const d = new Date(ms);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

// ---------- 把投票、按讚、留言數字更新到畫面上（不整頁重繪，打到一半的留言不會不見） ----------
function refreshSocial() {
  const st = S.state, me = st.user?.uid;
  $$('[data-like-count]').forEach(el => { el.textContent = Object.keys(st.likes[el.dataset.likeCount] || {}).length; });
  $$('[data-like]').forEach(el => el.setAttribute('aria-pressed', !!st.likes[el.dataset.like]?.[me]));
  $$('[data-liked-by]').forEach(el => {
    const names = Object.values(st.likes[el.dataset.likedBy] || {});
    el.textContent = names.length ? '♥ ' + names.join('、') : '';
  });
  $$('[data-ccount]').forEach(el => { el.textContent = (st.comments[el.dataset.ccount] || []).length; });
  $$('[data-clist]').forEach(el => {
    const list = st.comments[el.dataset.clist] || [];
    el.innerHTML = list.map(c => `
      <li>
        <p><b>${esc(c.name)}</b><small>${ago(c.at)}</small>${c.uid === me ? `<button class="del" data-del="${esc(c.id)}" aria-label="刪除">刪除</button>` : ''}</p>
        <p>${esc(c.text)}</p>
      </li>`).join('');
  });
  $$('[data-poll]').forEach(el => {
    const pid = el.dataset.poll, votes = st.votes[pid] || {};
    const total = Object.keys(votes).length;
    const byOpt = {};
    for (const v of Object.values(votes)) (byOpt[v.opt] ||= []).push(v.name);
    const max = Math.max(0, ...Object.values(byOpt).map(a => a.length));
    $$('[data-opt-wrap]', el).forEach(w => {
      const oid = w.dataset.optWrap.split(':')[1], names = byOpt[oid] || [];
      $('[data-bar]', w).style.width = total ? (names.length / total * 100) + '%' : '0';
      $('[data-vcount]', w).textContent = names.length;
      $('[data-voters]', w).textContent = names.length ? '· ' + names.join('、') : '';
      $('[data-vote]', w).setAttribute('aria-pressed', votes[me]?.opt === oid);
      w.classList.toggle('lead', max > 0 && names.length === max);
    });
  });
  const u = st.user, btn = $('#authBtn');
  btn.innerHTML = u
    ? (u.photo ? `<img src="${esc(u.photo)}" alt="" referrerpolicy="no-referrer">` : `<span class="avatar">${esc(u.name.slice(0, 1))}</span>`) + `<span>${esc(u.name)}</span>`
    : `${icon('user')}<span>登入</span>`;
}

// ---------- 登入視窗 ----------
function openAuth(msg) {
  const d = $('#auth'), u = S.state.user;
  const googleBlocked = isLine ? 'LINE 內建瀏覽器不能用 Google 登入，請用右上角「⋯」→ 用預設瀏覽器開啟，或用暱稱。'
    : S.state.mode === 'local' ? '示範模式（尚未設定 Firebase），只能用暱稱，資料只存在這支手機。' : '';
  d.innerHTML = `
    <form method="dialog" class="sheet">
      <button class="x" value="close" aria-label="關閉">×</button>
      ${u ? `
        <h2>嗨，${esc(u.name)}</h2>
        <p class="muted">${u.kind === 'google' ? '已用 Google 登入' : '暱稱登入'}</p>
        <label class="field">顯示名稱<input name="nick" value="${esc(u.name)}" maxlength="20"></label>
        <button type="button" class="btn" data-act="rename">更新名稱</button>
        <button type="button" class="btn-ghost wide" data-act="logout">登出</button>
      ` : `
        <h2>登入後才能投票和留言</h2>
        ${msg ? `<p class="muted">${esc(msg)}</p>` : ''}
        <button type="button" class="btn google" data-act="google" ${googleBlocked ? 'disabled' : ''}>
          <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
          用 Google 登入
        </button>
        ${googleBlocked ? `<p class="small muted">${googleBlocked}</p>` : ''}
        <div class="or"><span>或</span></div>
        <label class="field">輸入暱稱<input name="nick" maxlength="20" placeholder="例如：小明" autocomplete="nickname"></label>
        <button type="button" class="btn" data-act="nick">用暱稱開始</button>
        <p class="small muted">暱稱登入只記在這支手機的瀏覽器；換手機或清除資料要重新輸入。</p>
      `}
      <p class="err" role="alert"></p>
    </form>`;
  d.showModal();
}

async function authAction(act) {
  const d = $('#auth'), nick = $('[name=nick]', d)?.value.trim(), err = $('.err', d);
  err.textContent = '';
  try {
    if (act === 'google') await S.signInGoogle();
    else if (act === 'nick') { if (!nick) { err.textContent = '請輸入暱稱'; return; } await S.signInNick(nick); }
    else if (act === 'rename') { if (!nick) return; await S.rename(nick); }
    else if (act === 'logout') await S.signOut();
    d.close();
    toast(act === 'logout' ? '已登出' : '完成');
  } catch (e) {
    console.error(e);
    err.textContent = e.code === 'auth/popup-closed-by-user' ? '登入視窗被關掉了' : '失敗：' + (e.code || e.message);
  }
}

function need() {
  if (S.state.user) return true;
  openAuth('投票、按讚和留言要先登入，看行程不用。');
  return false;
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 1800);
}

const guard = p => p.catch(e => { console.error(e); toast('沒有成功，請再試一次'); });

// ---------- 事件 ----------
document.addEventListener('click', e => {
  const t = e.target.closest('[data-like],[data-vote],[data-del],[data-act],#authBtn');
  if (!t) return;
  if (t.id === 'authBtn') return openAuth();
  if (t.dataset.act) return authAction(t.dataset.act);
  if (!need()) return;
  if (t.dataset.like) guard(S.toggleLike(t.dataset.like));
  else if (t.dataset.vote) guard(S.vote(t.dataset.vote, t.dataset.opt));
  else if (t.dataset.del) guard(S.deleteComment(t.dataset.del));
});

document.addEventListener('submit', e => {
  const f = e.target.closest('[data-cform]');
  if (!f) return;
  e.preventDefault();
  const input = f.elements.t;
  if (!input.value.trim() || !need()) return;
  guard(S.addComment(f.dataset.cform, input.value).then(() => { input.value = ''; }));
});

document.addEventListener('input', e => {
  if (e.target.id === 'yen') $('#twd').value = e.target.value ? Math.round(Number(e.target.value.replace(/,/g, '')) / TRIP.rate) || '' : '';
  if (e.target.id === 'twd') $('#yen').value = e.target.value ? Math.round(Number(e.target.value.replace(/,/g, '')) * TRIP.rate) || '' : '';
});

window.addEventListener('hashchange', () => {
  render();
  const focus = route().q.get('focus');
  if (focus) $('#f-' + focus)?.scrollIntoView({ block: 'center' });
});

// ---------- 啟動 ----------
(async () => {
  render();
  await S.init();
  S.onChange(refreshSocial);
  refreshSocial();
  if (S.state.mode === 'local') $('#demo').hidden = false;
  if (isLine) $('#lineTip').hidden = false;
  const focus = route().q.get('focus');
  if (focus) $('#f-' + focus)?.scrollIntoView({ block: 'center' });
})();
