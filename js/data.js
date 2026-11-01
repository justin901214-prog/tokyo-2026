// 所有行程內容都在這個檔案。改行程、加餐廳只要改這裡。
// 價格：餐廳 price 1–4 = ¥～1,500／¥1,500–3,000／¥3,000–6,000／¥6,000+（每人）

export const TRIP = {
  title: '東京七日',
  sub: '2026 · 11/16 – 11/22',
  rate: 4.76, // 1 台幣 ≈ 4.76 日圓
  flights: [
    { label: '去程', date: '11/16（一）', time: '02:30 TPE → 06:30 NRT' },
    { label: '回程', date: '11/22（日）', time: '13:55 NRT → 16:15 TPE' },
  ],
};

export const AREAS = [
  { id: 'asakusa', name: '淺草', days: [1] },
  { id: 'oshiage', name: '押上・晴空塔', days: [1] },
  { id: 'shinjuku', name: '新宿', days: [1, 5] },
  { id: 'yumoto', name: '箱根湯本', days: [2] },
  { id: 'gora', name: '強羅・大涌谷', days: [3] },
  { id: 'gotemba', name: '御殿場', days: [3] },
  { id: 'kawaguchiko', name: '河口湖・富士吉田', days: [3, 4] },
  { id: 'waseda', name: '早稻田', days: [5] },
  { id: 'shibuya', name: '澀谷', days: [5, 6] },
  { id: 'harajuku', name: '原宿・表參道', days: [5, 6] },
  { id: 'akiba', name: '秋葉原・神田', days: [5] },
  { id: 'nakano', name: '中野', days: [5] },
  { id: 'fuchu', name: '府中（競馬場）', days: [6] },
  { id: 'shibamata', name: '柴又', days: [6] },
  { id: 'tsukishima', name: '月島', days: [6] },
  { id: 'akabane', name: '赤羽（住宿周邊）', days: [4, 5, 6, 7] },
  { id: 'ueno', name: '上野・日暮里', days: [7] },
];

export const TYPES = ['拉麵', '壽司', '燒肉・壽喜燒', '天婦羅・炸物', '蕎麥・烏龍', '洋食・漢堡排', '居酒屋', '小吃・甜點', '在地料理', '美食街'];

export const PRICES = [
  { v: 1, label: '¥', hint: '～¥1,500' },
  { v: 2, label: '¥¥', hint: '¥1,500–3,000' },
  { v: 3, label: '¥¥¥', hint: '¥3,000–6,000' },
  { v: 4, label: '¥¥¥¥', hint: '¥6,000+' },
];

