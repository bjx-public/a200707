function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"use strict";"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=t.document?e(t):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(a,t){"use strict";if(void 0===a)throw new Error("Geetest requires browser environment");var r=a.document,e=a.Math,i=r.getElementsByTagName("head")[0];function o(t){this._obj=t}function n(t){var n=this;new o(t)._each(function(t,e){n[t]=e})}o.prototype={_each:function(t){var e,n=this._obj;for(e in n)n.hasOwnProperty(e)&&t(e,n[e]);return this}},n.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return f(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var n=this;new o(t)._each(function(t,e){n[t]=e})}};var c=function c(t){return"number"==typeof t},f=function f(t){return"string"==typeof t},u=function u(t){return"boolean"==typeof t},s=function s(t){return"object"===_typeof(t)&&null!==t},l=function l(t){return"function"==typeof t},p={},d={},y=function y(){return parseInt(1e4*e.random())+(new Date).valueOf()},_=function _(t,e){var n=r.createElement("script");n.charset="UTF-8",n["async"]=!0;var o=!(n.onerror=function(){e(!0)});n.onload=n.onreadystatechange=function(){o||n.readyState&&"loaded"!==n.readyState&&"complete"!==n.readyState||(o=!0,setTimeout(function(){e(!1)},0))},n.src=t,i.appendChild(n)},g=function g(t){return t.replace(/^https?:\/\/|\/$/g,"")},h=function h(t){return t=0!==(t=t.replace(/\/+/g,"/")).indexOf("/")?"/"+t:t},m=function m(t){if(!t)return"";var n="?";return new o(t)._each(function(t,e){(f(e)||c(e)||u(e))&&(n=n+encodeURIComponent(t)+"="+encodeURIComponent(e)+"&")}),(n="?"===n?"":n).replace(/&$/,"")},v=function v(t,e,n,o){e=g(e);o=h(n)+m(o);return o=e?t+e+o:o},b=function b(n,o,r,i,c){var a;(a=function a(e){var t=v(n,o[e],r,i);_(t,function(t){t?e>=o.length-1?c(!0):a(e+1):c(!1)})})(0)},w=function w(t,e,n,o){if(s(n.getLib))return n._extend(n.getLib),void o(n);var r;n.offline?o(n._get_fallback_config()):(r="geetest_"+y(),a[r]=function(t){"success"===t.status?o(t.data):t.status?o(n._get_fallback_config()):o(t),a[r]=undefined;try{delete a[r]}catch(e){}},b(n.protocol,t,e,{gt:n.gt,callback:r},function(t){t&&o(n._get_fallback_config())}))},k=function k(t,e){var n={networkError:"网络错误"};if("function"!=typeof e.onError)throw new Error(n[t]);e.onError(n[t])};!function(){return!!a.Geetest}()||(d.slide="loaded");var E=function E(t,o){var c=new n(t);t.https?c.protocol="https://":t.protocol||(c.protocol=a.location.protocol+"//"),w([c.api_server||c.apiserver],c.type_path,c,function(t){var i=t.type,e=function e(){c._extend(t),o(new a.Geetest(c))};p[i]=p[i]||[];var n=d[i]||"init";"init"===n?(d[i]="loading",p[i].push(e),b(c.protocol,t.static_servers||t.domains,t[i]||t.path,null,function(t){if(t)d[i]="fail",k("networkError",c);else{d[i]="loaded";for(var e=p[i],n=0,o=e.length;n<o;n+=1){var r=e[n];l(r)&&r()}p[i]=[]}})):"loaded"===n?e():"fail"===n?k("networkError",c):"loading"===n&&p[i].push(e)})};return a.initGeetest=E});