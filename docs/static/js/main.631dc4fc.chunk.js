(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),r=t.n(i),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=t(3),u=t(4),d=t(6),f=t(5),p=t(7),h=t(1),g=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("label",{for:"Select an instrument"},"Choose a instrument:"),a.a.createElement("select",{id:"instrument select"},a.a.createElement("option",{value:""},"--Please choose an Instrument--"),a.a.createElement("option",{value:"Trombone"},"Trombone"),a.a.createElement("option",{value:"Horn"},"Horn")))}}]),n}(a.a.Component),m=(h.b.section.withConfig({displayName:"App__Wrapper",componentId:"sc-3zx0eo-0"})(["display:grid;grid-template-rows:auto 50px;height:100vh;nav{display:flex;}a:any-link{display:flex;align-items:center;justify-content:center;text-decoration:none;color:black;width:100%;background:#efefef;&:first-child{border-right:1px solid white;}&.active{background:deeppink;color:white;}}"]),function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(g,null)}}]),n}(o.Component)),b=t(13);function v(){var e=Object(b.a)(["\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return v=function(){return e},e}var w=Object(h.a)(v());r.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");c?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):l(n,e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.631dc4fc.chunk.js.map