export const FOOD = [
  // 淺草
  { id: 'imahan', name: '淺草今半 本店', jp: '浅草今半', area: 'asakusa', type: '燒肉・壽喜燒', price: 4, desc: '百年壽喜燒老店，黑毛和牛。午間套餐比晚餐便宜很多。', tip: '9 人一定要先訂位' },
  { id: 'daikokuya', name: '大黑家天麩羅', jp: '大黒家天麩羅', area: 'asakusa', type: '天婦羅・炸物', price: 2, desc: '用胡麻油炸、醬汁濃厚的深色天丼，淺草排隊名店。', tip: '平日中午也會排 30 分鐘以上' },
  { id: 'yoshikami', name: '洋食 YOSHIKAMI', jp: '洋食ヨシカミ', area: 'asakusa', type: '洋食・漢堡排', price: 2, desc: '昭和老洋食館，蛋包飯、燉牛肉、炸豬排三明治。' },
  { id: 'menchi', name: '淺草炸肉餅', jp: '浅草メンチ', area: 'asakusa', type: '小吃・甜點', price: 1, desc: '現炸和牛肉餅，一個 ¥300 上下，邊走邊吃。' },
  { id: 'azuma', name: '淺草黍糰子 あづま', jp: '浅草きびだんご あづま', area: 'asakusa', type: '小吃・甜點', price: 1, desc: '仲見世旁的現做黃豆粉糰子，5 支一串。' },
  // 押上
  { id: 'rokurinsha', name: '六厘舍 晴空塔店', jp: '六厘舎 東京ソラマチ', area: 'oshiage', type: '拉麵', price: 1, desc: '濃厚魚介豚骨沾麵，東京沾麵代表之一。', tip: '晚餐時段排隊，可以先抽號' },
  { id: 'toriton', name: '迴轉壽司 Toriton', jp: '回転寿司 トリトン ソラマチ', area: 'oshiage', type: '壽司', price: 2, desc: '北海道來的迴轉壽司，料大新鮮。', tip: '店門口機器抽號碼牌' },
  { id: 'solafood', name: '晴空街道 美食街', jp: '東京ソラマチ フードコート', area: 'oshiage', type: '美食街', price: 1, desc: '3F 美食街各式都有，9 個人想吃不一樣時最方便。' },
  // 新宿
  { id: 'fuunji', name: '風雲兒', jp: '風雲児', area: 'shinjuku', type: '拉麵', price: 1, desc: '雞白湯魚介沾麵，南口步行 7 分。' },
  { id: 'tsunahachi', name: '綱八 新宿本店', jp: 'つな八 新宿本店', area: 'shinjuku', type: '天婦羅・炸物', price: 2, desc: '1924 年創業的天婦羅，午餐套餐 ¥2,000 上下。' },
  { id: 'omoide', name: '回憶橫丁', jp: '思い出横丁', area: 'shinjuku', type: '居酒屋', price: 2, desc: '西口鐵道旁的串燒小巷，昭和氣氛。', tip: '店都很小，9 人要拆桌' },
  { id: 'isetan', name: '伊勢丹 地下美食', jp: '伊勢丹新宿 デパ地下', area: 'shinjuku', type: '小吃・甜點', price: 2, desc: '便當、熟食、甜點最齊全的百貨地下街，可以買回住處吃。' },
  { id: 'jojoen', name: '敘敘苑 新宿', jp: '叙々苑', area: 'shinjuku', type: '燒肉・壽喜燒', price: 4, desc: '高級燒肉連鎖，午間便當套餐比較便宜。' },
  { id: 'ichiran-s', name: '一蘭 新宿中央東口', jp: '一蘭', area: 'shinjuku', type: '拉麵', price: 1, desc: '24 小時營業的豚骨拉麵，半夜餓了也有。' },
  // 箱根湯本
  { id: 'hatsuhana', name: 'はつ花蕎麥 本店', jp: 'はつ花そば 本店', area: 'yumoto', type: '蕎麥・烏龍', price: 2, desc: '自然薯山藥泥蕎麥麵，湯本老店。', tip: '箱根的店大多 18:00–19:00 就收' },
  { id: 'naokichi', name: '湯葉丼 直吉', jp: '湯葉丼 直吉', area: 'yumoto', type: '在地料理', price: 2, desc: '湯本招牌湯葉（豆皮）滑蛋丼，清淡順口。' },
  { id: 'chimoto', name: '湯餅 ちもと', jp: '湯もち ちもと', area: 'yumoto', type: '小吃・甜點', price: 1, desc: '柚子香的軟麻糬「湯もち」，伴手禮名物。' },
  { id: 'yumoto-street', name: '湯本站前商店街', jp: '箱根湯本駅前商店街', area: 'yumoto', type: '小吃・甜點', price: 1, desc: '魚板、溫泉饅頭、可樂餅，一路吃過去。' },
  // 強羅・大涌谷
  { id: 'ginkatsu', name: '田村銀勝亭', jp: '田むら銀かつ亭', area: 'gora', type: '在地料理', price: 2, desc: '強羅名物「豆腐炸豬排煮」，用砂鍋端上來。', tip: '開店前就有人排' },
  { id: 'kurotamago', name: '大涌谷 黑蛋', jp: '大涌谷くろたまご館', area: 'gora', type: '小吃・甜點', price: 1, desc: '硫磺溫泉煮成的黑殼蛋，¥500／4 顆，傳說一顆延壽七年。' },
  { id: 'owaku-curry', name: '大涌谷站食堂', jp: '大涌谷駅食堂', area: 'gora', type: '洋食・漢堡排', price: 1, desc: '纜車站內，黑咖哩飯配富士山景（晴天）。' },
  { id: 'gora-brew', name: 'GORA BREWERY & GRILL', jp: 'GORA BREWERY & GRILL', area: 'gora', type: '居酒屋', price: 3, desc: '強羅精釀啤酒餐廳，窯烤料理。' },
  // 御殿場
  { id: 'sawayaka', name: 'Sawayaka 御殿場交流道店', jp: 'さわやか 御殿場インター店', area: 'gotemba', type: '洋食・漢堡排', price: 2, desc: '靜岡限定的炭烤拳頭漢堡排，日本人也專程來吃。', tip: '常排 1–2 小時，用 App 遠端抽號' },
  { id: 'outlet-food', name: '御殿場 Outlet 美食街', jp: '御殿場プレミアム・アウトレット', area: 'gotemba', type: '美食街', price: 1, desc: '轉車順便吃，選擇多、不用排。' },
  // 河口湖・富士吉田
  { id: 'fudo', name: 'ほうとう不動 東戀路店', jp: 'ほうとう不動 東恋路店', area: 'kawaguchiko', type: '在地料理', price: 2, desc: '山梨名物餺飥（南瓜味噌粗麵鍋），白色雲朵造型建築。' },
  { id: 'kosaku', name: '小作 河口湖店', jp: '甲州ほうとう 小作', area: 'kawaguchiko', type: '在地料理', price: 2, desc: '餺飥連鎖老店，座位多，團體好進。' },
  { id: 'yoshida-udon', name: '吉田烏龍麵', jp: '吉田のうどん', area: 'kawaguchiko', type: '蕎麥・烏龍', price: 1, desc: '富士吉田一帶的超硬粗烏龍，一碗 ¥500 上下。', tip: '多半只開午餐，13:30 前要到' },
  { id: 'villa-bbq', name: '山中湖 Villa 自煮・BBQ', jp: '自炊', area: 'kawaguchiko', type: '在地料理', price: 2, desc: '11/18 晚上在 Villa 用露臺 BBQ 或廚房自煮。取車後順路去超市採買。', tip: '租車店 19:00 打烊，採買要在取車後' },
  // 早稻田
  { id: 'mercy', name: 'Mercy 拉麵', jp: 'ラーメン メルシー', area: 'waseda', type: '拉麵', price: 1, desc: '早稻田學生街傳說級便宜拉麵，一碗 ¥500 上下。' },
  { id: 'waseda-bento', name: '早稻田便當屋', jp: 'わせだの弁当屋', area: 'waseda', type: '小吃・甜點', price: 1, desc: '份量超大的學生便當，帶去校園吃。' },
  // 澀谷
  { id: 'midori', name: '美登利壽司 澀谷店', jp: '梅丘寿司の美登利 渋谷店', area: 'shibuya', type: '壽司', price: 2, desc: 'CP 值很高的壽司，套餐 ¥2,000 起。', tip: '先在店門口或線上抽號' },
  { id: 'hikiniku', name: '挽肉與米 澀谷', jp: '挽肉と米 渋谷', area: 'shibuya', type: '洋食・漢堡排', price: 2, desc: '炭火現烤漢堡排配現煮白飯，吃到飽飯。', tip: '整理券制，早上就發完' },
  { id: 'yokocho', name: '澀谷橫丁', jp: '渋谷横丁（MIYASHITA PARK）', area: 'shibuya', type: '居酒屋', price: 2, desc: '日本各地小吃攤集合的居酒屋街，適合人多。' },
  // 原宿・表參道
  { id: 'marion', name: 'Marion 可麗餅', jp: 'マリオンクレープ', area: 'harajuku', type: '小吃・甜點', price: 1, desc: '竹下通元祖可麗餅。' },
  { id: 'afuri', name: 'AFURI 原宿', jp: 'AFURI 原宿', area: 'harajuku', type: '拉麵', price: 1, desc: '柚子鹽拉麵，清爽系代表。' },
  { id: 'maisen', name: 'まい泉 青山本店', jp: 'とんかつ まい泉', area: 'harajuku', type: '天婦羅・炸物', price: 2, desc: '「筷子就切得斷」的炸豬排，老錢湯改建。' },
  // 秋葉原・神田
  { id: 'matsuya', name: '神田松屋', jp: '神田まつや', area: 'akiba', type: '蕎麥・烏龍', price: 2, desc: '明治時代創業的蕎麥麵老舖。' },
  { id: 'gogo', name: 'Go! Go! 咖哩 秋葉原', jp: 'ゴーゴーカレー', area: 'akiba', type: '洋食・漢堡排', price: 1, desc: '金澤濃厚咖哩配炸豬排。' },
  // 中野
  { id: 'aoba', name: '中華蕎麥 青葉 中野本店', jp: '中華そば 青葉', area: 'nakano', type: '拉麵', price: 1, desc: '「雙湯頭」動物系＋魚介系始祖。' },
  // 府中
  { id: 'keiba-food', name: '東京競馬場 場內美食', jp: '東京競馬場 グルメ', area: 'fuchu', type: '美食街', price: 1, desc: '場內很多攤位：拉麵、牛丼、炸物、啤酒，邊看比賽邊吃。' },
  // 柴又
  { id: 'kawachiya', name: '川千家', jp: '川千家', area: 'shibamata', type: '在地料理', price: 3, desc: '帝釋天參道上的江戶川鰻魚老店。' },
  { id: 'takagiya', name: '高木屋老舖 草糰子', jp: '高木屋老舗', area: 'shibamata', type: '小吃・甜點', price: 1, desc: '《男人真命苦》裡的艾草糰子。' },
  // 月島
  { id: 'monja', name: '月島文字燒街', jp: '月島もんじゃストリート', area: 'tsukishima', type: '在地料理', price: 2, desc: '一條街七十多間文字燒，自己在鐵板上煎。' },
  // 赤羽
  { id: 'marumasu', name: 'Marumasu 家', jp: 'まるます家', area: 'akabane', type: '居酒屋', price: 2, desc: '早上就開的昼飲名店，鰻魚、鯉魚、炸物。', tip: '週一公休；不能訂位' },
  { id: 'maruken', name: '丸健水產', jp: '丸健水産', area: 'akabane', type: '小吃・甜點', price: 1, desc: '站著吃的關東煮，最後在湯裡加一杯酒。' },
  { id: 'ikoi', name: '立飲 憩', jp: '立ち飲み いこい 本店', area: 'akabane', type: '居酒屋', price: 1, desc: '一品 ¥100–200 的立飲屋，赤羽老派。' },
  // 上野
  { id: 'ameyoko', name: '阿美橫丁', jp: 'アメ横', area: 'ueno', type: '小吃・甜點', price: 1, desc: '水果串、海鮮丼、零食批發，早上 10 點後比較熱鬧。' },
  { id: 'mihashi', name: 'みはし 上野本店', jp: 'あんみつ みはし', area: 'ueno', type: '小吃・甜點', price: 1, desc: '上野老字號餡蜜。' },
];

