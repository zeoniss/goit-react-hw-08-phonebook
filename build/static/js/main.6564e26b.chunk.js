(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{105:function(t,e,n){"use strict";n.r(e);var r,c,a,o=n(0),u=n.n(o),i=n(32),s=n.n(i),b=n(12),l=n(19),j=n(62),d=n(41),O=n(4),f=n(22),g=n(63),h=n.n(g),p=n(3),x=n(10),m=n(6),v=Object(O.c)([],(r={},Object(p.a)(r,m.i,(function(t,e){return e.payload})),Object(p.a)(r,m.c,(function(t,e){var n=e.payload;return[].concat(Object(d.a)(t),[n])})),Object(p.a)(r,m.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),k=Object(O.c)(!1,(c={},Object(p.a)(c,m.b,(function(){return!0})),Object(p.a)(c,m.c,(function(){return!1})),Object(p.a)(c,m.a,(function(){return!1})),Object(p.a)(c,m.e,(function(){return!0})),Object(p.a)(c,m.f,(function(){return!1})),Object(p.a)(c,m.d,(function(){return!1})),Object(p.a)(c,m.h,(function(){return!0})),Object(p.a)(c,m.i,(function(){return!1})),Object(p.a)(c,m.g,(function(){return!1})),c)),y=Object(O.c)(!1,(a={},Object(p.a)(a,m.b,(function(){return!1})),Object(p.a)(a,m.c,(function(){return!1})),Object(p.a)(a,m.a,(function(){return!0})),Object(p.a)(a,m.e,(function(){return!1})),Object(p.a)(a,m.f,(function(){return!1})),Object(p.a)(a,m.d,(function(){return!0})),Object(p.a)(a,m.h,(function(){return!1})),Object(p.a)(a,m.i,(function(){return!1})),Object(p.a)(a,m.g,(function(){return!0})),a)),C=Object(O.c)("",Object(p.a)({},m.j,(function(t,e){return e.payload}))),S=Object(x.b)({contacts:v,filter:C,loading:k,error:y}),w=n(36),E=Object(d.a)(Object(O.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),R={key:"auth",storage:h.a,whitelist:["token"]},U=Object(O.a)({reducer:{phonebook:S,auth:Object(f.g)(R,w.a)},middleware:E}),A={store:U,persistor:Object(f.h)(U)},q=(n(82),n(48)),I=n(49),L=n(51),z=n(50),T=n(8),B=n(122),W=n(14),D=n(119),G=n(2),N=Object(D.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"white"}}})),P=Object(b.b)((function(t){return{isAuthenticated:W.b.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated,n=N();return Object(G.jsxs)("nav",{children:[Object(G.jsx)(l.b,{to:"/",exact:!0,className:n.link,activeStyle:{backgroundColor:"white",color:"#3f51b5"},children:"Home"}),e&&Object(G.jsx)(l.b,{to:"/contacts",exact:!0,className:n.link,activeStyle:{backgroundColor:"white",color:"#3f51b5"},children:"Contacts"})]})})),_={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12},button:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"white",backgroundColor:"inherit",border:"transparent"}},H={onLogout:W.a.logOut},J=Object(b.b)((function(t){return{name:W.b.getUsername(t)}}),H)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(G.jsxs)("div",{style:_.container,children:[Object(G.jsx)("img",{src:e,alt:"",width:"32",style:_.avatar}),Object(G.jsxs)("span",{style:_.name,children:["Welcome, ",n]}),Object(G.jsx)("button",{style:_.button,type:"button",onClick:r,children:"Logout"})]})})),M={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"white"},activeLink:{backgroundColor:"white",color:"#3f51b5"}},K=function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(l.b,{to:"/register",exact:!0,style:M.link,activeStyle:M.activeLink,children:"Register"}),Object(G.jsx)(l.b,{to:"/login",exact:!0,style:M.link,activeStyle:M.activeLink,children:"Login"})]})},V=Object(D.a)((function(t){return{header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}}})),F=Object(b.b)((function(t){return{isAuthenticated:W.b.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated,n=V();return Object(G.jsxs)("header",{className:n.header,children:[Object(G.jsx)(P,{}),e?Object(G.jsx)(J,{}):Object(G.jsx)(K,{})]})})),Q=n(68),X=n.n(Q),Y=function(t){var e=t.children;return Object(G.jsx)("div",{className:X.a.Container,children:e})},Z=n(24),$=n(42),tt=Object(b.b)((function(t){return{isAuthenticated:W.b.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object($.a)(t,["component","isAuthenticated","redirectTo"]);return Object(G.jsx)(T.b,Object(Z.a)(Object(Z.a)({},c),{},{render:function(t){return n?Object(G.jsx)(e,Object(Z.a)({},t)):Object(G.jsx)(T.a,{to:r})}}))})),et=Object(b.b)((function(t){return{isAuthenticated:W.b.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object($.a)(t,["component","isAuthenticated","redirectTo"]);return Object(G.jsx)(T.b,Object(Z.a)(Object(Z.a)({},c),{},{render:function(t){return n&&c.restricted?Object(G.jsx)(T.a,{to:r}):Object(G.jsx)(e,Object(Z.a)({},t))}}))})),nt=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,154))})),rt=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,155))})),ct=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,156))})),at=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,158))})),ot=function(t){Object(L.a)(n,t);var e=Object(z.a)(n);function n(){return Object(q.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurretnUser()}},{key:"render",value:function(){return Object(G.jsxs)(Y,{children:[Object(G.jsx)(B.a,{children:Object(G.jsx)(F,{})}),Object(G.jsx)(o.Suspense,{fallback:Object(G.jsx)("p",{children:"Loading..."}),children:Object(G.jsxs)(T.d,{children:[Object(G.jsx)(T.b,{exact:!0,path:"/",component:nt}),Object(G.jsx)(et,{path:"/register",restricted:!0,redirectTo:"/contacts",component:rt}),Object(G.jsx)(et,{path:"/login",restricted:!0,redirectTo:"/contacts",component:ct}),Object(G.jsx)(tt,{path:"/contacts",component:at,redirectTo:"/login"}),Object(G.jsx)(T.a,{to:"/"})]})})]})}}]),n}(o.Component),ut={onGetCurretnUser:W.a.getCurrentUser},it=Object(b.b)(null,ut)(ot);s.a.render(Object(G.jsx)(u.a.StrictMode,{children:Object(G.jsx)(b.a,{store:A.store,children:Object(G.jsx)(j.a,{loading:null,persistor:A.persistor,children:Object(G.jsx)(l.a,{children:Object(G.jsx)(it,{})})})})}),document.getElementById("root"))},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return j}));var r=n(5),c=(n(36),n(21)),a=n.n(c),o=n(29),u=n(23),i=n.n(u);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},l={register:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(r.a.registerRequest()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:c=e.sent,s(c.data.token),n(r.a.registerSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(r.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(r.a.logoutRequest()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:b(),e(r.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(r.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(r.a.loginRequest()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:c=e.sent,s(c.data.token),n(r.a.loginSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(r.a.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(o.a)(a.a.mark((function t(e,n){var c,o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),o=c.auth.token){t.next=4;break}return t.abrupt("return");case 4:return s(o),e(r.a.getCurrentUserRequest()),t.prev=6,t.next=9,i.a.get("/users/current");case 9:u=t.sent,e(r.a.getCurrentUserSuccess(u.data)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),e(r.a.getCurrentUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e,n){return t.apply(this,arguments)}}()}},j={getIsAuthenticated:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name}}},36:function(t,e,n){"use strict";var r,c,a,o,u=n(3),i=n(10),s=n(4),b=n(5),l={name:null,email:null},j=Object(s.c)(l,(r={},Object(u.a)(r,b.a.registerSuccess,(function(t,e){return e.payload.user})),Object(u.a)(r,b.a.loginSuccess,(function(t,e){return e.payload.user})),Object(u.a)(r,b.a.logoutSuccess,(function(t,e){return l})),Object(u.a)(r,b.a.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),d=Object(s.c)(null,(c={},Object(u.a)(c,b.a.registerSuccess,(function(t,e){return e.payload.token})),Object(u.a)(c,b.a.loginSuccess,(function(t,e){return e.payload.token})),Object(u.a)(c,b.a.logoutSuccess,(function(t,e){return null})),c)),O=Object(s.c)(null,(a={},Object(u.a)(a,b.a.registerError,(function(t,e){return e.payload})),Object(u.a)(a,b.a.loginError,(function(t,e){return e.payload})),Object(u.a)(a,b.a.logoutError,(function(t,e){return e.payload})),Object(u.a)(a,b.a.getCurrentUserError,(function(t,e){return e.payload})),a)),f=Object(s.c)(!1,(o={},Object(u.a)(o,b.a.registerSuccess,(function(){return!0})),Object(u.a)(o,b.a.loginSuccess,(function(){return!0})),Object(u.a)(o,b.a.getCurrentUserSuccess,(function(){return!0})),Object(u.a)(o,b.a.registerError,(function(){return!1})),Object(u.a)(o,b.a.loginError,(function(){return!1})),Object(u.a)(o,b.a.getCurrentUserError,(function(){return!1})),Object(u.a)(o,b.a.logoutSuccess,(function(){return!1})),o));e.a=Object(i.b)({user:j,token:d,error:O,isLoggedIn:f})},5:function(t,e,n){"use strict";var r=n(4),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),i=Object(r.b)("auth/loginSuccess"),s=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),l=Object(r.b)("auth/logoutSuccess"),j=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),O=Object(r.b)("auth/getCurrentUserSuccess"),f=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:c,registerSuccess:a,registerError:o,logoutRequest:b,logoutSuccess:l,logoutError:j,loginRequest:u,loginSuccess:i,loginError:s,getCurrentUserRequest:d,getCurrentUserSuccess:O,getCurrentUserError:f}},6:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return l})),n.d(e,"g",(function(){return j})),n.d(e,"j",(function(){return d}));var r=n(4),c=Object(r.b)("contacts/addContactRequest"),a=Object(r.b)("contacts/addContactSuccess"),o=Object(r.b)("contacts/addContactError"),u=Object(r.b)("contacts/deleteContactRequest"),i=Object(r.b)("contacts/deleteContactSuccess"),s=Object(r.b)("contacts/deleteContactError"),b=Object(r.b)("contacts/fetchContactRequest"),l=Object(r.b)("contacts/fetchContactSuccess"),j=Object(r.b)("contacts/fetchContactError"),d=Object(r.b)("contacts/filterChange")},68:function(t,e,n){t.exports={Container:"Container_Container__KucHV"}},82:function(t,e,n){}},[[105,2,3]]]);
//# sourceMappingURL=main.6564e26b.chunk.js.map