(this["webpackJsonpzad_rekrut-proexe-administarator_dashboard_in_redux_react"]=this["webpackJsonpzad_rekrut-proexe-administarator_dashboard_in_redux_react"]||[]).push([[0],{195:function(e,t,c){"use strict";c.r(t);var a=c(30),s=c.n(a),n=c(17),r=c.n(n),i=c(32),l=c(0),o=(c(83),c(21)),d=c(74),j=c.n(d),b=c(33),u=Object(b.b)({name:"users",initialState:{loading:!1,users:[],error:""},reducers:{addNewUser:function(e,t){e.users.push({id:void 0!=e.users[0]?e.users[e.users.length-1].id+1:1,name:t.payload.name,email:t.payload.email,username:t.payload.username,address:{city:t.payload.city}})},deleteNew:function(e,t){var c=e.users.filter((function(e){return e.id!==t.payload.id}));return Object(o.a)(Object(o.a)({},e),{},{users:c})},fetchUsersRequest:function(e){return Object(o.a)(Object(o.a)({},e),{},{loading:!0})},fetchUsersSuccess:function(e,t){return{loading:!1,users:t.payload,error:""}},fetchUsersFailure:function(e,t){return{loading:!1,users:[],error:t.payload}}}}),m=u.actions,h=m.fetchUsersRequest,O=m.fetchUsersSuccess,x=m.fetchUsersFailure,p=m.addNewUser,f=m.deleteNew,v=u.reducer,N=c(13),y=c(3),g=c.p+"static/media/BgGreen.a17d9a1b.jpg",C=c(4),k=c(14),w=c(76),U=c.n(w),S=c(47),_=c(1);function E(e){var t=e.open,c=e.onClose,a=e.deleteUser;return Object(_.jsx)("div",{className:"DeleteConfirmModal-animation",children:Object(_.jsx)(S.a,{exitBeforeEnter:!0,children:t&&Object(_.jsxs)(S.b.div,{initial:{opacity:0,zIndex:3e3},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:[Object(_.jsx)("div",{className:"Modal-Overlay"}),Object(_.jsxs)("div",{className:"Modal-Style DeleteConfirmModal",children:[Object(_.jsx)("div",{children:Object(_.jsx)("h4",{children:"Do you really want to delete this user?"})}),Object(_.jsxs)("div",{className:"confirmation-buttons",children:[Object(_.jsx)("button",{className:"btn btn-danger btn-confirmation",onClick:a,children:"Yes"}),Object(_.jsx)("button",{className:"btn btn-primary btn-confirmation",onClick:c,children:"No"})]})]})]})})})}function D(){var e=Object(N.c)((function(e){return e.user.users})),t=Object(N.b)(),c=Object(l.useState)([]),a=Object(C.a)(c,2),s=a[0],n=a[1],r=Object(l.useState)(!1),i=Object(C.a)(r,2),o=i[0],d=i[1],j=Object(l.useState)(),b=Object(C.a)(j,2),u=b[0],m=b[1],h=Object(l.useState)("asc"),O=Object(C.a)(h,2),x=O[0],p=O[1],v=Object(l.useState)(""),y=Object(C.a)(v,2),g=y[0],w=y[1];Object(l.useEffect)((function(){n(e)}),[e]);var S=function(e){var t;t=g!==e.target.id?"asc":"asc"===x?"desc":"asc",p(t),w(e.target.id),n(U()(s,e.target.id,t))};return Object(_.jsxs)("div",{className:"UsersDashboardElement",children:[Object(_.jsxs)("div",{className:"UsersDashboardConainer",children:[Object(_.jsx)("h1",{children:"Dashboard"}),Object(_.jsxs)("div",{className:"tableContainer col-xl-2 col-md-3 col-4",children:[Object(_.jsxs)("div",{className:"topTable",children:[Object(_.jsx)("div",{className:"userList",children:Object(_.jsx)("h3",{children:"User list"})}),Object(_.jsx)("div",{children:Object(_.jsx)(k.b,{to:"/additem",className:"linkStyle",children:Object(_.jsx)("button",{className:"addNew btn btn-primary",children:"Add new"})})})]}),Object(_.jsxs)("div",{className:"resTable",children:[Object(_.jsxs)("table",{className:"table",children:[Object(_.jsx)("thead",{className:"thead",children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{scope:"col",id:"id",className:"sort",onClick:function(e){return S(e)},children:"Id"}),Object(_.jsx)("th",{scope:"col",id:"name",className:"sort",onClick:function(e){return S(e)},children:"Name"}),Object(_.jsx)("th",{scope:"col",id:"username",className:"sort",onClick:function(e){return S(e)},children:"Username"}),Object(_.jsx)("th",{scope:"col",id:"email",className:"sort",onClick:function(e){return S(e)},children:"Email"}),Object(_.jsx)("th",{scope:"col",id:"address.city",className:"sort",onClick:function(e){return S(e)},children:"City"}),Object(_.jsx)("th",{scope:"col",children:"Edit"}),Object(_.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(_.jsx)("tbody",{children:s.length>0&&s.map((function(e){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{scope:"row",children:e.id}),Object(_.jsx)("td",{children:e.name}),Object(_.jsx)("td",{children:e.username}),Object(_.jsx)("td",{children:e.email}),Object(_.jsx)("td",{children:e.address.city}),Object(_.jsx)("td",{children:Object(_.jsx)("button",{className:"btn btn-warning",children:"edit"})}),Object(_.jsx)("td",{children:Object(_.jsx)("button",{className:"btn btn-danger",onClick:function(t){return function(e,t){e.preventDefault(),console.log(t),m(t),d(!0)}(t,e.id)},children:"delete"})})]},e.id)}))})]}),Object(_.jsx)("div",{className:"noUsers",children:!s.length&&"No users in database"})]})]})]}),Object(_.jsx)(E,{open:o,onClose:function(){return d(!1)},deleteUser:function(){t(f({id:u})),d(!1)}})]})}var I=function(e){var t=Object(l.useState)(e),c=Object(C.a)(t,2),a=c[0],s=c[1];return[a,s,function(e){s(e.target.value)},function(){s("")}]};function F(){var e=I(""),t=Object(C.a)(e,4),c=t[0],a=(t[1],t[2]),s=(t[3],I("")),n=Object(C.a)(s,4),r=n[0],i=(n[1],n[2]),o=(n[3],I("")),d=Object(C.a)(o,4),j=d[0],b=(d[1],d[2]),u=(d[3],I("")),m=Object(C.a)(u,4),h=m[0],O=(m[1],m[2]),x=(m[3],Object(l.useState)("")),f=Object(C.a)(x,2),v=f[0],g=f[1],w=Object(l.useState)(""),U=Object(C.a)(w,2),S=U[0],E=U[1],D=Object(l.useState)(""),F=Object(C.a)(D,2),B=F[0],q=F[1],z=Object(l.useState)(""),M=Object(C.a)(z,2),J=M[0],R=M[1],T=Object(N.b)(),W=Object(y.f)(),Y=function(){var e=!0;return""===c&&(g("name input is mandatory"),e=!1),""===r&&(E("username input is mandatory"),e=!1),""===j&&(q("email input is mandatory"),e=!1),j.includes("@")||(q("invalid email. You didn't add @"),e=!1),""===h&&(R("city input is mandatory"),e=!1),e};return Object(_.jsx)("div",{className:"UsersDashboardElement",children:Object(_.jsxs)("div",{className:"UsersDashboardConainer",children:[Object(_.jsx)("h1",{children:"Dashboard"}),Object(_.jsxs)("div",{className:"formContainer col-xl-2 col-md-3 col-4",children:[Object(_.jsx)("div",{className:"topForm",children:Object(_.jsx)("h4",{children:"Form"})}),Object(_.jsx)("div",{className:"bottomForm",children:Object(_.jsxs)("form",{children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"nameInp",children:"Name"}),Object(_.jsx)("input",{type:"text",className:"form-control "+(v&&"is-invalid"),id:"nameInp",placeholder:"name",value:c,onChange:a,required:!0}),Object(_.jsx)("p",{className:"formError",children:v})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"usernameInput",children:"Username"}),Object(_.jsx)("input",{type:"text",className:"form-control "+(S&&"is-invalid"),id:"usernameInput",placeholder:"username",value:r,onChange:i,required:!0}),Object(_.jsx)("p",{className:"formError",children:S})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"emailInput",children:"Email"}),Object(_.jsx)("input",{type:"text",className:"form-control "+(B&&"is-invalid"),id:"emailInput",placeholder:"email",value:j,onChange:b,required:!0}),Object(_.jsx)("p",{className:"formError",children:B})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"cityInput",children:"City"}),Object(_.jsx)("input",{type:"text",className:"form-control "+(J&&"is-invalid"),id:"cityInput",placeholder:"city",value:h,onChange:O,required:!0}),Object(_.jsx)("p",{className:"formError",children:J})]}),Object(_.jsxs)("div",{className:"formBtns",children:[Object(_.jsx)(k.b,{to:"/",className:"linkStyle",children:Object(_.jsx)("button",{className:"formBtn btn btn-warning",children:"Cancel"})}),Object(_.jsx)("button",{type:"submit",className:"formBtn btn btn-primary",onClick:function(e){e.preventDefault(),g(""),E(""),q(""),R("");var t=Y();console.log(t),t&&(T(p({name:c,username:r,email:j,city:h})),W.push("/"))},children:"Submit"})]})]})})]})]})})}function B(){var e=Object(N.b)();return Object(l.useEffect)(Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(function(){var e=Object(i.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h()),e.prev=1,e.next=4,j.a.get("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data");case 4:c=e.sent,t(O(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(x(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"cardsContainer",children:Object(_.jsxs)(y.c,{children:[Object(_.jsx)(y.a,{exact:!0,path:"/",render:function(){return Object(_.jsx)(D,{})}}),Object(_.jsx)(y.a,{exact:!0,path:"/additem",render:function(){return Object(_.jsx)(F,{})}})]})}),Object(_.jsx)("img",{src:g,className:"BgImage"})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=c(77),z=c.n(q),M=c(7),J=Object(M.c)({user:v}),R=Object(b.a)({reducer:J,middleware:function(e){return e().concat(z.a)}});s.a.render(Object(_.jsx)(k.a,{basename:"/zad_rekrut-proexe-administarator_dashboard_in_redux_react",children:Object(_.jsx)(N.a,{store:R,children:Object(_.jsx)(B,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,c){}},[[195,1,2]]]);
//# sourceMappingURL=main.112f4421.chunk.js.map