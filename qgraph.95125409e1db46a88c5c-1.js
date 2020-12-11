window.QGSettings = {
  "appId": "95125409e1db46a88c5c",
  "debug": false,
  "vapidPublicKey": "BGHiV7y31Hm7oSM6h4WMqQu7zD2-WRKtbwG2vafFitgYgU6z0NCk12OEHTMe7UuPTwnIT83VIar0kzdo6VAF2ZI",
  "origin": "https://aiqua-demo.herokuapp.com",
  "push": {
    "secondsBetweenPrompts": 3600,
    "crossSitesEnabled": true
  }
};
if(window.qg && window.qg.queue) {
   window.qg.queue.unshift(('init', QGSettings));
}
!function(q,g,r,a,p,h,js){
   if(!q.qg){
       js=q.qg=function() {
           js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
           js.queue = [];
       }
   }
   if(q.qg.initialized){return;}
   window.qg.queue.unshift(['init',window.QGSettings])
   p=g.createElement(r);
   p.async=!0;
   p.src=a;
   h=g.getElementsByTagName(r)[0];
   h.parentNode.insertBefore(p,h);
   q.qg.initialized = true;
}(window,document,'script','/aiqua-1.js');
