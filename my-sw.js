self.addEventListener('install', function(event) {
  event.waitUntil(
    console.log("try to install v5 service worker!")
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf("https://aiqua-demo.herokuapp.com/index.html") >= 0) {
    console.log('v5 SW fetch:', event.request.url);
  }
  //event.respondWith(new Response("request came from s5 v1"));
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    console.log("try to activate v5 service worker!")
  );
});