export const STAYS = [
  {
    id: 'shinjuku', nights: '11/16', night: 1, name: '新宿住宿', jp: '名稱待補', area: '新宿', people: 9,
    checkin: '15:00', checkout: '—', station: '新宿駅周邊',
    notes: ['紅眼班機落地，行李先寄放，傍晚再入住', '住宿名稱與地址待補'],
    photos: [], price: 'NT$1,130／人',
  },
  {
    id: 'yu', nights: '11/17', night: 1, name: '箱根湯本 山坡獨棟', jp: 'Airbnb · 84㎡ · 3 臥室', area: '箱根湯本', people: 9,
    checkin: '15:00–21:00 自助入住', checkout: '10:00 前', station: '箱根湯本駅步行約 12 分（陡坡，帶行李建議搭計程車，9 人 3 台）',
    url: 'https://www.airbnb.com.tw/rooms/843285427849128041',
    notes: ['房子沒有溫泉，去箱根湯寮泡（¥1,800／人，平日 19:00 最後入場，免費接駁末班 21:05）', '來不及就改去湯の里おかだ（開到 23:00，計程車 5–10 分）', '只有 1 間浴室；1F、2F 各 1 間廁所', '有廚房；步行 5 分有 2 間超商'],
    photos: [['yu-u0', '客廳'], ['yu-u23', '窗外山景'], ['yu-u1', '客廳・廚房'], ['yu-u4', '臥室 1'], ['yu-u5', '臥室 3 雙層床'], ['yu-u20', '浴室'], ['yu-u28', '外觀']],
    price: 'NT$1,676／人（含湯寮）',
  },
  {
    id: 'yam', nights: '11/18', night: 1, name: '樂天 STAY VILLA 山中湖', jp: 'Room 3 · 87㎡ · 雙人床 ×5', area: '山中湖・平野', people: 8,
    checkin: '自助入住（時間見 Agoda 訂單）', checkout: '見訂單', station: '河口湖駅開車約 30 分',
    url: 'https://www.agoda.com/zh-tw/minamitsuru-gun-house-vacation-stay-83576/hotel/yamanakako-jp.html',
    notes: ['客廳、露臺正對山中湖與富士山', '露臺可 BBQ，有大型按摩浴缸、投影機', '沒有溫泉；Room 3 的浴缸看不到富士山', '隔天要開回河口湖駅還車（約 30 分）'],
    photos: [['yam-y2', '露臺望湖與富士山'], ['yam-y0', '外觀'], ['yam-y1', '挑高客廳'], ['yam-y4', '按摩浴缸'], ['yam-y14', '臥室'], ['yam-y11', '露臺餐桌'], ['yam-y15', '夜景']],
    price: 'NT$1,670／人',
  },
  {
    id: 'manoku', nights: '11/19 – 11/22', night: 3, name: 'ManOku 萬屋', jp: '赤羽台獨棟 · 200㎡ · 6 臥室', area: '北區 赤羽台', people: 7,
    checkin: '16:00–24:00', checkout: '10:30–11:00', station: '赤羽駅步行約 11 分（埼京線直達新宿 14 分）',
    url: 'https://www.booking.com/hotel/jp/myman-yi.zh-tw.html',
    notes: ['每人一張正式床；有電梯（入住前先問房東電梯是否正常）', '2 間衛浴（1 浴缸、1 淋浴），每層都有廁所', '客廳有大電視、長餐桌', '赤羽是居酒屋街，站前餐廳、超市很多'],
    photos: [['mo-87', '外觀'], ['mo-23', '1F 客廳'], ['mo-08', '長餐桌'], ['mo-19', '廚房'], ['mo-51', '臥室'], ['mo-46', '臥室'], ['mo-02', '浴室']],
    price: 'NT$3,940／人（三晚）',
  },
];

