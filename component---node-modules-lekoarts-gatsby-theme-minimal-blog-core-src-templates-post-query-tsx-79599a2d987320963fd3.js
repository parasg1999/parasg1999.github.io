(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Ck4i:function(t,e,n){var r=n("Q83E"),o=n("2klF");function c(e,n,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c},Q83E:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},R7tm:function(t,e,n){var r=n("qHws"),o=n("gC2u"),c=n("dQcQ"),a=n("m7BV");t.exports=function(t){return r(t)||o(t)||c(t)||a()}},TI0m:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("izhR"),a=n("Wbzz"),i=n("dq5L"),u=n("n/Q7");e.a=function(t){var e=t.tags,n=Object(i.a)(),r=n.tagsPath,p=n.basePath;return o.a.createElement(o.a.Fragment,null,e.map((function(t,e){return o.a.createElement(o.a.Fragment,{key:t.slug},!!e&&", ",o.a.createElement(c.e,{as:a.Link,to:Object(u.a)("/"+p+"/"+r+"/"+t.slug)},t.name))})))}},X8hv:function(t,e,n){var r=n("Ck4i"),o=n("R7tm"),c=n("0jh0"),a=n("uDP2");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=n("q1tI"),s=n("7ljp").mdx,l=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,c=a(t,["scope","children"]),i=l(e),f=p.useMemo((function(){if(!n)return null;var t=u({React:p,mdx:s},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,e]);return p.createElement(f,u({},c))}},dQcQ:function(t,e,n){var r=n("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(t,e,n){var r=n("hMe3");t.exports=function(t){if(Array.isArray(t))return r(t)}},xdpm:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),c=n("2A+t"),a=n("izhR"),i=n("A2+M"),u=n("Q3iF"),p=n("TI0m"),s=n("5hlw"),l=["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),f=function(t){var e=t.data.post;return Object(c.c)(u.a,null,Object(c.c)(s.a,{title:e.title,description:e.description?e.description:e.excerpt,image:e.banner?e.banner.childImageSharp.resize.src:void 0,pathname:e.slug,canonicalUrl:e.canonicalUrl}),Object(c.c)(a.d,{as:"h1",variant:"styles.h1"},e.title),Object(c.c)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.c)("time",null,e.date),e.tags&&Object(c.c)(o.a.Fragment,null," — ",Object(c.c)(p.a,{tags:e.tags})),e.timeToRead&&" — ",e.timeToRead&&Object(c.c)("span",null,e.timeToRead," min read")),Object(c.c)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:l.join(", ")},variant:"layout.content"}},Object(c.c)(i.MDXRenderer,null,e.body)))};e.default=function(t){var e=Object.assign({},t);return o.a.createElement(f,e)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-79599a2d987320963fd3.js.map