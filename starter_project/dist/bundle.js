(()=>{"use strict";var e={348:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),s=n(314),a=n.n(s)()(o());a.push([e.id,"body{display:flex;flex-direction:column;min-height:100vh}main{flex:2}section{max-width:800px;margin:50px auto}",""]);const i=a},306:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),s=n(314),a=n.n(s)()(o());a.push([e.id,".footer-container{background:#333;color:#fff;text-align:center;padding:15px;font-size:14px}",""]);const i=a},923:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),s=n(314),a=n.n(s)()(o());a.push([e.id,"form{border:1px solid #545454;border-radius:5px;padding:40px;max-width:600px;margin:40px auto;background:#f9f9f9}input{padding:10px 15px;width:100%;line-height:1.5;margin:10px 0;border:1px solid #ccc;border-radius:3px}button{padding:10px 20px;background:#333;color:#fff;border:none;border-radius:3px;cursor:pointer;transition:background .3s ease}button:hover{background:#555}",""]);const i=a},752:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),s=n(314),a=n.n(s)()(o());a.push([e.id,".header-container{background:#333;padding:20px;display:flex;justify-content:center;align-items:center}.logo img{max-width:75px}",""]);const i=a},561:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),s=n(314),a=n.n(s)()(o());a.push([e.id,'*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}',""]);const i=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var l=r(e,o),c=0;c<s.length;c++){var d=n(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),s=n(659),a=n.n(s),i=n(56),l=n.n(i),c=n(540),d=n.n(c),u=n(113),p=n.n(u),f=n(561),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.A,m),f.A&&f.A.locals&&f.A.locals;var g=n(348),v={};v.styleTagTransform=p(),v.setAttributes=l(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),t()(g.A,v),g.A&&g.A.locals&&g.A.locals;var h=n(752),b={};b.styleTagTransform=p(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),t()(h.A,b),h.A&&h.A.locals&&h.A.locals;var y=n(923),x={};x.styleTagTransform=p(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),t()(y.A,x),y.A&&y.A.locals&&y.A.locals;var A=n(306),T={};function E(e){e.preventDefault();const t=document.getElementById("name").value;var n;n=t,console.log("::: Running checkURL :::",n),/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|\d{1,3}(\.\d{1,3}){3})(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[\-a-z\d_]*)?$/i.test(n)?(console.log("URL is valid, proceeding with server call..."),async function(e="",t={}){console.log("Sending data to server:",t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){throw console.log("Error parsing JSON:",e),e}}("http://localhost:8000/analyze-url",{url:t}).then((e=>{console.log("Response from server:",e),document.getElementById("results").innerHTML=`\n                    <p><strong>Sentiment:</strong> ${e.sentiment||"N/A"}</p>\n                    <p><strong>Sentiment Scores:</strong></p>\n                    <ul>\n                        <li><strong>Positive:</strong> ${e.sentiment_scores&&e.sentiment_scores.Positive?e.sentiment_scores.Positive:"N/A"}</li>\n                        <li><strong>Neutral:</strong> ${e.sentiment_scores&&e.sentiment_scores.Neutral?e.sentiment_scores.Neutral:"N/A"}</li>\n                        <li><strong>Negative:</strong> ${e.sentiment_scores&&e.sentiment_scores.Negative?e.sentiment_scores.Negative:"N/A"}</li>\n                        <li><strong>Mixed:</strong> ${e.sentiment_scores&&e.sentiment_scores.Mixed?e.sentiment_scores.Mixed:"N/A"}</li>\n                    </ul>\n                    <p><strong>Text:</strong> ${e.text||"N/A"}</p>\n                `})).catch((e=>{console.error("Error from server:",e)}))):alert("Please enter a valid URL!")}T.styleTagTransform=p(),T.setAttributes=l(),T.insert=a().bind(null,"head"),T.domAPI=o(),T.insertStyleElement=d(),t()(A.A,T),A.A&&A.A.locals&&A.A.locals,document.getElementById("urlForm").addEventListener("submit",E),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("urlForm");e?e.addEventListener("submit",E):console.error('Form element with id "urlForm" not found')}))})()})();