// 時間軸項目 type：flight / move / spot / meal / stay / poll / note
// meal 會依 area 自動帶出推薦餐廳；poll 會帶出投票卡
export const DAYS = [
  {
    n: 1, date: '11/16', dow: '一', title: '龜有・淺草・晴空塔', img: 'sensoji', stay: 'shinjuku',
    lede: '紅眼班機落地，從龜有一路往西：兩津勘吉銅像、淺草寺，傍晚上晴空塔看夕陽轉夜景。',
    key: [
      { t: '06:30', text: '成田落地，入境約 1 小時' },
      { t: '16:00', text: '晴空塔入場（11 月日落約 16:30）。官網票前一天 23:59 截止，現場加 ¥500' },
      { t: '早睡', text: '整晚沒睡，晚上不要排太滿' },
    ],
    items: [
      { t: '06:30', type: 'flight', title: '抵達成田機場', desc: '入境、領行李、買 Suica（或用手機 Suica）' },
      { t: '07:45', type: 'move', title: 'Skyliner → 日暮里', desc: '約 40 分。大行李放日暮里站置物櫃，或先寄到新宿住宿' },
      { t: '08:45', type: 'move', title: 'JR 常磐線 日暮里 → 龜有', desc: '約 15 分' },
      { t: '09:00', type: 'spot', title: '龜有 兩津勘吉銅像巡禮', desc: '銅像 15 座、人孔蓋、香取神社、Ario 3F こち亀ゲームぱ～く，全免費', img: 'kameari' },
      { t: '11:00', type: 'move', title: '龜有 → 北千住 → 淺草', desc: '約 25 分' },
      { t: '11:45', type: 'meal', meal: '午餐', area: 'asakusa', title: '淺草午餐' },
      { t: '13:00', type: 'spot', title: '雷門・仲見世通・淺草寺', desc: '免費。邊走邊吃炸肉餅、黍糰子', img: 'sensoji' },
      { t: '15:15', type: 'move', title: '淺草 → 押上', desc: '走過隅田川約 20 分，或淺草線 1 站' },
      { t: '16:00', type: 'spot', title: '東京晴空塔', desc: '天望甲板 350m ¥1,800 起；加天望迴廊 450m 套票 ¥3,000 起（浮動票價）', img: 'skytree' },
      { t: '18:00', type: 'meal', meal: '晚餐', area: 'oshiage', title: '晴空街道晚餐' },
      { t: '19:30', type: 'stay', title: '回新宿入住', desc: '押上 → 新宿約 30 分' },
    ],
    cost: '晴空塔 ¥1,800–3,000、交通約 ¥1,000',
  },
  {
    n: 2, date: '11/17', dow: '二', title: '新宿 → 箱根湯本・小涌谷', img: 'tozan', stay: 'yu',
    lede: '浪漫特快進箱根，登山電車上小涌谷逛庭園和瀑布，晚上回湯本泡日歸溫泉。',
    key: [
      { t: '出發前', text: '新宿站買箱根周遊券（2 日）＋浪漫特快指定席' },
      { t: '19:00', text: '箱根湯寮平日最後入場。湯本的餐廳 18:00–19:00 就收' },
      { t: '21:05', text: '湯寮免費接駁車末班' },
    ],
    items: [
      { t: '09:00', type: 'move', title: '新宿 → 浪漫特快 → 箱根湯本', desc: '約 85 分。行李放湯本站置物櫃' },
      { t: '10:30', type: 'meal', meal: '早午餐', area: 'yumoto', title: '湯本早午餐・商店街' },
      { t: '12:00', type: 'move', title: '箱根登山電車 → 小涌谷', desc: '約 35 分，之字形折返爬坡', img: 'tozan' },
      { t: '13:00', type: 'spot', title: '小涌園・蓬萊園・千條瀑布', desc: '11 月中是紅葉季，蓬萊園的楓葉很漂亮', img: 'momiji' },
      { t: '15:30', type: 'move', title: '登山電車下山回湯本', desc: '拿行李，搭計程車上坡到 Airbnb（9 人 3 台）' },
      { t: '16:00', type: 'stay', title: 'Airbnb 入住', desc: '15:00–21:00 自助入住' },
      { t: '17:00', type: 'meal', meal: '晚餐', area: 'yumoto', title: '湯本晚餐（要早吃）' },
      { t: '18:30', type: 'spot', title: '箱根湯寮 泡湯', desc: '¥1,800／人，19:00 最後入場。備案：湯の里おかだ（開到 23:00）', img: 'onsen' },
    ],
    cost: '箱根周遊券 ¥7,100、浪漫特快 ¥1,200、湯寮 ¥1,800',
  },
  {
    n: 3, date: '11/18', dow: '三', title: '大涌谷 → 御殿場 → 河口湖取車', img: 'owakudani', stay: 'yam',
    lede: '一早搭纜車越過噴煙的大涌谷，吃黑蛋，下午轉兩段巴士到河口湖取車，開去山中湖 Villa。',
    key: [
      { t: '15:00', text: '最晚這時要離開大涌谷：要轉兩段車，山線班次少、11 月天黑早' },
      { t: '19:00', text: '河口湖站前租車店打烊，一定要在之前取車' },
      { t: '取車前', text: '台灣駕照要帶「日文譯本」＋護照＋台灣駕照正本' },
    ],
    items: [
      { t: '08:30', type: 'move', title: '湯本 → 登山電車 → 強羅', desc: '約 40 分（周遊券）' },
      { t: '09:30', type: 'move', title: '登山纜車 → 早雲山 → 空中纜車', desc: '空中纜車越過大涌谷，晴天看得到富士山' },
      { t: '10:15', type: 'spot', title: '大涌谷', desc: '黑蛋 ¥500／4 顆，硫磺噴煙地形', img: 'owakudani' },
      { t: '11:30', type: 'meal', meal: '午餐', area: 'gora', title: '大涌谷・強羅午餐' },
      { t: '13:00', type: 'move', title: '大涌谷 → 御殿場 → 河口湖', desc: '巴士兩段，約 2–2.5 小時，自費約 ¥2,980' },
      { t: '16:00', type: 'move', title: '河口湖駅取車', desc: '8 人：兩台車或一台 10 人座。順路超市採買晚餐' },
      { t: '17:30', type: 'stay', title: '山中湖 Villa 入住', desc: '開車約 30 分' },
      { t: '18:30', type: 'meal', meal: '晚餐', area: 'kawaguchiko', title: 'Villa 晚餐' },
    ],
    cost: '纜車（周遊券）、巴士約 ¥2,980、黑蛋 ¥500',
  },
  {
    n: 4, date: '11/19', dow: '四', title: '富士山自駕一日', img: 'chureito', stay: 'manoku',
    lede: '開車跑富士山經典三點：新倉山淺間神社五重塔、大石公園紅葉、天空鳥居，傍晚還車搭巴士回東京。',
    key: [
      { t: '早上', text: 'Villa 露臺看日出富士（日出約 06:15），晴天無風最清楚' },
      { t: '16:30', text: '河口湖駅還車（加滿油）' },
      { t: '出發前', text: '河口湖 → 新宿高速巴士要先上網訂位' },
    ],
    items: [
      { t: '09:00', type: 'move', title: 'Villa 退房 → 新倉山淺間神社', desc: '開車約 25 分' },
      { t: '09:30', type: 'spot', title: '新倉山淺間神社・忠靈塔', desc: '爬 398 階，五重塔＋富士山的經典構圖', img: 'chureito' },
      { t: '11:30', type: 'meal', meal: '午餐', area: 'kawaguchiko', title: '河口湖午餐（餺飥／吉田烏龍麵）' },
      { t: '13:00', type: 'spot', title: '大石公園', desc: '河口湖北岸，紅葉迴廊與逆富士', img: 'oishi' },
      { t: '14:30', type: 'spot', title: '天空鳥居（河口淺間神社遙拜所）', desc: '鳥居正對富士山，¥100', img: 'kawaguchi' },
      { t: '16:30', type: 'move', title: '還車 → 高速巴士 → 新宿', desc: '約 1 小時 45 分（週四傍晚可能塞車）' },
      { t: '18:45', type: 'move', title: '新宿 → 埼京線 → 赤羽', desc: '14 分，走 11 分到 ManOku' },
      { t: '19:30', type: 'meal', meal: '晚餐', area: 'akabane', title: '赤羽晚餐' },
    ],
    cost: '租車分攤 ¥4,300–7,100、油錢、巴士 ¥2,000',
  },
  {
    n: 5, date: '11/20', dow: '五', title: '早稻田 ＋ 下午逛街（投票）', img: 'shibuya', stay: 'manoku',
    lede: '上午逛早稻田大學和村上春樹圖書館，下午去哪裡逛由大家投票決定。',
    key: [
      { t: '10:00', text: '村上春樹圖書館（國際文學館）開館，出發前確認開放日' },
      { t: '投票', text: '下午逛街地點，11/10 前投完' },
    ],
    items: [
      { t: '09:00', type: 'move', title: '赤羽 → 池袋 → 高田馬場 → 早稻田', desc: '埼京線轉山手線，再走 20 分或東西線 1 站' },
      { t: '10:00', type: 'spot', title: '早稻田大學', desc: '大隈講堂、村上春樹圖書館，校園免費' },
      { t: '12:00', type: 'meal', meal: '午餐', area: 'waseda', title: '早稻田學生街午餐' },
      { t: '13:30', type: 'poll', poll: 'p20', title: '下午逛街地點' },
      { t: '18:30', type: 'meal', meal: '晚餐', title: '晚餐（依投票地點）', pollArea: 'p20' },
    ],
    cost: '市區交通約 ¥800；購物另計',
  },
  {
    n: 6, date: '11/21', dow: '六', title: '整天候選（投票）', img: 'gaien', stay: 'manoku',
    lede: '週六整天待定：要不要去看中央競馬？晚上去哪裡吃？都由大家投票。',
    key: [
      { t: '週六', text: 'JRA 中央競馬只在週六、日開，11/21 是五回東京的開催日' },
      { t: '投票', text: '白天和晚上兩個投票，11/10 前投完' },
    ],
    items: [
      { t: '09:00', type: 'poll', poll: 'p21', title: '白天行程' },
      { t: '18:00', type: 'poll', poll: 'p21n', title: '晚上去哪' },
    ],
    cost: '依投票結果',
  },
  {
    n: 7, date: '11/22', dow: '日', title: '早上自由 → 回程', img: 'ueno', stay: null,
    lede: '早上輕鬆逛（投票），10:15 前離開赤羽，經日暮里搭 Skyliner 去成田。',
    key: [
      { t: '10:30', text: 'ManOku 退房（10:30–11:00）' },
      { t: '10:15', text: '最晚從赤羽出發：京濱東北線到日暮里 → Skyliner 約 40 分' },
      { t: '11:55', text: '抵達成田機場（起飛前 2 小時）' },
    ],
    items: [
      { t: '08:00', type: 'poll', poll: 'p22', title: '最後半天' },
      { t: '10:15', type: 'move', title: '赤羽 → 日暮里 → Skyliner → 成田', desc: '京濱東北線約 15 分＋Skyliner 約 40 分' },
      { t: '11:55', type: 'flight', title: '抵達成田機場', desc: '退稅、報到、最後採買' },
      { t: '13:55', type: 'flight', title: '起飛回台北', desc: '16:15 抵達' },
    ],
    cost: 'Skyliner ¥2,580',
  },
];

