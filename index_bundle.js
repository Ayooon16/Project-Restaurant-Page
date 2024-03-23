(()=>{"use strict";var e={430:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},208:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(430),s=i()(o());s.i(c.A),s.push([e.id,"body{\n    background-color: #0D5577;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\nheader{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background-color: #007A94;\n\n}\nnav{\n    padding: 30px;\n    display: flex;\n    gap:30px;\n    justify-content: space-evenly;\n}\nbutton{\n    padding:15px 30px 15px 30px;\n    background-color: #38C392;\n    border-radius: 10px;\n    border:none;\n    font-size: 2rem;\n}\n#content{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n    gap: 30px;\n}\n.card{\n    display:flex;\n    flex-direction: column;\nborder: 1px orange solid;\nborder-radius: 20px;\nwidth: 30%;\ngap: 20px;\npadding: 10px;\nbackground-color: #bdbd57;\n}\nh3{\n    text-align: center;\n    font-size: 2.5rem;\n}\np{\n    font-size: 1.5rem;\n    text-align: center;\n}",""]);const d=s},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),l=t.n(d),u=t(113),p=t.n(u),m=t(208),f={};function h(){let e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.className="card";const n=document.createElement("h3");n.innerText="Do ut non adipisicing non ut elit.";const t=document.createElement("p");return t.innerText="Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco.",e.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.className="card";const n=document.createElement("p");return n.innerText="Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Pariatur commodo labore tempor aute quis proident anim ipsum nulla.",e.appendChild(n),e}())}function v(){let e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.className="card";const n=document.createElement("h3");n.innerText="Ad sit aliqua aute quis veniam qui aute tempor commodo magna id nulla ullamco. Enim velit esse enim ad. ";const t=document.createElement("p");return t.innerText="Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Officia tempor voluptate esse enim consequat amet.",e.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.className="card";const n=document.createElement("p");return n.innerText="Enim esse anim sunt nostrud in pariatur quis. Amet non esse dolor incididunt aliqua. Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Pariatur commodo labore tempor aute quis proident anim ipsum nulla.",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.className="card";const n=document.createElement("p");return n.innerText="Dolore amet laboris irure sunt in est. Dolore ex aliqua fugiat id magna. Enim esse anim sunt nostrud in pariatur quis. Amet non esse dolor incididunt aliqua. Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Pariatur commodo labore tempor aute quis proident anim ipsum nulla.",e.appendChild(n),e}())}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals,h(),window.onload=function(){document.getElementById("home").onclick=h,document.getElementById("about").onclick=v}})()})();