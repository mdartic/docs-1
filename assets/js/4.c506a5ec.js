(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(t,n,s){var a=s(9),e=s(42),o=s(1)("species");t.exports=function(t,n){var s,r=a(t).constructor;return void 0===r||null==(s=a(r)[o])?n:e(s)}},130:function(t,n,s){var a,e,o,r=s(14),c=s(165),i=s(69),u=s(44),v=s(4),p=v.process,l=v.setImmediate,_=v.clearImmediate,f=v.MessageChannel,h=v.Dispatch,m=0,d={},k=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},g=function(t){k.call(t.data)};l&&_||(l=function(t){for(var n=[],s=1;arguments.length>s;)n.push(arguments[s++]);return d[++m]=function(){c("function"==typeof t?t:Function(t),n)},a(m),m},_=function(t){delete d[t]},"process"==s(21)(p)?a=function(t){p.nextTick(r(k,t,1))}:h&&h.now?a=function(t){h.now(r(k,t,1))}:f?(o=(e=new f).port2,e.port1.onmessage=g,a=r(o.postMessage,o,1)):v.addEventListener&&"function"==typeof postMessage&&!v.importScripts?(a=function(t){v.postMessage(t+"","*")},v.addEventListener("message",g,!1)):a="onreadystatechange"in u("script")?function(t){i.appendChild(u("script")).onreadystatechange=function(){i.removeChild(this),k.call(t)}}:function(t){setTimeout(r(k,t,1),0)}),t.exports={set:l,clear:_}},131:function(t,n,s){"use strict";var a=s(42);function e(t){var n,s;this.promise=new t(function(t,a){if(void 0!==n||void 0!==s)throw TypeError("Bad Promise constructor");n=t,s=a}),this.resolve=a(n),this.reject=a(s)}t.exports.f=function(t){return new e(t)}},132:function(t,n,s){var a=s(9),e=s(2),o=s(131);t.exports=function(t,n){if(a(t),e(n)&&n.constructor===t)return n;var s=o.f(t);return(0,s.resolve)(n),s.promise}},164:function(t,n,s){"use strict";var a,e,o,r,c=s(45),i=s(4),u=s(14),v=s(73),p=s(3),l=s(2),_=s(42),f=s(48),h=s(49),m=s(129),d=s(130).set,k=s(166)(),g=s(131),w=s(167),y=s(168),x=s(132),P=i.TypeError,j=i.process,b=j&&j.versions,C=b&&b.v8||"",M=i.Promise,O="process"==v(j),S=function(){},T=e=g.f,E=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[s(1)("species")]=function(t){t(S,S)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof n&&0!==C.indexOf("6.6")&&-1===y.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},I=function(t,n){if(!t._n){t._n=!0;var s=t._c;k(function(){for(var a=t._v,e=1==t._s,o=0,r=function(n){var s,o,r,c=e?n.ok:n.fail,i=n.resolve,u=n.reject,v=n.domain;try{c?(e||(2==t._h&&$(t),t._h=1),!0===c?s=a:(v&&v.enter(),s=c(a),v&&(v.exit(),r=!0)),s===n.promise?u(P("Promise-chain cycle")):(o=F(s))?o.call(s,i,u):i(s)):u(a)}catch(t){v&&!r&&v.exit(),u(t)}};s.length>o;)r(s[o++]);t._c=[],t._n=!1,n&&!t._h&&D(t)})}},D=function(t){d.call(i,function(){var n,s,a,e=t._v,o=W(t);if(o&&(n=w(function(){O?j.emit("unhandledRejection",e,t):(s=i.onunhandledrejection)?s({promise:t,reason:e}):(a=i.console)&&a.error&&a.error("Unhandled promise rejection",e)}),t._h=O||W(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},W=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){d.call(i,function(){var n;O?j.emit("rejectionHandled",t):(n=i.onrejectionhandled)&&n({promise:t,reason:t._v})})},A=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},K=function(t){var n,s=this;if(!s._d){s._d=!0,s=s._w||s;try{if(s===t)throw P("Promise can't be resolved itself");(n=F(t))?k(function(){var a={_w:s,_d:!1};try{n.call(t,u(K,a,1),u(A,a,1))}catch(t){A.call(a,t)}}):(s._v=t,s._s=1,I(s,!1))}catch(t){A.call({_w:s,_d:!1},t)}}};E||(M=function(t){f(this,M,"Promise","_h"),_(t),a.call(this);try{t(u(K,this,1),u(A,this,1))}catch(t){A.call(this,t)}},(a=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=s(47)(M.prototype,{then:function(t,n){var s=T(m(this,M));return s.ok="function"!=typeof t||t,s.fail="function"==typeof n&&n,s.domain=O?j.domain:void 0,this._c.push(s),this._a&&this._a.push(s),this._s&&I(this,!1),s.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new a;this.promise=t,this.resolve=u(K,t,1),this.reject=u(A,t,1)},g.f=T=function(t){return t===M||t===r?new o(t):e(t)}),p(p.G+p.W+p.F*!E,{Promise:M}),s(33)(M,"Promise"),s(65)("Promise"),r=s(12).Promise,p(p.S+p.F*!E,"Promise",{reject:function(t){var n=T(this);return(0,n.reject)(t),n.promise}}),p(p.S+p.F*(c||!E),"Promise",{resolve:function(t){return x(c&&this===r?M:this,t)}}),p(p.S+p.F*!(E&&s(74)(function(t){M.all(t).catch(S)})),"Promise",{all:function(t){var n=this,s=T(n),a=s.resolve,e=s.reject,o=w(function(){var s=[],o=0,r=1;h(t,!1,function(t){var c=o++,i=!1;s.push(void 0),r++,n.resolve(t).then(function(t){i||(i=!0,s[c]=t,--r||a(s))},e)}),--r||a(s)});return o.e&&e(o.v),s.promise},race:function(t){var n=this,s=T(n),a=s.reject,e=w(function(){h(t,!1,function(t){n.resolve(t).then(s.resolve,a)})});return e.e&&a(e.v),s.promise}})},165:function(t,n){t.exports=function(t,n,s){var a=void 0===s;switch(n.length){case 0:return a?t():t.call(s);case 1:return a?t(n[0]):t.call(s,n[0]);case 2:return a?t(n[0],n[1]):t.call(s,n[0],n[1]);case 3:return a?t(n[0],n[1],n[2]):t.call(s,n[0],n[1],n[2]);case 4:return a?t(n[0],n[1],n[2],n[3]):t.call(s,n[0],n[1],n[2],n[3])}return t.apply(s,n)}},166:function(t,n,s){var a=s(4),e=s(130).set,o=a.MutationObserver||a.WebKitMutationObserver,r=a.process,c=a.Promise,i="process"==s(21)(r);t.exports=function(){var t,n,s,u=function(){var a,e;for(i&&(a=r.domain)&&a.exit();t;){e=t.fn,t=t.next;try{e()}catch(a){throw t?s():n=void 0,a}}n=void 0,a&&a.enter()};if(i)s=function(){r.nextTick(u)};else if(!o||a.navigator&&a.navigator.standalone)if(c&&c.resolve){var v=c.resolve(void 0);s=function(){v.then(u)}}else s=function(){e.call(a,u)};else{var p=!0,l=document.createTextNode("");new o(u).observe(l,{characterData:!0}),s=function(){l.data=p=!p}}return function(a){var e={fn:a,next:void 0};n&&(n.next=e),t||(t=e,s()),n=e}}},167:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},168:function(t,n,s){var a=s(4).navigator;t.exports=a&&a.userAgent||""},169:function(t,n,s){"use strict";var a=s(3),e=s(12),o=s(4),r=s(129),c=s(132);a(a.P+a.R,"Promise",{finally:function(t){var n=r(this,e.Promise||o.Promise),s="function"==typeof t;return this.then(s?function(s){return c(n,t()).then(function(){return s})}:t,s?function(s){return c(n,t()).then(function(){throw s})}:t)}})},186:function(t,n,s){"use strict";s.r(n);s(67),s(164),s(169);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(5),o=Object(e.a)(a,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Here is the full options of "),s("code",[t._v("uvue.config.js")]),t._v(" file")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Change default required paths\n   */")]),t._v("\n  paths"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Your main file with new Vue()")]),t._v("\n    main"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./src/main.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Main template used for page rendering")]),t._v("\n    template"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./src/index.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Define UVue plugins\n   */")]),t._v("\n  plugins"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Use a plugin without options")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'some/plugin'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// With some options")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'some/plugin'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("options "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Imports some scripts in bundle\n   */")]),t._v("\n  imports"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Import script on both sides")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'some/path'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Import script only on client side")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'some/path'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ssr"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * CSS management\n   */")]),t._v("\n  css"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    normal"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'inline'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Or `extract`")]),t._v("\n    vue"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'inline'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Or `extract`")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Add some packages to webpack-node-externals\n   */")]),t._v("\n  externalsWhitelist"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="config.md";n.default=o.exports}}]);