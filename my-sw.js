self.addEventListener('install', function(event) {
  console.log("try to install v1 service worker!")
});


self.addEventListener('activate', function(event) {
  console.log("try to activate v1 service worker!")
});