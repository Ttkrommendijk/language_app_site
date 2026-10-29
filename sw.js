
const PREFIX='language-app-static-'+self.registration.scope+'-';
const CACHE=PREFIX+"e2d3806ecdd0de84";
const FILES=["THIRD_PARTY_NOTICES.txt","app-icon-192.png","app-icon-512.png","apple-touch-icon.png","assets/ai-practice-19JccaZB.js","assets/app-BaqlflDX.js","assets/dm-sans-OkNhvBry.ttf","assets/grammar-chat-DHRTN7_v.js","assets/index-CuMNNjSz.css","assets/index-DSNmr3-l.js","assets/learning-context-Bxh_xtid.js","assets/local-client-C1DgSO4A.js","assets/manrope-DIRNzeTG.ttf","assets/sql-wasm-B-9ndiyM.wasm","assets/vocabulary-DH2IWLAS.js","content-guide.html","demo.json","favicon-32.png","favicon.ico","fonts/DM-Sans-OFL.txt","fonts/Manrope-OFL.txt","fonts/dm-sans.ttf","fonts/manrope.ttf","fonts/sources.json","index.html","logo.png","release.json","site.webmanifest"];
const base=new URL('./',self.location.href);
const urls=FILES.map(f=>new URL(f,base).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(urls.map(url=>new Request(url,{cache:['index.html','release.json','site.webmanifest'].includes(new URL(url).pathname.split('/').pop())?'reload':'default'}))))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
 if(event.request.mode==='navigate'){event.respondWith(caches.open(CACHE).then(cache=>cache.match(new URL('index.html',base).href)));return;}
 if(urls.includes(url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request,{ignoreVary:true}))||fetch(event.request)));
});
