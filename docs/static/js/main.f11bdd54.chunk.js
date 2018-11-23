(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=n(2),p=n(3),m=n(5),u=n(4),d=n(6),h=n(8),g=n(1),f=g.b.section.withConfig({displayName:"DropdownInstruments__Dropdown",componentId:"zcikk7-0"})(["display:grid;display:center;grid-template-columns:1fr 2fr;grid-template-rows:1fr 2fr;grid-column:1 / 2;"]),w=g.b.p.withConfig({displayName:"DropdownInstruments__Label",componentId:"zcikk7-1"})(["font-size:23px;grid-template-rows:1fr 1fr;"]),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.searchChange;return a.a.createElement(f,null,a.a.createElement(w,null,"Choose an instrument:"),a.a.createElement("select",{onChange:e,placeholder:"Choose an instrument"},a.a.createElement("option",{default:!0},"Select Instrument"),h.reduce(function(e,t){return e.concat(t.sections)},[]).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).sort(function(e,t){return e<t?-1:1}).map(function(e){return a.a.createElement("option",null,e)})))}}]),t}(o.Component),y=g.b.section.withConfig({displayName:"Createcard__Card",componentId:"sc-4yrxoa-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;align-items:center;justify-content:center;margin:25px auto;padding:25px;background:white;max-width:800px;height:auto;border-radius:8px;box-shadow:0 8px 16px rgba(180,180,180,0.4);border:1px solid #000;"]),C=g.b.h1.withConfig({displayName:"Createcard__Title",componentId:"sc-4yrxoa-1"})(["font-size:23px;grid-column:2 / 3;"]),v=g.b.h2.withConfig({displayName:"Createcard__Company",componentId:"sc-4yrxoa-2"})(["font-size:18px;grid-column:2 / 3;"]),_=g.b.p.withConfig({displayName:"Createcard__Paragraph",componentId:"sc-4yrxoa-3"})(["font-size:12px;grid-column:2 / 3;"]),x=g.b.a.withConfig({displayName:"Createcard__Hyperlink",componentId:"sc-4yrxoa-4"})(["font-size:12px;grid-column:2 / 3;"]),j=g.b.img.withConfig({displayName:"Createcard__Image",componentId:"sc-4yrxoa-5"})(["width:150px;height:150px;background-position:50% 50%;background-size:cover;grid-column:1 / 2;grid-row:1 / 4;margin:20px;"]),k=g.b.section.withConfig({displayName:"Createcard__Libraryheader",componentId:"sc-4yrxoa-6"})([""]),E=g.b.section.withConfig({displayName:"Createcard__Librarytext",componentId:"sc-4yrxoa-7"})([""]),O=g.b.section.withConfig({displayName:"Createcard__Information",componentId:"sc-4yrxoa-8"})([""]),S=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.company,o=e.image,i=e.url,r=e.ensemblepatch,s=e.price,c=e.sections;return a.a.createElement(y,null,a.a.createElement(O,null,a.a.createElement(k,null,a.a.createElement(C,null,t),a.a.createElement(v,null,n)),a.a.createElement(E,null,a.a.createElement(_,null,"Instruments included: ",c),a.a.createElement(_,null,"Ensemble Patch available: ",r),a.a.createElement(_,null,"Price: ",s),a.a.createElement(x,null,"Link to manufacturer: ",i))),a.a.createElement(j,{src:o}))}}]),t}(o.Component),z=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filteredLibraryData,n=e.searchChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{searchChange:n}),t.map(function(e){return a.a.createElement(S,{title:e.title,company:e.company,image:e.image,url:e.url,ensemblepatch:e.ensemblepatch,price:e.price,sections:e.sections.join("-")})}))}}]),t}(o.Component),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={libraryData:h,dropdown:""},n.onSearchChange=function(e){n.setState({dropdown:e.target.value})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.libraryData.filter(function(t){return t.sections.includes(e.state.dropdown)});return a.a.createElement(z,{filteredLibraryData:t,searchChange:this.onSearchChange})}}]),t}(o.Component),V=n(14);function N(){var e=Object(V.a)(["\n@import url('https://fonts.googleapis.com/css?family=Montserrat');\n   \n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return N=function(){return e},e}var B=Object(g.a)(N());r.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null),a.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");s?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):c(t,e)})}}()},8:function(e){e.exports=[{title:"Berlin Brass",company:"Orchestral Tools",image:"http://www.orchestraltools.com/libraries/berlin_brass_files/stacks_image_93.png",url:"www.orchestraltools.com",ensemblepatch:"No",price:"799\u20ac + Vat",sections:["Trombones","Trumpets","Horns","Tuba"]},{title:"Spitfire Symphonic Brass",company:"Spitfire Audio",image:"https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/331/smc0214_portrait_catview.jpg",url:"www.spitfireaudio.com",ensemblepatch:"No",price:"699 Euro incl. Vat",sections:["Trombones","Trumpets","Horns","Tuba","Cimbassi"]},{title:"Cinebrass Core",company:"Cinesamples",image:"https://cinesamples.com/img/product/image/small/mqdymg34bbtrjhftpp9k0oamk93.png",url:"www.cinesamples.com",ensemblepatch:"No",price:"399$ +Vat",sections:["Trombones","Trumpets","Horns","Tuba"]},{title:"Berlin Strings",company:"Orchestral Tools",image:"http://www.orchestraltools.com/libraries/berlin_brass_files/stacks_image_93.png",url:"www.orchestraltools.com",ensemblepatch:"Yes",price:"840\u20ac +Vat","section Sizes":"8, 6, 5, 5, 4",sections:["1. Violins","2. Violins","Violas","Celli","Basses"]},{title:"Spitfire Symphonic Strings",company:"Spitfire Audio",image:"https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/357/smc0224_portrait_catview.jpg",url:"www.spitfireaudio.com",ensemblepatch:"Yes",price:"799\u20ac incl. Vat","section Sizes":"16, 14, 12, 10, 8",sections:["1. Violins","2. Violins","Violas","Celli","Basses"]},{title:"Cinestrings Core",company:"Cinesamples",image:"https://cinesamples.com/img/product/image/small/9jqxx4ebnns3vtjalqzw0dyj972.png",url:"www.cinesamples.com",ensemblepatch:"Yes",price:"499$ +Vat","section Sizes":"16, 12, 10, 10, 7",sections:["1. Violins","2. Violins","Violas","Celli","Basses"]},{title:"Berlin  Woodwinds Revive",company:"Orchestral Tools",image:"http://www.orchestraltools.com/libraries/berlin_woodwinds_revive_files/stacks_image_93.png",url:"www.orchestraltools.com",ensemblepatch:"Yes",price:"649\u20ac +Vat",sections:["Piccolo","Flutes","Alto Flute","Oboe","English Horn","Clarinet","Bassoon"]},{title:"Spitfire Symphonic Woodwinds",company:"Spitfire Audio",image:"https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/380/smc0215_portrait_catview.jpg",url:"www.spitfireaudio.com",ensemblepatch:"No",price:"599\u20ac incl. Vat",sections:["Piccolo","Flutes","Alto Flute","Bass Flute","Oboe","English Horn","Bass Clarinet","Clarinet","Contrabass Clarinet","Bassoon","Contra Bassoon"]},{title:"Cinewinds Core",company:"Cinesamples",image:"https://cinesamples.com/img/product/image/small/5vrxdt7r829qky5rd2mpq9232yk.png0",url:"www.cinesamples.com",ensemblepatch:"Yes",price:"349$ +Vat",sections:["Piccolo","Flutes","Oboe","Clarinet","Bassoon"]}]}},[[16,2,1]]]);
//# sourceMappingURL=main.f11bdd54.chunk.js.map