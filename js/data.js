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
  { id: 'waseda', name: '早稻田・高田馬場', days: [1, 5] },
  { id: 'shibuya', name: '澀谷', days: [5, 6] },
  { id: 'harajuku', name: '原宿・表參道', days: [5, 6] },
  { id: 'akiba', name: '秋葉原・神田', days: [5] },
  { id: 'nakano', name: '中野', days: [5] },
  { id: 'fuchu', name: '府中（競馬場）', days: [6] },
  { id: 'shibamata', name: '柴又', days: [6] },
  { id: 'tsukishima', name: '月島', days: [6] },
  { id: 'ikebukuro', name: '池袋', days: [4] },
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
  { id: 'imahan', name: '淺草今半 本店', jp: '浅草今半', area: 'asakusa', type: '燒肉・壽喜燒', price: 4, desc: '百年壽喜燒老店，黑毛和牛。午間套餐比晚餐便宜很多。', tip: '8 人一定要先訂位' },
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
  { id: 'omoide', name: '回憶橫丁', jp: '思い出横丁', area: 'shinjuku', type: '居酒屋', price: 2, desc: '西口鐵道旁的串燒小巷，昭和氣氛。', tip: '店都很小，8 人要拆桌' },
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
  { id: 'baba-matsuya', name: '松屋（牛丼）', jp: '松屋 高田馬場', area: 'waseda', type: '小吃・甜點', price: 1, desc: '連鎖牛丼，早餐定食 ¥400 上下，24 小時，8 人也坐得下。', tip: '站前就有，連鎖店位置以 Google 地圖為準' },
  { id: 'baba-soba', name: '站前立食蕎麥', jp: '立ち食いそば', area: 'waseda', type: '蕎麥・烏龍', price: 1, desc: '早上最快的日式早餐：熱蕎麥＋炸天婦羅，¥400–600。' , tip: '多半站著吃，人多就分批' },
  { id: 'baba-cafe', name: '咖啡店早餐套餐', jp: 'モーニング（ドトール・コメダ等）', area: 'waseda', type: '小吃・甜點', price: 1, desc: '吐司＋蛋＋咖啡的モーニング，可以坐著休息、充電，等宿舍時間。' },
  { id: 'mutekiya', name: '無敵家', jp: '麺創房 無敵家', area: 'ikebukuro', type: '拉麵', price: 1, desc: '池袋排隊名店，濃厚豚骨拉麵，開到深夜。', tip: '晚餐時段常排 30 分以上' },
  { id: 'tonchin', name: '屯ちん 池袋本店', jp: '東京豚骨拉麺 屯ちん', area: 'ikebukuro', type: '拉麵', price: 1, desc: '東京豚骨拉麵老店，湯頭比無敵家清爽一點。' },
  { id: 'sunshine-food', name: 'Sunshine City 餐廳街', jp: 'サンシャインシティ', area: 'ikebukuro', type: '美食街', price: 2, desc: '整棟商場的餐廳街，壽司、燒肉、定食都有，8 人好找位子。' },
  { id: 'seibu-depa', name: '西武・東武百貨地下街', jp: 'デパ地下', area: 'ikebukuro', type: '美食街', price: 2, desc: '池袋站直結的兩大百貨地下街，熟食、便當、甜點，可以買回赤羽吃。' },
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
    id: 'shinjuku', nights: '11/16', night: 1, name: '新宿住宿', jp: '名稱待補', area: '新宿', people: 8,
    checkin: '15:00', checkout: '—', station: '新宿駅周邊',
    notes: ['大行李放高田馬場蕭文嘉宿舍，只帶輕便行李來', '住宿名稱與地址待補'],
    photos: [], price: 'NT$1,130／人',
  },
  {
    id: 'yu', lat: 35.2306, lng: 139.1081, nights: '11/17', night: 1, name: '箱根湯本 山坡獨棟', jp: 'Airbnb · 84㎡ · 3 臥室', area: '箱根湯本', people: 9,
    checkin: '15:00–21:00 自助入住', checkout: '10:00 前', station: '箱根湯本駅步行約 12 分（陡坡，帶行李建議搭計程車，9 人 3 台）',
    url: 'https://www.airbnb.com.tw/rooms/843285427849128041',
    notes: ['房子沒有溫泉，晚上去箱根湯寮（免費接駁），備案湯の里おかだ', '只有 1 間浴室；1F、2F 各 1 間廁所', '有廚房；步行 5 分有 2 間超商'],
    photos: [['yu-u0', '客廳'], ['yu-u23', '窗外山景'], ['yu-u1', '客廳・廚房'], ['yu-u4', '臥室 1'], ['yu-u5', '臥室 3 雙層床'], ['yu-u20', '浴室'], ['yu-u28', '外觀']],
    price: 'NT$1,302／人＋湯寮 ¥1,800',
  },
  {
    id: 'yam', lat: 35.4239, lng: 138.9019, nights: '11/18', night: 1, name: '樂天 STAY VILLA 山中湖', jp: 'Room 3 · 87㎡ · 雙人床 ×5', area: '山中湖・平野', people: 8,
    checkin: '自助入住（時間見 Agoda 訂單）', checkout: '見訂單', station: '河口湖駅開車約 30 分',
    url: 'https://www.agoda.com/zh-tw/minamitsuru-gun-house-vacation-stay-83576/hotel/yamanakako-jp.html',
    notes: ['客廳、露臺正對山中湖與富士山', '露臺可 BBQ，有大型按摩浴缸、投影機', '沒有溫泉；Room 3 的浴缸看不到富士山', '隔天要開回河口湖駅還車（約 30 分）'],
    photos: [['yam-y2', '露臺望湖與富士山'], ['yam-y0', '外觀'], ['yam-y1', '挑高客廳'], ['yam-y4', '按摩浴缸'], ['yam-y14', '臥室'], ['yam-y11', '露臺餐桌'], ['yam-y15', '夜景']],
    price: 'NT$1,670／人',
  },
  {
    id: 'manoku', lat: 35.77918, lng: 139.71539, nights: '11/19 – 11/22', night: 3, name: 'ManOku 萬屋', jp: '赤羽台獨棟 · 200㎡ · 6 臥室', area: '北區 赤羽台', people: 8,
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
    lede: '紅眼班機落地，先到高田馬場把大行李放蕭文嘉宿舍、吃早餐，再去龜有找兩津勘吉、逛淺草寺。下午到晚上投票：晴空塔夕陽、加合羽橋道具街、加水族館，或改看東京車站免費夜景。',
    key: [
      { t: '06:30', text: '成田落地，入境約 1 小時' },
      { t: '09:00', text: '高田馬場蕭文嘉宿舍放大行李（先跟他約好時間）。箱根、富士三天只帶輕便行李' },
      { t: '16:00', text: '選晴空塔的話：16:00 入場看日落（約 16:30）。官網票前一天 23:59 截止，現場加 ¥500' },
      { t: '投票', text: '下午加點去哪，11/10 前投完' },
      { t: '早睡', text: '整晚沒睡，晚上不要排太滿' },
    ],
    items: [
      { t: '06:30', type: 'flight', title: '抵達成田機場', desc: '入境、領行李、買 Suica（或用手機 Suica）' },
      { t: '07:45', type: 'move', title: 'Skyliner → 日暮里', desc: '約 40 分' },
      { t: '08:30', type: 'move', title: 'JR 山手線 日暮里 → 高田馬場', desc: '約 20 分' },
      { t: '09:00', type: 'stay', title: '蕭文嘉宿舍放大行李', desc: '大行李放到 11/19 晚上再拿。隨身只帶 3 晚的輕便行李：換洗衣物、盥洗、充電器、護照、台灣駕照＋日文譯本' },
      { t: '09:15', type: 'meal', meal: '早餐', area: 'waseda', pick: ['baba-matsuya', 'baba-soba', 'baba-cafe'], title: '高田馬場早餐', desc: '學生街，站前連鎖早餐很多；比到龜有（10:45）再吃早' },
      { t: '10:00', type: 'move', title: '高田馬場 → 東西線 → 大手町 → 千代田線 → 龜有', desc: '約 40 分。千代田線直通常磐線各站停車，不用出站' },
      { t: '10:45', type: 'spot', title: '龜有 兩津勘吉銅像巡禮', desc: '銅像 15 座、人孔蓋、香取神社、Ario 3F こち亀ゲームぱ～く，全免費', img: 'kameari' },
      { t: '12:15', type: 'move', title: '龜有 → 北千住 → 淺草', desc: '約 25 分' },
      { t: '12:45', type: 'meal', meal: '午餐', area: 'asakusa', title: '淺草午餐' },
      { t: '14:00', type: 'spot', title: '雷門・仲見世通・淺草寺', desc: '免費。邊走邊吃炸肉餅、黍糰子', img: 'sensoji' },
      { t: '15:00', type: 'poll', poll: 'p16', title: '下午到晚上（投票）' },
      { t: '18:00', type: 'meal', meal: '晚餐', title: '晚餐（依投票地點）', pollArea: 'p16' },
      { t: '19:30', type: 'stay', title: '回新宿入住', desc: '押上／東京車站 → 新宿約 30 分' },
    ],
    cost: '交通約 ¥1,000；晴空塔 ¥1,800–3,000（依投票）',
  },
  {
    n: 2, date: '11/17', dow: '二', title: '箱根一日環線', img: 'owakudani', stay: 'yu',
    lede: '一天把箱根經典環線走完：登山電車上強羅、纜車和空中纜車越過大涌谷吃黑蛋、海賊船橫渡蘆之湖、箱根神社湖上鳥居，傍晚回湯本入住，晚上泡箱根湯寮。',
    key: [
      { t: '出發前', text: '新宿站買箱根周遊券（2 日）＋浪漫特快指定席' },
      { t: '17:00', text: '空中纜車 11 月營業到 17:00；大涌谷火山氣體、強風會停駛，停駛就改走備案（登山電車到小涌谷看紅葉）' },
      { t: '19:00', text: '箱根湯寮最後入場，晚餐在湯寮館內吃（湯本餐廳 18:00–19:00 就收）' },
    ],
    items: [
      { t: '09:00', type: 'move', title: '新宿 → 浪漫特快 → 箱根湯本', desc: '約 85 分。行李放湯本站置物櫃（9 人輕便行李，大概要 3–4 格）' },
      { t: '10:30', type: 'meal', meal: '早午餐', area: 'yumoto', title: '湯本早午餐', desc: '吃快一點，11:20 前上登山電車' },
      { t: '11:20', type: 'move', title: '箱根登山電車 → 強羅', desc: '約 40 分，之字形折返爬坡，11 月沿線紅葉', img: 'tozan' },
      { t: '12:10', type: 'move', title: '登山纜車 → 早雲山 → 空中纜車 → 大涌谷', desc: '約 35 分。空中纜車越過噴煙谷地，晴天看得到富士山' },
      { t: '12:45', type: 'spot', title: '大涌谷', desc: '黑蛋 ¥500／4 顆；午餐吃大涌谷咖哩', img: 'owakudani' },
      { t: '14:00', type: 'move', title: '空中纜車 → 桃源台 → 海賊船 → 元箱根港', desc: '纜車約 25 分＋海賊船約 40 分（周遊券都含）。船 30–40 分一班，到桃源台先看末班時間' },
      { t: '15:20', type: 'spot', title: '箱根神社・平和鳥居', desc: '湖上紅鳥居排隊拍照可能 30 分以上，11 月 16:30 左右日落', img: 'hakone_shrine' },
      { t: '16:40', type: 'move', title: '元箱根 → 巴士 → 箱根湯本', desc: '約 40 分（周遊券）。拿行李，搭計程車上坡到 Airbnb（9 人 3 台）' },
      { t: '17:30', type: 'stay', title: 'Airbnb 入住', desc: '15:00–21:00 自助入住。蕭文嘉今晚一起住' },
      { t: '18:00', type: 'spot', title: '箱根湯寮泡湯＋館內晚餐', desc: '湯本站免費接駁 3 分，19:00 最後入場，¥1,800（周遊券折 ¥200）。回程接駁末班 21:05。備案：湯の里おかだ，開到 23:00，計程車 5–10 分', img: 'onsen/yr1' },
    ],
    cost: '箱根周遊券 ¥7,100、浪漫特快 ¥1,200、湯寮 ¥1,600–1,800',
  },
  {
    n: 3, date: '11/18', dow: '三', title: '御殿場 Outlet → 河口湖取車', img: 'oishi', stay: 'yam',
    lede: '早上搭巴士離開箱根，中午逛御殿場 Outlet，下午到河口湖取車，先跑北岸的大石公園和天空鳥居，傍晚採買後開去山中湖 Villa。',
    key: [
      { t: '分開', text: '蕭文嘉不去富士，今天自行從箱根回東京（周遊券可搭回新宿）' },
      { t: '09:00', text: '湯本 → 御殿場 Outlet 巴士班次少，前一晚先查好時刻' },
      { t: '取車前', text: '台灣駕照要「日文譯本」＋護照＋台灣駕照正本' },
    ],
    items: [
      { t: '08:30', type: 'move', title: 'Airbnb 退房 → 箱根湯本站', desc: '退房 10:00 前。計程車下坡（8 人 2–3 台）' },
      { t: '09:00', type: 'move', title: '湯本 → 巴士 → 御殿場 Premium Outlet', desc: '箱根登山巴士 L 線（湯本站 ⇄ Outlet），約 1 小時；周遊券是否涵蓋出發前確認' },
      { t: '10:00', type: 'spot', title: '御殿場 Premium Outlet', desc: '大型 Outlet，晴天富士山就在旁邊。行李可放置物櫃' },
      { t: '11:45', type: 'meal', meal: '午餐', area: 'gotemba', title: '御殿場午餐' },
      { t: '12:45', type: 'move', title: 'Outlet → 巴士 → 河口湖駅', desc: '富士急巴士約 1 小時（自費），班次少，出發前查好' },
      { t: '13:45', type: 'move', title: '河口湖駅取車', desc: '8 人：兩台 5 人座（要 2 位駕駛）或一台 8 人座。台灣駕照不能開 10 人座' },
      { t: '14:15', type: 'spot', title: '大石公園', desc: '河口湖北岸，紅葉迴廊與逆富士，下午順光', img: 'oishi' },
      { t: '15:30', type: 'spot', title: '天空鳥居（河口淺間神社遙拜所）', desc: '鳥居正對富士山，¥100', img: 'kawaguchi' },
      { t: '16:30', type: 'move', title: '超市採買 → 山中湖 Villa', desc: '買晚餐、BBQ 食材、隔天早餐，開車約 30 分' },
      { t: '17:30', type: 'stay', title: '山中湖 Villa 入住', desc: '自助入住（時間見 Agoda 訂單）' },
      { t: '18:30', type: 'meal', meal: '晚餐', area: 'kawaguchiko', title: 'Villa 晚餐（露臺 BBQ）' },
    ],
    cost: '巴士兩段約 ¥2,500–3,000、租車分攤、天空鳥居 ¥100',
  },
  {
    n: 4, date: '11/19', dow: '四', title: '新倉山五重塔 → 早回東京 → 池袋夜逛', img: 'chureito', stay: 'manoku',
    lede: '早上看 Villa 露臺日出富士，趁早上順光去新倉山拍五重塔，吃完餺飥中午還車回東京。下午入住赤羽，晚上去池袋逛街吃飯。',
    key: [
      { t: '06:15', text: 'Villa 露臺看日出富士，晴天無風最清楚' },
      { t: '12:15', text: '河口湖駅還車（加滿油）' },
      { t: '出發前', text: '河口湖 → 新宿高速巴士要先上網訂位（12:30 前後的班次）' },
      { t: '15:00', text: '高田馬場拿大行李，先跟蕭文嘉約好' },
    ],
    items: [
      { t: '08:00', type: 'move', title: 'Villa 退房 → 新倉山淺間神社', desc: '開車約 30 分。退房時間見訂單' },
      { t: '08:30', type: 'spot', title: '新倉山淺間神社・忠靈塔', desc: '爬 398 階，五重塔＋富士山經典構圖；早上順光、人比較少', img: 'chureito' },
      { t: '10:30', type: 'meal', meal: '早午餐', area: 'kawaguchiko', title: '河口湖餺飥／吉田烏龍麵' },
      { t: '12:15', type: 'move', title: '還車 → 高速巴士 → 新宿', desc: '約 1 小時 45 分' },
      { t: '14:30', type: 'move', title: '新宿 → 山手線 → 高田馬場', desc: '4 分。到蕭文嘉宿舍拿大行李' },
      { t: '15:15', type: 'move', title: '高田馬場 → 池袋 → 埼京線 → 赤羽', desc: '約 20 分。赤羽站到 ManOku 是上坡，帶大行李建議計程車（8 人 2–3 台）' },
      { t: '16:00', type: 'stay', title: 'ManOku 入住', desc: '16:00–24:00 入住，放好行李休息一下' },
      { t: '17:30', type: 'spot', title: '池袋夜逛', desc: '赤羽 → 埼京線 8 分。Sunshine City、東口 Bic Camera・唐吉訶德、乙女路動漫店，西武・東武百貨地下街' },
      { t: '19:00', type: 'meal', meal: '晚餐', area: 'ikebukuro', title: '池袋晚餐' },
    ],
    cost: '租車分攤、油錢、巴士 ¥2,000',
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
    lede: '週六整天投票決定。白天三選一：府中東京競馬場看 JRA 中央競馬（週末限定）、明治神宮＋表參道＋外苑銀杏、柴又帝釋天下町老街；晚上四選一：赤羽居酒屋、新宿回憶橫丁、月島文字燒、Shibuya Sky 夜景。',
    key: [
      { t: '週六', text: 'JRA 中央競馬只在週六、日開，11/21 是五回東京的開催日' },
      { t: '投票', text: '白天和晚上兩個投票，11/10 前投完' },
    ],
    items: [
      { t: '09:00', type: 'poll', poll: 'p21', title: '白天行程' },
      { t: '12:00', type: 'meal', meal: '午餐', title: '午餐（依投票地點）', pollArea: 'p21' },
      { t: '18:00', type: 'poll', poll: 'p21n', title: '晚上去哪' },
    ],
    cost: '依投票結果',
  },
  {
    n: 7, date: '11/22', dow: '日', title: '早上自由 → 回程', img: 'ueno', stay: null,
    lede: '早上輕鬆逛（投票），10:15 前離開赤羽，經日暮里搭 Skyliner 去成田。',
    key: [
      { t: '10:00', text: 'ManOku 退房（規定 10:30–11:00，但 10:15 要出發，提早退）' },
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
// 選項欄位：time 時間、cost 花費、access 交通、pros 優點、cons 缺點（比一比表格會用到）
export const POLLS = [
  {
    id: 'p16', day: 1, short: '11/16 下午', when: '11/16（一）15:00–19:30', title: '第一天下午到晚上加什麼？', deadline: '11/10',
    desc: '淺草寺逛完之後。整晚沒睡，四個都排得輕鬆；晴空塔 16:00 入場剛好看日落。',
    options: [
      { id: 'classic', title: '晴空塔夕陽＋晴空街道', img: 'skytree', areas: ['oshiage'], time: '15:30–19:00', cost: '晴空塔 ¥1,800–3,000', access: '淺草走過隅田川約 20 分',
        plan: ['15:30 走過吾妻橋，拍朝日啤酒大樓＋晴空塔', '16:00 上天望甲板，看日落轉夜景', '17:30 晴空街道逛街、買伴手禮', '18:30 晴空街道晚餐'],
        pros: ['原本的排法，最輕鬆', '夕陽轉夜景一次看到'],
        cons: ['門票不便宜', '11/21 晚上如果選 Shibuya Sky 會有點重複'] },
      { id: 'kappabashi', title: '合羽橋道具街＋晴空塔', img: 'sensoji', areas: ['asakusa', 'oshiage'], time: '15:00–19:00', cost: '晴空塔 ¥1,800–3,000＋購物', access: '淺草寺走 10 分到合羽橋',
        plan: ['15:00 合羽橋道具街：日本刀具、食品模型、餐具（約 1 小時）', '16:15 搭淺草線 1 站到押上', '16:45 上晴空塔看夜景（錯過日落）', '18:30 晴空街道晚餐'],
        pros: ['合羽橋買刀、餐具很有特色', '晴空塔照樣上得去'],
        cons: ['合羽橋店家多半 17:00 關，要抓緊', '看不到日落，只看夜景'] },
      { id: 'aqua', title: '晴空塔＋すみだ水族館', img: 'skytree', areas: ['oshiage'], time: '15:30–19:30', cost: '晴空塔 ¥1,800–3,000＋水族館約 ¥2,700', access: '水族館就在晴空塔同一區（晴空街道 5–6F）',
        plan: ['16:00 上晴空塔看日落', '17:15 すみだ水族館（平日開到 20:00）：企鵝、金魚、水母', '18:30 晴空街道晚餐'],
        pros: ['不用再移動，全在同一區', '室內，下雨也不怕'],
        cons: ['花費最高', '水族館不大，約 1 小時逛完'] },
      { id: 'marunouchi', title: '不上塔：東京車站＋KITTE 屋頂免費夜景', img: null, areas: [], time: '15:30–19:30', cost: '免費', access: '淺草 → 銀座線 → 銀座約 20 分',
        plan: ['15:30 淺草 → 銀座線到銀座，逛銀座（伊東屋、UNIQLO 旗艦）', '17:00 走到東京車站丸之內，紅磚站舍點燈', '17:30 KITTE 6F 屋頂庭園看車站夜景（免費）', '18:30 東京車站一番街／KITTE 晚餐'],
        pros: ['完全免費', '東京車站點燈很漂亮', '離新宿近，回去快'],
        cons: ['沒上晴空塔', '平日下班人潮多'] },
    ],
  },
  {
    id: 'p20', day: 5, short: '11/20 下午', when: '11/20（五）13:30–19:00', title: '下午逛街去哪？', deadline: '11/10',
    desc: '早稻田逛完後，下午到晚餐前的時間。',
    options: [
      { id: 'shibuya', title: '澀谷 ＋ 原宿・表參道', img: 'shibuya', areas: ['shibuya', 'harajuku'], time: '約 5 小時', cost: 'Shibuya Sky ¥2,500（選配）', access: '早稻田 → 副都心線直達原宿／澀谷約 15 分',
        pros: ['購物選擇最多', '竹下通、表參道、十字路口一次逛完', '傍晚 Shibuya Sky 看夕陽'],
        cons: ['人最多', 'Shibuya Sky 要先預約時段'] },
      { id: 'shinjuku', title: '新宿', img: 'tocho', areas: ['shinjuku'], time: '約 5 小時', cost: '都廳展望台免費', access: '早稻田 → 高田馬場 → 新宿約 15 分',
        pros: ['都廳 45F 免費展望台', '伊勢丹、Lumine 百貨集中', '回赤羽埼京線直達 14 分'],
        cons: ['11/16 已經住過新宿', '比較像一般百貨商圈'] },
      { id: 'akiba', title: '秋葉原 ＋ 神田', img: 'akiba', areas: ['akiba'], time: '約 5 小時', cost: '—', access: '早稻田 → 東西線 → 大手町轉 → 秋葉原約 25 分',
        pros: ['動漫、電器、扭蛋、模型', '神田老字號蕎麥麵', '回赤羽京濱東北線直達'],
        cons: ['對動漫沒興趣的人比較無聊'] },
      { id: 'nakano', title: '中野百老匯 ＋ 吉祥寺', img: 'nakano', areas: ['nakano'], time: '約 5 小時', cost: '—', access: '早稻田 → 東西線直達中野約 10 分',
        pros: ['二手動漫、模型便宜', '吉祥寺井之頭公園紅葉', '人比較少、比較在地'],
        cons: ['回赤羽要轉兩次車', '兩個點分開，移動時間較多'] },
    ],
  },
  {
    id: 'p21', day: 6, short: '11/21 白天', when: '11/21（六）09:30–17:00', title: '週六白天要去哪？', deadline: '11/10',
    desc: '週六整天三選一。每個都排了大概的時間，晚上另外投票。',
    options: [
      { id: 'keiba', title: '東京競馬場（府中）', img: 'food/keiba-food', areas: ['fuchu'], time: '09:30–16:30', cost: '入場 ¥200；買馬券每注 ¥100 起', access: '赤羽 → 新宿 → 京王線 → 府中競馬正門前，約 50 分',
        plan: ['09:30 赤羽出發', '10:30 入場，先去パドック看馬繞場', '11:00–12:00 看前幾場，學買馬券（最少 ¥100）', '12:00 場內美食街午餐', '13:00–15:45 下午的特別賽、重賞，最後幾場最熱鬧', '16:30 散場，回新宿接晚上行程'],
        pros: ['11/21 是 JRA 五回東京的開催日，只有週末才有', '門票幾乎免費，場地超大、看台很新', '場內美食多，¥100 就能玩馬券'],
        cons: ['不懂賽馬的人可能無感', '整天在府中，沒時間逛別的', '入場方式（是否要網路預約）出發前確認'] },
      { id: 'gaien', title: '明治神宮 ＋ 表參道 ＋ 外苑銀杏', img: 'gaien', areas: ['harajuku', 'shibuya'], time: '09:30–17:00', cost: '免費（午餐、購物另計）', access: '赤羽 → 埼京線 → 新宿 → 山手線 → 原宿，約 25 分',
        plan: ['09:30 原宿站 → 明治神宮：大鳥居、森林參道、本殿（約 1 小時）', '11:00 竹下通、表參道逛街', '12:30 表參道午餐（豬排 まい泉、AFURI 柚子拉麵）', '14:00 走到神宮外苑銀杏並木（約 20 分）', '15:30 往澀谷，或回新宿接晚上行程'],
        pros: ['免費', '銀杏大道 11 月下旬開始轉黃', '明治神宮早上人少、很安靜'],
        cons: ['11/21 銀杏可能還沒全黃（滿黃通常 11 月底到 12 月初）', '週六外苑和表參道人潮多', '和 11/20 選澀谷的話會重複'] },
      { id: 'shibamata', title: '柴又帝釋天 ＋ 下町老街', img: 'shibamata', areas: ['shibamata'], time: '09:30–15:30', cost: '帝釋天雕刻・庭園 ¥400；寅さん紀念館 ¥500', access: '赤羽 → 日暮里 → 京成線 → 柴又，約 45 分',
        plan: ['09:30 赤羽出發', '10:15 帝釋天參道：吃草糰子、仙貝', '10:45 柴又帝釋天：雕刻迴廊、邃溪園庭園（¥400）', '12:00 參道老店吃鰻魚飯（川千家）', '13:15 江戶川河堤散步，寅さん紀念館（¥500）', '14:30 回程，下午可以接上野或淺草'],
        pros: ['老街氣氛，人比較少', '帝釋天木雕很精細', '下午還有時間接別的'],
        cons: ['比較安靜，逛半天就夠', '交通要轉 2 次'] },
    ],
  },
  {
    id: 'p21n', day: 6, short: '11/21 晚上', when: '11/21（六）晚上', title: '週六晚上去哪？', deadline: '11/10',
    desc: '最後一個完整的晚上。',
    options: [
      { id: 'akabane', title: '赤羽居酒屋巡禮', img: 'food/marumasu', areas: ['akabane'], time: '18:00–', cost: '¥2,000–4,000', access: '住處走路 11 分',
        pros: ['喝完走路回家', '關東煮立食、昼飲名店', '最便宜'],
        cons: ['店都小，8 人要拆桌', '沒有夜景'] },
      { id: 'omoide', title: '新宿回憶橫丁', img: 'omoide', areas: ['shinjuku'], time: '18:00–', cost: '¥3,000–5,000', access: '埼京線 14 分',
        pros: ['昭和串燒小巷氣氛', '順便看新宿夜景'],
        cons: ['觀光客多、價格偏高', '店很小，要拆桌'] },
      { id: 'monja', title: '月島文字燒', img: 'tsukishima', areas: ['tsukishima'], time: '18:00–', cost: '¥2,500–4,000', access: '赤羽 → 南北線 → 有樂町線約 40 分',
        pros: ['大家圍著鐵板一起煎，最熱鬧', '店多，大桌好找'],
        cons: ['回赤羽最遠', '衣服會有味道'] },
      { id: 'sky', title: '澀谷 Shibuya Sky 夜景', img: 'shibuya', areas: ['shibuya'], time: '18:00–', cost: '¥2,500＋晚餐', access: '埼京線 22 分',
        pros: ['頂樓露天 360° 東京夜景', '晚餐接澀谷橫丁'],
        cons: ['要先預約時段', '風大很冷'] },
    ],
  },
  {
    id: 'p22', day: 7, short: '11/22 上午', when: '11/22（日）08:00–10:15', title: '回程前最後半天', deadline: '11/15',
    desc: '10:15 前要從赤羽出發，時間大約 2 小時。',
    options: [
      { id: 'sleep', title: '睡飽 ＋ 赤羽早餐、超市補貨', img: 'food/ikoi', areas: ['akabane'], time: '慢慢來', cost: '—', access: '住處周邊',
        pros: ['最不趕', '超市、藥妝最後採買'],
        cons: ['沒有新景點'] },
      { id: 'ueno', title: '上野阿美橫丁', img: 'ueno', areas: ['ueno'], time: '約 1.5 小時', cost: '—', access: '京濱東北線 12 分，順路往日暮里',
        pros: ['順路', '零食、藥妝、乾貨一次買'],
        cons: ['行李要先寄放上野站置物櫃', '10 點前很多店還沒開'] },
      { id: 'yanaka', title: '谷中銀座・日暮里', img: 'food/azuma', areas: ['ueno'], time: '約 1.5 小時', cost: '—', access: '就在 Skyliner 日暮里站旁',
        pros: ['離 Skyliner 最近，時間最好控制', '下町商店街、貓'],
        cons: ['店比較少', '早上店也還沒全開'] },
    ],
  },
];

export const TRANSPORT = {
  passes: [
    { name: 'Skyliner 來回', price: '¥2,580 × 2', note: '成田 ⇄ 日暮里／上野約 40 分。線上買比較便宜（另有外國人來回優惠票）' },
    { name: 'Suica／PASMO', price: '儲值', note: 'iPhone 錢包可直接加 Suica。市區電車、超商都能用' },
    { name: '箱根周遊券（2 日，新宿出發）', price: '¥7,100', note: '含新宿 ⇄ 小田原、登山電車、纜車、空中纜車、箱根巴士。御殿場之後不含' },
    { name: '浪漫特快特急券', price: '¥1,200', note: '新宿 → 箱根湯本 85 分，要另買指定席' },
    { name: '湯本 → 御殿場 Outlet → 河口湖 巴士', price: '約 ¥2,500–3,000', note: '湯本 → Outlet 是箱根登山巴士 L 線（周遊券是否涵蓋要確認）；Outlet → 河口湖是富士急巴士，自費' },
    { name: '租車約一天（河口湖駅）', price: '分攤約 ¥3,500–5,000／人（估）', note: '8 人：兩台 5 人座或一台 8 人座。台灣普通駕照只能開 9 人座以下，10 人座 Hiace 會被拒絕交車。要駕照正本＋日文譯本＋護照' },
    { name: '河口湖 → 新宿 高速巴士', price: '¥2,000', note: '約 1 小時 45 分，先上網訂位' },
  ],
  routes: [
    { day: 1, text: '成田 →（Skyliner）→ 日暮里 →（山手線）→ 高田馬場（放行李）→（東西線・千代田線）→ 龜有 → 北千住 → 淺草 → 押上 → 新宿' },
    { day: 2, text: '新宿 →（浪漫特快）→ 湯本 →（登山電車）→ 強羅 →（纜車）→ 早雲山 →（空中纜車）→ 大涌谷 → 桃源台 →（海賊船）→ 元箱根 →（巴士）→ 湯本' },
    { day: 3, text: '湯本 →（巴士 L 線）→ 御殿場 Outlet →（富士急巴士）→ 河口湖駅（取車）→ 大石公園 → 天空鳥居 → 山中湖' },
    { day: 4, text: '山中湖 →（自駕）→ 新倉山 → 河口湖駅（還車）→（高速巴士）→ 新宿 → 高田馬場（拿行李）→ 池袋 → 赤羽；晚上 赤羽 ⇄ 池袋（埼京線 8 分）' },
    { day: 5, text: '赤羽 → 池袋 → 高田馬場 → 早稻田 →（下午依投票）→ 赤羽' },
    { day: 6, text: '依投票：競馬場 新宿 →（京王線）→ 府中競馬正門前；明治神宮 新宿 →（山手線）→ 原宿；柴又 日暮里 →（京成線）→ 柴又' },
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
    { item: '租車約一天（分攤）', lo: 700, hi: 1100, est: true },
    { item: '市區交通', lo: 520, hi: 520 },
    { item: '11/16 新宿住宿', lo: 1130, hi: 1130 },
    { item: '11/17 箱根湯本 Airbnb＋箱根湯寮', lo: 1680, hi: 1680 },
    { item: '11/18 山中湖 Villa', lo: 1670, hi: 1670 },
    { item: '11/19–21 ManOku 三晚', lo: 3940, hi: 3940 },
    { item: '餐飲', lo: 4610, hi: 6890 },
    { item: '晴空塔', lo: 370, hi: 620 },
    { item: '旅平險＋不便險', lo: 500, hi: 1200 },
    { item: '網卡／eSIM', lo: 210, hi: 660 },
    { item: '湯本 → 御殿場 Outlet → 河口湖巴士', lo: 530, hi: 630, est: true },
    { item: '河口湖 → 新宿高速巴士', lo: 420, hi: 420, est: true },
  ],
  note: '不含機票與購物。標「估」的是依新行程估的，確認後再修正。',
  addons: [
    { item: '東京競馬場入場', yen: 200 },
    { item: '晴空塔天望甲板（起）', yen: 1800 },
    { item: 'すみだ水族館（約）', yen: 2700 },
    { item: 'Shibuya Sky', yen: 2500 },
  ],
};

// 出發前要訂的東西。網站上按「我訂好了」會記名字（用按讚的機制）
export const BOOKINGS = [
  { id: 'jptrans', title: '台灣駕照日文譯本', when: '出發前，監理站辦', note: '每位駕駛都要。取車時要駕照正本＋譯本＋護照' },
  { id: 'car', title: '河口湖租車', when: '11/18 13:45 取 → 11/19 12:15 還', note: '8 人：兩台 5 人座或一台 8 人座，不能訂 10 人座' },
  { id: 'skyliner', title: 'Skyliner 來回', when: '11/16 去、11/22 回', note: '線上買外國人優惠票' },
  { id: 'skytree', title: '晴空塔門票（投票選了才訂）', when: '11/16 16:00 時段', note: '官網前一天 23:59 截止，現場加 ¥500' },
  { id: 'romance', title: '浪漫特快指定席＋箱根周遊券', when: '11/17 09:00 新宿出發', note: '9 人（含蕭文嘉）' },
  { id: 'fujibus', title: '河口湖 → 新宿高速巴士', when: '11/19 12:30 前後', note: '先上網訂位' },
  { id: 'dorm', title: '跟蕭文嘉約放行李／拿行李時間', when: '11/16 09:00、11/19 15:00', note: '高田馬場宿舍' },
];

export const TIPS = [
  { h: '天氣', p: '11 月中旬東京約 9–17°C；箱根、富士山區早晚 0–10°C，要帶保暖外套。日出約 06:15、日落約 16:30。' },
  { h: '用 LINE 打開這個網站', p: 'LINE 內建瀏覽器不能 Google 登入。點右上角「⋯」→「用預設瀏覽器開啟」，或直接用暱稱登入。' },
  { h: '租車', p: '台灣駕照＋日文譯本（監理站申請）＋護照。建議加租 ETC 卡。日本靠左行駛。' },
  { h: '緊急電話', p: '警察 110、救護車／消防 119。駐日代表處急難救助 +81-80-6557-8796。' },
];
