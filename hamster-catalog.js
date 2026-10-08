const HAMSTERS = [
  {
    "id": "pixel",
    "name": "Professeur Pixel",
    "rarity": "rare",
    "image": "hamsters/2aebf72f8836447fbba1c9ec50f8ed35.jpg"
  },
  {
    "id": "champion",
    "name": "Champion",
    "rarity": "rare",
    "image": "hamsters/41uvXhkuQ9L._AC_UF894,1000_QL80_.jpg"
  },
  {
    "id": "joufflu",
    "name": "Joufflu",
    "rarity": "common",
    "image": "hamsters/473740632_17914534464057476_5449055926700468695_n.jpg"
  },
  {
    "id": "bisou",
    "name": "Bisou",
    "rarity": "common",
    "image": "hamsters/473779368_17914534482057476_9062431935043338773_n.jpg"
  },
  {
    "id": "etoile",
    "name": "Étoile",
    "rarity": "legendary",
    "image": "hamsters/473779698_17914534500057476_8878646487518074761_n.jpg"
  },
  {
    "id": "soleil",
    "name": "Soleil",
    "rarity": "mythic",
    "image": "hamsters/473804092_17914534491057476_2387048370877027267_n.jpg"
  },
  {
    "id": "hamster-007",
    "name": "Hamster 007",
    "rarity": "common",
    "image": "hamsters/473955287_17914534473057476_8465084011906066566_n.jpg"
  },
  {
    "id": "hamster-008",
    "name": "Hamster 008",
    "rarity": "common",
    "image": "hamsters/474016478_17914534455057476_6594651584843938322_n.jpg"
  },
  {
    "id": "hamster-009",
    "name": "Hamster 009",
    "rarity": "common",
    "image": "hamsters/474395557_17916646965057476_8477769224911542196_n.jpg"
  },
  {
    "id": "hamster-010",
    "name": "Hamster 010",
    "rarity": "common",
    "image": "hamsters/475431722_17916204942057476_5702680249374286424_n.jpg"
  },
  {
    "id": "hamster-011",
    "name": "Hamster 011",
    "rarity": "common",
    "image": "hamsters/475689065_17916646962057476_481862296696584424_n.jpg"
  },
  {
    "id": "hamster-012",
    "name": "Hamster 012",
    "rarity": "common",
    "image": "hamsters/476738800_17917483278057476_2439727386455987772_n.jpg"
  },
  {
    "id": "hamster-013",
    "name": "Hamster 013",
    "rarity": "common",
    "image": "hamsters/477395709_17917843743057476_6522625727679248386_n.jpg"
  },
  {
    "id": "hamster-014",
    "name": "Hamster 014",
    "rarity": "common",
    "image": "hamsters/479563619_17918198370057476_2420318901559283410_n.jpg"
  },
  {
    "id": "hamster-015",
    "name": "Hamster 015",
    "rarity": "common",
    "image": "hamsters/481004905_17919488595057476_1491739968912576_n.jpg"
  },
  {
    "id": "hamster-016",
    "name": "Hamster 016",
    "rarity": "common",
    "image": "hamsters/481513585_17919488613057476_7786633541050057308_n.jpg"
  },
  {
    "id": "hamster-017",
    "name": "Hamster 017",
    "rarity": "common",
    "image": "hamsters/481698627_17919488604057476_1007489431226469993_n.jpg"
  },
  {
    "id": "hamster-018",
    "name": "Hamster 018",
    "rarity": "common",
    "image": "hamsters/481945776_17920115949057476_6734528641120651112_n.jpg"
  },
  {
    "id": "hamster-019",
    "name": "Hamster 019",
    "rarity": "common",
    "image": "hamsters/482266902_17920115967057476_9185461988246500075_n.jpg"
  },
  {
    "id": "hamster-020",
    "name": "Hamster 020",
    "rarity": "common",
    "image": "hamsters/482695706_17920741227057476_2416696226834635673_n.jpg"
  },
  {
    "id": "hamster-021",
    "name": "Hamster 021",
    "rarity": "common",
    "image": "hamsters/483058789_17920741236057476_5644786878110144785_n.jpg"
  },
  {
    "id": "hamster-022",
    "name": "Hamster 022",
    "rarity": "common",
    "image": "hamsters/483573033_17921246526057476_5369075098507911005_n.jpg"
  },
  {
    "id": "hamster-023",
    "name": "Hamster 023",
    "rarity": "common",
    "image": "hamsters/484632125_17921735661057476_1582373443978647468_n.jpg"
  },
  {
    "id": "hamster-024",
    "name": "Hamster 024",
    "rarity": "common",
    "image": "hamsters/484904848_17922216201057476_5675647292026947908_n.jpg"
  },
  {
    "id": "hamster-025",
    "name": "Hamster 025",
    "rarity": "common",
    "image": "hamsters/485847774_17922908334057476_5148694707612040992_n.jpg"
  },
  {
    "id": "hamster-026",
    "name": "Hamster 026",
    "rarity": "common",
    "image": "hamsters/486191979_17922908307057476_6148429295717483779_n.jpg"
  },
  {
    "id": "hamster-027",
    "name": "Hamster 027",
    "rarity": "common",
    "image": "hamsters/486286174_17922908355057476_4090706575225766509_n.jpg"
  },
  {
    "id": "hamster-028",
    "name": "Hamster 028",
    "rarity": "common",
    "image": "hamsters/486318971_17922908373057476_3042952165137590937_n.jpg"
  },
  {
    "id": "hamster-029",
    "name": "Hamster 029",
    "rarity": "common",
    "image": "hamsters/486448058_17922908325057476_4497864440228890611_n.jpg"
  },
  {
    "id": "hamster-030",
    "name": "Hamster 030",
    "rarity": "common",
    "image": "hamsters/486636036_17923453380057476_3604069013063116099_n.jpg"
  },
  {
    "id": "hamster-031",
    "name": "Hamster 031",
    "rarity": "common",
    "image": "hamsters/487753734_17923827993057476_4802945215131847816_n.jpg"
  },
  {
    "id": "hamster-032",
    "name": "Hamster 032",
    "rarity": "common",
    "image": "hamsters/488409218_17924251794057476_8283755276100430704_n.jpg"
  },
  {
    "id": "hamster-033",
    "name": "Hamster 033",
    "rarity": "common",
    "image": "hamsters/489851165_17924868465057476_8636603557636684725_n.jpg"
  },
  {
    "id": "hamster-034",
    "name": "Hamster 034",
    "rarity": "common",
    "image": "hamsters/491440623_17925291888057476_4862399979412226402_n.jpg"
  },
  {
    "id": "hamster-035",
    "name": "Hamster 035",
    "rarity": "common",
    "image": "hamsters/491452397_17927017260057476_2904962977226181471_n.jpg"
  },
  {
    "id": "hamster-036",
    "name": "Hamster 036",
    "rarity": "common",
    "image": "hamsters/491453854_17925717978057476_8299828331599257367_n.jpg"
  },
  {
    "id": "hamster-037",
    "name": "Hamster 037",
    "rarity": "common",
    "image": "hamsters/491454268_17926594281057476_4159264239655674098_n.jpg"
  },
  {
    "id": "hamster-038",
    "name": "Hamster 038",
    "rarity": "common",
    "image": "hamsters/491462470_17926140990057476_8305708864737229036_n.jpg"
  },
  {
    "id": "hamster-039",
    "name": "Hamster 039",
    "rarity": "common",
    "image": "hamsters/494748724_17927017251057476_5547104189663910317_n.jpg"
  },
  {
    "id": "hamster-040",
    "name": "Hamster 040",
    "rarity": "common",
    "image": "hamsters/495449030_17927463102057476_656100807957305950_n.jpg"
  },
  {
    "id": "hamster-041",
    "name": "Hamster 041",
    "rarity": "common",
    "image": "hamsters/495528873_17927463123057476_5636698309202303428_n.jpg"
  },
  {
    "id": "hamster-042",
    "name": "Hamster 042",
    "rarity": "common",
    "image": "hamsters/496178321_17927903097057476_485408226633263952_n.jpg"
  },
  {
    "id": "hamster-043",
    "name": "Hamster 043",
    "rarity": "common",
    "image": "hamsters/496931691_17928366912057476_6123168643885880671_n.jpg"
  },
  {
    "id": "hamster-044",
    "name": "Hamster 044",
    "rarity": "common",
    "image": "hamsters/499603232_17929286712057476_7876410809077028089_n.jpg"
  },
  {
    "id": "hamster-045",
    "name": "Hamster 045",
    "rarity": "common",
    "image": "hamsters/499615553_17928826509057476_8185284792047483568_n.jpg"
  },
  {
    "id": "hamster-046",
    "name": "Hamster 046",
    "rarity": "common",
    "image": "hamsters/500320156_17929828785057476_9144652418103124277_n.jpg"
  },
  {
    "id": "hamster-047",
    "name": "Hamster 047",
    "rarity": "common",
    "image": "hamsters/502064819_17930270334057476_5062180929742680033_n.jpg"
  },
  {
    "id": "hamster-048",
    "name": "Hamster 048",
    "rarity": "common",
    "image": "hamsters/502406259_17932932201057476_8533310353177804027_n.jpg"
  },
  {
    "id": "hamster-049",
    "name": "Hamster 049",
    "rarity": "common",
    "image": "hamsters/503503656_17930745246057476_398997004905620271_n.jpg"
  },
  {
    "id": "hamster-050",
    "name": "Hamster 050",
    "rarity": "common",
    "image": "hamsters/503586416_17933393049057476_5745831046797995010_n.jpg"
  },
  {
    "id": "hamster-051",
    "name": "Hamster 051",
    "rarity": "common",
    "image": "hamsters/504001681_17933838891057476_5045081782251187481_n.jpg"
  },
  {
    "id": "hamster-052",
    "name": "Hamster 052",
    "rarity": "common",
    "image": "hamsters/504113805_17931214086057476_3984542699589481536_n.jpg"
  },
  {
    "id": "hamster-053",
    "name": "Hamster 053",
    "rarity": "common",
    "image": "hamsters/504158373_17931453915057476_7965993444881317101_n.jpg"
  },
  {
    "id": "hamster-054",
    "name": "Hamster 054",
    "rarity": "common",
    "image": "hamsters/504384418_17931453906057476_2135472778964003663_n.jpg"
  },
  {
    "id": "hamster-055",
    "name": "Hamster 055",
    "rarity": "common",
    "image": "hamsters/504489712_17931453897057476_1298884831095359515_n.jpg"
  },
  {
    "id": "hamster-056",
    "name": "Hamster 056",
    "rarity": "common",
    "image": "hamsters/505745772_17931913743057476_4305761445072216661_n.jpg"
  },
  {
    "id": "hamster-057",
    "name": "Hamster 057",
    "rarity": "common",
    "image": "hamsters/508655111_17932400967057476_970397636475990684_n.jpg"
  },
  {
    "id": "hamster-058",
    "name": "Hamster 058",
    "rarity": "common",
    "image": "hamsters/514801119_17934302889057476_4897747127019491537_n.jpg"
  },
  {
    "id": "hamster-059",
    "name": "Hamster 059",
    "rarity": "common",
    "image": "hamsters/515265153_17934302892057476_4164570460958109284_n.jpg"
  },
  {
    "id": "hamster-060",
    "name": "Hamster 060",
    "rarity": "common",
    "image": "hamsters/520586630_17935970349057476_784261184986580662_n.jpg"
  },
  {
    "id": "hamster-061",
    "name": "Hamster 061",
    "rarity": "common",
    "image": "hamsters/523387244_17936547420057476_1156027957153672581_n.jpg"
  },
  {
    "id": "hamster-062",
    "name": "Hamster 062",
    "rarity": "common",
    "image": "hamsters/524150500_17937020757057476_5220571482056926197_n.jpg"
  },
  {
    "id": "hamster-063",
    "name": "Hamster 063",
    "rarity": "common",
    "image": "hamsters/526707265_17937464490057476_535244977803197360_n.jpg"
  },
  {
    "id": "hamster-064",
    "name": "Hamster 064",
    "rarity": "common",
    "image": "hamsters/528690249_17938377168057476_5842778653220111925_n.jpg"
  },
  {
    "id": "hamster-065",
    "name": "Hamster 065",
    "rarity": "common",
    "image": "hamsters/528818742_17938377177057476_2457649127598586310_n.jpg"
  },
  {
    "id": "hamster-066",
    "name": "Hamster 066",
    "rarity": "common",
    "image": "hamsters/529779685_17938377186057476_3092528202417249692_n.jpg"
  },
  {
    "id": "hamster-067",
    "name": "Hamster 067",
    "rarity": "common",
    "image": "hamsters/531003397_17938972785057476_1449747054765701218_n.jpg"
  },
  {
    "id": "hamster-068",
    "name": "Hamster 068",
    "rarity": "common",
    "image": "hamsters/534518345_17939330133057476_8924057144037548875_n.jpg"
  },
  {
    "id": "hamster-069",
    "name": "Hamster 069",
    "rarity": "common",
    "image": "hamsters/535583324_17939780379057476_1686252101102310896_n.jpg"
  },
  {
    "id": "hamster-070",
    "name": "Hamster 070",
    "rarity": "common",
    "image": "hamsters/535950314_17939780388057476_5193111627293000667_n.jpg"
  },
  {
    "id": "hamster-071",
    "name": "Hamster 071",
    "rarity": "common",
    "image": "hamsters/539564894_17940991332057476_6210253091030433512_n.jpg"
  },
  {
    "id": "hamster-072",
    "name": "Hamster 072",
    "rarity": "common",
    "image": "hamsters/539577629_17940568608057476_8530081881520793773_n.jpg"
  },
  {
    "id": "hamster-073",
    "name": "Hamster 073",
    "rarity": "common",
    "image": "hamsters/539964728_17940991335057476_1710296256475803429_n.jpg"
  },
  {
    "id": "hamster-074",
    "name": "Hamster 074",
    "rarity": "common",
    "image": "hamsters/541528333_17941452063057476_6801351960199307623_n.jpg"
  },
  {
    "id": "hamster-075",
    "name": "Hamster 075",
    "rarity": "common",
    "image": "hamsters/541984858_17941907076057476_6879485601384169076_n.jpg"
  },
  {
    "id": "hamster-076",
    "name": "Hamster 076",
    "rarity": "common",
    "image": "hamsters/544997054_17942324430057476_3704719987888140776_n.jpg"
  },
  {
    "id": "hamster-077",
    "name": "Hamster 077",
    "rarity": "common",
    "image": "hamsters/548899275_17942888658057476_1897784316480932755_n.jpg"
  },
  {
    "id": "hamster-078",
    "name": "Hamster 078",
    "rarity": "common",
    "image": "hamsters/551349018_17943450810057476_6652237630481621185_n.jpg"
  },
  {
    "id": "hamster-079",
    "name": "Hamster 079",
    "rarity": "common",
    "image": "hamsters/554937206_17944038069057476_1134808201712452620_n.jpg"
  },
  {
    "id": "hamster-080",
    "name": "Hamster 080",
    "rarity": "common",
    "image": "hamsters/556754656_17944646592057476_4590145783036745611_n.jpg"
  },
  {
    "id": "hamster-081",
    "name": "Hamster 081",
    "rarity": "common",
    "image": "hamsters/559284295_17945372820057476_2796501304613863685_n.jpg"
  },
  {
    "id": "hamster-082",
    "name": "Hamster 082",
    "rarity": "common",
    "image": "hamsters/559292515_17945372790057476_7529105750831929584_n.jpg"
  },
  {
    "id": "hamster-083",
    "name": "Hamster 083",
    "rarity": "common",
    "image": "hamsters/560565061_17945372829057476_7439243260987354122_n.jpg"
  },
  {
    "id": "hamster-084",
    "name": "Hamster 084",
    "rarity": "common",
    "image": "hamsters/561119768_17945372799057476_7529624279705602572_n.jpg"
  },
  {
    "id": "hamster-085",
    "name": "Hamster 085",
    "rarity": "common",
    "image": "hamsters/561382228_17945765367057476_1550124238840585245_n.jpg"
  },
  {
    "id": "hamster-086",
    "name": "Hamster 086",
    "rarity": "common",
    "image": "hamsters/566884025_17947112004057476_7219358226602100000_n.jpg"
  },
  {
    "id": "hamster-087",
    "name": "Hamster 087",
    "rarity": "common",
    "image": "hamsters/567330527_17946809016057476_7799335384651441988_n.jpg"
  },
  {
    "id": "hamster-088",
    "name": "Hamster 088",
    "rarity": "common",
    "image": "hamsters/571141191_17947630326057476_6675618602532771330_n.jpg"
  },
  {
    "id": "hamster-089",
    "name": "Hamster 089",
    "rarity": "common",
    "image": "hamsters/572732452_17948041404057476_1274422737726577945_n.jpg"
  },
  {
    "id": "hamster-090",
    "name": "Hamster 090",
    "rarity": "common",
    "image": "hamsters/574456261_17951864877057476_649729854533254789_n.jpg"
  },
  {
    "id": "hamster-091",
    "name": "Hamster 091",
    "rarity": "common",
    "image": "hamsters/574750483_17951864868057476_7389541551057216407_n.jpg"
  },
  {
    "id": "hamster-092",
    "name": "Hamster 092",
    "rarity": "common",
    "image": "hamsters/576004188_17948752620057476_5071290921862568679_n.jpg"
  },
  {
    "id": "hamster-093",
    "name": "Hamster 093",
    "rarity": "common",
    "image": "hamsters/579847310_17949182193057476_5900514757235218815_n.jpg"
  },
  {
    "id": "hamster-094",
    "name": "Hamster 094",
    "rarity": "common",
    "image": "hamsters/583235774_17949969144057476_2286559478438742089_n.jpg"
  },
  {
    "id": "hamster-095",
    "name": "Hamster 095",
    "rarity": "common",
    "image": "hamsters/587097698_17951211891057476_8101655318204079006_n.jpg"
  },
  {
    "id": "hamster-096",
    "name": "Hamster 096",
    "rarity": "common",
    "image": "hamsters/587308995_17954153091057476_6897962878410017681_n.jpg"
  },
  {
    "id": "hamster-097",
    "name": "Hamster 097",
    "rarity": "common",
    "image": "hamsters/587672294_17950492626057476_7845150595942527783_n.jpg"
  },
  {
    "id": "hamster-098",
    "name": "Hamster 098",
    "rarity": "common",
    "image": "hamsters/588416025_17951211882057476_3133793735684519562_n.jpg"
  },
  {
    "id": "hamster-099",
    "name": "Hamster 099",
    "rarity": "common",
    "image": "hamsters/588585330_17950775490057476_7354379817404215991_n.jpg"
  },
  {
    "id": "hamster-100",
    "name": "Hamster 100",
    "rarity": "common",
    "image": "hamsters/588651613_17952388797057476_4075584328133418136_n.jpg"
  },
  {
    "id": "hamster-101",
    "name": "Hamster 101",
    "rarity": "common",
    "image": "hamsters/589746595_17951211888057476_8532518133829097512_n.jpg"
  },
  {
    "id": "hamster-102",
    "name": "Hamster 102",
    "rarity": "common",
    "image": "hamsters/601924137_17952935964057476_3889386939026967622_n.jpg"
  },
  {
    "id": "hamster-103",
    "name": "Hamster 103",
    "rarity": "common",
    "image": "hamsters/601927662_17952935967057476_4427338908296835933_n.jpg"
  },
  {
    "id": "hamster-104",
    "name": "Hamster 104",
    "rarity": "common",
    "image": "hamsters/602143628_17952935976057476_1438238103888223147_n.jpg"
  },
  {
    "id": "hamster-105",
    "name": "Hamster 105",
    "rarity": "common",
    "image": "hamsters/602464541_17953480515057476_8288123094108393885_n.jpg"
  },
  {
    "id": "hamster-106",
    "name": "Hamster 106",
    "rarity": "common",
    "image": "hamsters/603660562_17953791981057476_5072466521276562148_n.jpg"
  },
  {
    "id": "hamster-107",
    "name": "Hamster 107",
    "rarity": "common",
    "image": "hamsters/604392694_17953792008057476_4938832486106617268_n.jpg"
  },
  {
    "id": "hamster-108",
    "name": "Hamster 108",
    "rarity": "common",
    "image": "hamsters/604395680_17953791984057476_8338221815166385008_n.jpg"
  },
  {
    "id": "hamster-109",
    "name": "Hamster 109",
    "rarity": "common",
    "image": "hamsters/605825889_17953791996057476_6439218516289594897_n.jpg"
  },
  {
    "id": "hamster-110",
    "name": "Hamster 110",
    "rarity": "common",
    "image": "hamsters/609573170_17954509113057476_7632737540748105872_n.jpg"
  },
  {
    "id": "hamster-111",
    "name": "Hamster 111",
    "rarity": "common",
    "image": "hamsters/610563603_17955104781057476_3260998800170010779_n.jpg"
  },
  {
    "id": "hamster-112",
    "name": "Hamster 112",
    "rarity": "common",
    "image": "hamsters/612571831_17955523206057476_3603574754873550161_n.jpg"
  },
  {
    "id": "hamster-113",
    "name": "Hamster 113",
    "rarity": "common",
    "image": "hamsters/615825953_17956068927057476_6074252734996452704_n.jpg"
  },
  {
    "id": "hamster-114",
    "name": "Hamster 114",
    "rarity": "common",
    "image": "hamsters/617383919_17956068936057476_7935690108955961513_n.jpg"
  },
  {
    "id": "hamster-115",
    "name": "Hamster 115",
    "rarity": "common",
    "image": "hamsters/617599660_17924270538214720_5703311826072269498_n.jpg"
  },
  {
    "id": "hamster-116",
    "name": "Hamster 116",
    "rarity": "common",
    "image": "hamsters/618870713_17928737334193186_635282687142707261_n.jpg"
  },
  {
    "id": "hamster-117",
    "name": "Hamster 117",
    "rarity": "common",
    "image": "hamsters/619311576_17987646815925594_2281388391417986088_n.jpg"
  },
  {
    "id": "hamster-118",
    "name": "Hamster 118",
    "rarity": "common",
    "image": "hamsters/619511318_17984731922941426_6727780752063814259_n.jpg"
  },
  {
    "id": "hamster-119",
    "name": "Hamster 119",
    "rarity": "common",
    "image": "hamsters/619610630_17952957384075335_8126972715762743010_n.jpg"
  },
  {
    "id": "hamster-120",
    "name": "Hamster 120",
    "rarity": "common",
    "image": "hamsters/619667004_18015235808811781_7469409494186275730_n.jpg"
  },
  {
    "id": "hamster-121",
    "name": "Hamster 121",
    "rarity": "common",
    "image": "hamsters/619684161_17985107345936726_3408674746210709671_n.jpg"
  },
  {
    "id": "hamster-122",
    "name": "Hamster 122",
    "rarity": "common",
    "image": "hamsters/619703304_17958526722047630_1652883380158514253_n.jpg"
  },
  {
    "id": "hamster-123",
    "name": "Hamster 123",
    "rarity": "common",
    "image": "hamsters/619898380_17994114668873207_5002079863839533809_n.jpg"
  },
  {
    "id": "hamster-124",
    "name": "Hamster 124",
    "rarity": "common",
    "image": "hamsters/619958903_17921639577235360_2564175426846582131_n.jpg"
  },
  {
    "id": "hamster-125",
    "name": "Hamster 125",
    "rarity": "common",
    "image": "hamsters/619992166_18037054001757132_4451199841481381162_n.jpg"
  },
  {
    "id": "hamster-126",
    "name": "Hamster 126",
    "rarity": "common",
    "image": "hamsters/620218065_18113353090621602_8856375800778696528_n.jpg"
  },
  {
    "id": "hamster-127",
    "name": "Hamster 127",
    "rarity": "common",
    "image": "hamsters/620319039_17956700277057476_6500133071931977878_n.jpg"
  },
  {
    "id": "hamster-128",
    "name": "Hamster 128",
    "rarity": "common",
    "image": "hamsters/620391260_17926167393199041_6193975015732645290_n.jpg"
  },
  {
    "id": "hamster-129",
    "name": "Hamster 129",
    "rarity": "common",
    "image": "hamsters/620391270_17945742528096062_5316500947083410087_n.jpg"
  },
  {
    "id": "hamster-130",
    "name": "Hamster 130",
    "rarity": "common",
    "image": "hamsters/620959686_17997631832891637_7443733419469971879_n.jpg"
  },
  {
    "id": "hamster-131",
    "name": "Hamster 131",
    "rarity": "common",
    "image": "hamsters/621112827_17945534664097812_6496798083728523313_n.jpg"
  },
  {
    "id": "hamster-132",
    "name": "Hamster 132",
    "rarity": "common",
    "image": "hamsters/621457380_17934773064014998_6579809644234956023_n.jpg"
  },
  {
    "id": "hamster-133",
    "name": "Hamster 133",
    "rarity": "common",
    "image": "hamsters/621537994_17923858566072282_7591602270698150982_n.jpg"
  },
  {
    "id": "hamster-134",
    "name": "Hamster 134",
    "rarity": "common",
    "image": "hamsters/621582707_18018754529801361_942643257452672973_n.jpg"
  },
  {
    "id": "hamster-135",
    "name": "Hamster 135",
    "rarity": "common",
    "image": "hamsters/621676892_17927017263057233_8507721105348105808_n.jpg"
  },
  {
    "id": "hamster-136",
    "name": "Hamster 136",
    "rarity": "common",
    "image": "hamsters/621690325_18091893689068319_4325191423651676035_n.jpg"
  },
  {
    "id": "hamster-137",
    "name": "Hamster 137",
    "rarity": "common",
    "image": "hamsters/621691969_17951148786077927_8911659184843302492_n.jpg"
  },
  {
    "id": "hamster-138",
    "name": "Hamster 138",
    "rarity": "common",
    "image": "hamsters/621704521_18006582896684085_2924425229133894074_n.jpg"
  },
  {
    "id": "hamster-139",
    "name": "Hamster 139",
    "rarity": "common",
    "image": "hamsters/621782510_17962276938009608_1401800717202369957_n.jpg"
  },
  {
    "id": "hamster-140",
    "name": "Hamster 140",
    "rarity": "common",
    "image": "hamsters/622029729_18073364804112308_8647668954021914348_n.jpg"
  },
  {
    "id": "hamster-141",
    "name": "Hamster 141",
    "rarity": "common",
    "image": "hamsters/622030784_17964229331876511_1188699503431385549_n.jpg"
  },
  {
    "id": "hamster-142",
    "name": "Hamster 142",
    "rarity": "common",
    "image": "hamsters/622122084_17982237674954452_4458754107179043696_n.jpg"
  },
  {
    "id": "hamster-143",
    "name": "Hamster 143",
    "rarity": "common",
    "image": "hamsters/622149748_17931331002032407_1440771147886794989_n.jpg"
  },
  {
    "id": "hamster-144",
    "name": "Hamster 144",
    "rarity": "common",
    "image": "hamsters/622221749_17998203326852633_3751607262062156540_n.jpg"
  },
  {
    "id": "hamster-145",
    "name": "Hamster 145",
    "rarity": "common",
    "image": "hamsters/622385270_18055213217386820_4785613830649725631_n.jpg"
  },
  {
    "id": "hamster-146",
    "name": "Hamster 146",
    "rarity": "common",
    "image": "hamsters/622460339_17919812706091016_4490504556898634416_n.jpg"
  },
  {
    "id": "hamster-147",
    "name": "Hamster 147",
    "rarity": "common",
    "image": "hamsters/622555421_18075756401579382_2535897370160892142_n.jpg"
  },
  {
    "id": "hamster-148",
    "name": "Hamster 148",
    "rarity": "common",
    "image": "hamsters/623062216_18065226461644853_669143556842140521_n.jpg"
  },
  {
    "id": "hamster-149",
    "name": "Hamster 149",
    "rarity": "common",
    "image": "hamsters/623267675_18039474878727569_4621983327122561686_n.jpg"
  },
  {
    "id": "hamster-150",
    "name": "Hamster 150",
    "rarity": "common",
    "image": "hamsters/623319179_17957501070057476_1088148249854766949_n.jpg"
  },
  {
    "id": "hamster-151",
    "name": "Hamster 151",
    "rarity": "common",
    "image": "hamsters/623326709_18112090318723421_3294304002287339724_n.jpg"
  },
  {
    "id": "hamster-152",
    "name": "Hamster 152",
    "rarity": "common",
    "image": "hamsters/623369563_18130747513459215_1255582957936913773_n.jpg"
  },
  {
    "id": "hamster-153",
    "name": "Hamster 153",
    "rarity": "common",
    "image": "hamsters/623466902_18061918694662049_7995445973920623254_n.jpg"
  },
  {
    "id": "hamster-154",
    "name": "Hamster 154",
    "rarity": "common",
    "image": "hamsters/623663549_18004449080842428_6529410948668509591_n.jpg"
  },
  {
    "id": "hamster-155",
    "name": "Hamster 155",
    "rarity": "common",
    "image": "hamsters/623668614_17999645846712055_7952209880445608582_n.jpg"
  },
  {
    "id": "hamster-156",
    "name": "Hamster 156",
    "rarity": "common",
    "image": "hamsters/623946289_18012809090656325_5421123167677952976_n.jpg"
  },
  {
    "id": "hamster-157",
    "name": "Hamster 157",
    "rarity": "common",
    "image": "hamsters/624051565_17910977241143357_3825476689684491113_n.jpg"
  },
  {
    "id": "hamster-158",
    "name": "Hamster 158",
    "rarity": "common",
    "image": "hamsters/624073268_18071644784618347_8874750171697787252_n.jpg"
  },
  {
    "id": "hamster-159",
    "name": "Hamster 159",
    "rarity": "common",
    "image": "hamsters/624178953_18084890288177730_565277889834980771_n.jpg"
  },
  {
    "id": "hamster-160",
    "name": "Hamster 160",
    "rarity": "common",
    "image": "hamsters/624194426_18103791718836276_7424764390135161655_n.jpg"
  },
  {
    "id": "hamster-161",
    "name": "Hamster 161",
    "rarity": "common",
    "image": "hamsters/624356838_18089574907860245_509437869055010923_n.jpg"
  },
  {
    "id": "hamster-162",
    "name": "Hamster 162",
    "rarity": "common",
    "image": "hamsters/624573669_18057428711358039_4536338291177966547_n.jpg"
  },
  {
    "id": "hamster-163",
    "name": "Hamster 163",
    "rarity": "common",
    "image": "hamsters/624578829_18078338390367278_1268115265135910719_n.jpg"
  },
  {
    "id": "hamster-164",
    "name": "Hamster 164",
    "rarity": "common",
    "image": "hamsters/624586901_18068649146631405_8351711191527227738_n.jpg"
  },
  {
    "id": "hamster-165",
    "name": "Hamster 165",
    "rarity": "common",
    "image": "hamsters/624673735_18092193304823934_8773704074545606028_n.jpg"
  },
  {
    "id": "hamster-166",
    "name": "Hamster 166",
    "rarity": "common",
    "image": "hamsters/624678449_18091474544009698_6325598571405712997_n.jpg"
  },
  {
    "id": "hamster-167",
    "name": "Hamster 167",
    "rarity": "common",
    "image": "hamsters/624768529_18118101097602103_8114790752033300775_n.jpg"
  },
  {
    "id": "hamster-168",
    "name": "Hamster 168",
    "rarity": "common",
    "image": "hamsters/624854735_18057046370656783_6627543758907763573_n.jpg"
  },
  {
    "id": "hamster-169",
    "name": "Hamster 169",
    "rarity": "common",
    "image": "hamsters/624898557_18120862117501498_2213633956791827291_n.jpg"
  },
  {
    "id": "hamster-170",
    "name": "Hamster 170",
    "rarity": "common",
    "image": "hamsters/624956044_18123138946493243_3414389940531609411_n.jpg"
  },
  {
    "id": "hamster-171",
    "name": "Hamster 171",
    "rarity": "common",
    "image": "hamsters/625014687_18107480422667523_5581585408762695886_n.jpg"
  },
  {
    "id": "hamster-172",
    "name": "Hamster 172",
    "rarity": "common",
    "image": "hamsters/625029767_18058541729676434_5795031577058538078_n.jpg"
  },
  {
    "id": "hamster-173",
    "name": "Hamster 173",
    "rarity": "common",
    "image": "hamsters/625045831_18093259615801517_464807816192177578_n.jpg"
  },
  {
    "id": "hamster-174",
    "name": "Hamster 174",
    "rarity": "common",
    "image": "hamsters/625095105_18093927481987788_7165831095054520218_n.jpg"
  },
  {
    "id": "hamster-175",
    "name": "Hamster 175",
    "rarity": "common",
    "image": "hamsters/625105771_18037229738757835_8747116929359743005_n.jpg"
  },
  {
    "id": "hamster-176",
    "name": "Hamster 176",
    "rarity": "common",
    "image": "hamsters/625155091_18053820689436062_1517898221753683377_n.jpg"
  },
  {
    "id": "hamster-177",
    "name": "Hamster 177",
    "rarity": "common",
    "image": "hamsters/625169125_18068231330552437_1073515575755348296_n.jpg"
  },
  {
    "id": "hamster-178",
    "name": "Hamster 178",
    "rarity": "common",
    "image": "hamsters/625320465_18107869747664928_4167691429051920720_n.jpg"
  },
  {
    "id": "hamster-179",
    "name": "Hamster 179",
    "rarity": "common",
    "image": "hamsters/625361704_18094267289488533_4179248243527262364_n.jpg"
  },
  {
    "id": "hamster-180",
    "name": "Hamster 180",
    "rarity": "common",
    "image": "hamsters/625652206_18051641774694412_6859621026452361144_n.jpg"
  },
  {
    "id": "hamster-181",
    "name": "Hamster 181",
    "rarity": "common",
    "image": "hamsters/625780686_18150100945451760_5758595909088801952_n.jpg"
  },
  {
    "id": "hamster-182",
    "name": "Hamster 182",
    "rarity": "common",
    "image": "hamsters/625847114_18106636777740649_986151680169134976_n.jpg"
  },
  {
    "id": "hamster-183",
    "name": "Hamster 183",
    "rarity": "common",
    "image": "hamsters/625962975_18081084469992256_5407030229024226406_n.jpg"
  },
  {
    "id": "hamster-184",
    "name": "Hamster 184",
    "rarity": "common",
    "image": "hamsters/625982680_18316463563247269_2906301922139963047_n.jpg"
  },
  {
    "id": "hamster-185",
    "name": "Hamster 185",
    "rarity": "common",
    "image": "hamsters/626115591_18309337909280432_7191790690942180054_n.jpg"
  },
  {
    "id": "hamster-186",
    "name": "Hamster 186",
    "rarity": "common",
    "image": "hamsters/626177781_18105225055696483_4229138546849936718_n.jpg"
  },
  {
    "id": "hamster-187",
    "name": "Hamster 187",
    "rarity": "common",
    "image": "hamsters/626290059_18162357280413750_5379466422191756411_n.jpg"
  },
  {
    "id": "hamster-188",
    "name": "Hamster 188",
    "rarity": "common",
    "image": "hamsters/626414912_18054737492700899_7891910677274664972_n.jpg"
  },
  {
    "id": "hamster-189",
    "name": "Hamster 189",
    "rarity": "common",
    "image": "hamsters/626431664_18087502457138574_9209279844929834060_n.jpg"
  },
  {
    "id": "hamster-190",
    "name": "Hamster 190",
    "rarity": "common",
    "image": "hamsters/626532528_18124167388556758_3438747131628809499_n.jpg"
  },
  {
    "id": "hamster-191",
    "name": "Hamster 191",
    "rarity": "common",
    "image": "hamsters/626671966_18077528366366383_4602016293481295582_n.jpg"
  },
  {
    "id": "hamster-192",
    "name": "Hamster 192",
    "rarity": "common",
    "image": "hamsters/627085387_18399031180177715_8934681809695470091_n.jpg"
  },
  {
    "id": "hamster-193",
    "name": "Hamster 193",
    "rarity": "common",
    "image": "hamsters/627368966_17958183552057476_6288810418685530862_n.jpg"
  },
  {
    "id": "hamster-194",
    "name": "Hamster 194",
    "rarity": "common",
    "image": "hamsters/627392601_18179088319326658_6231635132992651382_n.jpg"
  },
  {
    "id": "hamster-195",
    "name": "Hamster 195",
    "rarity": "common",
    "image": "hamsters/627544496_17958183543057476_332272488549988846_n.jpg"
  },
  {
    "id": "hamster-196",
    "name": "Hamster 196",
    "rarity": "common",
    "image": "hamsters/627674931_18189419233357248_5643542486124201094_n.jpg"
  },
  {
    "id": "hamster-197",
    "name": "Hamster 197",
    "rarity": "common",
    "image": "hamsters/628035654_18213961141314077_2318474894906447043_n.jpg"
  },
  {
    "id": "hamster-198",
    "name": "Hamster 198",
    "rarity": "common",
    "image": "hamsters/628127066_18112996741713432_430059648063303321_n.jpg"
  },
  {
    "id": "hamster-199",
    "name": "Hamster 199",
    "rarity": "common",
    "image": "hamsters/628238456_18396809629195982_3335837052512370701_n.jpg"
  },
  {
    "id": "hamster-200",
    "name": "Hamster 200",
    "rarity": "common",
    "image": "hamsters/628288840_18303875554274163_2657307628202498119_n.jpg"
  },
  {
    "id": "hamster-201",
    "name": "Hamster 201",
    "rarity": "common",
    "image": "hamsters/628321904_18176769766373278_3716201278371817723_n.jpg"
  },
  {
    "id": "hamster-202",
    "name": "Hamster 202",
    "rarity": "common",
    "image": "hamsters/628364658_18384878212196781_3565965046268584664_n.jpg"
  },
  {
    "id": "hamster-203",
    "name": "Hamster 203",
    "rarity": "common",
    "image": "hamsters/628565158_17959014957057476_2695828673305089488_n.jpg"
  },
  {
    "id": "hamster-204",
    "name": "Hamster 204",
    "rarity": "common",
    "image": "hamsters/629028137_18397637707178140_831644013734042653_n.jpg"
  },
  {
    "id": "hamster-205",
    "name": "Hamster 205",
    "rarity": "common",
    "image": "hamsters/629835336_18329239624173583_6767794446840246893_n.jpg"
  },
  {
    "id": "hamster-206",
    "name": "Hamster 206",
    "rarity": "common",
    "image": "hamsters/630405918_17959464927057476_1047095180456769359_n.jpg"
  },
  {
    "id": "hamster-207",
    "name": "Hamster 207",
    "rarity": "common",
    "image": "hamsters/631647520_18418784443140086_3477129631665864568_n.jpg"
  },
  {
    "id": "hamster-208",
    "name": "Hamster 208",
    "rarity": "common",
    "image": "hamsters/632060621_17960026509057476_8610819276831364529_n.jpg"
  },
  {
    "id": "hamster-209",
    "name": "Hamster 209",
    "rarity": "common",
    "image": "hamsters/632285922_18394591228195552_3881053210967343027_n.jpg"
  },
  {
    "id": "hamster-210",
    "name": "Hamster 210",
    "rarity": "common",
    "image": "hamsters/632312243_18513384355077253_1413461851155051528_n.jpg"
  },
  {
    "id": "hamster-211",
    "name": "Hamster 211",
    "rarity": "common",
    "image": "hamsters/637739684_18413337601125835_8006295338306531131_n.jpg"
  },
  {
    "id": "hamster-212",
    "name": "Hamster 212",
    "rarity": "common",
    "image": "hamsters/638882235_18563508337038039_3159799886459907682_n.jpg"
  },
  {
    "id": "hamster-213",
    "name": "Hamster 213",
    "rarity": "common",
    "image": "hamsters/639798749_17960484624057476_8077479521128375297_n.jpg"
  },
  {
    "id": "hamster-214",
    "name": "Hamster 214",
    "rarity": "common",
    "image": "hamsters/639883813_18562635124032949_2800510759543015250_n.jpg"
  },
  {
    "id": "hamster-215",
    "name": "Hamster 215",
    "rarity": "common",
    "image": "hamsters/640952395_17961203121057476_8554319158078662060_n.jpg"
  },
  {
    "id": "hamster-216",
    "name": "Hamster 216",
    "rarity": "common",
    "image": "hamsters/641640802_18560925964042566_3521727414743351689_n.jpg"
  },
  {
    "id": "hamster-217",
    "name": "Hamster 217",
    "rarity": "common",
    "image": "hamsters/641852588_17960484615057476_6367049891291438844_n.jpg"
  },
  {
    "id": "hamster-218",
    "name": "Hamster 218",
    "rarity": "common",
    "image": "hamsters/642963775_17899221240245300_1663699037450053331_n.jpg"
  },
  {
    "id": "hamster-219",
    "name": "Hamster 219",
    "rarity": "common",
    "image": "hamsters/645643309_17944707096119265_3725649242405366115_n.jpg"
  },
  {
    "id": "hamster-220",
    "name": "Hamster 220",
    "rarity": "common",
    "image": "hamsters/646170377_17897003187263705_549918591591519969_n.jpg"
  },
  {
    "id": "hamster-221",
    "name": "Hamster 221",
    "rarity": "common",
    "image": "hamsters/648557558_17916602343287020_2217038429902256506_n.jpg"
  },
  {
    "id": "hamster-222",
    "name": "Hamster 222",
    "rarity": "common",
    "image": "hamsters/649232955_17932007904051610_6452608769725679842_n.jpg"
  },
  {
    "id": "hamster-223",
    "name": "Hamster 223",
    "rarity": "common",
    "image": "hamsters/649240675_17961308727053173_1087568802635129572_n.jpg"
  },
  {
    "id": "hamster-224",
    "name": "Hamster 224",
    "rarity": "common",
    "image": "hamsters/649242277_17966459955037839_4212317144972025639_n.jpg"
  },
  {
    "id": "hamster-225",
    "name": "Hamster 225",
    "rarity": "common",
    "image": "hamsters/649533989_17911315887162482_8348445963514978915_n.jpg"
  },
  {
    "id": "hamster-226",
    "name": "Hamster 226",
    "rarity": "common",
    "image": "hamsters/649816903_17942663511134176_4738273487630857042_n.jpg"
  },
  {
    "id": "hamster-227",
    "name": "Hamster 227",
    "rarity": "common",
    "image": "hamsters/649977568_18001401554858893_1138105484661444648_n.jpg"
  },
  {
    "id": "hamster-228",
    "name": "Hamster 228",
    "rarity": "common",
    "image": "hamsters/650273430_17953970250085293_4293455150894529557_n.jpg"
  },
  {
    "id": "hamster-229",
    "name": "Hamster 229",
    "rarity": "common",
    "image": "hamsters/650365275_17917915197125924_8754034029607508328_n.jpg"
  },
  {
    "id": "hamster-230",
    "name": "Hamster 230",
    "rarity": "common",
    "image": "hamsters/650463701_17977496195830701_8924359201613452111_n.jpg"
  },
  {
    "id": "hamster-231",
    "name": "Hamster 231",
    "rarity": "common",
    "image": "hamsters/650478678_17975762768989253_2817083030042214634_n.jpg"
  },
  {
    "id": "hamster-232",
    "name": "Hamster 232",
    "rarity": "common",
    "image": "hamsters/650656152_17923493055266958_8287702455313099122_n.jpg"
  },
  {
    "id": "hamster-233",
    "name": "Hamster 233",
    "rarity": "common",
    "image": "hamsters/650688947_17962463232057476_3865511744523244563_n.jpg"
  },
  {
    "id": "hamster-234",
    "name": "Hamster 234",
    "rarity": "common",
    "image": "hamsters/651179380_17968201380039973_6095593315791183441_n.jpg"
  },
  {
    "id": "hamster-235",
    "name": "Hamster 235",
    "rarity": "common",
    "image": "hamsters/651319973_18001430390907140_5077611342707541478_n.jpg"
  },
  {
    "id": "hamster-236",
    "name": "Hamster 236",
    "rarity": "common",
    "image": "hamsters/651455109_17980917011978044_806477769308930976_n.jpg"
  },
  {
    "id": "hamster-237",
    "name": "Hamster 237",
    "rarity": "common",
    "image": "hamsters/651464153_17965632021043286_3381136289364161458_n.jpg"
  },
  {
    "id": "hamster-238",
    "name": "Hamster 238",
    "rarity": "common",
    "image": "hamsters/651515013_17911839186167653_2726348289619919955_n.jpg"
  },
  {
    "id": "hamster-239",
    "name": "Hamster 239",
    "rarity": "common",
    "image": "hamsters/651581249_18056768018695800_1906569116662558847_n.jpg"
  },
  {
    "id": "hamster-240",
    "name": "Hamster 240",
    "rarity": "common",
    "image": "hamsters/651944590_17934454920081220_4651769293833462715_n.jpg"
  },
  {
    "id": "hamster-241",
    "name": "Hamster 241",
    "rarity": "common",
    "image": "hamsters/652001442_18106470616892867_4116739894637111417_n.jpg"
  },
  {
    "id": "hamster-242",
    "name": "Hamster 242",
    "rarity": "common",
    "image": "hamsters/652040969_18015229430823771_7182347999071983599_n.jpg"
  },
  {
    "id": "hamster-243",
    "name": "Hamster 243",
    "rarity": "common",
    "image": "hamsters/652083013_18088559767945339_3056699235539872126_n.jpg"
  },
  {
    "id": "hamster-244",
    "name": "Hamster 244",
    "rarity": "common",
    "image": "hamsters/652085061_17951203251115391_2539045353209626126_n.jpg"
  },
  {
    "id": "hamster-245",
    "name": "Hamster 245",
    "rarity": "common",
    "image": "hamsters/652761149_18066631373675548_7608032730552455627_n.jpg"
  },
  {
    "id": "hamster-246",
    "name": "Hamster 246",
    "rarity": "common",
    "image": "hamsters/652767831_18061048628375648_4164763740033099055_n.jpg"
  },
  {
    "id": "hamster-247",
    "name": "Hamster 247",
    "rarity": "common",
    "image": "hamsters/652768328_18076055330570479_5858078721874596515_n.jpg"
  },
  {
    "id": "hamster-248",
    "name": "Hamster 248",
    "rarity": "common",
    "image": "hamsters/652769495_17962997829057476_7883953720917565322_n.jpg"
  },
  {
    "id": "hamster-249",
    "name": "Hamster 249",
    "rarity": "common",
    "image": "hamsters/652769674_18084338711584688_2453361723408134392_n.jpg"
  },
  {
    "id": "hamster-250",
    "name": "Hamster 250",
    "rarity": "common",
    "image": "hamsters/652769782_18061973513370699_2111948662336041046_n.jpg"
  },
  {
    "id": "hamster-251",
    "name": "Hamster 251",
    "rarity": "common",
    "image": "hamsters/652771405_18065594597319774_5557290586416285290_n.jpg"
  },
  {
    "id": "hamster-252",
    "name": "Hamster 252",
    "rarity": "common",
    "image": "hamsters/652816350_18070581287642770_3691891381489432190_n.jpg"
  },
  {
    "id": "hamster-253",
    "name": "Hamster 253",
    "rarity": "rare",
    "image": "hamsters/652905238_18004177691896562_1129347046557287080_n.jpg"
  },
  {
    "id": "hamster-254",
    "name": "Hamster 254",
    "rarity": "rare",
    "image": "hamsters/652907371_18077681210113873_7091312150156563029_n.jpg"
  },
  {
    "id": "hamster-255",
    "name": "Hamster 255",
    "rarity": "rare",
    "image": "hamsters/653012966_18095336342044575_2745575086065185527_n.jpg"
  },
  {
    "id": "hamster-256",
    "name": "Hamster 256",
    "rarity": "rare",
    "image": "hamsters/653457186_18007691885698741_413894539328425139_n.jpg"
  },
  {
    "id": "hamster-257",
    "name": "Hamster 257",
    "rarity": "rare",
    "image": "hamsters/653525622_18097812685955112_6529339649719384542_n.jpg"
  },
  {
    "id": "hamster-258",
    "name": "Hamster 258",
    "rarity": "rare",
    "image": "hamsters/653547362_18066792689653128_5212445785951582953_n.jpg"
  },
  {
    "id": "hamster-259",
    "name": "Hamster 259",
    "rarity": "rare",
    "image": "hamsters/653632818_18040693202752924_5581221093939305117_n.jpg"
  },
  {
    "id": "hamster-260",
    "name": "Hamster 260",
    "rarity": "rare",
    "image": "hamsters/653648482_18186047707369489_5514159380311756360_n.jpg"
  },
  {
    "id": "hamster-261",
    "name": "Hamster 261",
    "rarity": "rare",
    "image": "hamsters/653729735_18088668418944329_8513436609961152417_n.jpg"
  },
  {
    "id": "hamster-262",
    "name": "Hamster 262",
    "rarity": "rare",
    "image": "hamsters/653817589_18078725834617994_1525157875589224231_n.jpg"
  },
  {
    "id": "hamster-263",
    "name": "Hamster 263",
    "rarity": "rare",
    "image": "hamsters/653881466_18059270357409825_1733077410763275225_n.jpg"
  },
  {
    "id": "hamster-264",
    "name": "Hamster 264",
    "rarity": "rare",
    "image": "hamsters/653939063_18110120278694388_773900296816197725_n.jpg"
  },
  {
    "id": "hamster-265",
    "name": "Hamster 265",
    "rarity": "rare",
    "image": "hamsters/653992523_18002208701882394_7017332634275344235_n.jpg"
  },
  {
    "id": "hamster-266",
    "name": "Hamster 266",
    "rarity": "rare",
    "image": "hamsters/654008749_17959659359918771_7009150627718320192_n.jpg"
  },
  {
    "id": "hamster-267",
    "name": "Hamster 267",
    "rarity": "rare",
    "image": "hamsters/654021097_18071261786559321_2632041645808859106_n.jpg"
  },
  {
    "id": "hamster-268",
    "name": "Hamster 268",
    "rarity": "rare",
    "image": "hamsters/654028683_18055832324651250_205689394813886586_n.jpg"
  },
  {
    "id": "hamster-269",
    "name": "Hamster 269",
    "rarity": "rare",
    "image": "hamsters/654101631_18157054930442866_9173866522377580910_n.jpg"
  },
  {
    "id": "hamster-270",
    "name": "Hamster 270",
    "rarity": "rare",
    "image": "hamsters/654177546_18098631871986193_7612850778013025901_n.jpg"
  },
  {
    "id": "hamster-271",
    "name": "Hamster 271",
    "rarity": "rare",
    "image": "hamsters/654180740_18096038960293044_4181621446268730484_n.jpg"
  },
  {
    "id": "hamster-272",
    "name": "Hamster 272",
    "rarity": "rare",
    "image": "hamsters/654201468_18097750441791362_9140759539064595107_n.jpg"
  },
  {
    "id": "hamster-273",
    "name": "Hamster 273",
    "rarity": "rare",
    "image": "hamsters/654203667_18066615812322321_7839096230585015048_n.jpg"
  },
  {
    "id": "hamster-274",
    "name": "Hamster 274",
    "rarity": "rare",
    "image": "hamsters/654214879_18028486907795272_4104264580267156258_n.jpg"
  },
  {
    "id": "hamster-275",
    "name": "Hamster 275",
    "rarity": "rare",
    "image": "hamsters/654288096_18063149168356728_4679671973477005519_n.jpg"
  },
  {
    "id": "hamster-276",
    "name": "Hamster 276",
    "rarity": "rare",
    "image": "hamsters/654488388_18076795817435996_6713950785821762872_n.jpg"
  },
  {
    "id": "hamster-277",
    "name": "Hamster 277",
    "rarity": "rare",
    "image": "hamsters/654540951_18027298796801084_8994232884563810151_n.jpg"
  },
  {
    "id": "hamster-278",
    "name": "Hamster 278",
    "rarity": "rare",
    "image": "hamsters/654865405_18110103343827073_5947030164579520834_n.jpg"
  },
  {
    "id": "hamster-279",
    "name": "Hamster 279",
    "rarity": "rare",
    "image": "hamsters/654974051_18001052075884731_7443888234915317354_n.jpg"
  },
  {
    "id": "hamster-280",
    "name": "Hamster 280",
    "rarity": "rare",
    "image": "hamsters/655065232_18124331524510789_4169333765672829144_n.jpg"
  },
  {
    "id": "hamster-281",
    "name": "Hamster 281",
    "rarity": "rare",
    "image": "hamsters/655125164_18084864899211145_4071111322048009589_n.jpg"
  },
  {
    "id": "hamster-282",
    "name": "Hamster 282",
    "rarity": "rare",
    "image": "hamsters/655128014_18094041500321296_6950141783386646957_n.jpg"
  },
  {
    "id": "hamster-283",
    "name": "Hamster 283",
    "rarity": "rare",
    "image": "hamsters/655128744_18108990232642295_8503037055967548700_n.jpg"
  },
  {
    "id": "hamster-284",
    "name": "Hamster 284",
    "rarity": "rare",
    "image": "hamsters/655143124_18094733423035153_1535657978763557168_n.jpg"
  },
  {
    "id": "hamster-285",
    "name": "Hamster 285",
    "rarity": "rare",
    "image": "hamsters/655150932_18187891471366367_2558903620479194121_n.jpg"
  },
  {
    "id": "hamster-286",
    "name": "Hamster 286",
    "rarity": "rare",
    "image": "hamsters/655163312_18103359673912643_1976942337962601506_n.jpg"
  },
  {
    "id": "hamster-287",
    "name": "Hamster 287",
    "rarity": "rare",
    "image": "hamsters/655165619_18096560033013668_1814246764633784484_n.jpg"
  },
  {
    "id": "hamster-288",
    "name": "Hamster 288",
    "rarity": "rare",
    "image": "hamsters/655172691_18102414643931435_5772409797930245437_n.jpg"
  },
  {
    "id": "hamster-289",
    "name": "Hamster 289",
    "rarity": "rare",
    "image": "hamsters/655205403_18109854502827097_6274043202734321790_n.jpg"
  },
  {
    "id": "hamster-290",
    "name": "Hamster 290",
    "rarity": "rare",
    "image": "hamsters/655213283_18097562338982916_8347170420199568825_n.jpg"
  },
  {
    "id": "hamster-291",
    "name": "Hamster 291",
    "rarity": "rare",
    "image": "hamsters/655221189_18071795309228586_4943316682823203675_n.jpg"
  },
  {
    "id": "hamster-292",
    "name": "Hamster 292",
    "rarity": "rare",
    "image": "hamsters/655221559_18109851112838981_1394893259217896165_n.jpg"
  },
  {
    "id": "hamster-293",
    "name": "Hamster 293",
    "rarity": "rare",
    "image": "hamsters/655233580_18105457420881231_2116648043484442481_n.jpg"
  },
  {
    "id": "hamster-294",
    "name": "Hamster 294",
    "rarity": "rare",
    "image": "hamsters/655243319_18067605167651728_2019700464886275678_n.jpg"
  },
  {
    "id": "hamster-295",
    "name": "Hamster 295",
    "rarity": "rare",
    "image": "hamsters/655292043_18070216505261810_4890285234081509482_n.jpg"
  },
  {
    "id": "hamster-296",
    "name": "Hamster 296",
    "rarity": "rare",
    "image": "hamsters/655295166_18063242441354532_9116343196749100045_n.jpg"
  },
  {
    "id": "hamster-297",
    "name": "Hamster 297",
    "rarity": "rare",
    "image": "hamsters/655336779_18123433636590051_2163184724183839897_n.jpg"
  },
  {
    "id": "hamster-298",
    "name": "Hamster 298",
    "rarity": "rare",
    "image": "hamsters/655431536_18098210014782173_4366929096240695290_n.jpg"
  },
  {
    "id": "hamster-299",
    "name": "Hamster 299",
    "rarity": "rare",
    "image": "hamsters/655432427_18057465074700790_5938804589813897098_n.jpg"
  },
  {
    "id": "hamster-300",
    "name": "Hamster 300",
    "rarity": "rare",
    "image": "hamsters/655482131_18077447093402373_4004271422496786319_n.jpg"
  },
  {
    "id": "hamster-301",
    "name": "Hamster 301",
    "rarity": "rare",
    "image": "hamsters/655509588_18132158398534535_3301824274817909058_n.jpg"
  },
  {
    "id": "hamster-302",
    "name": "Hamster 302",
    "rarity": "rare",
    "image": "hamsters/655509989_18059568347416524_7015106676475185700_n.jpg"
  },
  {
    "id": "hamster-303",
    "name": "Hamster 303",
    "rarity": "rare",
    "image": "hamsters/655579833_18062785214346218_4061423741454541311_n.jpg"
  },
  {
    "id": "hamster-304",
    "name": "Hamster 304",
    "rarity": "rare",
    "image": "hamsters/655635963_18099222814778222_1941986641275937076_n.jpg"
  },
  {
    "id": "hamster-305",
    "name": "Hamster 305",
    "rarity": "rare",
    "image": "hamsters/655682284_18103112566728782_1368430444032401595_n.jpg"
  },
  {
    "id": "hamster-306",
    "name": "Hamster 306",
    "rarity": "rare",
    "image": "hamsters/655757152_18211640701322208_8240991071047414098_n.jpg"
  },
  {
    "id": "hamster-307",
    "name": "Hamster 307",
    "rarity": "rare",
    "image": "hamsters/655831228_18116539528563835_3796381059649541000_n.jpg"
  },
  {
    "id": "hamster-308",
    "name": "Hamster 308",
    "rarity": "rare",
    "image": "hamsters/655864345_18111132325762522_223404723676826449_n.jpg"
  },
  {
    "id": "hamster-309",
    "name": "Hamster 309",
    "rarity": "rare",
    "image": "hamsters/655956515_18088730228233352_8782619649931119001_n.jpg"
  },
  {
    "id": "hamster-310",
    "name": "Hamster 310",
    "rarity": "rare",
    "image": "hamsters/655958434_18087850976222569_5635018214643412583_n.jpg"
  },
  {
    "id": "hamster-311",
    "name": "Hamster 311",
    "rarity": "rare",
    "image": "hamsters/655976412_18080610116609259_2534880439936796104_n.jpg"
  },
  {
    "id": "hamster-312",
    "name": "Hamster 312",
    "rarity": "rare",
    "image": "hamsters/655976412_18182111833375274_7273813163480513460_n.jpg"
  },
  {
    "id": "hamster-313",
    "name": "Hamster 313",
    "rarity": "rare",
    "image": "hamsters/655980413_18098630776785583_5691440088542777041_n.jpg"
  },
  {
    "id": "hamster-314",
    "name": "Hamster 314",
    "rarity": "rare",
    "image": "hamsters/655999801_18131384674536953_1596752000450348155_n.jpg"
  },
  {
    "id": "hamster-315",
    "name": "Hamster 315",
    "rarity": "rare",
    "image": "hamsters/656023737_18196614043344622_1176557099822993805_n.jpg"
  },
  {
    "id": "hamster-316",
    "name": "Hamster 316",
    "rarity": "rare",
    "image": "hamsters/656033696_18177314731384423_1571365692143340242_n.jpg"
  },
  {
    "id": "hamster-317",
    "name": "Hamster 317",
    "rarity": "rare",
    "image": "hamsters/656076231_18102805159936959_541653766833277443_n.jpg"
  },
  {
    "id": "hamster-318",
    "name": "Hamster 318",
    "rarity": "rare",
    "image": "hamsters/656147541_18070028414261328_6728111689191812963_n.jpg"
  },
  {
    "id": "hamster-319",
    "name": "Hamster 319",
    "rarity": "rare",
    "image": "hamsters/656184303_17964202998057476_1008771271624076437_n.jpg"
  },
  {
    "id": "hamster-320",
    "name": "Hamster 320",
    "rarity": "rare",
    "image": "hamsters/656196463_18108579685838530_8099943869123991454_n.jpg"
  },
  {
    "id": "hamster-321",
    "name": "Hamster 321",
    "rarity": "rare",
    "image": "hamsters/656196952_18159752884426980_7773021392577490872_n.jpg"
  },
  {
    "id": "hamster-322",
    "name": "Hamster 322",
    "rarity": "rare",
    "image": "hamsters/656200688_18098252800996843_7535925081809994935_n.jpg"
  },
  {
    "id": "hamster-323",
    "name": "Hamster 323",
    "rarity": "rare",
    "image": "hamsters/656262483_18146422858471550_8080057892146624078_n.jpg"
  },
  {
    "id": "hamster-324",
    "name": "Hamster 324",
    "rarity": "rare",
    "image": "hamsters/656449803_17964202980057476_3384376946350836464_n.jpg"
  },
  {
    "id": "hamster-325",
    "name": "Hamster 325",
    "rarity": "rare",
    "image": "hamsters/656474451_18184281889330113_8635056322870362733_n.jpg"
  },
  {
    "id": "hamster-326",
    "name": "Hamster 326",
    "rarity": "rare",
    "image": "hamsters/656654257_17949826445965983_4548313623122646267_n.jpg"
  },
  {
    "id": "hamster-327",
    "name": "Hamster 327",
    "rarity": "rare",
    "image": "hamsters/656714213_18121037143609928_2263848079847544925_n.jpg"
  },
  {
    "id": "hamster-328",
    "name": "Hamster 328",
    "rarity": "rare",
    "image": "hamsters/656851459_18123412858524977_6353511514863551165_n.jpg"
  },
  {
    "id": "hamster-329",
    "name": "Hamster 329",
    "rarity": "rare",
    "image": "hamsters/657186346_18183056917373866_4184719947357703563_n.jpg"
  },
  {
    "id": "hamster-330",
    "name": "Hamster 330",
    "rarity": "rare",
    "image": "hamsters/657264713_18078213473106829_3611274357779232585_n.jpg"
  },
  {
    "id": "hamster-331",
    "name": "Hamster 331",
    "rarity": "rare",
    "image": "hamsters/657265163_18097140457953227_8819873256850480740_n.jpg"
  },
  {
    "id": "hamster-332",
    "name": "Hamster 332",
    "rarity": "rare",
    "image": "hamsters/657302656_17965467267057476_4556989845502387037_n.jpg"
  },
  {
    "id": "hamster-333",
    "name": "Hamster 333",
    "rarity": "rare",
    "image": "hamsters/657304138_17964202989057476_7193504039884895960_n.jpg"
  },
  {
    "id": "hamster-334",
    "name": "Hamster 334",
    "rarity": "rare",
    "image": "hamsters/657329990_18105868744895381_1584181535380811973_n.jpg"
  },
  {
    "id": "hamster-335",
    "name": "Hamster 335",
    "rarity": "rare",
    "image": "hamsters/657330705_17965467258057476_7277290174637332211_n.jpg"
  },
  {
    "id": "hamster-336",
    "name": "Hamster 336",
    "rarity": "rare",
    "image": "hamsters/657338127_18080116256377906_2792392819988722679_n.jpg"
  },
  {
    "id": "hamster-337",
    "name": "Hamster 337",
    "rarity": "rare",
    "image": "hamsters/657357369_18081447146070727_1665121529009030245_n.jpg"
  },
  {
    "id": "hamster-338",
    "name": "Hamster 338",
    "rarity": "rare",
    "image": "hamsters/657397026_18341575615246609_4128366202231313730_n.jpg"
  },
  {
    "id": "hamster-339",
    "name": "Hamster 339",
    "rarity": "rare",
    "image": "hamsters/657398281_18069984590649106_967236698174373838_n.jpg"
  },
  {
    "id": "hamster-340",
    "name": "Hamster 340",
    "rarity": "rare",
    "image": "hamsters/657649059_18418206559123219_5936502307292385319_n.jpg"
  },
  {
    "id": "hamster-341",
    "name": "Hamster 341",
    "rarity": "rare",
    "image": "hamsters/657664334_18312037966287732_198941926226926105_n.jpg"
  },
  {
    "id": "hamster-342",
    "name": "Hamster 342",
    "rarity": "rare",
    "image": "hamsters/657716173_18445667671118664_6115282758254730548_n.jpg"
  },
  {
    "id": "hamster-343",
    "name": "Hamster 343",
    "rarity": "rare",
    "image": "hamsters/657735917_17964203007057476_3615155255907534704_n.jpg"
  },
  {
    "id": "hamster-344",
    "name": "Hamster 344",
    "rarity": "rare",
    "image": "hamsters/657857566_18089132389987653_9036991957339540706_n.jpg"
  },
  {
    "id": "hamster-345",
    "name": "Hamster 345",
    "rarity": "rare",
    "image": "hamsters/657949251_18090991328155923_561197496496264933_n.jpg"
  },
  {
    "id": "hamster-346",
    "name": "Hamster 346",
    "rarity": "rare",
    "image": "hamsters/658045090_18336830365171783_1748225424886877284_n.jpg"
  },
  {
    "id": "hamster-347",
    "name": "Hamster 347",
    "rarity": "rare",
    "image": "hamsters/658092281_18308789236274655_9016762959097273599_n.jpg"
  },
  {
    "id": "hamster-348",
    "name": "Hamster 348",
    "rarity": "rare",
    "image": "hamsters/658145123_18393787501156127_3695919723839241576_n.jpg"
  },
  {
    "id": "hamster-349",
    "name": "Hamster 349",
    "rarity": "rare",
    "image": "hamsters/658224500_17968555833057476_1363580434405894485_n.jpg"
  },
  {
    "id": "hamster-350",
    "name": "Hamster 350",
    "rarity": "rare",
    "image": "hamsters/658370723_18076937825404285_3113572372461333107_n.jpg"
  },
  {
    "id": "hamster-351",
    "name": "Hamster 351",
    "rarity": "rare",
    "image": "hamsters/658628092_18320036971261081_7401867004665211305_n.jpg"
  },
  {
    "id": "hamster-352",
    "name": "Hamster 352",
    "rarity": "rare",
    "image": "hamsters/658853284_17964910845057476_6949779404339271611_n.jpg"
  },
  {
    "id": "hamster-353",
    "name": "Hamster 353",
    "rarity": "rare",
    "image": "hamsters/658931292_18571411708038311_8975519858114056292_n.jpg"
  },
  {
    "id": "hamster-354",
    "name": "Hamster 354",
    "rarity": "rare",
    "image": "hamsters/658938995_18080395931627829_399984387165362479_n.jpg"
  },
  {
    "id": "hamster-355",
    "name": "Hamster 355",
    "rarity": "rare",
    "image": "hamsters/659139162_18586711219029367_3550218955220827707_n.jpg"
  },
  {
    "id": "hamster-356",
    "name": "Hamster 356",
    "rarity": "rare",
    "image": "hamsters/659209876_18093424127118737_5185081247298030417_n.jpg"
  },
  {
    "id": "hamster-357",
    "name": "Hamster 357",
    "rarity": "rare",
    "image": "hamsters/659597638_18170994640402697_2596745632164834761_n.jpg"
  },
  {
    "id": "hamster-358",
    "name": "Hamster 358",
    "rarity": "rare",
    "image": "hamsters/659598726_18095086615875342_6897765643173215044_n.jpg"
  },
  {
    "id": "hamster-359",
    "name": "Hamster 359",
    "rarity": "rare",
    "image": "hamsters/659653715_18419352469127972_3086044941317747807_n.jpg"
  },
  {
    "id": "hamster-360",
    "name": "Hamster 360",
    "rarity": "rare",
    "image": "hamsters/659942566_18330912946247596_3626405677879672924_n.jpg"
  },
  {
    "id": "hamster-361",
    "name": "Hamster 361",
    "rarity": "rare",
    "image": "hamsters/660279177_18415501423135377_1104497732068428221_n.jpg"
  },
  {
    "id": "hamster-362",
    "name": "Hamster 362",
    "rarity": "rare",
    "image": "hamsters/660767546_18347746231209455_3790399190763163987_n.jpg"
  },
  {
    "id": "hamster-363",
    "name": "Hamster 363",
    "rarity": "epic",
    "image": "hamsters/660811537_18170960464407448_7038018447295126557_n.jpg"
  },
  {
    "id": "hamster-364",
    "name": "Hamster 364",
    "rarity": "epic",
    "image": "hamsters/660833433_18283473325305209_5787664843971853282_n.jpg"
  },
  {
    "id": "hamster-365",
    "name": "Hamster 365",
    "rarity": "epic",
    "image": "hamsters/661183167_18418025665193182_2676809522261576309_n.jpg"
  },
  {
    "id": "hamster-366",
    "name": "Hamster 366",
    "rarity": "epic",
    "image": "hamsters/661225185_18335205496219175_4404565282486244991_n.jpg"
  },
  {
    "id": "hamster-367",
    "name": "Hamster 367",
    "rarity": "epic",
    "image": "hamsters/661719386_18403030003151340_2052167454593496319_n.jpg"
  },
  {
    "id": "hamster-368",
    "name": "Hamster 368",
    "rarity": "epic",
    "image": "hamsters/662002869_18315157258282244_6635353943549290216_n.jpg"
  },
  {
    "id": "hamster-369",
    "name": "Hamster 369",
    "rarity": "epic",
    "image": "hamsters/662209296_18062113544392336_1918530286807027081_n.jpg"
  },
  {
    "id": "hamster-370",
    "name": "Hamster 370",
    "rarity": "epic",
    "image": "hamsters/662271095_18449258734115887_7442739956254430989_n.jpg"
  },
  {
    "id": "hamster-371",
    "name": "Hamster 371",
    "rarity": "epic",
    "image": "hamsters/662488171_18102763783738400_2729647059229866806_n.jpg"
  },
  {
    "id": "hamster-372",
    "name": "Hamster 372",
    "rarity": "epic",
    "image": "hamsters/662498581_18388146811086329_7429735244332294053_n.jpg"
  },
  {
    "id": "hamster-373",
    "name": "Hamster 373",
    "rarity": "epic",
    "image": "hamsters/662506941_18416299969192175_4531816370788512262_n.jpg"
  },
  {
    "id": "hamster-374",
    "name": "Hamster 374",
    "rarity": "epic",
    "image": "hamsters/663019887_18576981664049907_490704247318683160_n.jpg"
  },
  {
    "id": "hamster-375",
    "name": "Hamster 375",
    "rarity": "epic",
    "image": "hamsters/663257317_18108463897846568_2806032983315305726_n.jpg"
  },
  {
    "id": "hamster-376",
    "name": "Hamster 376",
    "rarity": "epic",
    "image": "hamsters/669409394_18172804315393688_7580867951041192909_n.jpg"
  },
  {
    "id": "hamster-377",
    "name": "Hamster 377",
    "rarity": "epic",
    "image": "hamsters/669412338_18371635357207030_1002252411717691345_n.jpg"
  },
  {
    "id": "hamster-378",
    "name": "Hamster 378",
    "rarity": "epic",
    "image": "hamsters/669442483_18394432597158585_8846121713409159804_n.jpg"
  },
  {
    "id": "hamster-379",
    "name": "Hamster 379",
    "rarity": "epic",
    "image": "hamsters/669746010_18304548004263853_479964669085055362_n.jpg"
  },
  {
    "id": "hamster-380",
    "name": "Hamster 380",
    "rarity": "epic",
    "image": "hamsters/669754098_18408774181180889_2965457531640518059_n.jpg"
  },
  {
    "id": "hamster-381",
    "name": "Hamster 381",
    "rarity": "epic",
    "image": "hamsters/669861585_18118373779630353_1764821975445204807_n.jpg"
  },
  {
    "id": "hamster-382",
    "name": "Hamster 382",
    "rarity": "epic",
    "image": "hamsters/669952927_18390457978084719_9117801307139767691_n.jpg"
  },
  {
    "id": "hamster-383",
    "name": "Hamster 383",
    "rarity": "epic",
    "image": "hamsters/670015988_18416982652124641_3033905251945235700_n.jpg"
  },
  {
    "id": "hamster-384",
    "name": "Hamster 384",
    "rarity": "epic",
    "image": "hamsters/670019808_18580203886049781_2039326706808178349_n.jpg"
  },
  {
    "id": "hamster-385",
    "name": "Hamster 385",
    "rarity": "epic",
    "image": "hamsters/670135340_18368476231202489_6715889504371862731_n.jpg"
  },
  {
    "id": "hamster-386",
    "name": "Hamster 386",
    "rarity": "epic",
    "image": "hamsters/670259413_18346323073215641_1552992961826261565_n.jpg"
  },
  {
    "id": "hamster-387",
    "name": "Hamster 387",
    "rarity": "epic",
    "image": "hamsters/670261085_17967222273057476_7407991921314795513_n.jpg"
  },
  {
    "id": "hamster-388",
    "name": "Hamster 388",
    "rarity": "epic",
    "image": "hamsters/670263877_17966480766057476_852313809213588635_n.jpg"
  },
  {
    "id": "hamster-389",
    "name": "Hamster 389",
    "rarity": "epic",
    "image": "hamsters/670542206_18366739591200865_4601192298948485868_n.jpg"
  },
  {
    "id": "hamster-390",
    "name": "Hamster 390",
    "rarity": "epic",
    "image": "hamsters/670727590_18078648326190228_5127301220722652541_n.jpg"
  },
  {
    "id": "hamster-391",
    "name": "Hamster 391",
    "rarity": "epic",
    "image": "hamsters/670759975_18113389399790830_1659484072305887326_n.jpg"
  },
  {
    "id": "hamster-392",
    "name": "Hamster 392",
    "rarity": "epic",
    "image": "hamsters/670828649_18435827260142146_791217404055695756_n.jpg"
  },
  {
    "id": "hamster-393",
    "name": "Hamster 393",
    "rarity": "epic",
    "image": "hamsters/671871649_17967745743057476_3501350987675970912_n.jpg"
  },
  {
    "id": "hamster-394",
    "name": "Hamster 394",
    "rarity": "epic",
    "image": "hamsters/684819956_17970026712057476_2245569695997112678_n.jpg"
  },
  {
    "id": "hamster-395",
    "name": "Hamster 395",
    "rarity": "epic",
    "image": "hamsters/686189041_17970026721057476_2178565276654312379_n.jpg"
  },
  {
    "id": "hamster-396",
    "name": "Hamster 396",
    "rarity": "epic",
    "image": "hamsters/688916269_17969493138057476_8661678350969688922_n.jpg"
  },
  {
    "id": "hamster-397",
    "name": "Hamster 397",
    "rarity": "epic",
    "image": "hamsters/689198680_17970563079057476_4488640281213293962_n.jpg"
  },
  {
    "id": "hamster-398",
    "name": "Hamster 398",
    "rarity": "epic",
    "image": "hamsters/702800891_17971636668057476_8214437516309856940_n.jpg"
  },
  {
    "id": "hamster-399",
    "name": "Hamster 399",
    "rarity": "epic",
    "image": "hamsters/704978799_17972304378057476_5137365862349443537_n.jpg"
  },
  {
    "id": "hamster-400",
    "name": "Hamster 400",
    "rarity": "epic",
    "image": "hamsters/709655243_17973162693057476_4745033591723483878_n.jpg"
  },
  {
    "id": "hamster-401",
    "name": "Hamster 401",
    "rarity": "epic",
    "image": "hamsters/720814393_17974674219057476_6152211513626366816_n.jpg"
  },
  {
    "id": "hamster-402",
    "name": "Hamster 402",
    "rarity": "epic",
    "image": "hamsters/721099374_17975390529057476_8210969475172506967_n.jpg"
  },
  {
    "id": "hamster-403",
    "name": "Hamster 403",
    "rarity": "epic",
    "image": "hamsters/721119772_17974674210057476_6219985112494623967_n.jpg"
  },
  {
    "id": "hamster-404",
    "name": "Hamster 404",
    "rarity": "epic",
    "image": "hamsters/727337635_17975970948057476_1485568012752415999_n.jpg"
  },
  {
    "id": "hamster-405",
    "name": "Hamster 405",
    "rarity": "epic",
    "image": "hamsters/728937469_17977023558057476_8489054590723309845_n.jpg"
  },
  {
    "id": "hamster-406",
    "name": "Hamster 406",
    "rarity": "epic",
    "image": "hamsters/736191111_17978185425057476_1904209736221455959_n.jpg"
  },
  {
    "id": "hamster-407",
    "name": "Hamster 407",
    "rarity": "epic",
    "image": "hamsters/736574719_17979159732057476_5559725859383888070_n.jpg"
  },
  {
    "id": "hamster-408",
    "name": "Hamster 408",
    "rarity": "legendary",
    "image": "hamsters/748354066_17980557183057476_4438968686091592888_n.jpg"
  },
  {
    "id": "hamster-409",
    "name": "Hamster 409",
    "rarity": "legendary",
    "image": "hamsters/755878609_17982088509057476_904490888788147265_n.jpg"
  },
  {
    "id": "hamster-410",
    "name": "Hamster 410",
    "rarity": "legendary",
    "image": "hamsters/763333627_17983238643057476_1779632560659759710_n.jpg"
  },
  {
    "id": "hamster-411",
    "name": "Hamster 411",
    "rarity": "legendary",
    "image": "hamsters/767387465_17984017254057476_6382254875706491174_n.jpg"
  },
  {
    "id": "hamster-412",
    "name": "Hamster 412",
    "rarity": "legendary",
    "image": "hamsters/775319864_17985290472057476_7177771950316987962_n.jpg"
  },
  {
    "id": "hamster-413",
    "name": "Hamster 413",
    "rarity": "legendary",
    "image": "hamsters/784197365_17986524987057476_7143003313123150437_n.jpg"
  },
  {
    "id": "hamster-414",
    "name": "Hamster 414",
    "rarity": "legendary",
    "image": "hamsters/792766241_17988110091057476_1720439795881846094_n.jpg"
  },
  {
    "id": "hamster-415",
    "name": "Hamster 415",
    "rarity": "legendary",
    "image": "hamsters/793596746_17988110082057476_2953519482779472073_n.jpg"
  },
  {
    "id": "hamster-416",
    "name": "Hamster 416",
    "rarity": "legendary",
    "image": "hamsters/797337140_17990618211057476_5271022695617892260_n.jpg"
  },
  {
    "id": "hamster-417",
    "name": "Hamster 417",
    "rarity": "legendary",
    "image": "hamsters/802596182_17988861132057476_6873641589734097975_n.jpg"
  },
  {
    "id": "hamster-418",
    "name": "Hamster 418",
    "rarity": "legendary",
    "image": "hamsters/829836868_17991799134057476_3130094295495874615_n.jpg"
  },
  {
    "id": "hamster-419",
    "name": "Hamster 419",
    "rarity": "legendary",
    "image": "hamsters/838645593_17992698447057476_6079560846500638854_n.jpg"
  },
  {
    "id": "flamme",
    "name": "Flamme",
    "rarity": "epic",
    "image": "hamsters/9204390ef9b17b40be77241e0bf0374f.jpg"
  },
  {
    "id": "hamster-421",
    "name": "Hamster 421",
    "rarity": "legendary",
    "image": "hamsters/934014145d6c6cd38a64e71870b07a12.jpg"
  },
  {
    "id": "lollipop",
    "name": "Lollipop",
    "rarity": "epic",
    "image": "hamsters/94d4590d97a6a882cf33f9e1e4fe513d.jpg"
  },
  {
    "id": "mimi",
    "name": "Mimi",
    "rarity": "common",
    "image": "hamsters/9ac97ec8c7ff8f29ef1a4985b494c0f7.jpg"
  },
  {
    "id": "hamster-424",
    "name": "Hamster 424",
    "rarity": "legendary",
    "image": "hamsters/c5000ce968993861e684cf7af86131b6.jpg"
  },
  {
    "id": "hamster-425",
    "name": "Hamster 425",
    "rarity": "legendary",
    "image": "hamsters/cb2c60c8f84c95f1a4a0263ee24db39e.jpg"
  },
  {
    "id": "hamster-426",
    "name": "Hamster 426",
    "rarity": "legendary",
    "image": "hamsters/d4bc92adcf620c942adb1517da4332cd.jpg"
  },
  {
    "id": "hamster-427",
    "name": "Hamster 427",
    "rarity": "mythic",
    "image": "hamsters/e9f3ed9636621be2b77c8bc0e0051329.jpg"
  },
  {
    "id": "hamster-428",
    "name": "Hamster 428",
    "rarity": "mythic",
    "image": "hamsters/ea3d88a89260173bc6f6a19dc30c923e.jpg"
  },
  {
    "id": "hamster-429",
    "name": "Hamster 429",
    "rarity": "mythic",
    "image": "hamsters/ede0fed768b257754c6569deb5dfe485.jpg"
  },
  {
    "id": "hamster-430",
    "name": "Hamster 430",
    "rarity": "mythic",
    "image": "hamsters/f10ebfc1b02d84904a6fafc56c7ac2b2.jpg"
  }
];
