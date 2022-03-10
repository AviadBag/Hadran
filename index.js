const data = [
  ['דביר שמש, י5', 'תנ"ך'],
  ['יהודה פרידמן, ז1', 'ש"ס משניות'],
  ['בנימין קירשנבום, ז1', 'ש"ס משניות'],
  ['ייטיב עמאר, ח1', 'ש"ס משניות'],
  ['אדיר אביעד, ז1', 'משניות'],
  ['איתן וולר, ז1', 'משניות'],
  ['גלעד פרייזן, ז1', 'משניות'],
  ['חגי קרטין, ז1', 'משניות'],
  ['ינון שמאע, ז1', 'משניות'],
  ['יהותנן שפרמן, ז1', 'משניות'],
  ['אביתר הנסב, ז2', 'משניות'],
  ['יגל ישורון, ז2', 'משניות'],
  ['מתן מאייר, ז2', 'משניות'],
  ['עקיבא אבן חן, ז3', 'משניות'],
  ['יהונתן אילוז, ז3', 'משניות'],
  ['נחשון לוסטיג, ז3', 'משניות'],
  ['נעם קליין, ז3', 'משניות'],
  ['גולן אוחיון, ח1', 'משניות'],
  ['רפאל דב אליהו חיון, ח1', 'משניות'],
  ['עמיקודש טברסקי, ח1', 'משניות'],
  ['גלעד לפקוביץ, ח4', 'משניות'],
  ['נדב הראל משה, ח4', 'משניות'],
  ['דן אוחיון, י2', 'משניות'],
  ['בנימין גוסמן, יא3', 'משניות'],
  ['נתנאל יעקובסון, יא3', 'משניות'],
  ['הרב עופר טויבר', 'סדר מועד'],
  ['יצהר טחובר, ז1', 'סדר מועד'],
  ['אביתר שלום, ח1', 'סדר מועד'],
  ['בניהו אלעזר, ט1', 'סדר מועד'],
  ['איתן הלבר, ט3', 'סדר מועד'],
  ['דביר הנל, ט3', 'סדר מועד'],
  ['נעם מייטליס, ט3', 'סדר מועד'],
  ['שמואל שפיגל, ט3', 'סדר מועד'],
  ['אפי שפירא, ט3', 'סדר מועד'],
  ['אביעד בגנו, יא3', 'סדר מועד'],
  ['מנחם מנדל שוקרון', 'סדר מועד'],
  ['מתניה בגנו, יב1  ', 'סדר מועד'],
  ['הרב נריה חסיד', 'ביצה'],
  ['יוהנתן לנדי, ח1', 'ביצה'],
  ['אביעד טפר, יב4', 'ביצה'],
  ['הרב דוד ליבוביץ', 'חגיגה'],
  ['הרב ירחם שמשוביץ', 'חגיגה'],
  ['נעם וולס, ז1', 'חגיגה'],
  ['אריאל פיליפ, ז1', 'חגיגה'],
  ['הלל בארי, ז2', 'חגיגה'],
  ['יוסף מנדלסון , ז2', 'חגיגה'],
  ['שילה שרגא, ז2', 'חגיגה'],
  ['דוד וייס, ז3', 'חגיגה'],
  ['ישי זטובסקי, ז3', 'חגיגה'],
  ['אלחנן חזיזה, ז3', 'חגיגה'],
  ['יעקב  פרבר, ז3', 'חגיגה'],
  ['דן רידניק, ז3', 'חגיגה'],
  ['עילאי , ז3', 'חגיגה'],
  ['יוסי דלהפואנטה, ח1', 'חגיגה'],
  [' מצלר, ח1', 'חגיגה'],
  ['יובל ניצן, ח1', 'חגיגה'],
  ['מרדכי פולק , ח1', 'חגיגה'],
  ['אמציה אליהו, ח2', 'חגיגה'],
  ['יהודה  לוי, ט1', 'חגיגה'],
  ['דוד יאיר כגן, ט1', 'חגיגה'],
  ['עקיבא אברהם, ט2', 'חגיגה'],
  ['טל ציון דוקר, ט2', 'חגיגה'],
  ['יוסף יכמן, ט2', 'חגיגה'],
  ['אמיתי ניסני, ט2', 'חגיגה'],
  ['אלון בורובסקי, ט3', 'חגיגה'],
  ['נעם בצלאל, ט3', 'חגיגה'],
  ['אביעד  הלוי, י5', 'חגיגה'],
  ['דוד  מורגנשטרן, יא1', 'חגיגה'],
  ['יגל טחובר, יא2', 'חגיגה'],
  ['עמיחי ברוך, יא3', 'חגיגה'],
  ['אריאל וולדשיין, יא3', 'חגיגה'],
  ['בצר לומפ, יא3', 'חגיגה'],
  ['אהרן מייטליס, יא3', 'חגיגה'],
  ['יהונתן מלכיאל, יב3', 'חגיגה'],
  ['דני שווארץ, יב4', 'חגיגה'],
  ['אדיר אביעד, ז1', 'מגילה'],
  ['ירקיר אפלבום, ז2', 'מגילה'],
  ['יונתן כצמן, ז2', 'מגילה'],
  ['דביר ורטר, ח1', 'מגילה'],
  ['מ.משה כהן, ח1', 'מגילה'],
  ['אורי מייטליס, ח1', 'מגילה'],
  ['יאיר חקקיאן, ח4', 'מגילה'],
  ['איתן שכטר, ח4', 'מגילה'],
  ['נעם קיצברג, י5', 'מגילה'],
  ['אריה רוזנברג, יא1', 'מגילה'],
  ['יהונתן לפשיץ, יא2', 'מגילה'],
  ['משגב טחובר, ט1', 'סוכה'],
  ['הרב צביקה דנטלסקי', 'מועד קטן'],
  ['נתנאל בלומנטל, ז1', 'מועד קטן'],
  ['יוסף משה בענעט, ח1', 'מועד קטן'],
  ['דוד כהן, ט1', 'מועד קטן'],
  ['יצחק גלברד, י5', 'מועד קטן'],
  ['נתן פולק , י6', 'מועד קטן'],
  ['מתן סימינובסקי, יא1', 'מועד קטן'],
  ['יעקב יצחק משיח, ז3', 'ברכות'],
  ['שרגא ברגמן, ט2', 'ברכות'],
  ['חיים  מנדלסון , יא3', 'ברכות'],
  ['נחי ארדפרב, ח1', 'ראש השנה'],
  ['הלל חובב, ז1', 'תענית'],
  ['עידו שפיגל, ט1', 'תענית'],
  ['אחיה פנקסוביץ, ט1', 'עבודה זרה'],
  ['רועי הרמן, ז1', 'רמבם'],
  ['גילי פידלר, ז1', 'רמבם'],
  ['נועם סטואין, ז2', 'רמבם'],
  ['יעקב זיו אוחיון, ח1', 'רמבם'],
  ['עקיבא גולדברג, ט3', 'רמבם'],
  ['נתנאל אחרפי, ז1', 'מסילת ישרים'],
  ['יאיר טפר, ז2', 'מסילת ישרים'],
  ['צביקה קאופמן, יא1', 'מסילת ישרים'],
  ['אליה סיני, ז2', 'אורחות צדיקים'],
  ['יאיר בן עמי, יב3', 'חובת התלמידים'],
  ['יהשוע דאנציג, יא1', 'תניא']
]
let i = 0;

