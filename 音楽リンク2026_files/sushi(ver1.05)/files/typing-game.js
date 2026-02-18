// URLパラメータから難易度取得
const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty") || "normal";

// 難易度設定
const config = {
  easy: {
    timeLimit: 60,
    sushiTimeLimit: 0,
    sushiList: [
      { kana: "えび", romaji: ["ebi"] },
      { kana: "まぐろ", romaji: ["maguro"] },
      { kana: "はまち", romaji: ["hamachi", "hamati"] },
      { kana: "たまご", romaji: ["tamago"] },
      { kana: "あなご", romaji: ["anago"] },
      { kana: "いくら", romaji: ["ikura"] },
      { kana: "さんま", romaji: ["sanma" , "sannma"] },
      { kana: "こはだ", romaji: ["kohada"] },
      { kana: "あおさ", romaji: ["aosa"] },
      { kana: "へいわ", romaji: ["heiwa"] },
      { kana: "ぶり", romaji: ["buri"] },
      { kana: "うなぎ", romaji: ["unagi"] },
      { kana: "そら", romaji: ["sora"] },
      { kana: "ゆき", romaji: ["yuki"] },
      { kana: "みず", romaji: ["mizu"] },
      { kana: "さけ", romaji: ["sake"] }, // 魚以外に飲み物としても
      { kana: "ココア", romaji: ["kokoa"] },
      { kana: "パン", romaji: ["pan" , "pann"] },
      { kana: "おなら", romaji: ["onara"] },
      { kana: "たい", romaji: ["tai"] },
      { kana: "ひめじ", romaji: ["himezi" , "himeji"] }
    ]
  },
  normal: {
    timeLimit: 90,
    sushiTimeLimit: 0,
    sushiList: [
      { kana: "まぐろの刺身", romaji: ["maguronosasimi", "maguronosashimi"] },
      { kana: "魚はおいしい", romaji: ["sakanahaoisii", "sakanahaoishii"] },
      { kana: "タイピングマスター", romaji: ["taipinngumasuta-"] },
      { kana: "おにぎりは握ってこそ", romaji: ["onigirihaanigettekoso" , "onigirihanigittekoso"] },
      { kana: "新鮮なネタが一番", romaji: ["sinsennnanetagaitiban" , "sinnsennnanetagaitibann"] },
      { kana: "あつあつの出汁巻き卵", romaji: ["atsuatsunodasimakitamago" , "atuatunodasimakitamago"] },
      { kana: "平和を実現する", romaji: ["heiwawozitugennsuru" , "heiwawozitsugensuru"] },
      { kana: "タイピング練習のみそ", romaji: ["taipinngurennsyuunomiso"] },
      { kana: "javascriptはAI頼み", romaji: ["javaciripthaaitanomi" , "javascripthaaidanomi"] },
      { kana: "筋のあってかたい肉", romaji: ["suzinoattekatainiku" , "sujinoattekatainiku"] },
      { kana: "桜が咲いたよ", romaji: ["sakuragasaitayo"] },
      { kana: "花火大会はたのしい", romaji: ["hanabitaikaihatanoshii" , "hanabitaikaihatanosii"] },
      { kana: "雪がつもってきた", romaji: ["yukigatsumottekita" , "yukigatumottekita"] },
      { kana: "あけましておめでとう", romaji: ["akemasiteomedetou"] },
      { kana: "雪国のスイーツ", romaji: ["yukiguninosui-tu" , "yukiguninosuiitsu"] },
      { kana: "ライバル心に火", romaji: ["raibarusinnnihi" , "raibarushinnihi"] }
    ]
  },
  hard: {
    timeLimit: 120,
    sushiTimeLimit: 23,
    sushiList: [
      { kana: "我思う、故に我あり", romaji: ["wareomou,yueniwareari"] },
      { kana: "優柔不断な人ね", romaji: ["yuuzyuuhudannnahitone", "yuujuuhudannahitone"] },
      { kana: "二時間前に出直してきな！", romaji: ["nizikannmaenidenaositekina!"] },
      { kana: "素晴らしい絶品の料理", romaji: ["subarasiizeppinnnoryouri"] },
      { kana: "とろけるような舌触り", romaji: ["torokeruyounasitazawari"] },
      { kana: "紙粘土で作品を作る", romaji: ["kaminenndodesakuhinnwotukuru"] },
      { kana: "平和を実現することは大切", romaji: ["heiwawozitugennsurukotohataisetu" , "heiwawzitsugennsurukotohataisetsu"] },
      { kana: "砂糖と塩を間違える", romaji: ["satoutoshioomachigaeru" , "satoutosioomatigaeru"] },
      { kana: "カレーは飲み物です", romaji: ["kareehanomimonodesu" , "kare-hanomimonodesu"] },
      { kana: "冷房は強すぎ注意", romaji: ["reibouwatsuyosugichuui" , "reibouhatuyosugityuui"] },
      { kana: "定期券落としたかも", romaji: ["teikikenotoshitakamo" , "teikikennotositakamo"] },
      { kana: "朝ごはん食べ忘れた", romaji: ["asagohantabewasureta" , "asagohanntabewasureta"] },
      { kana: "曇り時々雨のち晴れ", romaji: ["kumoritokidokiamenochihare" , "kumoritokidokiamenotihare"] },
      { kana: "忘れ物ありませんか", romaji: ["wasuremonoarimasenka" , "wasuremonoarimasennka"] },
      { kana: "漢字の成り立ち講座", romaji: ["kanjinonaritachikouza" , "kannzinonaritatikouza"] },
      { kana: "眠気との戦いは続く", romaji: ["nemuketonotatakaiwatsuduku" , "nemuketonotatakaihatuduku"] },
      { kana: "寿司タイムリミット", romaji: ["susitaimurimitto" , "sushitaimurimitto"] },
      { kana: "ライバル心に火が付いた", romaji: ["raibarusinnnihigatuita" , "raibarushinnihigatuita"] },
      { kana: "いざ尋常に勝負", romaji: ["izazinnzyounisyoubu" ,"izazinnzyounishobu"] },
      { kana: "さて、アンダーバーは必要か?", romaji: ["sate,annda-ba-hahituyouka" , "sate,anndabahahituyouka?"] }
    ]
  },
  lunatic: {
    timeLimit: 140,
    sushiTimeLimit: 20,
    sushiList: [
      { kana: "寿司を打つなら心で握れ", romaji: ["sushiwoutsunarakokorodenigire" , "susiwoutunarakokorodenigire"] },
      { kana: "青巻紙赤巻紙黄巻紙、これは打ちにくいなあ", romaji: ["aomakigamiakamakigamikimakigami,korehautinikuinaa"] },
      { kana: "絶品一貫！職人魂炸裂の奇跡の組み合わせ", romaji: ["zeppinnikkan!syokunintamasisakuretunokisekinokumiawase" , "zeppinnikkann!syokuninntamasiisakuretunokisekinokumiawase"] },
      { kana: "絶品の味とはとてもうまい味のことだ", romaji: ["zeppinnnoazitohatotemoumaiazinokotoda"] },
      { kana: "平和を実現することは、とても大切なことである", romaji: ["heiwawozitugennsurukotoha,totemotaisetunakotodearu" ,"heiwawozitsugennsurukotoha,totemotaisetsunakotodearu"] },
      { kana: "タイピングは練習するとすごくうまくなる", romaji: ["taipinnguharennsyuusurutosugokuumakunaru"] },
      { kana: "スマホばかり触って、寿司の打ち方も忘れたか", romaji: ["sumahobakarisawatte,sushinoutikatamowasuretaka" , "sumahobakarisawatte,susinoutikatamowasuretaka"] },
      { kana: "酢飯にすべてを委ねるのが人生の本質だ", romaji: ["sumesinisubetewoyudanerunogajinseinohonshitsuda" , "sumesinisubetewoyudanerunogazinnseinohonnsituda"] },
      { kana: "一流は失敗しても握り直す、二流は文句を言う", romaji: ["ichiryuwashippaishitemonigirinaosu,niryuwamonkewoiu" , "itiryuuhasippaisitemonigirinaosu,niryuhamonnkuwoiu"] },
{ kana: "早口ことばに勝てる寿司職人は今や伝説の存在らしい",
  romaji: ["hayakutikotobanikaterusushisyokuninhamayadensetsunosonzairashii"],
},

{ kana: "シャリの温度で議論が起きるのは一流寿司屋だけだと思っていた",
  romaji: ["sharinonondodegironnagaokirunohairyuusushiyadakedatoomotteita" , "syarinoonndodegironngaokirunohaitiryuususiyadakedatoomotteita"],
},

{ kana: "打ちすぎて指が寿司のように柔らかくなった気がしてきた",
  romaji: ["uchisugiteyubigasushinoyouniyawarakakunattakigashitekita" , "utisugiteyubigasusinoyouniyawarakakunattakigasitekita"],
},

{ kana: "酢飯に人生を見いだすのはもはや悟りの領域としか言いようがない",
  romaji: ["sumesinijinseiwoiidasunohamohayasatorinoryouikitoshakaiyouganai"],
},

{ kana: "寿司を打ち続けることで世界平和が訪れると本気で信じている人がいる",
  romaji: ["sushiwoutituzukerukotodesekaiheiwagaotozurerutohonkideshinjiteiruhitogairu" , "susiwoutituzukerukotodesekaiheiwagaotozurerutohonnkidesinnziteiruhitogairu"]
},

{ kana: "寿司タイムリミットは近くなってきている。注意せよ！", romaji: ["susitaimurimittohatikakunattekiteiru.tyuuiseyo!" , "sushitaimurimittohatikakunattekiteiru.tyuuiseyo!"] 
},

{ kana: "ライバル心に火が付いた。いざ尋常に勝負だ、お前ら！！", romaji: ["raibarusinnnihigatuita.izazinnzyounisyoubuda,omaera!!" , "raibarushinnihigatuita.izazinnzyounishoubuda,omaera!!"] }
    ]
  },
  SuperLunatic: {
  timeLimit: 145, // より短く、瞬発力を求める設定
  sushiTimeLimit: 21,
  sushiList: [
    { kana: "狂気を打て。君が待ち望んだクリアが待っているはずだ。ただ努力しろ。そうだ。頑張るのだぞ！！！", romaji: ["kyoukiwoute.kimigamatinozonndakuriagamatteiruhazuda.tadadoryokusiro.souda.gannbarunodazo!!!"] },
    { kana: "鼓動が打鍵になる。そんな夢みたいなことを思い浮かべたことはあるか?私はない。だから君がそれをやってみろ。", romaji: ["kodougadakennninaru.sonnnayumemitainakotowoomoiukabetakotohaaruka?watasihanai.dakarakimigasorewoyattemiro."] },
    { kana: "How do you say rakuda in English?", romaji: ["howdoyousayrakudainenglish?"] },
    { kana: "言葉の残響が頭に響く。これは発狂案件だなあ...", romaji: ["kotobanozannkyougaatamanihibiku.korehahakkyouannkenndanaa..."] },
    { kana: "こ、これが素晴らしい絶品の料理...うますぎる", romaji: ["ko,koregasubarasiizeppinnnoryouri...umasugiru"] }, 
    { kana: "風は沈黙した。それはなぜか?タイピング能力が凄すぎるからだ", romaji: ["kazehatinnmokusita.sorehanazeka?taipinngunouryokugasugosugirukarada"] },
    { kana: "記憶の花が咲くとき、お前の記憶は元通りになるだろう。しかし今までの記憶は失われる。悲しきかな", romaji: ["kiokunohanagasakutoki,omaenokiokuhamotodoorininarudarou.sikasiimamadenokiokuhausinawareru.kanasikikana"] },
    { kana: "きつつき", romaji: ["きつつき"] },
    { kana: "javascriptはAI頼みだなあ、こんな長文を人間が打てるわけもないし", romaji: ["javascripthaaidanomidanaa,konnnatyoubunnwoninngenngauteruwakemonaisi"] }, 
    { kana: "光をなぞる夢を見た?そうか。ついにこの時が来たんだな", romaji: ["hikariwonazoruyumewomita?souka.tuinikonotokigakitanndana"] },
    { kana: "ここはSuperLunaticだ。クリアできるわけがないぞ?", romaji: ["kokohasuperlunaticda.kuriadekiruwakeganaizo?"] },
    { kana: "煙の中で言葉が踊る? なんだそれは。意味不明だな", romaji: ["kemurinonakadekotobagaodoru?nanndasoreha.imihumeidana"] },
    { kana: "騒がしい... うせな！煙草(たばこ)の味が濁る", romaji: ["sawagasii...usena!tabakonoaziganigoru"] }, // 擬似言語
    { kana: "人でないものは何というか知ってるか? 私は知らねえよ", romaji: ["hitodenaimonohananntoiukasitteruka?watasihasiraneeyo"] },
    { kana: "くぁwせdrftgyふじこlp (うわああああ)", romaji: ["uwaaaaa"] }, // 意味不明語
    { kana: "視えぬ風を打て? 何で見えない、攻撃もしてこない相手を打つ必要があるんだ?", romaji: ["mienukazewoute?nanndemienai,kougekimositekonaiaitewoutuhituyougaarunnda?"] }
   ]
 }
};

    const seasonalList = [
  { kana: "さくら", romaji: ["sakura"], season: "spring" },
  { kana: "秋刀魚(さんま)", romaji: ["sanma" , "sannma"], season: "autumm" },
  { kana: "秋の味覚", romaji: ["akinomikaku"], season: "autumm" },
  { kana: "夏祭り", romaji: ["natumaturi" , "natsumatsuri"], season: "summer"},
  { kana: "暑すぎる", romaji: ["atusugiru" , "atsusugiru"] }
  
];

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 9) return "summer";
  if (month >= 10 && month <= 11) return "autumm";
  return "winter";
}

