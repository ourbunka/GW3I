(this.webpackJsonpgw3i=this.webpackJsonpgw3i||[]).push([[0],{117:function(e,t,c){},145:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(39),r=c.n(i),o=(c(117),c(19)),a=c(153),j=(c(64),c(33)),b=c(73),l=c(75),h=c(77),d=c(18),O=(c.p,c(59)),x=c.n(O),g=c(10);var u=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(d.a)(i,2),o=r[0],a=r[1],j=Object(n.useState)([]),h=Object(d.a)(j,2),O=h[0],u=h[1],f=Object(n.useState)([]),m=Object(d.a)(f,2),p=m[0],S=m[1],w=Object(n.useState)([]),v=Object(d.a)(w,2),z=v[0],k=v[1];Object(n.useEffect)((function(){var e=setInterval((function(){y()}),1e4);return function(){return clearInterval(e)}}),[]);var y=function(){return x.a.get("https://ethgas.watch/api/gas").then((function(e){a(e.data.instant),s(e.data),u(e.data.normal),S(e.data.slow)})).catch((function(e){console.log(e)})),x.a.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=E55WW5Q427NJVEX1YXWJBC38XZJYEG6DR6 ").then((function(e){k(e.data.result),console.log(e.data.result)}),console.log(c),console.log(o),console.log(O),console.log(p))};return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(b.b,{children:Object(g.jsxs)(b.a,{w:"20rem",borderRadius:"md",p:"3",children:[Object(g.jsxs)(b.f,{fontSize:"xs",fontWeight:"semibold",children:["eth price: $",c.ethPrice]}),Object(g.jsx)(b.f,{fontSize:"sm"}),Object(g.jsxs)(b.a,{className:"stage",borderRadius:"xl",p:"3",mt:"2%",children:[Object(g.jsxs)(b.f,{color:"white",fontSize:"32pt",fontWeight:"bold",align:"center",children:[z.FastGasPrice," Gwei"]}),Object(g.jsxs)(b.f,{color:"white",fontSize:"xs",align:"center",children:["~ $",Math.round(100*(21e3*z.FastGasPrice/1e9*c.ethPrice+Number.EPSILON))/100]})]})]})}),Object(g.jsx)(b.b,{children:Object(g.jsx)(b.e,{w:"20rem",children:Object(g.jsx)(b.b,{children:Object(g.jsxs)(b.c,{space:3,children:[Object(g.jsxs)(b.a,{p:"2",children:[Object(g.jsx)(b.f,{fontSize:"xs",align:"center",children:"Average Instant"}),Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(b.f,{fontWeight:"semibold",align:"center",children:[o.gwei," Gwei"]}),Object(g.jsxs)(b.f,{fontSize:"xs",align:"center",children:["~ $",o.usd]})]})]}),Object(g.jsxs)(b.a,{p:"2",children:[Object(g.jsx)(b.f,{fontSize:"xs",align:"center",children:"Average Normal"}),Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(b.f,{fontWeight:"semibold",align:"center",children:[O.gwei," Gwei"]}),Object(g.jsxs)(b.f,{fontSize:"xs",align:"center",children:["~ $",O.usd]})]})]}),Object(g.jsxs)(b.a,{p:"2",children:[Object(g.jsx)(b.f,{fontSize:"xs",align:"center",children:"Average Slow"}),Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(b.f,{fontWeight:"semibold",align:"center",children:[p.gwei," Gwei"]}),Object(g.jsxs)(b.f,{fontSize:"xs",align:"center",children:["~ $",p.usd]})]})]})]})})})}),Object(g.jsx)(b.b,{children:Object(g.jsx)(l.a,{size:"sm",position:"fixed",bottom:"3.5%",variant:"outline",colorScheme:"blue",onClick:y,children:"Refresh"})})]})},f=c(13),m=c(38),p=c(35),S=function(e){var t=Object(m.b)().toggleColorMode,c=Object(m.c)("dark","light"),n=Object(m.c)(p.c,p.d);return Object(g.jsx)(l.b,Object(f.a)({_hover:{bg:" rgba(233,212,212,0.2)"},size:"sm",borderRadius:"100",fontSize:"lg","aria-label":"Switch to ".concat(c," mode"),variant:"ghost",color:"current",onClick:t,icon:Object(g.jsx)(n,{})},e))},w=c(152);function v(e){var t=Object.assign({},e),c=Object(n.useRef)(),s=Object(w.a)("https://ourbunka.github.io/GW3I/eth.glb"),i=s.nodes,r=s.materials;return Object(g.jsxs)("group",Object(f.a)(Object(f.a)({ref:c},t),{},{dispose:null,children:[Object(g.jsx)("mesh",{geometry:i.Cube.geometry,material:r["Material.003"]}),Object(g.jsx)("mesh",{geometry:i.Cube001.geometry,material:r["Material.001"]}),Object(g.jsx)("mesh",{geometry:i.shadowmap.geometry,material:r.shadowmap,position:[0,-2.3,0],scale:65.88})]}))}w.a.preload("https://ourbunka.github.io/GW3I/eth.glb");var z=c(62),k=c(76),y=c.p+"static/media/ourbunka_logo.6f04b89f.svg",I=function(e){return Object(g.jsx)(k.a,Object(f.a)({src:y},e))},C=Object(j.b)({config:{initialColorMode:"dark",useSystemColorMode:!1}});function E(){var e=s.a.useRef();return Object(o.b)((function(t){var c=t.clock.getElapsedTime()/3;e.current.rotation.y=c})),Object(g.jsx)("mesh",{ref:e,children:Object(g.jsx)(v,{})})}var R=function(){return Object(g.jsxs)(j.a,{theme:C,children:[Object(g.jsx)(b.d,{zIndex:"1000",to:"/",children:Object(g.jsx)(l.b,{zIndex:"999",_focus:{boxShadow:"none"},size:"md",_hover:{bg:"none"},_active:{bg:"none"},bg:"none",position:"fixed",top:"2.5%",left:"5%",icon:Object(g.jsx)(I,{})})}),Object(g.jsxs)(h.a,{children:[Object(g.jsx)(h.b,{position:"fixed",bottom:"3.5%",left:"5%",as:l.b,"aria-label":"Options",icon:Object(g.jsx)(z.b,{}),variant:"outline"}),Object(g.jsxs)(h.d,{children:[Object(g.jsx)(b.d,{isExternal:!0,href:"https://play.google.com/store/apps/details?id=com.ourbunka.gw3i",children:Object(g.jsx)(h.c,{icon:Object(g.jsx)(p.b,{}),children:"Install App"})}),Object(g.jsx)(b.d,{isExternal:!0,href:"https://github.com/ourbunka/ourGwei-source",children:Object(g.jsx)(h.c,{icon:Object(g.jsx)(p.a,{}),children:"Open Source"})}),Object(g.jsx)(b.d,{isExternal:!0,href:"https://ourbunka.com",children:Object(g.jsx)(h.c,{icon:Object(g.jsx)(z.a,{}),children:"ourbunka.com"})}),Object(g.jsx)(b.f,{color:"grey",fontSize:"xs",marginLeft:"12px",marginRight:"12px",children:"Design by OURBUNKA MOTION"}),Object(g.jsx)(b.f,{marginLeft:"12px",marginRight:"12px",color:"grey",fontSize:"xs",children:"Data Powered by Etherscan.io & ethgas.watch APIs"})]})]}),Object(g.jsx)(S,{position:"fixed",bottom:"3.5%",right:"5%"}),Object(g.jsx)(b.b,{children:Object(g.jsx)(b.a,{w:"28rem",height:"55vh",borderRadius:"xl",children:Object(g.jsx)(o.a,{children:Object(g.jsxs)(n.Suspense,{fallback:null,children:[Object(g.jsx)("hemisphereLight",{}),Object(g.jsx)(E,{}),Object(g.jsx)(a.a,{})]})})})}),Object(g.jsx)(b.a,{children:Object(g.jsx)(u,{})})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,154)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),G()},64:function(e,t,c){}},[[145,1,2]]]);