"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{760:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(439),a=n(157),s=n(791),c=n(87),i="Movies_form__mp42q",u="Movies_title__EqSqF",o="Movies_total__9D3d4",l="Movies_list__JEO-P",p="Movies_list_item__4Iyn+",h="Movies_img__CI9Z3",f="Movies_link__0oDWE",d="Movies_nav_btn__Y62U2",_=n(184),m=function(){var t=(0,s.useState)([]),e=(0,r.Z)(t,2),n=e[0],m=e[1],v=(0,s.useState)(""),g=(0,r.Z)(v,2),x=g[0],b=g[1],Z=(0,s.useState)(!1),j=(0,r.Z)(Z,2),k=j[0],y=j[1],w=(0,s.useState)(!1),N=(0,r.Z)(w,2),S=N[0],M=N[1],C=(0,s.useState)(1),A=(0,r.Z)(C,2),E=A[0],q=A[1],D=(0,s.useState)(1),F=(0,r.Z)(D,2),U=F[0],I=F[1],L=(0,s.useState)(0),P=(0,r.Z)(L,2),R=P[0],Y=P[1],J=(0,c.lr)(),O=(0,r.Z)(J,2),W=O[0],z=O[1],B=W.get("search"),G=W.get("page");return(0,s.useEffect)((function(){B&&G?(0,a.Ai)(B,G).then((function(t){m(t.results),I(t.total_pages),Y(t.total_results),y(!1)})).catch((function(t){M(!0),y(!1)})):(b(""),m([]),Y(0),I(1))}),[B,G]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),x&&(z({search:x,page:E}),y(!0),M(!1),m([]),q(1),I(1),Y(0),(0,a.Ai)(x,E).then((function(t){m(t.results),I(t.total_pages),Y(t.total_results),y(!1)})).catch((function(t){M(!0),y(!1)})))},children:[(0,_.jsx)("input",{type:"text",value:x,onChange:function(t){return b(t.target.value)}}),(0,_.jsx)("button",{type:"submit",children:"Search"})]}),k&&(0,_.jsx)("div",{children:"Loading..."}),S&&(0,_.jsx)("div",{children:"Error"}),n&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{className:u,children:"Results"}),(0,_.jsxs)("p",{className:o,children:[R," results found"]}),(0,_.jsx)("ul",{className:l,children:n&&n.map((function(t){return(0,_.jsxs)("li",{className:p,children:[t.poster_path&&(0,_.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,_.jsx)(c.rU,{className:f,to:"/movies/".concat(t.id),children:t.title})]},t.id)}))}),(0,_.jsx)("button",{className:d,onClick:function(){E>1&&(q(E-1),z({search:x,page:E-1}),(0,a.Ai)(x,E-1).then((function(t){m(t.results)})).catch((function(t){M(!0)})))},disabled:1===E,children:"Previous"}),(0,_.jsx)("button",{className:d,onClick:function(){E<U&&(q(E+1),z({search:x,page:E+1}),(0,a.Ai)(x,E+1).then((function(t){m(n.concat(t.results))})).catch((function(t){M(!0)})))},disabled:E===U,children:"Next"})]})]})}},157:function(t,e,n){n.d(e,{Ai:function(){return l},Y5:function(){return h},wr:function(){return u}});var r=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4c250d742d3fa1acbadc30066c33a3e2";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function t(e,n){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?".concat(i,"&query=").concat(e,"&page=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=653.a97e08df.chunk.js.map