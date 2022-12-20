"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[177],{639:function(n,e,r){r.d(e,{a:function(){return a}});var t="Loader_loader__+lRPl",i=r(402),o=r(184);function a(){return(0,o.jsx)("div",{className:t,children:(0,o.jsx)(i.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},177:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,i,o,a,s,l,c,d,p,u,x,h,v=r(439),f=r(791),m=r(689),g=r(639),j=r(861),Z=r(757),b=r.n(Z),w=r(44),_=function(){var n=(0,j.Z)(b().mark((function n(e){var r,t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/movie/".concat(e),baseURL:"https://api.themoviedb.org/3",params:{api_key:"3a42e00052134f7762239baa2e36d5a3"}},n.next=3,(0,w.ZP)(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),P=r(644),y=r(168),k=r(444),S=k.ZP.div(t||(t=(0,y.Z)(["\n  padding: 20px 10px;\n"]))),U=k.ZP.h2(i||(i=(0,y.Z)(["\n  /* text-align: center; */\n  margin-bottom: 20px;\n"]))),C=k.ZP.h2(o||(o=(0,y.Z)(["\n  /* text-align: center; */\n  margin-bottom: 15px;\n"]))),F=k.ZP.p(a||(a=(0,y.Z)(["\n  margin-bottom: 20px;\n"]))),L=k.ZP.ul(s||(s=(0,y.Z)(["\n  display: flex;\n  gap: 20px;\n\n  /* justify-content: center; */\n"]))),G=k.ZP.p(l||(l=(0,y.Z)(["\n  margin-bottom: 10px;\n\n  font-size: 18px;\n  /* text-align: center; */\n"]))),O=r(184),R=function(n){var e=n.poster_path,r=n.title,t=n.vote_average,i=n.overview,o=n.genres;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("img",{src:null===e?P:"https://image.tmdb.org/t/p/w500/".concat(e),alt:r,width:"300"}),(0,O.jsxs)(S,{children:[(0,O.jsx)(U,{children:r}),(0,O.jsxs)(G,{children:["User Score: ",Math.round(10*t),"%"]}),(0,O.jsx)(C,{children:"Overview"}),(0,O.jsx)(F,{children:i}),(0,O.jsx)(C,{children:"Genres"}),(0,O.jsx)(L,{children:null===o||void 0===o?void 0:o.map((function(n){var e=n.id,r=n.name;return(0,O.jsx)("li",{children:r},e)}))})]})]})},z=r(87),H=k.ZP.h3(c||(c=(0,y.Z)(["\n  margin-left: 20px;\n  margin-bottom: 15px;\n"]))),N=k.ZP.ul(d||(d=(0,y.Z)(["\n  margin-left: 50px;\n  margin-bottom: 15px;\n  list-style-type: disc;\n"]))),T=k.ZP.li(p||(p=(0,y.Z)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n\n  :hover,\n  :focus {\n    color: #2196f3;\n  }\n"]))),A=function(){var n,e,r,t,i=(0,m.TH)();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(H,{children:"Additional information"}),(0,O.jsxs)(N,{children:[(0,O.jsx)(T,{children:(0,O.jsx)(z.rU,{to:"cast",state:null!==(n={from:null===(e=i.state)||void 0===e?void 0:e.from})&&void 0!==n?n:"/",children:"Cast"})}),(0,O.jsx)(T,{children:(0,O.jsx)(z.rU,{to:"reviews",state:null!==(r={from:null===(t=i.state)||void 0===t?void 0:t.from})&&void 0!==r?r:"/",children:"Reviews"})})]})]})},E=k.ZP.section(u||(u=(0,y.Z)(["\n  margin: 20px 20px;\n\n  border-bottom: 2px solid;\n"]))),I=k.ZP.div(x||(x=(0,y.Z)(["\n  padding: 10px;\n  display: flex;\n  gap: 30px;\n"]))),M=(0,k.ZP)(z.rU)(h||(h=(0,y.Z)(["\n  display: inline-block;\n  padding: 4px 8px;\n  margin-left: 10px;\n\n  border: 2px solid;\n  border-radius: 6px;\n\n  :hover,\n  :focus {\n    border-color: #2196f3;\n  }\n"]))),V=function(){var n,e,r=(0,f.useState)([]),t=(0,v.Z)(r,2),i=t[0],o=t[1],a=(0,f.useState)(!1),s=(0,v.Z)(a,2),l=s[0],c=s[1],d=(0,f.useState)(null),p=(0,v.Z)(d,2),u=p[0],x=p[1],h=(0,m.UO)().movieId,j=(0,m.TH)();(0,f.useEffect)((function(){c(!0),_(h).then((function(n){o(n)})).catch((function(n){return x(n.message)})).finally((function(){c(!1)}))}),[h]);var Z=i.poster_path,b=i.title,w=i.vote_average,P=i.overview,y=i.genres,k=null!==(n=null===(e=j.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(E,{children:[j.state?(0,O.jsx)(M,{to:k,children:"Go back"}):(0,O.jsx)(M,{to:"/",children:"Go back"}),(0,O.jsxs)(I,{children:[l&&(0,O.jsx)(g.a,{}),u&&(0,O.jsxs)("p",{children:["Oops, some error:",u]}),i&&(0,O.jsx)(R,{poster_path:Z,title:b,vote_average:w,overview:P,genres:y})]})]}),(0,O.jsx)(E,{children:(0,O.jsx)(A,{})}),(0,O.jsx)(f.Suspense,{fallback:null,children:(0,O.jsx)(m.j3,{})})]})}},644:function(n,e,r){n.exports=r.p+"static/media/imgNotFound.241d11dc56f5358139f3.jpg"}}]);
//# sourceMappingURL=177.4ab1c260.chunk.js.map