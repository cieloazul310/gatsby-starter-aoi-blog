(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{GOhF:function(e,t,a){"use strict";a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("1c7q"),a("jr56");var r=a("mXGw"),n=a("R82R"),l=a("ozoj"),c=a("BQn0"),i=a("/ZiB"),o=a("1LRU"),u=a("bLdV"),s=a("7bDs"),d=a.n(s),m=a("Vjni"),f=a.n(m),h=a("HeAU"),v=a.n(h),p=a("MU2d"),b=a("h/Rp");var E=Object(n.a)((function(e){return Object(l.a)({avatar:{width:e.spacing(9),height:e.spacing(9)},item:{marginRight:e.spacing(1)}})}));t.a=function(e){var t,a,n=e.author,l=e.disableLink,s=void 0!==l&&l,m=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["author","disableLink"]),h=E();if(!n)return null;var g=n.name,y=n.url,x=n.twitter,w=n.github,j=n.avatar,O=n.description,A=null==j||null===(t=j.childImageSharp)||void 0===t||null===(a=t.fluid)||void 0===a?void 0:a.src;return r.createElement(c.a,Object.assign({display:"flex",alignItems:"center"},m),r.createElement(u.a,{className:h.avatar,alt:null!=g?g:"Author",src:A},A?null:r.createElement(b.c,null)),r.createElement(c.a,{display:"flex",flexDirection:"column",pl:2},r.createElement(i.a,{variant:"h6"},g),r.createElement(i.a,{variant:"body2",gutterBottom:!0},O),r.createElement(i.a,{variant:"body2"},x?r.createElement(o.a,{className:h.item,href:"https://twitter.com/"+x,color:"inherit"},r.createElement(d.a,null)):null,y?r.createElement(o.a,{className:h.item,href:y,color:"inherit"},r.createElement(v.a,null)):null,w?r.createElement(o.a,{className:h.item,href:"https://github.com/"+w,color:"inherit"},r.createElement(f.a,null)):null),s?null:r.createElement(i.a,{variant:"body2"},r.createElement(p.b,{to:"/author/"+g},"記事一覧へ"))))}},HeAU:function(e,t,a){"use strict";a("hBi6");var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mXGw")),l=(0,r(a("c9Um")).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");t.default=l},P8ES:function(e,t,a){"use strict";var r=a("mXGw"),n=a("u44p"),l=a("NUsa"),c=a("YZpo"),i=a("5bSt"),o=a("xR0W"),u=a.n(o),s=a("ylWx"),d=a.n(s),m=a("HexO");t.a=function(e){var t=e.previous,a=e.next;return r.createElement(n.a,{subheader:r.createElement(l.a,null,"Navigation")},t?r.createElement(m.a,{button:!0,to:t.to},r.createElement(c.a,null,r.createElement(u.a,null)),r.createElement(i.a,{primary:t.title,secondary:"prev"})):null,a?r.createElement(m.a,{button:!0,to:a.to},r.createElement(c.a,null,r.createElement(d.a,null)),r.createElement(i.a,{primary:a.title,secondary:"next"})):null)}},Zfvn:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("mXGw"),n=a("BQn0"),l=a("xR0W"),c=a.n(l),i=a("ylWx"),o=a.n(i),u=a("MU2d");function s(e,t){return void 0===t&&(t=""),e?{to:t+"/"+e.fieldValue,title:e.fieldValue}:null}function d(e,t,a){return void 0===a&&(a=""),{previous:s(e,a),next:s(t,a)}}t.b=function(e){var t=e.previous,a=e.next,l=e.center;return r.createElement(n.a,{py:4},r.createElement(n.a,{textAlign:"left",py:1},t?r.createElement(u.a,{to:t.to},r.createElement(c.a,null)," ",t.title):null),r.createElement(n.a,{textAlign:"right",py:1},a?r.createElement(u.a,{to:a.to},a.title," ",r.createElement(o.a,null)):null),r.createElement(n.a,{textAlign:"center"},r.createElement(u.a,{to:l.to},l.title)))}},bLdV:function(e,t,a){"use strict";var r=a("Fcif"),n=a("dV/x"),l=a("mXGw"),c=a("PDtE"),i=a("gbh0"),o=a("I9Y2"),u=Object(o.a)(l.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=l.forwardRef((function(e,t){var a=e.alt,i=e.children,o=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,f=e.imgProps,h=e.sizes,v=e.src,p=e.srcSet,b=e.variant,E=void 0===b?"circle":b,g=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,x=function(e){var t=e.src,a=e.srcSet,r=l.useState(!1),n=r[0],c=r[1];return l.useEffect((function(){if(t||a){c(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&c("loaded")},r.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),n}({src:v,srcSet:p}),w=v||p,j=w&&"error"!==x;return y=j?l.createElement("img",Object(r.a)({alt:a,src:v,srcSet:p,sizes:h,className:o.img},f)):null!=i?i:w&&a?a[0]:l.createElement(u,{className:o.fallback}),l.createElement(m,Object(r.a)({className:Object(c.a)(o.root,o.system,o[E],s,!j&&o.colorDefault),ref:t},g),y)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},qPpN:function(e,t,a){"use strict";a.r(t),a.d(t,"authorQuery",(function(){return s}));a("1c7q");var r=a("mXGw"),n=a("Hrku"),l=a("7zBi"),c=a("GOhF"),i=a("Zfvn"),o=a("P8ES"),u=a("K392");t.default=function(e){var t,a,s,d=e.data,m=e.pageContext,f=d.authorsJson,h=d.allMdx.edges,v=m.numPages,p=m.currentPage,b=m.fieldValue,E=m.type,g=m.previous,y=m.next,x=null==f||null===(t=f.avatar)||void 0===t||null===(a=t.childImageSharp)||void 0===a||null===(s=a.fluid)||void 0===s?void 0:s.src;return r.createElement(n.a,{title:null!=b?b:"Author",maxWidth:"md",jumbotron:r.createElement(l.a,{title:null!=b?b:"Author",header:null!=E?E:"Author",subtitle:h.length+" posts",image:null!=x?x:void 0}),drawerContents:r.createElement(o.a,Object(i.a)(g,y,"/author"))},r.createElement(c.a,{author:null!=f?f:null,disableLink:!0,p:2}),r.createElement(u.a,{edges:h,numPages:null!=v?v:0,currentPage:null!=p?p:0,basePath:"/author/"+b}),r.createElement(i.b,Object.assign({},Object(i.a)(g,y,"/author"),{center:{to:"/author/",title:"Author"}})))};var s="774519488"},xR0W:function(e,t,a){"use strict";a("hBi6");var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mXGw")),l=(0,r(a("c9Um")).default)(n.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=l},ylWx:function(e,t,a){"use strict";a("hBi6");var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mXGw")),l=(0,r(a("c9Um")).default)(n.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=l}}]);
//# sourceMappingURL=component---src-templates-author-tsx-e648c51f3872de037a3d.js.map