// 難易度取得と安全な分割代入
const currentConfig = config[difficulty];
if (!currentConfig) {
  showEnvironmentError(`難易度 "${difficulty}" が見つかりません`);
  throw new Error(`Unknown difficulty: ${difficulty}`);
}

let { timeLimit, sushiTimeLimit, sushiList } = currentConfig;
let currentSushi = {};
let previousIndex = -1;
let typed = "";
let score = 0;
let sushiTimer;
let gameTimer;

// DOM取得
const sushiElement = document.getElementById("sushi-static");
const typedElement = document.getElementById("typed-progress");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const commentElement = document.getElementById("score-comment");
const season = getCurrentSeason();
const seasonalSushi = seasonalList.filter(s => s.season === season);
sushiList = [...sushiList, ...seasonalSushi];

// コメント生成
function getComment(score) {
  if (score === 0) return "さあ、握り始めましょう！";
  else if (score <= 10) return "悪くないスタートです！";
  else if (score <= 20) return "板前の見習いレベルです🍥";
  else if (score <= 40) return "職人の腕前ですね🍣";
  else if (score <= 70) return "職人パワーが輝いています✨";
  else if (score <= 100) return "神速タイピングマスター！";
  else return "伝説の寿司職人👑";
}

// 称号取得
function getTitle(difficulty) {
  switch (difficulty) {
    case "easy": return "見習いタイピングマスター🍵";
    case "normal": return "一人前タイピングマスター🐟";
    case "hard": return "輝くタイピングマスター🔥";
    case "lunatic": return "タイピングの神👑";
    case "SuperLunatic": return "タイピングの頂点に立つ者";
    default: return "未知の称号";
  }
}

