self.addEventListener('install', function(event) {
  event.waitUntil(
    console.log("try to install v4 service worker!")
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf("https://aiqua-demo.herokuapp.com/") >= 0) {
    console.log('v4 SW fetch:', event.request.url);
  }
  //event.respondWith(new Response("request came from s2 v1"));
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    console.log("try to activate v4 service worker!")
  );
});