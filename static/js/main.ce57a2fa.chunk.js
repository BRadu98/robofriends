(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{134:function(e,t,n){},136:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(10),s=n.n(o),a=(n(134),n(2)),i=function(e){var t=e.name,n=e.email,r=e.id;return Object(a.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(a.jsx)("div",{children:t.map((function(e,n){return Object(a.jsx)(i,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=(n(136),function(e){return console.log(e),Object(a.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})}),d=n(123),l=n(124),j=n(130),O=n(129),g=(n(137),function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"That is not good.Err"}):this.props.children}}]),n}(r.Component)),f="CHANGE_SEARCH_FIELD",p="REQUEST_ROBOTS_PENDING",v="REQUEST_ROBOTS_SUCCESS",x="REQUEST_ROBOTS_FAILED",m=n(51);var y=Object(m.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:f,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:p}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:v,payload:t})})).catch((function(t){return e({type:x,payload:t})}))}))}}}))((function(e){var t=e.searchField,n=e.onSearchChange,c=e.onRequestRobots,o=e.robots,s=e.isPending;Object(r.useEffect)((function(){c()}),[c]);var i=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?Object(a.jsx)("h1",{children:"Loading"}):Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(a.jsx)(b,{searchChange:n}),Object(a.jsx)(u,{children:Object(a.jsx)(g,{children:Object(a.jsx)(h,{robots:i})})})]})})),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,438)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))},R=n(53),C=(n(436),n(77)),S={searchField:""},F={isPending:!1,robots:[],error:""},w=n(127),P=n(128),T=Object(w.createLogger)(),L=Object(R.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object(C.a)(Object(C.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object.assign({},e,{isPending:!0});case v:return Object.assign({},e,{robots:t.payload,isPending:!1});case x:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(R.c)(L,Object(R.a)(P.a,T));s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m.a,{store:N,children:Object(a.jsx)(y,{})})}),document.getElementById("root")),E()}},[[437,1,2]]]);
//# sourceMappingURL=main.ce57a2fa.chunk.js.map