// 寿司ネタ表示（重複防止）
function showNewSushi() {
  clearTimeout(sushiTimer);

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * sushiList.length);
  } while (newIndex === previousIndex && sushiList.length > 1);

  previousIndex = newIndex;
  currentSushi = sushiList[newIndex];
  typed = "";

  sushiElement.textContent = currentSushi.kana;
  typedElement.textContent = "";
  resultElement.textContent = "";

  if (sushiTimeLimit > 0) {
    sushiTimer = setTimeout(() => {
      resultElement.textContent = "時間切れ！miss!";
      typed = "";
      typedElement.textContent = "";
      showNewSushi();
    }, sushiTimeLimit * 1000);
  }
}

// タイピング処理
function handleTyping(event) {
  const key = event.key;
  if (key.length !== 1 || !/^[a-zA-Z.,\-_'0-9!]$/.test(key)) return;

  typed += key.toLowerCase();
  typedElement.textContent = typed;

  const candidates = currentSushi.romaji;

  if (candidates.some(r => r.startsWith(typed))) {
    resultElement.textContent = "";
    if (candidates.includes(typed)) {
      score++;
      scoreElement.textContent = `スコア: ${score}`;
      commentElement.textContent = getComment(score);
      clearTimeout(sushiTimer);
      showNewSushi();
    }
  } else {
    resultElement.textContent = "miss!";
    typed = "";
    typedElement.textContent = "";
  }
}

// ゲーム終了処理
function endGame() {
  sushiElement.textContent = "終了！🍵";
  typedElement.textContent = "";
  resultElement.textContent = "";
  document.removeEventListener("keydown", handleTyping);

  let clearLine = {
    easy: 10,
    normal: 15,
    hard: 20,
    lunatic: 23,
    SuperLunatic: 26
  };

  if (score >= clearLine[difficulty]) {
    commentElement.textContent = `🎉 クリア！称号: ${getTitle(difficulty)}`;
  } else {
    commentElement.textContent = "修行不足…またの挑戦を！🥢";
  }

  // ボタン表示
  document.getElementById("retry-button").style.display = "inline-block";
  document.getElementById("back-button").style.display = "inline-block";

  // リトライ → 同じURLで再読み込み
  document.getElementById("retry-button").onclick = () => {
    window.location.reload();
  };

  // 難易度選択に戻る → index.html に遷移
  document.getElementById("back-button").onclick = () => {
    window.location.href = "index.html";
  };
}

  document.getElementById("retry-button").style.display = "inline-block";
  document.getElementById("back-button").style.display = "inline-block";

  document.getElementById("retry-button").onclick = () => {
    window.location.reload();
  };
  document.getElementById("back-button").onclick = () => {
    window.location.href = "index.html";
  };

// カウントダウンからスタート
function startCountdownAndGame() {
  let countdown = 5;
  const countdownElement = document.getElementById("countdown");

  countdownElement.textContent = `開始まで… ${countdown}`;
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      countdownElement.textContent = `開始まで… ${countdown}`;
    } else {
      clearInterval(countdownInterval);
      countdownElement.textContent = "";
      startGame();
    }
  }, 1000);
}

startCountdownAndGame();

// タイマー処理
function startTimer() {
  gameTimer = setInterval(() => {
    timeLimit--;
    timerElement.textContent = `残り時間: ${timeLimit}秒`;
    if (timeLimit <= 0) {
      clearInterval(gameTimer);
      clearTimeout(sushiTimer);
      endGame();
    }
  }, 1000);
}

// ゲーム開始
function startGame() {
  showNewSushi();
  scoreElement.textContent = `スコア: ${score}`;
  commentElement.textContent = getComment(score);
  timerElement.textContent = `残り時間: ${timeLimit}秒`;
  document.addEventListener("keydown", handleTyping);
  startTimer();
}

// 環境エラー表示
function showEnvironmentError(message) {
  document.getElementById("errorMessage").textContent = message;
  document.getElementById("errorDisplay").style.display = "block";
}