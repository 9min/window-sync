(()=>{var t={926:t=>{function e(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function u(t){e(a,o,i,u,s,"next",t)}function s(t){e(a,o,i,u,s,"throw",t)}u(void 0)}))}}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=p(t,e,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",v="completed",d={};function y(){}function g(){}function w(){}var m={};m[i]=function(){return this};var k=Object.getPrototypeOf,E=k&&k(k(R([])));E&&E!==n&&r.call(E,i)&&(m=E);var L=w.prototype=y.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,u){var s=p(t[o],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=p(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=L.constructor=w,w.constructor=g,g.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(L),s(L,u,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(757),e=n.n(t),r=n(926),o=n.n(r),i=n(575),a=n.n(i),u=n(913),s=n.n(u),c="WINDOW_SYNC",p="TYPE_LOAD",l="TYPE_CLOSE",f=function(){},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return setTimeout(t,e)},v=function(t,e){window.removeEventListener(t,e),window.addEventListener(t,e)},d=function(t){return window.dispatchEvent(t)};const y=function(){function t(e){a()(this,t),this.defaultOptions={top:0,left:0,width:400,height:400,autoFocus:!1},this.props=e,this.opener={},this.validator(),this.init(),this.initEvents()}var n;return s()(t,[{key:"validator",value:function(){var t=this.props,e=t.key,n=t.url;if(!e)throw Error("'key' is not defined!");if(!n)throw Error("'url' is not defined!")}},{key:"init",value:function(){var t=this.props,e=t.key,n=t.url,r=t.options,o=void 0===r?this.defaultOptions:r,i=this;this.opener[e]={key:e,url:n,options:o,popup:null,timer:null,state:{isLoading:!1,isOpen:!1},events:{load:function(t){return new CustomEvent("popupLoad-".concat(e),{detail:t})},close:function(t){return new CustomEvent("popupClose-".concat(e),{detail:t})},receive:function(t){return new CustomEvent("popupReceive-".concat(e),{detail:t})}},listener:{onLoad:f,onReceive:f,onClose:f},wrapper:{open:function(){return i.open(e)},send:function(t){return i.send(e,t)},close:function(){return i.close(e)},onReceive:function(t){return i.onReceive(e,t)},onClose:function(t){return i.onClose(e,t)}}}}},{key:"initEvents",value:function(){var t=this;v("message",(function(e){return t.onMessage(e)})),v("beforeunload",(function(e){return t.onBeforeunload(e)}))}},{key:"getWrapper",value:function(t){return this.opener[t].wrapper}},{key:"onMessage",value:function(t){var e=t.data,n=void 0===e?{}:e,r=n.app,o=n.token,i=n.message,a=void 0===i?{}:i;if(r===c&&this.opener[o]){var u=a.type,s=this.opener[o];if(u!=p)return u==l?(s.isForceClosePopup?s.isForceClosePopup=!1:this.resetPopup(o),void d(s.events.close({key:o}))):void d(s.events.receive({key:o,message:a}));d(s.events.load())}}},{key:"onReceive",value:function(t,e){var n=this.opener[t];n.listener.onReceive=function(t){var n=t.detail.message;return e(n.payload)},v("popupReceive-".concat(t),n.listener.onReceive)}},{key:"onClose",value:function(t,e){var n=this.opener[t];n.listener.onClose=function(){return e(t)},v("popupClose-".concat(t),n.listener.onClose)}},{key:"onBeforeunload",value:function(){var t=this;Object.keys(this.opener).forEach((function(e){return t.close(e)}))}},{key:"open",value:function(t){var e=this;return new Promise((function(n,r){try{var o=e.opener[t],i=o.state,a=i.isLoading,u=i.isOpen,s=o.options,c=s.top,p=s.left,l=s.width,f=s.height;if(a||u)return void(o.options.autoFocus&&o.popup.focus());o.state.isLoading=!0,o.state.isOpen=!0,o.popup=window.open(o.url,t,"top=".concat(c,",left=").concat(p,",width=").concat(l,",height=").concat(f,"\n        ,personalbar=0,toolbar=0,scrollbars=0,resizable=0")),o.listener.onLoad=function(){o.state.isLoading=!1,n(t)},v("popupLoad-".concat(t),o.listener.onLoad)}catch(t){r(t)}}))}},{key:"send",value:(n=o()(e().mark((function t(n,r){var o,i,a=this;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=this.opener[n],i={app:c,token:n,payload:r},o.state.isOpen){t.next=5;break}return t.next=5,this.open(n);case 5:if(!o.state.isLoading){t.next=9;break}return clearTimeout(o.timer),o.timer=window.setTimeout((function(){return a.send(n,r)}),100),t.abrupt("return");case 9:o.popup.postMessage(i),o.options.autoFocus&&o.popup.focus();case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"resetPopup",value:function(t){var e=this.opener[t];e.popup=null,e.state.isOpen=!1}},{key:"close",value:function(t){var e=this.opener[t],n=e.state,r=n.isOpen,o=n.isLoading;r&&!o&&(e.isForceClosePopup=!0,e.popup.close(),this.resetPopup(t))}}]),t}(),g=function(){function t(e){a()(this,t),this.props=e,this.popup=null,this.validator(),this.init(),this.initEvents()}return s()(t,[{key:"validator",value:function(){if(!this.props.key)throw Error("'key' is not defined!")}},{key:"init",value:function(){var t=this,e=this.props,n=e.key,r=e.origin,o=void 0===r?window.location.origin:r;this.popup={key:n,origin:o,isReady:!1,timer:null,receiveCallback:null,wrapper:{onReceive:function(e){return t.onReceive(e)},send:function(e){return t.send({type:"TYPE_MESSAGE",payload:e})},close:function(){t.close()}}}}},{key:"initEvents",value:function(){var t=this;v("message",(function(e){return t.onMessage(e)})),v("beforeunload",(function(e){return t.onBeforeunload(e)}))}},{key:"getWrapper",value:function(){return this.popup.wrapper}},{key:"onMessage",value:function(t){var e=t.data,n=void 0===e?{}:e,r=n.token!==this.popup.key;n.app!==c||r||(this.popup.key?this.popup.receiveCallback(n.payload):console.error("'".concat(this.popup.key,"' popup key do not match!")))}},{key:"onReceive",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;this.popup.isReady||(this.popup.receiveCallback=e,this.popup.isReady=!0,this.popup.timer=h((function(){t.send({type:p})})))}},{key:"onBeforeunload",value:function(){this.close()}},{key:"send",value:function(t){window.opener.postMessage({app:c,token:this.popup.key,message:t})}},{key:"close",value:function(){this.send({type:l}),window.close()}}]),t}();var w={opener:function(t){return new y(t).getWrapper(t.key)},popup:function(t){return new g(t).getWrapper()}};window.windowSync=w})()})();