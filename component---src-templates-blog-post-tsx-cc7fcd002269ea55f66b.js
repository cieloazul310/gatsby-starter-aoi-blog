(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7zBi":function(e,t,n){"use strict";var r=n("mXGw"),a=n("R82R"),o=n("ozoj"),l=n("BQn0"),c=n("/ZiB"),u=Object(a.a)((function(e){return Object(o.a)({jumbotronBg:function(t){var n=t.bgImg;return{height:"100%",backgroundImage:n?"url("+n+")":null,backgroundColor:n?null:"dark"!==e.palette.type?e.palette.secondary.light:e.palette.background.paper,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.9)":null,transform:n?"scale(1.1)":null}},jumbotronText:{height:280,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(4)},jumbotronTitle:{fontWeight:"bold"}})}));t.a=function(e){var t=e.title,n=e.header,a=e.subtitle,o=e.image,i=u({bgImg:o||null});return r.createElement(l.a,{height:280,overflow:"hidden"},r.createElement(l.a,{className:i.jumbotronBg}),r.createElement(l.a,{className:i.jumbotronText},n?r.createElement(c.a,{variant:"subtitle2"},n):null,r.createElement(c.a,{variant:"h2",className:i.jumbotronTitle},t),a?r.createElement(c.a,{variant:"subtitle1"},a):null))}},"8lrx":function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("2Tod"),n("K/PF"),n("75LO"),n("lQyR"),n("YhIr"),n("+jjx"),n("ABKx"),n("W1QL"),n("4aJ6"),n("t91x"),n("LXYL"),n("LXYL"),n("lQyR"),n("YhIr"),n("4aJ6"),n("+jjx"),n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var s=n("mXGw"),f=n("/FXl"),d=f.useMDXComponents,m=f.mdx,p=n("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),c=d(n),i=p(t),f=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:m},i),t=Object.keys(e),n=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(l(t),[""+r])).apply(void 0,[{}].concat(l(n)))}),[r,t]);return s.createElement(f,u({components:c},o))}},HeAU:function(e,t,n){"use strict";n("d3/y");var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),o=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");t.default=o},Hrku:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("5hJT");var r=n("mXGw"),a=n("5UIW"),o=n("BQn0"),l=n("ThN4");function c(e){var t=e.jumbotron,n=e.disableGutters,c=e.children,u=e.maxWidth,i=void 0!==u&&u,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["jumbotron","disableGutters","children","maxWidth"]);return r.createElement(l.a,Object.assign({maxWidth:!1,disableGutters:!0,disablePaddingTop:!0},s),t,r.createElement(a.a,{maxWidth:i,disableGutters:n},r.createElement(o.a,{py:4},c)))}},LXYL:function(e,t,n){var r=n("X6VK"),a=n("Vx+c"),o=n("b8Rm"),l=n("PAFS"),c=n("Bsg+"),u=n("E7Vc"),i=n("oAuq"),s=(n("P56o").Reflect||{}).construct,f=u((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),d=!u((function(){s((function(){}))}));r(r.S+r.F*(f||d),"Reflect",{construct:function(e,t){o(e),l(t);var n=arguments.length<3?e:o(arguments[2]);if(d&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(i.apply(e,r))}var u=n.prototype,m=a(c(u)?u:Object.prototype),p=Function.apply.call(e,m,t);return c(p)?p:m}})},Mwe3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n("mXGw"),a=n("BQn0");function o(){return r.useEffect((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))})),r.createElement(a.a,{px:1,py:2,overflow:"hidden"},r.createElement("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-7323207940463794","data-ad-slot":"9174058264"}))}function l(){return r.useEffect((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))})),r.createElement(a.a,{px:1,py:2,overflow:"hidden"},r.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7323207940463794","data-ad-slot":"3332658358","data-ad-format":"auto","data-full-width-responsive":"true"}))}},cZrw:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return Q}));n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("Z8gF");var r=n("mXGw"),a=n("Wbzz"),o=n("/FXl"),l=n("jRwh"),c=n("Hrku"),u=n("7zBi"),i=n("u44p"),s=n("NUsa"),f=n("YZpo"),d=n("5bSt"),m=n("xR0W"),p=n.n(m),b=n("ylWx"),g=n.n(b),y=n("HexO");var h=function(e){var t=e.previous,n=e.next;return r.createElement(i.a,{subheader:r.createElement(s.a,null,"Navigation")},t?r.createElement(y.a,{button:!0,to:t.fields.slug},r.createElement(f.a,null,r.createElement(p.a,null)),r.createElement(d.a,{primary:t.frontmatter.title,secondary:"prev"})):null,n?r.createElement(y.a,{button:!0,to:n.fields.slug},r.createElement(f.a,null,r.createElement(g.a,null)),r.createElement(d.a,{primary:n.frontmatter.title,secondary:"next"})):null)},v=(n("GkPX"),n("R82R")),w=n("ozoj"),j=n("BQn0"),E=n("/ZiB"),O=n("1LRU"),x=n("7bDs"),P=n.n(x),A=n("Vjni"),R=n.n(A),k=n("HeAU"),D=n.n(k),L=Object(v.a)((function(e){return Object(w.a)({root:{backgroundColor:e.palette.background.paper},item:{marginRight:e.spacing(.5),verticalAlign:"sub"}})}));var X=function(e){var t=e.author,n=t.name,a=t.url,o=t.twitter,l=t.github,c=L();return r.createElement(j.a,{py:4},r.createElement(j.a,{p:4,className:c.root},r.createElement(E.a,{variant:"h6",component:"small"},"author: ",n,o?r.createElement(O.a,{className:c.item,href:"https://twitter.com/"+o,color:"inherit"},r.createElement(P.a,null)):null,a?r.createElement(O.a,{className:c.item,href:a,color:"inherit"},r.createElement(D.a,null)):null,l?r.createElement(O.a,{className:c.item,href:"https://github.com/"+l,color:"inherit"},r.createElement(R.a,null)):null)))},W=n("MU2d");var S=function(e){var t=e.previous,n=e.next;return r.createElement(j.a,{py:4},r.createElement(j.a,{textAlign:"left",py:1},t?r.createElement(W.a,{to:t.fields.slug},r.createElement(p.a,null)," ",t.frontmatter.title):null),r.createElement(j.a,{textAlign:"right",py:1},n?r.createElement(W.a,{to:n.fields.slug},n.frontmatter.title," ",r.createElement(g.a,null)):null),r.createElement(j.a,{textAlign:"center"},r.createElement(W.a,{to:"/blog/"},"All Posts")))},B=n("Mwe3"),M=n("u26D"),F=n("deW9");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N={AdInArticle:B.a};t.default=function(e){var t=e.pageContext,n=e.data.mdx,i=n.frontmatter,s=i.title,f=i.subtitle,d=i.date,m=i.fullWidth,p=i.featuredImage,b=i.author,g=t.previous,y=t.next,v=Object(F.e)({Fab:!!m||"smDown",PermanentDrawer:!m&&"mdUp"}),w=r.createElement(u.a,{title:s,header:d+" post by "+b,subtitle:f,image:p&&p.childImageSharp?p.childImageSharp.fluid.src:null});return r.createElement(c.a,{maxWidth:"md",title:s,image:p&&p.childImageSharp?p.childImageSharp.fluid.src.replace(Object(a.withPrefix)(""),"/"):null,componentViewports:v,jumbotron:w,drawerContents:r.createElement(h,{previous:g,next:y})},r.createElement(o.MDXProvider,{components:z({},M.a,{},N)},r.createElement(l.MDXRenderer,null,n.body)),r.createElement(X,{author:b}),r.createElement(S,{previous:g,next:y}),r.createElement(B.b,null))};var Q="720210767"},jRwh:function(e,t,n){var r=n("8lrx");e.exports={MDXRenderer:r}},xR0W:function(e,t,n){"use strict";n("d3/y");var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),o=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=o},ylWx:function(e,t,n){"use strict";n("d3/y");var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),o=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=o}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-cc7fcd002269ea55f66b.js.map