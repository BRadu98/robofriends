(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{134:function(e,n,t){},136:function(e,n,t){},437:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(10),i=t.n(c),s=(t(134),t(2)),a=function(e){var n=e.name,t=e.email,r=e.id;return Object(s.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(s.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:n}),Object(s.jsx)("p",{children:t})]})]})},l=function(e){var n=e.robots;return Object(s.jsx)("div",{children:n.map((function(e,t){return Object(s.jsx)(a,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},d=function(e){var n=e.searchChange;return Object(s.jsx)("div",{className:"pa2",children:Object(s.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},h=(t(136),function(e){return console.log(e),Object(s.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})}),u=t(123),b=t(124),f=t(130),g=t(129),j=(t(137),function(e){Object(f.a)(t,e);var n=Object(g.a)(t);function t(e){var r;return Object(u.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(b.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(s.jsx)("h1",{children:"That is not good.Err"}):this.props.children}}]),t}(r.Component)),v="CHANGE_SEARCH_FIELD",p="REQUEST_ROBOTS_PENDING",O="REQUEST_ROBOTS_SUCCESS",w="REQUEST_ROBOTS_FAILED",m=t(51);var x=Object(m.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:v,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:p}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:O,payload:n})})).catch((function(n){return e({type:w,payload:n})}))}))}}}))((function(e){var n=e.searchField,t=e.onSearchChange,o=e.onRequestRobots,c=e.robots,i=e.isPending;Object(r.useEffect)((function(){o()}),[o]);var a=c.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return i?Object(s.jsx)("h1",{children:"Loading"}):Object(s.jsxs)("div",{className:"tc",children:[Object(s.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(s.jsx)(d,{searchChange:t}),Object(s.jsx)(h,{children:Object(s.jsx)(j,{children:Object(s.jsx)(l,{robots:a})})})]})})),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,438)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))},E=t(53),R=(t(436),t(77)),S={searchField:""},C={isPending:!1,robots:[],error:""},k=t(127),F=t(128),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=Object(k.createLogger)(),N=Object(E.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case v:return Object(R.a)(Object(R.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case p:return Object.assign({},e,{isPending:!0});case O:return Object.assign({},e,{robots:n.payload,isPending:!1});case w:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),W=Object(E.c)(N,Object(E.a)(F.a,L));i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(m.a,{store:W,children:Object(s.jsx)(x,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(n,e)}))}}(),y()}},[[437,1,2]]]);
//# sourceMappingURL=main.e716daf2.chunk.js.map