// 候選投票。每人每題一票，可以改；再按一次取消
export const POLLS = [
  {
    id: 'p20', day: 5, when: '11/20（五）13:30–19:00', title: '下午逛街去哪？', deadline: '11/10',
    desc: '早稻田逛完後，下午到晚餐前的時間。',
    options: [
      { id: 'shibuya', title: '澀谷 ＋ 原宿・表參道', img: 'shibuya', areas: ['shibuya', 'harajuku'], time: '約 5 小時', cost: 'Shibuya Sky ¥2,500（選配）', points: ['竹下通、表參道、澀谷十字路口', '傍晚上 Shibuya Sky 看夕陽（要預約時段）', '購物選擇最多'] },
      { id: 'shinjuku', title: '新宿', img: 'tocho', areas: ['shinjuku'], time: '約 5 小時', cost: '都廳展望台免費', points: ['都廳 45F 免費展望台', '伊勢丹、Lumine、歌舞伎町', '離早稻田最近，交通最省'] },
      { id: 'akiba', title: '秋葉原 ＋ 神田', img: 'akiba', areas: ['akiba'], time: '約 5 小時', cost: '—', points: ['動漫、電器、扭蛋、模型', '神田老字號蕎麥麵', '回赤羽方便'] },
      { id: 'nakano', title: '中野百老匯 ＋ 吉祥寺', img: 'nakano', areas: ['nakano'], time: '約 5 小時', cost: '—', points: ['中野百老匯：二手動漫、模型', '吉祥寺井之頭公園紅葉', '比較在地、人比較少'] },
    ],
  },
  {
    id: 'p21', day: 6, when: '11/21（六）白天', title: '週六白天要去哪？', deadline: '11/10',
    desc: '原本排的東京競馬場改成選項之一。',
    options: [
      { id: 'keiba', title: '東京競馬場（府中）', img: null, areas: ['fuchu'], time: '09:00–16:30', cost: '入場 ¥200（網路預約半價）', points: ['JRA 中央競馬五回東京開催日', '新宿京王線約 30 分', '主賽約 15:40，傍晚回市區'] },
      { id: 'gaien', title: '明治神宮 ＋ 外苑銀杏 ＋ 表參道', img: 'gaien', areas: ['harajuku', 'shibuya'], time: '整天', cost: '免費', points: ['11 月下旬銀杏大道正金黃', '明治神宮森林步道', '下午接表參道、澀谷'] },
      { id: 'shibamata', title: '柴又帝釋天 ＋ 下町', img: 'shibamata', areas: ['shibamata'], time: '整天', cost: '帝釋天雕刻 ¥400', points: ['《男人真命苦》老街', '帝釋天木雕、矢切渡船', '人少、慢慢逛'] },
      { id: 'disney', title: '東京迪士尼', img: 'tdl', areas: [], time: '09:00–閉園', cost: '一日護照約 ¥10,900 起（週六可能更高）', points: ['週六人多，建議買 DPA', '要先在官網買票', '整天預算最高'] },
    ],
  },
  {
    id: 'p21n', day: 6, when: '11/21（六）晚上', title: '週六晚上去哪？', deadline: '11/10',
    desc: '最後一個完整的晚上。',
    options: [
      { id: 'akabane', title: '赤羽居酒屋巡禮', img: null, areas: ['akabane'], time: '18:00–', cost: '¥2,000–4,000', points: ['住處走路就到，喝完直接回家', '關東煮立食、昼飲名店', '最省交通'] },
      { id: 'omoide', title: '新宿回憶橫丁', img: 'omoide', areas: ['shinjuku'], time: '18:00–', cost: '¥3,000–5,000', points: ['昭和串燒小巷', '順便逛新宿夜景', '埼京線 14 分回赤羽'] },
      { id: 'monja', title: '月島文字燒', img: 'tsukishima', areas: ['tsukishima'], time: '18:00–', cost: '¥2,500–4,000', points: ['一整條街的文字燒', '大家一起煎很熱鬧', '回赤羽約 40 分'] },
      { id: 'sky', title: '澀谷 Shibuya Sky 夜景', img: 'shibuya', areas: ['shibuya'], time: '18:00–', cost: '¥2,500＋晚餐', points: ['頂樓露天看東京夜景', '要先預約時段', '晚餐接澀谷橫丁'] },
    ],
  },
  {
    id: 'p22', day: 7, when: '11/22（日）08:00–10:15', title: '回程前最後半天', deadline: '11/15',
    desc: '10:15 前要從赤羽出發，時間大約 2 小時。',
    options: [
      { id: 'sleep', title: '睡飽 ＋ 赤羽早餐、超市補貨', img: null, areas: ['akabane'], time: '慢慢來', cost: '—', points: ['最不趕', '超市、藥妝最後採買'] },
      { id: 'ueno', title: '上野阿美橫丁', img: 'ueno', areas: ['ueno'], time: '約 1.5 小時', cost: '—', points: ['順路（日暮里旁）', '行李寄放上野站置物櫃', '零食、藥妝、乾貨'] },
      { id: 'yanaka', title: '谷中銀座・日暮里', img: null, areas: ['ueno'], time: '約 1.5 小時', cost: '—', points: ['就在 Skyliner 日暮里站旁', '下町商店街、貓', '時間最好控制'] },
    ],
  },
];