let pictures = [
	"pictures/005-DSC08385.jpg",
	"pictures/006-DSC08386.jpg",
	"pictures/011-DSC08391.jpg",
	"pictures/012-DSC08392.jpg",
	"pictures/013-DSC08393.jpg",
	"pictures/014-DSC08394.jpg",
	"pictures/015-DSC08395.jpg",
	"pictures/016-DSC08396.jpg",
	"pictures/017-DSC08397.jpg",
	"pictures/018-DSC08398.jpg",
	"pictures/019-DSC08399.jpg",
	"pictures/020-DSC08400.jpg",
	"pictures/021-DSC08401.jpg",
	"pictures/022-DSC08402.jpg",
	"pictures/023-DSC08403.jpg",
	"pictures/024-DSC08404.jpg",
	"pictures/025-DSC08405.jpg",
	"pictures/026-DSC08406.jpg",
	"pictures/027-DSC08407.jpg",
	"pictures/028-DSC08408.jpg",
	"pictures/029-DSC08409.jpg",
	"pictures/030-DSC08410.jpg",
	"pictures/031-DSC08411.jpg",
	"pictures/043-DSC08423.jpg",
	"pictures/044-DSC08424.jpg",
	"pictures/045-DSC08425.jpg",
	"pictures/046-DSC08426.jpg",
	"pictures/159-DSC08539.jpg",
	"pictures/160-DSC08540.jpg",
	"pictures/162-DSC08542.jpg",
	"pictures/163-DSC08543.jpg",
	"pictures/164-DSC08544.jpg",
	"pictures/165-DSC08545.jpg",
	"pictures/166-DSC08546.jpg",
	"pictures/185-DSC08565.jpg",
	"pictures/186-DSC08566.jpg",
	"pictures/187-DSC08567.jpg",
	"pictures/188-DSC08568.jpg",
	"pictures/189-DSC08569.jpg",
	"pictures/190-DSC08570.jpg",
	"pictures/191-DSC08571.jpg",
	"pictures/192-DSC08572.jpg",
	"pictures/193-DSC08573.jpg",
	"pictures/194-DSC08574.jpg",
	"pictures/195-DSC08575.jpg",
	"pictures/196-DSC08576.jpg",
	"pictures/197-DSC08577.jpg",
	"pictures/198-DSC08578.jpg",
	"pictures/199-DSC08579.jpg",
	"pictures/203-DSC08583.jpg",
	"pictures/204-DSC08584.jpg",
	"pictures/205-DSC08585.jpg",
	"pictures/207-DSC08587.jpg",
	"pictures/209-DSC08589.jpg",
	"pictures/210-DSC08590.jpg",
	"pictures/211-DSC08591.jpg",
	"pictures/212-DSC08592.jpg",
	"pictures/213-DSC08593.jpg",
	"pictures/214-DSC08594.jpg",
	"pictures/215-DSC08595.jpg",
	"pictures/216-DSC08596.jpg",
	"pictures/217-DSC08597.jpg",
	"pictures/218-DSC08598.jpg",
	"pictures/219-DSC08599.jpg",
]

const name_h1 = document.getElementById('name')
const what_h1 = document.getElementById('what')

const fireworks = new Fireworks(document.body, { /* options */ })
fireworks.start();

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const next_one = () => {
    const arr = data[i++ % data.length];
    name_h1.innerHTML = arr[0];
    what_h1.innerHTML = arr[1];
    name_h1.style = `color: ${getRandomColor()}`;
    what_h1.style = `color: ${getRandomColor()}`;

	const image_path = pictures[Math.floor(Math.random()*pictures.length)]; // Choose a random picture
	document.body.style.backgroundImage = `url('${image_path}')`;
}

next_one(); // Start immediatly, not after 1 second
setInterval(next_one, 2000);