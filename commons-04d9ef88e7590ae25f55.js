(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+F0J":function(e,t,n){e.exports={header:"styles-module--header--L-KIn",link:"styles-module--link--Zl1H9",active:"styles-module--active--3tbJ0",links:"styles-module--links--2AbM9"}},"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),M.canUseDOM?t(u):n&&(u=n(u))}var M=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(M,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(M,"canUseDOM",c),M}}},BE87:function(e,t,n){e.exports={footer:"styles-module--footer--2Ymu3",content:"styles-module--content--2PXMd",socials:"styles-module--socials--A_wy6",social:"styles-module--social--1fMGK",logoContainer:"styles-module--logoContainer--13yfK",copyright:"styles-module--copyright--3KzVs",links:"styles-module--links--bq2vO",link:"styles-module--link--3027N",mobileInfo:"styles-module--mobileInfo--1wAqp",logo:"styles-module--logo--2dUJo",mobileSocials:"styles-module--mobileSocials--3nFwl",mobileLinks:"styles-module--mobileLinks--obbqt"}},C9fy:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},DGZL:function(e,t,n){"use strict";var r=n("nm/f"),a=n("q1tI"),o=n.n(a),i=n("qhky"),c=function(e){var t=e.description,n=e.lang,a=e.meta,c=e.image,u=e.title,s=r.data.site,l=t||s.siteMetadata.description,M=c||s.siteMetadata.image;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:u+" | "+s.siteMetadata.title},{property:"og:description",content:l},{property:"og:type",content:"website"},{property:"og:image",content:M},{property:"og:url",content:s.siteMetadata.siteUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:u+" | "+s.siteMetadata.title},{name:"twitter:description",content:l},{property:"twitter:image",content:M}].concat(a)},o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&family=Poppins:wght@700&family=Raleway:wght@400;500;700&family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"}))};c.defaultProps={lang:"en",meta:[],description:"",image:null},t.a=c},KpVe:function(e,t,n){e.exports=n.p+"static/logo-white-bg-948b7c6a3cdd699bee148348e8acd780.svg"},Q4rR:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAwQzguOTUgMCAwIDguOTk4ODIgMCAyMC4wOTc0QzAgMjguOTc4NiA1LjczIDM2LjUxIDEzLjY3NSAzOS4xNjUzQzE0LjY3NSAzOS4zNTQ1IDE1LjA0MTcgMzguNzMyNCAxNS4wNDE3IDM4LjE5OUMxNS4wNDE3IDM3LjcyMTggMTUuMDI1IDM2LjQ1NzIgMTUuMDE2NyAzNC43ODE4QzkuNDUzMzMgMzUuOTkzNiA4LjI4IDMyLjA4NTYgOC4yOCAzMi4wODU2QzcuMzcgMjkuNzY2IDYuMDU1IDI5LjE0NTYgNi4wNTUgMjkuMTQ1NkM0LjI0MzMzIDI3Ljg5OTggNi4xOTUgMjcuOTI1MyA2LjE5NSAyNy45MjUzQzguMjAzMzMgMjguMDY1MSA5LjI1ODMzIDI5Ljk5NjEgOS4yNTgzMyAyOS45OTYxQzExLjA0MTcgMzMuMDY5IDEzLjk0IDMyLjE4MSAxNS4wODMzIDMxLjY2OEMxNS4yNjMzIDMwLjM2NzYgMTUuNzc4MyAyOS40ODMxIDE2LjM1IDI4Ljk4MDNDMTEuOTA4MyAyOC40Nzc1IDcuMjQgMjYuNzQ5MyA3LjI0IDE5LjA0OTJDNy4yNCAxNi44NTU3IDguMDE1IDE1LjA2MjggOS4yOTgzMyAxMy42NTY3QzkuMDczMzMgMTMuMTQ4OCA4LjM5ODMzIDExLjEwNTQgOS40NzMzMyA4LjMzNzU1QzkuNDczMzMgOC4zMzc1NSAxMS4xNDgzIDcuNzk4OTggMTQuOTczMyAxMC4zOTgxQzE2LjU3MzMgOS45NTE1NCAxOC4yNzMzIDkuNzI5OTggMTkuOTczMyA5LjcxOTc1QzIxLjY3MzMgOS43Mjk5OCAyMy4zNzMzIDkuOTUxNTQgMjQuOTczMyAxMC4zOTgxQzI4Ljc3MzMgNy43OTg5OCAzMC40NDgzIDguMzM3NTUgMzAuNDQ4MyA4LjMzNzU1QzMxLjUyMzMgMTEuMTA1NCAzMC44NDgzIDEzLjE0ODggMzAuNjQ4MyAxMy42NTY3QzMxLjkyMzMgMTUuMDYyOCAzMi42OTgzIDE2Ljg1NTcgMzIuNjk4MyAxOS4wNDkyQzMyLjY5ODMgMjYuNzY5OCAyOC4wMjMzIDI4LjQ2OSAyMy41NzMzIDI4Ljk2MzNDMjQuMjczMyAyOS41NjY2IDI0LjkyMzMgMzAuNzk4OCAyNC45MjMzIDMyLjY4MjFDMjQuOTIzMyAzNS4zNzE1IDI0Ljg5ODMgMzcuNTMyNiAyNC44OTgzIDM4LjE4NTNDMjQuODk4MyAzOC43MTIgMjUuMjQ4MyAzOS4zNDA5IDI2LjI3MzMgMzkuMTM5OEMzNC4yNzUgMzYuNTAxNSA0MCAyOC45NjUgNDAgMjAuMDk3NEM0MCA4Ljk5ODgyIDMxLjA0NSAwIDIwIDBWMFoiIGZpbGw9IiMyMTIxMjEiLz4KPC9zdmc+Cg=="},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TYdL:function(e,t,n){e.exports=n.p+"static/logo-58869bccba28abcc2bc582e7580f0fff.svg"},aVX8:function(e,t,n){e.exports={layout:"styles-module--layout--Z86Z4",content:"styles-module--content--RpADO"}},bmMU:function(e,t,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],n.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(t[u]!==n[u])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],n[s[u]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),o=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),u=n("lb9j"),s=r.RegExp,l=s,M=s.prototype,f=/a/g,p=/a/g,y=new s(f)!==f;if(n("QPJK")&&(!y||n("96qb")((function(){return p[n("sOol")("match")]=!1,s(f)!=f||s(p)==p||"/a/i"!=s(f,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(y?new l(r&&!o?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&o?u.call(e):t),n?this:M,s)};for(var g=function(e){e in s||o(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},d=i(l),m=0;d.length>m;)g(d[m++]);M.constructor=s,s.prototype=M,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},mdSp:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMS4zMzM1IiB5PSIyLjM5OTkiIHdpZHRoPSIzNy4zMzMzIiBoZWlnaHQ9IjM0LjkzMzMiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNi4zODE3IDBIMy42MTgzMkMxLjYyIDAgMCAxLjYyIDAgMy42MTgzMlYzNi4zODE2QzAgMzguMzggMS42MiA0MCAzLjYxODMyIDQwSDM2LjM4MTZDMzguMzggNDAgNDAgMzguMzggNDAgMzYuMzgxNlYzLjYxODMyQzQwIDEuNjIgMzguMzggMCAzNi4zODE3IDBaTTEyLjM3NzcgMzQuNTM4NkMxMi4zNzc3IDM1LjEyMDIgMTEuOTA2MyAzNS41OTE2IDExLjMyNDcgMzUuNTkxNkg2Ljg0MjQxQzYuMjYwODQgMzUuNTkxNiA1Ljc4OTQyIDM1LjEyMDIgNS43ODk0MiAzNC41Mzg2VjE1Ljc0OUM1Ljc4OTQyIDE1LjE2NzQgNi4yNjA4NCAxNC42OTYgNi44NDI0MSAxNC42OTZIMTEuMzI0N0MxMS45MDYzIDE0LjY5NiAxMi4zNzc3IDE1LjE2NzQgMTIuMzc3NyAxNS43NDlWMzQuNTM4NlpNOS4wODM1NiAxMi45MjQ4QzYuNzMxODMgMTIuOTI0OCA0LjgyNTM0IDExLjAxODMgNC44MjUzNCA4LjY2NjZDNC44MjUzNCA2LjMxNDg3IDYuNzMxODMgNC40MDgzOCA5LjA4MzU2IDQuNDA4MzhDMTEuNDM1MyA0LjQwODM4IDEzLjM0MTggNi4zMTQ4NyAxMy4zNDE4IDguNjY2NkMxMy4zNDE4IDExLjAxODMgMTEuNDM1NCAxMi45MjQ4IDkuMDgzNTYgMTIuOTI0OFpNMzUuODAyMSAzNC42MjM1QzM1LjgwMjEgMzUuMTU4MSAzNS4zNjg2IDM1LjU5MTYgMzQuODMzOSAzNS41OTE2SDMwLjAyNDFDMjkuNDg5NCAzNS41OTE2IDI5LjA1NTkgMzUuMTU4MSAyOS4wNTU5IDM0LjYyMzVWMjUuODEwMUMyOS4wNTU5IDI0LjQ5NTMgMjkuNDQxNiAyMC4wNDg3IDI1LjYyIDIwLjA0ODdDMjIuNjU1NyAyMC4wNDg3IDIyLjA1NDQgMjMuMDkyMyAyMS45MzM3IDI0LjQ1ODFWMzQuNjIzNUMyMS45MzM3IDM1LjE1ODEgMjEuNTAwMyAzNS41OTE2IDIwLjk2NTUgMzUuNTkxNkgxNi4zMTM2QzE1Ljc3OSAzNS41OTE2IDE1LjM0NTQgMzUuMTU4MSAxNS4zNDU0IDM0LjYyMzVWMTUuNjY0MkMxNS4zNDU0IDE1LjEyOTUgMTUuNzc5IDE0LjY5NiAxNi4zMTM2IDE0LjY5NkgyMC45NjU1QzIxLjUwMDIgMTQuNjk2IDIxLjkzMzcgMTUuMTI5NSAyMS45MzM3IDE1LjY2NDJWMTcuMzAzNUMyMy4wMzI5IDE1LjY1MzkgMjQuNjY2NCAxNC4zODA3IDI4LjE0NDQgMTQuMzgwN0MzNS44NDYyIDE0LjM4MDcgMzUuODAyMSAyMS41NzYxIDM1LjgwMjEgMjUuNTI5NlYzNC42MjM1WiIgZmlsbD0iIzAwNzdCNyIvPgo8L3N2Zz4K"},"nm/f":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Experimental Software","description":"We are the team of software engineers and designers that will turn your idea into a product.","author":"@alexanderqchen","image":"/logo-banner.png","siteUrl":"https://experimental.software"}}}}')},ntAx:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("KpVe"),c=n.n(i),u=n("+F0J"),s=n.n(u),l=function(){return a.a.createElement("div",{className:s.a.header},a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{src:c.a,alt:"logo",className:s.a.logo})))},M=(n("y7hu"),n("mdSp")),f=n.n(M),p=n("Q4rR"),y=n.n(p),g=n("TYdL"),d=n.n(g),m=n("BE87"),N=n.n(m),T=function(){return a.a.createElement("div",{className:N.a.footer},a.a.createElement("div",{className:N.a.content},a.a.createElement("div",{className:N.a.socials},a.a.createElement("a",{href:"https://github.com/Experimental-Software-Studio",target:"_blank",rel:"noreferrer"},a.a.createElement("img",{src:y.a,className:N.a.social,alt:"GitHub Logo"})),a.a.createElement("a",{href:"https://www.linkedin.com/company/experimental-software",target:"_blank",rel:"noreferrer"},a.a.createElement("img",{src:f.a,className:N.a.social,alt:"LinkedIn Logo"}))),a.a.createElement("div",{className:N.a.logoContainer},a.a.createElement("img",{src:d.a,className:N.a.logo,alt:"logo"}),a.a.createElement("p",{className:N.a.copyright},"© 2020 Experimental Software LLC")),a.a.createElement("div",{className:N.a.links},a.a.createElement(o.Link,{to:"/about",className:N.a.link},"About"),a.a.createElement(o.Link,{to:"/careers",className:N.a.link},"Careers")),a.a.createElement("div",{className:N.a.mobileInfo},a.a.createElement("div",{className:N.a.mobileSocials},a.a.createElement("img",{src:y.a,className:N.a.social,alt:"GitHub Logo"}),a.a.createElement("img",{src:f.a,className:N.a.social,alt:"LinkedIn Logo"})),a.a.createElement("div",{className:N.a.mobileLinks},a.a.createElement(o.Link,{to:"/about",className:N.a.link},"About"),a.a.createElement(o.Link,{to:"/careers",className:N.a.link},"Careers")," "))))},z=n("aVX8"),j=n.n(z);t.a=function(e){var t=e.page,n=e.children;return a.a.createElement("div",{className:j.a.layout},a.a.createElement(l,{page:t}),a.a.createElement("main",{className:j.a.content},n),a.a.createElement(T,null))}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ge}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),M=n("bmMU"),f=n.n(M),p=n("q1tI"),y=n.n(p),g=n("MgzW"),d=n.n(g),m="bodyAttributes",N="htmlAttributes",T="titleAttributes",z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(z).map((function(e){return z[e]})),"charset"),A="cssText",I="href",h="http-equiv",D="innerHTML",b="itemprop",O="name",E="property",w="rel",L="src",C="target",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},v="defaultTitle",x="defer",k="encodeSpecialCharacters",U="onChangeClientState",Q="titleTemplate",Y=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),P=[z.NOSCRIPT,z.SCRIPT,z.STYLE],R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},B=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,z.TITLE),n=X(e,Q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,v);return t||r||void 0},_=function(e){return X(e,U)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[z.BASE]})).map((function(e){return e[z.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===w&&"canonical"===e[n].toLowerCase()||u===w&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==D&&c!==A&&c!==b||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=d()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,M=e.title,f=e.titleAttributes;ue(z.BODY,r),ue(z.HTML,a),ce(M,f);var p={baseTag:se(z.BASE,n),linkTags:se(z.LINK,o),metaTags:se(z.META,i),noscriptTags:se(z.NOSCRIPT,c),scriptTags:se(z.SCRIPT,s),styleTags:se(z.STYLE,l)},y={},g={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(g[e]=p[e].oldTags)})),t&&t(),u(e,y,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(z.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var M=o.length-1;M>=0;M--)n.removeAttribute(o[M]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(z.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===D)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[S[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case z.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=Me(n,r),[y.a.createElement(z.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+B(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+B(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case N:return{toComponent:function(){return Me(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=S[e]||e;if(n===D||n===A){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),y.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===D||e===A)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+B(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,M=void 0===l?"":l,f=e.titleAttributes;return{base:fe(z.BASE,t,r),bodyAttributes:fe(m,n,r),htmlAttributes:fe(N,a,r),link:fe(z.LINK,o,r),meta:fe(z.META,i,r),noscript:fe(z.NOSCRIPT,c,r),script:fe(z.SCRIPT,u,r),style:fe(z.STYLE,s,r),title:fe(z.TITLE,{title:M,titleAttributes:f},r)}},ye=l()((function(e){return{baseTag:W([I,C],e),bodyAttributes:J(m,e),defer:X(e,x),encode:X(e,k),htmlAttributes:J(N,e),linkTags:V(z.LINK,[w,I],e),metaTags:V(z.META,[O,j,h,E,b],e),noscriptTags:V(z.NOSCRIPT,[D],e),onChangeClientState:_(e),scriptTags:V(z.SCRIPT,[L,D],e),styleTags:V(z.STYLE,[A],e),title:K(e),titleAttributes:J(T,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ge=(a=ye,i=o=function(e){function t(){return Z(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case z.SCRIPT:case z.NOSCRIPT:return{innerHTML:t};case z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case z.TITLE:return H({},a,((t={})[r.type]=i,t.titleAttributes=H({},o),t));case z.BODY:return H({},a,{bodyAttributes:H({},o)});case z.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return y.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case z.LINK:case z.META:case z.NOSCRIPT:case z.SCRIPT:case z.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),y.a.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(y.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind}).call(this,n("yLpj"))},"t+fG":function(e,t,n){var r=n("P8UN"),a=n("96qb"),o=n("ap2Z"),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},wZFJ:function(e,t,n){"use strict";var r=n("P8UN"),a=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},y7hu:function(e,t,n){"use strict";n("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-04d9ef88e7590ae25f55.js.map