export const TRANSPORT = {
  passes: [
    { name: 'Skyliner 來回', price: '¥2,580 × 2', note: '成田 ⇄ 日暮里／上野約 40 分。線上買比較便宜（另有外國人來回優惠票）' },
    { name: 'Suica／PASMO', price: '儲值', note: 'iPhone 錢包可直接加 Suica。市區電車、超商都能用' },
    { name: '箱根周遊券（2 日，新宿出發）', price: '¥7,100', note: '含新宿 ⇄ 小田原、登山電車、纜車、空中纜車、箱根巴士。御殿場之後不含' },
    { name: '浪漫特快特急券', price: '¥1,200', note: '新宿 → 箱根湯本 85 分，要另買指定席' },
    { name: '大涌谷 → 御殿場 → 河口湖 巴士', price: '約 ¥2,980', note: '周遊券不含，自費' },
    { name: '租車 2 天（河口湖駅）', price: '分攤 ¥4,300–7,100／人', note: '8 人：兩台車或 10 人座。台灣駕照要「日文譯本」。店多半 19:00 打烊' },
    { name: '河口湖 → 新宿 高速巴士', price: '¥2,000', note: '約 1 小時 45 分，先上網訂位' },
  ],
  routes: [
    { day: 1, text: '成田 →（Skyliner）→ 日暮里 →（常磐線）→ 龜有 → 北千住 → 淺草 → 押上 → 新宿' },
    { day: 2, text: '新宿 →（浪漫特快）→ 箱根湯本 →（登山電車）→ 小涌谷 → 箱根湯本' },
    { day: 3, text: '湯本 → 強羅 →（纜車）→ 早雲山 →（空中纜車）→ 大涌谷 →（巴士）→ 御殿場 → 河口湖駅（取車）→ 山中湖' },
    { day: 4, text: '山中湖 →（自駕）→ 新倉山 → 大石公園 → 天空鳥居 → 河口湖駅（還車）→（高速巴士）→ 新宿 →（埼京線）→ 赤羽' },
    { day: 5, text: '赤羽 → 池袋 → 高田馬場 → 早稻田 →（下午依投票）→ 赤羽' },
    { day: 6, text: '依投票：競馬場走新宿京王線 → 府中競馬正門前約 30 分' },
    { day: 7, text: '赤羽 →（京濱東北線）→ 日暮里 →（Skyliner）→ 成田' },
  ],
  base: [
    { to: '新宿', text: '埼京線直達 14 分' },
    { to: '池袋', text: '埼京線約 8 分' },
    { to: '澀谷', text: '埼京線約 22 分' },
    { to: '上野／日暮里', text: '京濱東北線約 12–15 分' },
  ],
};

