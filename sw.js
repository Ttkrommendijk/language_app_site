
const PREFIX='language-app-static-'+self.registration.scope+'-';
const CACHE=PREFIX+"f2f4fb4f8e20c4fd";
const FILES=["THIRD_PARTY_NOTICES.txt","app-icon-192.png","app-icon-512.png","apple-touch-icon.png","assets/ai-practice-6s13XGRy.js","assets/app-D_pZ8X7W.js","assets/index-BY4JsH-3.css","assets/index-DDY9wHri.js","assets/local-client-C1DgSO4A.js","assets/sql-wasm-B-9ndiyM.wasm","assets/vocabulary-BdE8Arvh.js","content-guide.html","demo.json","favicon-32.png","favicon.ico","index.html","logo.png","release.json","site.webmanifest"];
const base=new URL('./',self.location.href);
const urls=FILES.map(f=>new URL(f,base).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(urls))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
 if(event.request.mode==='navigate'){event.respondWith(caches.open(CACHE).then(cache=>cache.match(new URL('index.html',base).href)));return;}
 if(urls.includes(url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request,{ignoreVary:true}))||fetch(event.request)));
});
