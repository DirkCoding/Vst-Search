(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports=[{title:"Berlin Brass",company:"Orchestral Tools",image:"http://www.orchestraltools.com/libraries/berlin_brass_files/stacks_image_93.png",url:"www.orchestraltools.com","ensemble-patch":"No",price:"799\u20ac + Vat",sections:["Trombones","Trumpets","Horns","Tuba"]},{title:"Spitfire Symphonic Brass",company:"Spitfire Audio",image:"https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/331/smc0214_portrait_catview.jpg","company Url":"www.spitfireaudio.com","ensemble Patch":"No",price:"699 Euro incl. Vat",sections:["Trombones","Trumpets","Horns","Tuba","Cimbassi"]},{title:"Cinebrass Core",company:"Cinesamples",image:"https://cinesamples.com/img/product/image/small/mqdymg34bbtrjhftpp9k0oamk93.png","company Url":"www.cinesamples.com","ensemble Patch":"No",price:"399$ +Vat",sections:["Trombones","Trumpets","Horns","Tuba"]},{title:"Berlin Strings",company:"Orchestral Tools",image:"http://www.orchestraltools.com/libraries/berlin_brass_files/stacks_image_93.png","company Url":"www.orchestraltools.com","ensemble Patch":"Yes",price:"840\u20ac +Vat","section Sizes":"8, 6, 5, 5, 4",sections:["1. Violins","2. Violins","Violas","Celli","Basses"]},{title:"Spitfire Symphonic Strings",company:"Spitfire Audio",image:"https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/357/smc0224_portrait_catview.jpg","company Url":"www.spitfireaudio.com","ensemble Patch":"Yes",price:"799\u20ac incl. Vat","section Sizes":"16, 14, 12, 10, 8",sections:["1. Violins","2. Violins","Violas","Celli","Basses"]},{title:"Cinestrings Core",company:"Cinesamples",image:"https://cinesamples.com/img/product/image/small/9jqxx4ebnns3vtjalqzw0dyj972.png","company Url":"www.cinesamples.com","ensemble Patch":"Yes",price:"499$ +Vat","section Sizes":"16, 12, 10, 10, 7",sections:["1. Violins","2. Violins","Violas","Celli","Basses"]},{title:"Berlin  Woodwinds Revive",company:"Orchestral Tools",image:"http://www.orchestraltools.com/libraries/berlin_woodwinds_revive_files/stacks_image_93.png","company Url":"www.orchestraltools.com","ensemble Patch":"Yes",price:"649\u20ac +Vat",sections:["Piccolo","Flutes","Alto Flute","Oboe","English Horn","Clarinet","Bassoon"]},{title:"Spitfire Symphonic Woodwinds",company:"Spitfire Audio",image:"https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/380/smc0215_portrait_catview.jpg","company Url":"www.spitfireaudio.com","rnsemble Patch":"No",price:"599\u20ac incl. Vat",sections:["Piccolo","Flutes","Alto Flute","Bass Flute","Oboe","English Horn","Bass Clarinet","Clarinet","Contrabass Clarinet","Bassoon","Contra Bassoon"]},{title:"Cinewinds Core",company:"Cinesamples",image:"https://cinesamples.com/img/product/image/small/5vrxdt7r829qky5rd2mpq9232yk.png0","company Url":"www.cinesamples.com","rnsemble Patch":"Yes",price:"349$ +Vat",sections:["Piccolo","Flutes","Oboe","Clarinet","Bassoon"]}]},16:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),s=t(1),a=t.n(s),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=t(2),m=t(3),p=t(5),u=t(4),w=t(6),d=t(11),g=function(e){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",{for:"Instrument select"},"Choose an instrument:"),i.a.createElement("select",{placeholder:"Choose an instrument"},i.a.createElement("option",{default:!0},"Select Instrument"),d.reduce(function(e,n){return e.concat(n.sections)},[]).reduce(function(e,n){return-1===e.indexOf(n)&&e.push(n),e},[]).sort(function(e,n){return e<n?-1:1}).map(function(e){return i.a.createElement("option",null,e)})))}}]),n}(o.Component),h=function(e){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(g,null)}}]),n}(o.Component),f=t(12),b=t(13);function v(){var e=Object(f.a)(["\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return v=function(){return e},e}var y=Object(b.a)(v());a.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");r?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):c(n,e)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.ab48ec6e.chunk.js.map