// 每人預算（新台幣）。lo/hi 是低／高估
export const BUDGET = {
  rows: [
    { item: '機場交通（Skyliner 來回）', lo: 1070, hi: 1070 },
    { item: '箱根周遊券（2 日）', lo: 1470, hi: 1470 },
    { item: '租車兩天（分攤）', lo: 1100, hi: 1400 },
    { item: '市區交通', lo: 520, hi: 520 },
    { item: '11/16 新宿住宿', lo: 1130, hi: 1130 },
    { item: '11/17 箱根湯本 Airbnb＋湯寮', lo: 1676, hi: 1676 },
    { item: '11/18 山中湖 Villa', lo: 1670, hi: 1670 },
    { item: '11/19–21 ManOku 三晚', lo: 3940, hi: 3940 },
    { item: '餐飲', lo: 4610, hi: 6890 },
    { item: '晴空塔', lo: 370, hi: 620 },
    { item: '旅平險＋不便險', lo: 500, hi: 1200 },
    { item: '網卡／eSIM', lo: 210, hi: 660 },
    { item: '大涌谷 → 御殿場 → 河口湖巴士', lo: 630, hi: 630, est: true },
    { item: '河口湖 → 新宿高速巴士', lo: 420, hi: 420, est: true },
  ],
  note: '不含機票與購物。標「估」的兩項是舊預算表沒列、依行程補上的，確認後再修正。',
  addons: [
    { item: '東京競馬場入場', yen: 200 },
    { item: '迪士尼一日護照（起）', yen: 10900 },
    { item: 'Shibuya Sky', yen: 2500 },
  ],
};

export const TIPS = [
  { h: '天氣', p: '11 月中旬東京約 9–17°C；箱根、富士山區早晚 0–10°C，要帶保暖外套。日出約 06:15、日落約 16:30。' },
  { h: '用 LINE 打開這個網站', p: 'LINE 內建瀏覽器不能 Google 登入。點右上角「⋯」→「用預設瀏覽器開啟」，或直接用暱稱登入。' },
  { h: '租車', p: '台灣駕照＋日文譯本（監理站申請）＋護照。建議加租 ETC 卡。日本靠左行駛。' },
  { h: '緊急電話', p: '警察 110、救護車／消防 119。駐日代表處急難救助 +81-80-6557-8796。' },
];
