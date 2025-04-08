'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ad0337abfbe8df12ed3e61f8d26554c",
".git/config": "13b14211ee479a4c290084c08a780416",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "54afcd3fbf3f5757f6365ec6d84f1463",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7cf56a64ec3c5d96f83f848ef8a862e1",
".git/logs/refs/heads/main": "788a68ef18f14bb15c104d58834ca02c",
".git/logs/refs/remotes/origin/main": "d89b7617f6f3d2494866d1d5f1a7ac47",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/14/d6e01e9c451eccbf0be6b9180c032a6bbf3330": "5b7ef3bef91d59aef260b16506ce09a3",
".git/objects/21/719cdf8cfc151d312d8a16012d1b59baac9837": "dd263a665ffc20223fe8b8965996757b",
".git/objects/23/ef444109dc9ec2b4c4dee584dadbae8d717d27": "96ac84db194bb0fbded73696f61f9c5f",
".git/objects/2e/3d56afe77a32c83a799168f23490b1859ccbb6": "dc867f7b1ef8e071e34d2227bc44e802",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/618c3abde52ebd80bb16f14d8112cc2b2dafd6": "5dc96d6c4a4900cfc7bba786f6421375",
".git/objects/39/b05f8f6d1107a5c8969027537de709f1ddfa8e": "063f65830673ca8630b1042faea1282c",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/3aa910331de0fe2270b67ffbaeaddbdfe64efd": "f78cffdc689958102e29ec8b35f19c77",
".git/objects/46/71d35523dc3137fc9ab388b0511f0b04ee67ec": "7650e2d67dbbdafe5b8d6c5e05bd7c68",
".git/objects/48/7b499da56f1f31f6918892ed1ece4609351e7c": "7c83db972afa375841dde819f5fe19b3",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/95ae6d05e807a9cbda471a5aedbf344611388a": "7c5d16fc30d057494b5bcbd60603dabc",
".git/objects/5f/05a01ddf0c006bcbb4a41e0f1032098e9e8e41": "8932524f513e928951bc87501b625338",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/2c6f4f11e693e5bcfdcd1f815a0e5226258dd6": "f853d56a2f193a5cdf749c63d6c943e5",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/2de0fb1eab5a97a1063730c6d6568566465093": "b777ffdc31c054a9c48c134f131a38b7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/73/2da6d039fc6ab4a3e63dda88e853c0667c5e25": "7f43e91e690681b6d1f734e983a3b9cd",
".git/objects/74/47e7c2d1b91e6b850d391435ad5f2dc3580335": "183f833645a053a9827ffdcf45f8565e",
".git/objects/83/d61713555918b91bb2f77c485b9a5fa413e88c": "3e8ae508a28f6a1cfd089fa8abf15698",
".git/objects/86/8868f778392489a2cd22cbfbb514b399373ada": "95c1fd6169f77868c67556cf27da11f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/8957ce97fbd3555a38298474768ef51a964652": "8710428f0a65e36da56777eef701d47d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/07895dffd12f59da751cefb557d824bce2b55b": "7dd88b7e812a2a4712abb57526d3b612",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/b782625fb11ecf93bb7ed63afd88f4fe8b99b2": "74c1dcc854908fb9b96f382bdcb90e04",
".git/objects/a2/b6f245f5cf61c75f8e0fb2403a0167ecd9019f": "afa94c129fae93f836726e3fb274c843",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/24b2d0277e52e987ec3a0012d9f6afb2d438f0": "df7c4118b463c9df2ae9781cd67f3f6e",
".git/objects/b6/f096b43a81133818eefbc258b37395a436c220": "9ae1806aab6cdfdb7b34dffd27fed93e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/df765727ed4cae932f50b8c12eb171befabb9d": "cac58ed2a4af1f3ef37dd95719fbe295",
".git/objects/c2/70def91bf9b48a60ac5e8f48a26e790e9e2094": "2d742c334588608220ad7c4ab9336204",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e3/0db3c16c4bf4d4d8660fc0df5f34e5b5984c80": "971957d336d6ac1f7face9bd96b0b422",
".git/objects/e4/4e879988db999941178d7d4a49e9a1269f857a": "1e9f830936242015187aa2e663cc2bb8",
".git/objects/e6/269e84fafb9e0e911a6ec32448c4c49132200f": "c6efbfe83fd0b9af54f88b873f2eb970",
".git/objects/e7/9f21efb9e0ca4d00ee8956983822eb5b43aa5d": "99d4ee98e47dc2406e41678f811e3154",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/58633f40c3571f6fb656357fdfdd2d72217a82": "2fefe45398d14b11590b07e27e1d6024",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/7505f59fe550ca23963e15104c1cdcbfef1f79": "9ed76c9e5e3c2989bf6163de081b0b31",
".git/refs/heads/main": "ed95df40c426a39ea1c83d018b50cd22",
".git/refs/remotes/origin/main": "ed95df40c426a39ea1c83d018b50cd22",
"assets/AssetManifest.bin": "d43599bdf108b03c05dd5a38a757b4a0",
"assets/AssetManifest.bin.json": "e0b6a486456281e2a6a36541d082f5d4",
"assets/AssetManifest.json": "40dfa3821f0367893a55f1adba0b44fe",
"assets/assets/animations/bird_animation.json": "52ef283fcec291c0bf851a8bfb918059",
"assets/assets/animations/heart_animation.json": "314e73469342ad38c283040331ebb249",
"assets/assets/fonts/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/image/frame4.png": "9a1250ae93ad626d96d822cfc026aa74",
"assets/assets/image/frame5.png": "3480da9d1cec47d851b259b58b9e4f22",
"assets/assets/image/gift_warping.png": "575b6a2da95dff2f320cf86eaf3347c4",
"assets/FontManifest.json": "215dcdaec5c32b801393529503694451",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "0293f6a67653f1182317163f192fb8b6",
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
"flutter_bootstrap.js": "eb73b24df4d7e40cca12dd7cff499b0b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d99de7cf5cc41100f65230a68c3e84e",
"/": "2d99de7cf5cc41100f65230a68c3e84e",
"main.dart.js": "57f2268a0defe279cde5819c54af6a5d",
"main.dart.mjs": "a2482105bb1238882b62e3153862ef57",
"main.dart.wasm": "64092345c5a66ecf66046c13fa672796",
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
