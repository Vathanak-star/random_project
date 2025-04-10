'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1e6100bbbb25db2809753d2720ddbbcf",
".git/config": "13b14211ee479a4c290084c08a780416",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dfb77b431bd3867c36d903669f8eaa33",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "008778208573d3a4dcf6dac9589933ad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f9ba256ea19d8e33ee98dcaae2de1f0",
".git/logs/refs/heads/main": "5b23f41dad45cfc3332e14e57c04dcfe",
".git/logs/refs/remotes/origin/main": "448348e87b03c439caf3eaf1c7dee2bc",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0c/c96a465de6f7b1698a14adc7aa29f1483c3218": "0af746c8fb21071dc518b23ed9efe2df",
".git/objects/0d/571e18955994d3513761dbf0ac33a5e556e238": "434766059fbb4c0d20300584f50adb84",
".git/objects/11/6ae56c7808a63d9499f097913b57c440428ae8": "6fe8dcda7a7ebb4eefdcd379811cdb50",
".git/objects/13/29915e74cb4f6988658440bcfbd21253687131": "2523a00809e728af97e134128f7cecba",
".git/objects/14/d6e01e9c451eccbf0be6b9180c032a6bbf3330": "5b7ef3bef91d59aef260b16506ce09a3",
".git/objects/18/101df62def4a2705c722c1b4c05f8ccdf6598e": "b6b472d449221175e18742455940c71a",
".git/objects/1a/4c0af977e080450ccfc249336acae2b3e6bdf3": "094367a84a6279eeb4563f736aa2c9f6",
".git/objects/1d/0547b9ba6779abb5e9030d8895cda3073ec45e": "8f8916723d5a6fbc5c6485c78324f6db",
".git/objects/21/719cdf8cfc151d312d8a16012d1b59baac9837": "dd263a665ffc20223fe8b8965996757b",
".git/objects/21/9b5eae14f5d6191d7d9378b9989f9c59826475": "7f9b596210c7f636ceb59b29cd5f14c7",
".git/objects/23/ef444109dc9ec2b4c4dee584dadbae8d717d27": "96ac84db194bb0fbded73696f61f9c5f",
".git/objects/28/19b4769874ec0bbc275af6263c5acafccbdc67": "c170c8db04f93af2ccddd1fa251b4507",
".git/objects/28/801de53e9703a374c3d6bfb864f495057c45a6": "385946fbdfdafea0e8616c191fc7f5b9",
".git/objects/2e/3d56afe77a32c83a799168f23490b1859ccbb6": "dc867f7b1ef8e071e34d2227bc44e802",
".git/objects/31/e00996ea648265f92f85b95f48d288112f16e1": "dd1280633c17c098bd50f3725c867939",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/618c3abde52ebd80bb16f14d8112cc2b2dafd6": "5dc96d6c4a4900cfc7bba786f6421375",
".git/objects/39/9788f7b2c5ed762e942983010a42dc9928635a": "8eab229c910b41d674c6d598992aa5da",
".git/objects/39/b05f8f6d1107a5c8969027537de709f1ddfa8e": "063f65830673ca8630b1042faea1282c",
".git/objects/39/f97f434d469a20e826ba777f056628e536f798": "6c4c9b855db9971065c6f2232d2b64a1",
".git/objects/3c/098dcd271a5c4502ca9c5e2a7c0a60f26d4278": "4a22f64c00728a35899fcd8d3bd83674",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/3aa910331de0fe2270b67ffbaeaddbdfe64efd": "f78cffdc689958102e29ec8b35f19c77",
".git/objects/44/0f4f3713916e8596a8e433ca96d7b0e3121f32": "cbd8b10c4915bc216abc300d566d7e21",
".git/objects/46/71d35523dc3137fc9ab388b0511f0b04ee67ec": "7650e2d67dbbdafe5b8d6c5e05bd7c68",
".git/objects/47/d7eea2f8754b921e5334e8860398f9428a29db": "32cd275c61c6faf48043569a1603c2ff",
".git/objects/48/7b499da56f1f31f6918892ed1ece4609351e7c": "7c83db972afa375841dde819f5fe19b3",
".git/objects/4a/135a647c8d112d1493bca7cfa32284390de6d1": "cc34217d7cdd0b8193cd788aea43fd91",
".git/objects/4a/cdc19c691f16a96e1f9cf17337da299a849ff1": "e33cec2ee3faabe4cd876a989a42fdee",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/13d1ba6ad20cd1bd39acf457930a7f326011a2": "ae2f677bc4ebf6ca02722cf20aba1e72",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/95ae6d05e807a9cbda471a5aedbf344611388a": "7c5d16fc30d057494b5bcbd60603dabc",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/05a01ddf0c006bcbb4a41e0f1032098e9e8e41": "8932524f513e928951bc87501b625338",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/2c6f4f11e693e5bcfdcd1f815a0e5226258dd6": "f853d56a2f193a5cdf749c63d6c943e5",
".git/objects/63/46c888eaefbe6413263436cc78faf579535f5c": "d04145470cd3e4f44a0ab09397d8c631",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/2de0fb1eab5a97a1063730c6d6568566465093": "b777ffdc31c054a9c48c134f131a38b7",
".git/objects/68/ee5dde59cffffaffaccdd31b1e503b10fa72ab": "517836592ea15678f68b99171a2e15ad",
".git/objects/69/9abb12e4b316c38bc689ec8ea38a91d891c6bc": "8c3a6e5afd43a0602e154338f241b1c4",
".git/objects/6a/44361a5866dd50645f6b824bb255dd474881cc": "6e758c0b077800449ed5c5adddbc65d2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/d2669709e2181b7b6f55a0b46fcd790de9c366": "cfe866c338664a0b99b5a1de68366b6d",
".git/objects/6f/b13268ca5384c570c0279845dc1dd82724b240": "b197435fc1ede979199d6aa64acfc2fd",
".git/objects/73/2da6d039fc6ab4a3e63dda88e853c0667c5e25": "7f43e91e690681b6d1f734e983a3b9cd",
".git/objects/73/90bf73de20c1c26d5d4e1064033dd50d3b4c44": "06339a3e2c271e3193ceca751969654c",
".git/objects/74/47e7c2d1b91e6b850d391435ad5f2dc3580335": "183f833645a053a9827ffdcf45f8565e",
".git/objects/74/72a86aad173479c97e053def249ebf51efd0ea": "5481ea24c92a4fe86a6a34c842cc2b87",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/d5e5a9735b560032f288f19fdc1bc880d713c1": "ba74c119ff141eea65b2329ac1b4f548",
".git/objects/78/d37d5bf285470b57686685796272b2ebe2d490": "d000c451cc827dcd9928cee8c5480a1d",
".git/objects/78/ee8210c8f681488a821726cbb84de07398eae7": "1976700ae74aa333706613def5477788",
".git/objects/7a/13ebfca31a82915399d445ae8d6a39cdc83789": "dc5945cd28e7168cba122f075329db2c",
".git/objects/7b/f502e6d3bb493bb2eaa2226e61746269f7b6b3": "9b925799abc9ab6b6c09ed15d3bde958",
".git/objects/7f/0bd6219ec5499fb7d121b7f31892a367623ffa": "b27daaf589143b92019a9a381af7287c",
".git/objects/82/69d6c437ffba71a55bc988846e2b2d71d3fa53": "0daf580f9fe8713da0f7bdca66409cd4",
".git/objects/83/d61713555918b91bb2f77c485b9a5fa413e88c": "3e8ae508a28f6a1cfd089fa8abf15698",
".git/objects/86/3f7264559ae6781432678d8fc26e388caa5f91": "9da18f97f89650494330592418a81687",
".git/objects/86/8868f778392489a2cd22cbfbb514b399373ada": "95c1fd6169f77868c67556cf27da11f1",
".git/objects/86/cd71ea2a7757336ee2648b2ed94372c76912cd": "f86fbb0a730d31a5a1c5043314af0cd9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/8957ce97fbd3555a38298474768ef51a964652": "8710428f0a65e36da56777eef701d47d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c2989c3c04b33c8e96f910e81cfc2d005b6527": "de9bd9bf2498e15d38a0e5459879176a",
".git/objects/8b/8b9bb7021bf99997d9a2820686d6831978ddc3": "c2a4658b891f7a897a19579e8fa52faf",
".git/objects/8b/c5dd5464540e287b7eb2f2d4f3d00a740fc5a7": "9902508be1ed3de7e13c3c2e9d62e7cd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/07895dffd12f59da751cefb557d824bce2b55b": "7dd88b7e812a2a4712abb57526d3b612",
".git/objects/8e/9c75dcec7663fe6c0888e59d2fd73c0f365130": "149203b1e95e2c30b11ccf9d74f4656c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/94/b782625fb11ecf93bb7ed63afd88f4fe8b99b2": "74c1dcc854908fb9b96f382bdcb90e04",
".git/objects/95/a39124af6aa9b6633fb06f47067e2c1a6675d3": "1a9d5928a7a8e6c626a62b0169b66518",
".git/objects/97/80565a5c7a948586c5f226aa53348c5d2b2917": "0b0a020dc3ec6b7f1b783615ce37efcd",
".git/objects/a2/7d141b3c84508198146ae0c91d4b231502bf30": "6de203569c1a703cd8fa53bae1ee77da",
".git/objects/a2/b6f245f5cf61c75f8e0fb2403a0167ecd9019f": "afa94c129fae93f836726e3fb274c843",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/b659bb25836cf1106f3c46b49e975fc5cbb096": "9fed08d0de904861fb548875df6be6c3",
".git/objects/a7/f1be8ebf6110e8642edb1e667fa3701f933b0a": "865dbc202b1f9b3d11f69c973bc085de",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/90fd21fb1ee4032a9f3e2d7638e655e07269bc": "03e4be851effb02e7ef2233ecd03fbab",
".git/objects/a8/e5fe0c863a193199fda9206a992ba9430ee276": "f69b88d7ee46e2d62ec1862dd5317c6d",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/04b96463ed1c082a549705db9d941192141b9c": "3b7757c68000aa04c35d5c43b93b62cd",
".git/objects/ae/24b2d0277e52e987ec3a0012d9f6afb2d438f0": "df7c4118b463c9df2ae9781cd67f3f6e",
".git/objects/b0/db5b4b021a46b2de5e2dfa943863b715228b13": "532b3cfd3399248d52c109c56d68174e",
".git/objects/b2/df1fddaae7a730c4e940c8812043c09e3b1ab8": "8ba175284e5dbb2e0ebc0569979c3b69",
".git/objects/b6/f096b43a81133818eefbc258b37395a436c220": "9ae1806aab6cdfdb7b34dffd27fed93e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bd/4b5f0eca6ff40abda76ba50d699bcab312a4af": "64cad7cc18d65e887962b8f4cc6700b1",
".git/objects/bd/df765727ed4cae932f50b8c12eb171befabb9d": "cac58ed2a4af1f3ef37dd95719fbe295",
".git/objects/c2/70def91bf9b48a60ac5e8f48a26e790e9e2094": "2d742c334588608220ad7c4ab9336204",
".git/objects/c3/5ab2768e578ce2106a1ccbcd6a264e8961540b": "e1febfff64e7d5f7e59f2954bce69ad5",
".git/objects/c6/231022262a4391b7a7e6683ca79e1a033ef03f": "e45801887121c16aaf3a98066bb50500",
".git/objects/c7/dbc8d2d2537e91b85d343eda44f787d044cd48": "0869a4ffc89e7e6309ca3d694acf1d4b",
".git/objects/c8/0bad16d76abea313ace70f6c5aef1a18d32037": "036bd5b68f14fc86dc78b23d77732057",
".git/objects/cb/41bfe9a9c819c8e667d103544e5e3179d12361": "e1828f6155a0b8c3f1ddbb9742edaeaa",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cf/eb142ee1cb8d28da45e98bd687da61a142ce7f": "d8b1cc8f6c40b64b9b472f2010dcfd2f",
".git/objects/d1/6a5ede3960cc5b21d528f5c3d3aa35977154c6": "83a47321f6829916fb381c492a1a7c49",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/224a468cbec0bb394becebab70aa770daee6bb": "da478c737142e90c9e8835cee874cd51",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d552d5d8fad228edd1ced028601e31fe279026": "822485cdcfb0ac24be4a29f61f201c69",
".git/objects/d6/eda9815c296de0fd851884ad26f266aa020d42": "1a473aac751373468172dd57cca88ee0",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/9f4fc2919382d3e4a30a34828c2bac3a420a63": "40cc23587c2b9785fedc3f1adea196ea",
".git/objects/de/828061094d6c7bc1795e644e5b26879d7f24a8": "97d593a7babb8abff7b124245a29e465",
".git/objects/de/f51bd14e204f6f1598e1239a0d2f75f9250bf1": "17f87a23387b0d0bcede622d0afb74a1",
".git/objects/e3/0db3c16c4bf4d4d8660fc0df5f34e5b5984c80": "971957d336d6ac1f7face9bd96b0b422",
".git/objects/e4/4e879988db999941178d7d4a49e9a1269f857a": "1e9f830936242015187aa2e663cc2bb8",
".git/objects/e4/8f2e712171d0cd285dde8fa0ada2511c12f963": "663666e57bf3ede3eabb3c9546ca0bc1",
".git/objects/e6/269e84fafb9e0e911a6ec32448c4c49132200f": "c6efbfe83fd0b9af54f88b873f2eb970",
".git/objects/e6/75f84d7600aabc99d8909f7840923e2a158f1e": "0e9eb11bd07e21f43807de051f1cd56d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/9f21efb9e0ca4d00ee8956983822eb5b43aa5d": "99d4ee98e47dc2406e41678f811e3154",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/a78e5237f78e19d66cbc7079197836d75f0d17": "b4be1340e9ed34e305867909ca7035c0",
".git/objects/eb/58633f40c3571f6fb656357fdfdd2d72217a82": "2fefe45398d14b11590b07e27e1d6024",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/6f4e361986084d8868bae460af5073e5fbe750": "b4836b46f2a9c270fcf05f4a9e409b6a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/7505f59fe550ca23963e15104c1cdcbfef1f79": "9ed76c9e5e3c2989bf6163de081b0b31",
".git/objects/f6/618a5acea53d9ae01c9c576e044868faaad504": "ffcb48faf985860e1893ebed7fa258c0",
".git/objects/fb/779bf19639f14e063204a395e35a8a1d6fddbd": "21da265d01277ce64347d6657ceee573",
".git/objects/fb/8d24d5a9874a6830911c1560d8303a9ac67270": "97bd86481b93c7371f362211ac5cc744",
".git/objects/fb/91bc751e8d8b9dce388700b642eed19d9bd811": "c768696a9c73ec017d7fcb494f41edf7",
".git/objects/fc/7d8cf9b15dd00ed68b8e31d2b8bb591cca4f0a": "287601ab996de3b014aefc73ed82b20e",
".git/objects/ff/02fbe3664d11711a3d46f2e6c35843574f59d2": "f3ef2b7aaaad21dd96798421a5127a0d",
".git/ORIG_HEAD": "240b7c626e217fe16f8f7d0acd95a039",
".git/refs/heads/main": "13d741424d92e25fc73a06f7b6fc23ad",
".git/refs/remotes/origin/main": "13d741424d92e25fc73a06f7b6fc23ad",
"assets/AssetManifest.bin": "1bb663598dbed80da2f1c0bdb775cd64",
"assets/AssetManifest.bin.json": "571b5fb3216225c76f1a2ee398e0d3d4",
"assets/AssetManifest.json": "7727abeee9c3526bdd529003d33da699",
"assets/assets/animations/bird_animation.json": "52ef283fcec291c0bf851a8bfb918059",
"assets/assets/animations/heart_animation.json": "314e73469342ad38c283040331ebb249",
"assets/assets/audio/blue.mp3": "71e5c81893f12cc5a7437798f8c9e895",
"assets/assets/fonts/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/image/gift_warping.png": "575b6a2da95dff2f320cf86eaf3347c4",
"assets/FontManifest.json": "215dcdaec5c32b801393529503694451",
"assets/fonts/MaterialIcons-Regular.otf": "2ff65597d9d46771f8a29d110be542be",
"assets/NOTICES": "1f4e70fad5358da668cd7e5df1734cfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "24a129f31114d0d604e47206c28ac5d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d99de7cf5cc41100f65230a68c3e84e",
"/": "2d99de7cf5cc41100f65230a68c3e84e",
"main.dart.js": "ac3acf5235217d6f88286fd46783f2ea",
"main.dart.mjs": "5c15d2123fa71c7b0f1f845a28a3ff4e",
"main.dart.wasm": "7270852b0af4426cd822c0cccb1f47d2",
"main.dart.wasm.map": "6405adbf657644b1e4ef7ae44e756fdb",
"manifest.json": "6c53502adc6722e6b4b53b86bfa22033",
"version.json": "d8e8efd6e7e1ec0b158445bbcc65cae7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
