// cleanup
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",()=>{self.registration.unregister().then(()=>{self.clients.matchAll({type:"window"}).then(c=>c.forEach(w=>w.navigate(w.url)))});});
