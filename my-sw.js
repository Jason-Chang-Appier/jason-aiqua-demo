self.addEventListener('install', function(event) {
  event.waitUntil(
    console.log("try to install v3 service worker!")
  );
});


self.addEventListener('fetch', function(event) {
  console.log('v3 SW fetch:', event.request.url);
  
  //event.respondWith(new Response("request came from s2 v1"));
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    console.log("try to activate v3 service worker!")
  );
});