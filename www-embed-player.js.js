(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function p(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype}
function pa(){this.D=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function qa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
pa.prototype.u=function(a){this.i=a};
function ra(a,b){a.j={pb:b,tb:!0};a.h=a.m||a.o}
pa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function w(a,b,c){a.h=c;return{value:b}}
pa.prototype.s=function(a){this.h=a};
function sa(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function ua(a,b){a.h=b;a.m=0}
function va(a){a.m=0;var b=a.j.pb;a.j=null;return b}
function wa(a){a.A=[a.j];a.m=0;a.o=0}
function xa(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.tb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function ya(a){this.h=new pa;this.i=a}
function za(a,b){qa(a.h);var c=a.h.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.l=null,ra(a.h,g),Ba(a)}a.h.l=null;d.call(a.h,f);return Ba(a)}
function Ba(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ra(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.tb)throw b.pb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){qa(a.h);a.h.l?b=Aa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ba(a));return b};
this.throw=function(b){qa(a.h);a.h.l?b=Aa(a,a.h.l["throw"],b,a.h.u):(ra(a.h,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return ja});
p("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.D=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.O),reject:g(this.o)}};
b.prototype.O=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ma(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.T();this.A()};
b.prototype.T=function(){var g=this;e(function(){if(g.I()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.I=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ba=function(g){var h=this.l();g.Ea(h.resolve,h.reject)};
b.prototype.ma=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,r){return"function"==typeof u?function(z){try{l(u(z))}catch(A){m(A)}}:r}
var l,m,q=new b(function(u,r){l=u;m=r});
this.Ea(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ea=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).Ea(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(z){return function(A){u[z]=A;r--;0==r&&l(u)}}
var u=[],r=0;do u.push(void 0),r++,d(k.value).Ea(q(u.length-1),m),k=h.next();while(!k.done)})};
return b});
function Fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Fa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&Fa(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
p("Object.setPrototypeOf",function(a){return a||oa});
var Ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||Ia});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function B(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(){}
function La(a){a.ja=void 0;a.getInstance=function(){return a.ja?a.ja:a.ja=new a}}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Sa:Va=Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(a,b){B(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fn=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Ib=b)}
D(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},db=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function gb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a){for(var b in a)return!1;return!0}
function nb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ob(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rb(a[c]);return b}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;function vb(){if(void 0===ub){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){y.console&&y.console.error(c.message)}ub=a}else ub=a}return ub}
;function wb(a,b){this.h=a===xb&&b||""}
wb.prototype.ea=!0;wb.prototype.da=function(){return this.h};
function yb(a){return new wb(xb,a)}
var xb={};yb("");var zb={};function Ab(a){this.h=zb===zb?a:"";this.ea=!0}
Ab.prototype.da=function(){return this.h.toString()};
Ab.prototype.toString=function(){return this.h.toString()};function Bb(a,b){this.h=b===Cb?a:""}
n=Bb.prototype;n.ea=!0;n.da=function(){return this.h.toString()};
n.Va=!0;n.Ra=function(){return 1};
n.toString=function(){return this.h+""};
function Db(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Cb={};function Eb(a){var b=vb();a=b?b.createScriptURL(a):a;return new Bb(a,Cb)}
;var Fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Gb=/&/g,Hb=/</g,Ib=/>/g,Jb=/"/g,Kb=/'/g,Lb=/\x00/g,Mb=/[\x00&<>"']/;function Nb(a,b){this.h=b===Ob?a:""}
n=Nb.prototype;n.ea=!0;n.da=function(){return this.h.toString()};
n.Va=!0;n.Ra=function(){return 1};
n.toString=function(){return this.h.toString()};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb)return a.h;Ma(a);return"type_error:SafeUrl"}
var Qb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Rb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ob={},Tb=new Nb("about:invalid#zClosurez",Ob);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=Ub().indexOf(a)}
;function Vb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Wb={};function Xb(a,b,c){this.h=c===Wb?a:"";this.i=b;this.ea=this.Va=!0}
Xb.prototype.Ra=function(){return this.i};
Xb.prototype.da=function(){return this.h.toString()};
Xb.prototype.toString=function(){return this.h.toString()};
function Yb(a,b){var c=vb();a=c?c.createHTML(a):a;return new Xb(a,b,Wb)}
;function Zb(a,b){b instanceof Nb||b instanceof Nb||(b="object"==typeof b&&b.ea?b.da():String(b),Sb.test(b)||(b="about:invalid#zClosurez"),b=new Nb(b,Ob));a.href=Pb(b)}
function $b(a,b){a.rel="stylesheet";a.href=Db(b).toString();(b=ac('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function bc(){return ac("script[nonce]",void 0)}
var cc=/^[\w+/_-]+[=]{0,2}$/;function ac(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&cc.test(a)?a:"":""}
;function dc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(a){return a?decodeURI(a):a}
function gc(a){return fc(a.match(ec)[3]||null)}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ic(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function jc(a,b){b=ic(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var kc=/#|$/;function lc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function mc(a){mc[" "](a);return a}
mc[" "]=Ka;var nc=G("Opera"),oc=G("Trident")||G("MSIE"),pc=G("Edge"),qc=G("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),rc=-1!=Ub().toLowerCase().indexOf("webkit")&&!G("Edge"),sc=G("Android");function tc(){var a=y.document;return a?a.documentMode:void 0}
var uc;a:{var vc="",wc=function(){var a=Ub();if(qc)return/rv:([^\);]+)(\)|;)/.exec(a);if(pc)return/Edge\/([\d\.]+)/.exec(a);if(oc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rc)return/WebKit\/(\S+)/.exec(a);if(nc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wc&&(vc=wc?wc[1]:"");if(oc){var xc=tc();if(null!=xc&&xc>parseFloat(vc)){uc=String(xc);break a}}uc=vc}var yc=uc,zc;if(y.document&&oc){var Ac=tc();zc=Ac?Ac:parseInt(yc,10)||void 0}else zc=void 0;var Bc=zc;var Cc=lc()||G("iPod"),Dc=G("iPad");!G("Android")||Vb();Vb();var Ec=G("Safari")&&!(Vb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(lc()||G("iPad")||G("iPod"));var Fc={},Gc=null;
function Hc(a,b){Na(a);void 0===b&&(b=0);if(!Gc){Gc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Fc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Gc[h]&&(Gc[h]=g)}}}b=Fc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ic="function"===typeof Uint8Array;var Jc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Kc(a){Object.isFrozen(a)||(Jc?a[Jc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Lc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Mc;function Nc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Ic&&null!=a&&a instanceof Uint8Array)return Hc(a)}return a}
;function Oc(a,b){if(null!=a){if(Array.isArray(a))a=Pc(a,b);else if(Lc(a)){var c={},d;for(d in a)c[d]=Oc(a[d],b);a=c}else a=b(a);return a}}
function Pc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Oc(c[d],b);if(Array.isArray(a)){var e;Jc?e=a[Jc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&Kc(c);return c}
function Qc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Nc(a);return Array.isArray(a)?Pc(a,Qc):a}
function Rc(a){return Ic&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var Sc;function H(a,b,c){var d=Sc;Sc=null;a||(a=d);d=this.constructor.Ln;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.Kn||0);this.h=void 0;this.L=a;a:{d=this.L.length;a=d-1;if(d&&(d=this.L[a],Lc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.L[a])?Array.isArray(d)&&Kc(d):this.L[a]=Tc;else{d=this.i||(this.i=this.L[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Kc(e):d[a]=Tc}}
var Tc=Object.freeze(Kc([]));function Vc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.L[b+a.j]}
function Wc(a,b,c){c=void 0===c?!1:c;var d=Vc(a,b,c);null==d&&(d=Tc);d===Tc&&(d=Kc(d.slice()),I(a,b,d,c));return d}
function I(a,b,c,d){(void 0===d?0:d)||b>=a.l?(a.i||(a.i=a.L[a.l+a.j]={}))[b]=c:a.L[b+a.j]=c;return a}
function Xc(a,b,c,d){(c=Yc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),I(a,c,void 0));return I(a,b,d)}
function Yc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Vc(a,e)&&(0!==c&&I(a,c,void 0,!1),c=e)}return c}
function Zc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Vc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function $c(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=Wc(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function J(a,b,c,d){a.h||(a.h={});var e=c?c.L:c;a.h[b]=c;return I(a,b,e,void 0===d?!1:d)}
function ad(a,b,c){var d=bd;a.h||(a.h={});var e=c?c.L:c;a.h[b]=c;Xc(a,b,d,e)}
function cd(a,b,c,d){var e=$c(a,c,b,void 0===e?!1:e);c=d?d:new c;a=Wc(a,b);e.push(c);a.push(c.L)}
H.prototype.toJSON=function(){var a=this.L;return Mc?a:Pc(a,Qc)};
function dd(a,b){return Nc(b)}
H.prototype.toString=function(){return this.L.toString()};
H.prototype.clone=function(){var a=this.constructor,b;Sc=b=Pc(this.L,Rc);a=new a(b);Sc=null;ed(a,this);return a};
function ed(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=$c(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ed(f[g],e[g])}else(f=Zc(a,e.constructor,g,void 0,f))&&ed(f,e)}}}}
;function fd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;if(b){var e=Kc([]);for(var f=0;f<b.length;f++)e[f]=b[f].L;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Tc;a=I(a,c,e,d)}else a=J(a,c,b,!0);return a}
;function gd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function hd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new gd;this.j=c.promise;this.l=t((0,y[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Hb:d,lc:e})})},!0)).next().value;
this.kc=c.promise.then(function(){})}
hd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Hb;return new Promise(function(d){c(function(e){d(e)},[a.kb,
a.mc])})})};
hd.prototype.Cb=function(a){if(this.i)throw Error("Already disposed");return this.l([a.kb,a.mc])};
hd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.lc)&&a()})};
hd.prototype.h=function(){return this.i};var id=window;yb("csi.gstatic.com");yb("googleads.g.doubleclick.net");yb("partner.googleadservices.com");yb("pubads.g.doubleclick.net");yb("securepubads.g.doubleclick.net");yb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var jd={};function kd(){}
function ld(a){this.h=a}
v(ld,kd);ld.prototype.toString=function(){return this.h};
var md=new ld("about:invalid#zTSz",jd);function nd(a){if(a instanceof kd)if(a instanceof ld)a=a.h;else throw Error("");else a=Pb(a);return a}
;function od(a,b){a.src=Db(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function pd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=pd.prototype;n.clone=function(){return new pd(this.x,this.y)};
n.equals=function(a){return a instanceof pd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
n.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function qd(a,b){this.width=a;this.height=b}
n=qd.prototype;n.clone=function(){return new qd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function rd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function sd(a,b){jb(b,function(c,d){c&&"object"==typeof c&&c.ea&&(c=c.da());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:td.hasOwnProperty(d)?a.setAttribute(td[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var td={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ud(a,b,c){var d=arguments,e=document,f=d[1],g=vd(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):sd(g,f));2<d.length&&wd(e,g,d);return g}
function wd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Na(f)||Oa(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Oa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?hb(f):f,d)}}}
function vd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function xd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function yd(a){var b=zd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ad(){var a=[];yd(function(b){a.push(b)});
return a}
var zd={Bc:"allow-forms",Cc:"allow-modals",Dc:"allow-orientation-lock",Ec:"allow-pointer-lock",Fc:"allow-popups",Gc:"allow-popups-to-escape-sandbox",Hc:"allow-presentation",Ic:"allow-same-origin",Jc:"allow-scripts",Kc:"allow-top-navigation",Lc:"allow-top-navigation-by-user-activation"},Bd=ab(function(){return Ad()});
function Cd(){var a=Dd(),b={};E(Bd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Dd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ed(a){this.isValid=a}
function Fd(a){return new Ed(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Gd=[Fd("data"),Fd("http"),Fd("https"),Fd("mailto"),Fd("ftp"),new Ed(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Hd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Id=(new Date).getTime();var Jd=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959);function Kd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ld(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var u=g,r=0;64>r;r+=4)u[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=u[r-3]^u[r-8]^u[r-14]^u[r-16],u[r]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],A=e[2],K=e[3],S=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var T=K^z&(A^K);var U=1518500249}else T=z^A^K,U=1859775393;else 60>r?(T=z&A|K&(z|A),U=2400959708):(T=z^A^K,U=3395469782);T=((q<<5|q>>>27)&4294967295)+T+S+U+u[r]&4294967295;S=K;K=A;A=(z<<30|z>>>2)&4294967295;z=q;q=T}e[0]=e[0]+q&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+S&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],z=0,A=q.length;z<A;++z)r.push(q.charCodeAt(z));q=r}u||(u=q.length);r=0;if(0==l)for(;r+64<u;)b(q.slice(r,r+64)),r+=64,m+=64;for(;r<u;)if(f[l++]=q[r++],m++,64==l)for(l=0,b(f);r+64<u;)b(q.slice(r,r+64)),r+=64,m+=64}
function d(){var q=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=u&255,u>>>=8;b(f);for(r=u=0;5>r;r++)for(var z=24;0<=z;z-=8)q[u++]=e[r]>>z&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Kb:function(){for(var q=d(),u="",r=0;r<q.length;r++)u+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return u}}}
;function Md(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Nd(Kd(d),a,c||null)].join(" "):null}
function Nd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Od(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Od(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Od(a){var b=Ld();b.update(a);return b.Kb().toLowerCase()}
;var Pd={};function Qd(a){this.h=a||{cookie:""}}
n=Qd.prototype;n.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Za:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rn;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Za}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Fb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Za:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Fb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Rd=new Qd("undefined"==typeof document?null:document);function Sd(a){return!!Pd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Td(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Sd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Qd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Sd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Ud(a,b,c,d){(a=y[a])||(a=(new Qd(document)).get(b));return a?Md(a,c,d):null}
function Vd(a){var b=void 0===b?!1:b;var c=Kd(String(y.location.href)),d=[];if(Td(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Qd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Md(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Sd(b)&&((b=Ud("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ud("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Wd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Xd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?Xd.apply(null,d):Wd(d)}}
;function L(){this.D=this.D;this.o=this.o}
L.prototype.D=!1;L.prototype.h=function(){return this.D};
L.prototype.dispose=function(){this.D||(this.D=!0,this.F())};
function Yd(a,b){a.D?b():(a.o||(a.o=[]),a.o.push(b))}
L.prototype.F=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Zd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Zd.prototype.stopPropagation=function(){this.j=!0};
Zd.prototype.preventDefault=function(){this.defaultPrevented=!0};function $d(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ae(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,be[c])c=be[c];else{c=String(c);if(!be[c]){var f=/function\s+([^\(]+)/m.exec(c);be[c]=f?f[1]:"[Anonymous]"}c=be[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ae(a,b){b||(b={});b[ce(a)]=!0;var c=a.stack||"";(a=a.Ib)&&!b[ce(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ae(a,b));return c}
function ce(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var be={};var de=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ka,b),y.removeEventListener("test",Ka,b)}catch(c){}return a}();function ee(a,b){Zd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(ee,Zd);var fe={2:"touch",3:"pen",4:"mouse"};
ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(qc){a:{try{mc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:fe[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ee.V.preventDefault.call(this)};
ee.prototype.stopPropagation=function(){ee.V.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ee.prototype.preventDefault=function(){ee.V.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ge="closure_listenable_"+(1E6*Math.random()|0);var he=0;function ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ha=e;this.key=++he;this.wa=this.Da=!1}
function je(a){a.wa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ha=null}
;function ke(a){this.src=a;this.listeners={};this.h=0}
ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=le(a,b,d,e);-1<g?(b=a[g],c||(b.Da=!1)):(b=new ie(b,this.src,f,!!d,e),b.Da=c,a.push(b));return b};
ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=le(e,b,c,d);return-1<b?(je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function me(a,b){var c=b.type;c in a.listeners&&gb(a.listeners[c],b)&&(je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wa&&f.listener==b&&f.capture==!!c&&f.Ha==d)return e}return-1}
;var ne="closure_lm_"+(1E6*Math.random()|0),oe={},pe=0;function qe(a,b,c,d,e){if(d&&d.once)re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.W(b,c,Oa(d)?!!d.capture:!!d,e):te(a,b,c,!1,d,e)}
function te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=ue(a);h||(a[ne]=h=new ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)de||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(we(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pe++}}
function ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=xe;return a}
function re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.i.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):te(a,b,c,!0,d,e)}
function ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=se(c),a&&a[ge])?a.i.remove(String(b),c,d,e):a&&(a=ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=le(b,c,d,e)),(c=-1<a?b[a]:null)&&ze(c))}
function ze(a){if("number"!==typeof a&&a&&!a.wa){var b=a.src;if(b&&b[ge])me(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(we(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pe--;(c=ue(b))?(me(c,a),0==c.h&&(c.src=null,b[ne]=null)):je(a)}}}
function we(a){return a in oe?oe[a]:oe[a]="on"+a}
function xe(a,b){if(a.wa)a=!0;else{b=new ee(b,this);var c=a.listener,d=a.Ha||a.src;a.Da&&ze(a);a=c.call(d,b)}return a}
function ue(a){a=a[ne];return a instanceof ke?a:null}
var Ae="__closure_events_fn_"+(1E9*Math.random()>>>0);function se(a){if("function"===typeof a)return a;a[Ae]||(a[Ae]=function(b){return a.handleEvent(b)});
return a[Ae]}
;function Be(){L.call(this);this.i=new ke(this);this.T=this;this.I=null}
D(Be,L);Be.prototype[ge]=!0;Be.prototype.addEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
Be.prototype.removeEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
function Ce(a,b){var c=a.I;if(c){var d=[];for(var e=1;c;c=c.I)d.push(c),++e}a=a.T;c=b.type||b;"string"===typeof b?b=new Zd(b,a):b instanceof Zd?b.target=b.target||a:(e=b,b=new Zd(c,a),tb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=De(g,c,!0,b)&&e}b.j||(g=b.h=a,e=De(g,c,!0,b)&&e,b.j||(e=De(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=De(g,c,!1,b)&&e}
Be.prototype.F=function(){Be.V.F.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,je(d[e]);delete a.listeners[c];a.h--}}this.I=null};
Be.prototype.W=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function De(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.wa&&g.capture==c){var h=g.listener,k=g.Ha||g.src;g.Da&&me(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ee(a){var b,c;Be.call(this);var d=this;this.A=this.l=0;this.R=null!==a&&void 0!==a?a:{M:function(e,f){return setTimeout(e,f)},
U:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return x(function(e){return w(e,Fe(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Ge(this)}
v(Ee,Be);Ee.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.R.U(this.A);delete Ee.h};
Ee.prototype.G=function(){return this.j};
function Ge(a){a.A=a.R.M(function(){var b;return x(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.s(3):w(c,Fe(a),3):w(c,Fe(a),3);Ge(a);c.h=0})},3E4)}
function Fe(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,sa(g,2,3),d&&(a.l=a.R.M(function(){d.abort()},b||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:wa(g);a.u=void 0;a.l&&(a.R.U(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?Ce(a,"networkstatus-online"):Ce(a,"networkstatus-offline"));c(f);xa(g);break;case 2:va(g),f=!1,g.s(3)}})})}
;var He={pn:"WEB_DISPLAY_MODE_UNKNOWN",kn:"WEB_DISPLAY_MODE_BROWSER",mn:"WEB_DISPLAY_MODE_MINIMAL_UI",nn:"WEB_DISPLAY_MODE_STANDALONE",ln:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ie(){this.data_=[];this.h=-1}
Ie.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ie.prototype.get=function(a){return!!this.data_[a]};
function Je(a){-1==a.h&&(a.h=eb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ke(){var a={};this.C=function(b,c){return null!=a[b]?a[b]:c}}
;function Le(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Le.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Me(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ne;
function Oe(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=vd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jb;c.jb=null;e()}};
return function(e){d.next={jb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Pe(a){y.setTimeout(function(){throw a;},0)}
;function Qe(){this.i=this.h=null}
Qe.prototype.add=function(a,b){var c=Re.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Qe.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Re=new Le(function(){return new Se},function(a){return a.reset()});
function Se(){this.next=this.scope=this.h=null}
Se.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Se.prototype.reset=function(){this.next=this.scope=this.h=null};function Te(a,b){Ue||Ve();We||(Ue(),We=!0);Xe.add(a,b)}
var Ue;function Ve(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Ue=function(){a.then(Ye)}}else Ue=function(){var b=Ye;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Ne||(Ne=Oe()),Ne(b)):y.setImmediate(b)}}
var We=!1,Xe=new Qe;function Ye(){for(var a;a=Xe.remove();){try{a.h.call(a.scope)}catch(b){Pe(b)}Me(Re,a)}We=!1}
;function Ze(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Ze.prototype[Symbol.iterator]=function(){return this};
Ze.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function $e(a,b){return new Ze(a,b)}
;function af(){this.blockSize=-1}
;function bf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(bf,af);bf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function cf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
bf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)cf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){cf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){cf(this,e);f=0;break}}this.i=f;this.l+=b}};
bf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;cf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function df(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ef(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ff(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:df(a).match(/\S+/g)||[],b=0<=bb(a,b));return b}
function gf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ff(a,"inverted-hdpi")&&ef(a,Array.prototype.filter.call(a.classList?a.classList:df(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var hf="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function jf(){}
jf.prototype.Y=function(){throw hf;};
jf.prototype.next=function(){return kf};
var kf={done:!0,value:void 0};function lf(a){return{value:a,done:!1}}
function mf(a){if(a.done)throw hf;return a.value}
jf.prototype.P=function(){return this};function nf(a){if(a instanceof of||a instanceof pf||a instanceof qf)return a;if("function"==typeof a.Y)return new of(function(){return rf(a)});
if("function"==typeof a[Symbol.iterator])return new of(function(){return a[Symbol.iterator]()});
if("function"==typeof a.P)return new of(function(){return rf(a.P())});
throw Error("Not an iterator or iterable.");}
function rf(a){if(!(a instanceof jf))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.Y();break}catch(d){if(d!==hf)throw d;b=!0}return{value:c,done:b}}}}
function of(a){this.h=a}
of.prototype.P=function(){return new pf(this.h())};
of.prototype[Symbol.iterator]=function(){return new qf(this.h())};
of.prototype.i=function(){return new qf(this.h())};
function pf(a){this.h=a}
v(pf,jf);pf.prototype.Y=function(){var a=this.h.next();if(a.done)throw hf;return a.value};
pf.prototype.next=function(){return this.h.next()};
pf.prototype[Symbol.iterator]=function(){return new qf(this.h)};
pf.prototype.i=function(){return new qf(this.h)};
function qf(a){of.call(this,function(){return a});
this.j=a}
v(qf,of);qf.prototype.next=function(){return this.j.next()};function sf(a,b){this.i={};this.h=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof sf)for(c=tf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function tf(a){uf(a);return a.h.concat()}
n=sf.prototype;n.has=function(a){return vf(this.i,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||wf;uf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function wf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.i={};this.ga=this.size=this.h.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return vf(this.i,a)?(delete this.i[a],--this.size,this.ga++,this.h.length>2*this.size&&uf(this),!0):!1};
function uf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];vf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],vf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return vf(this.i,a)?this.i[a]:b};
n.set=function(a,b){vf(this.i,a)||(this.size+=1,this.h.push(a),this.ga++);this.i[a]=b};
n.forEach=function(a,b){for(var c=tf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new sf(this)};
n.keys=function(){return nf(this.P(!0)).i()};
n.values=function(){return nf(this.P(!1)).i()};
n.entries=function(){var a=this;return $e(this.keys(),function(b){return[b,a.get(b)]})};
n.P=function(a){uf(this);var b=0,c=this.ga,d=this,e=new jf;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return kf;var g=d.h[b++];return lf(a?g:d.i[g])};
var f=e.next;e.Y=function(){return mf(f.call(e))};
return e};
function vf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function xf(a){yf();return Eb(a)}
var yf=Ka;function zf(a){var b=[];Af(new Bf,a,b);return b.join("")}
function Bf(){}
function Af(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Af(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Cf(d,c),c.push(":"),Af(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Cf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Df={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ef=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Cf(a,b){b.push('"',a.replace(Ef,function(c){var d=Df[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Df[c]=d);return d}),'"')}
;function Ff(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Gf(a){this.h=0;this.D=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ka)try{var b=this;a.call(void 0,function(c){Hf(b,2,c)},function(c){Hf(b,3,c)})}catch(c){Hf(this,3,c)}}
function If(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
If.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Jf=new Le(function(){return new If},function(a){a.reset()});
function Kf(a,b,c){var d=Jf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Lf(a){return new Gf(function(b,c){c(a)})}
Gf.prototype.then=function(a,b,c){return Mf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Gf.prototype.$goog_Thenable=!0;function Nf(a,b){return Mf(a,null,b,void 0)}
Gf.prototype.cancel=function(a){if(0==this.h){var b=new Of(a);Te(function(){Pf(this,b)},this)}};
function Pf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Pf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Qf(c),Rf(c,e,3,b)))}a.j=null}else Hf(a,3,b)}
function Sf(a,b){a.i||2!=a.h&&3!=a.h||Tf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Mf(a,b,c,d){var e=Kf(null,null,null);e.h=new Gf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Of?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Sf(a,e);return e.h}
Gf.prototype.A=function(a){this.h=0;Hf(this,2,a)};
Gf.prototype.I=function(a){this.h=0;Hf(this,3,a)};
function Hf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.I;if(d instanceof Gf){Sf(d,Kf(e||Ka,f||null,a));var g=!0}else if(Ff(d))d.then(e,f,a),g=!0;else{if(Oa(d))try{var h=d.then;if("function"===typeof h){Uf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.D=c,a.h=b,a.j=null,Tf(a),3!=b||c instanceof Of||Vf(a,c))}}
function Uf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Tf(a){a.m||(a.m=!0,Te(a.u,a))}
function Qf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Gf.prototype.u=function(){for(var a;a=Qf(this);)Rf(this,a,this.h,this.D);this.m=!1};
function Rf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Wf(b,c,d);else try{b.j?b.i.call(b.context):Wf(b,c,d)}catch(e){Xf.call(null,e)}Me(Jf,b)}
function Wf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Vf(a,b){a.o=!0;Te(function(){a.o&&Xf.call(null,b)})}
var Xf=Pe;function Of(a){Za.call(this,a)}
D(Of,Za);Of.prototype.name="cancel";function M(a){L.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
D(M,L);n=M.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Yf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ra(b)}}
n.ra=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ka):(c&&gb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Zf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ra(c)}}return 0!=e}return!1};
function Zf(a,b,c){Te(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ra,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.F=function(){M.V.F.call(this);this.clear();this.l.length=0};function $f(a){this.h=a}
$f.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,zf(b))};
$f.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
$f.prototype.remove=function(a){this.h.remove(a)};function ag(a){this.h=a}
D(ag,$f);function bg(a){this.data=a}
function cg(a){return void 0===a||a instanceof bg?a:new bg(a)}
ag.prototype.set=function(a,b){ag.V.set.call(this,a,cg(b))};
ag.prototype.i=function(a){a=ag.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ag.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function dg(a){this.h=a}
D(dg,ag);dg.prototype.set=function(a,b,c){if(b=cg(b)){if(c){if(c<Date.now()){dg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}dg.V.set.call(this,a,b)};
dg.prototype.i=function(a){var b=dg.V.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())dg.prototype.remove.call(this,a);else return b}};function eg(){}
;function fg(){}
D(fg,eg);fg.prototype[Symbol.iterator]=function(){return nf(this.P(!0)).i()};
fg.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function gg(a){this.h=a}
D(gg,fg);n=gg.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.P=function(a){var b=0,c=this.h,d=new jf;d.next=function(){if(b>=c.length)return kf;var f=c.key(b++);if(a)return lf(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return lf(f)};
var e=d.next;d.Y=function(){return mf(e.call(d))};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function hg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(hg,gg);function ig(a,b){this.i=a;this.h=null;var c;if(c=oc)c=!(9<=Number(Bc));if(c){jg||(jg=new sf);this.h=jg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),jg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(ig,fg);var lg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},jg=null;function mg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return lg[b]})}
n=ig.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(mg(a),b);ng(this)};
n.get=function(a){a=this.h.getAttribute(mg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(mg(a));ng(this)};
n.P=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new jf;d.next=function(){if(b>=c.length)return kf;var f=c[b++];if(a)return lf(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return lf(f)};
var e=d.next;d.Y=function(){return mf(e.call(d))};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ng(this)};
function ng(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function og(a,b){this.i=a;this.h=b+"::"}
D(og,fg);og.prototype.set=function(a,b){this.i.set(this.h+a,b)};
og.prototype.get=function(a){return this.i.get(this.h+a)};
og.prototype.remove=function(a){this.i.remove(this.h+a)};
og.prototype.P=function(a){var b=this.i.P(!0),c=this,d=new jf;d.next=function(){try{var f=b.Y()}catch(g){if(g===hf)return kf;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.Y()}catch(g){if(g===hf)return kf;throw g;}return lf(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.Y=function(){return mf(e.call(d))};
return d};function pg(a){H.call(this,a)}
v(pg,H);pg.prototype.getKey=function(){return Vc(this,1)};
pg.prototype.getValue=function(){return Vc(this,2===Yc(this,qg)?2:-1)};
pg.prototype.setValue=function(a){return Xc(this,2,qg,a)};
var qg=[2,3,4,5,6];function rg(a){H.call(this,a)}
v(rg,H);function sg(a){H.call(this,a)}
v(sg,H);function tg(a){H.call(this,a)}
v(tg,H);function ug(a){H.call(this,a,-1,vg)}
v(ug,H);ug.prototype.getPlayerType=function(){return Vc(this,36)};
ug.prototype.setHomeGroupInfo=function(a){return J(this,81,a)};
var vg=[9,66,24,32,86,100,101];function wg(a){H.call(this,a,-1,xg)}
v(wg,H);var xg=[15,26,28];function yg(a){H.call(this,a)}
v(yg,H);yg.prototype.setToken=function(a){return I(this,2,a)};function zg(a){H.call(this,a,-1,Ag)}
v(zg,H);zg.prototype.setSafetyMode=function(a){return I(this,5,a)};
var Ag=[12];function Bg(a){H.call(this,a,-1,Cg)}
v(Bg,H);var Cg=[12];function Dg(a){H.call(this,a)}
v(Dg,H);function Eg(a){H.call(this,a)}
v(Eg,H);function Fg(a){H.call(this,a)}
v(Fg,H);function Gg(a){H.call(this,a)}
v(Gg,H);function Hg(a){H.call(this,a)}
v(Hg,H);function Ig(a){H.call(this,a)}
v(Ig,H);
var bd=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,117];function Jg(a){H.call(this,a)}
v(Jg,H);function Kg(a){H.call(this,a)}
v(Kg,H);Kg.prototype.setVideoId=function(a){return Xc(this,1,Lg,a)};
Kg.prototype.getPlaylistId=function(){return Vc(this,2===Yc(this,Lg)?2:-1)};
var Lg=[1,2];function Mg(a){H.call(this,a,-1,Ng)}
v(Mg,H);var Ng=[3];function Og(a){H.call(this,a,1)}
v(Og,H);function Pg(a){H.call(this,a)}
v(Pg,H);var Qg;Qg=new function(a,b,c,d){this.h=a;this.fieldName=b;this.isRepeated=d;this.i=fd}(406606992,{In:0},Pg,0);function Rg(){Pg.apply(this,arguments)}
v(Rg,Pg);function Sg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Tg,Ug,Vg,Wg=y.window,Xg=(null===(Tg=null===Wg||void 0===Wg?void 0:Wg.yt)||void 0===Tg?void 0:Tg.config_)||(null===(Ug=null===Wg||void 0===Wg?void 0:Wg.ytcfg)||void 0===Ug?void 0:Ug.data_)||{},Yg=(null===(Vg=null===Wg||void 0===Wg?void 0:Wg.ytcfg)||void 0===Vg?void 0:Vg.obfuscatedData_)||[];function Zg(){Og.apply(this,arguments)}
v(Zg,Og);var $g=new Zg(Yg),ah=Xg.EXPERIMENT_FLAGS;if(!ah||!ah.jspb_i18n_extension){var bh=new Rg;Qg.i($g,bh)}B("yt.config_",Xg,void 0);B("yt.configJspb_",Yg,void 0);function ch(){Sg(Xg,arguments)}
function F(a,b){return a in Xg?Xg[a]:b}
function dh(a){return F(a,void 0)}
;function N(a){a=eh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function fh(a,b){a=eh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function eh(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
function gh(){var a=[],b=F("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=F("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var hh={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},ih={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var jh=0,kh=rc?"webkit":qc?"moz":oc?"ms":nc?"o":"";B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++jh},void 0);var lh=[];function mh(a){lh.forEach(function(b){return b(a)})}
function nh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){oh(b)}}:a}
function oh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),ch("ERRORS",e));mh(a)}
function ph(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),ch("ERRORS",e))}
;var qh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function sh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
rh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb,void 0);var th=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",th,void 0);
function uh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function wh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=uh(a,b,c,d);if(e)return e;e=++th.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rh(h);if(!xd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rh(h);
h.currentTarget=a;return c.call(a,h)};
g=nh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function xh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
;var yh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function zh(a,b){"function"===typeof a&&(a=nh(a));return window.setTimeout(a,b)}
function Ah(a){window.clearTimeout(a)}
;function Bh(a){this.I=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.O=wh(window,"mousemove",Va(this.T,this));a=Va(this.J,this);"function"===typeof a&&(a=nh(a));this.ba=window.setInterval(a,25)}
D(Bh,L);Bh.prototype.T=function(a){void 0===a.h&&sh(a);var b=a.h;void 0===a.i&&sh(a);this.i=new pd(b,a.i)};
Bh.prototype.J=function(){if(this.i){var a=yh();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.I();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Bh.prototype.F=function(){window.clearInterval(this.ba);xh(this.O)};function Ch(){}
function Dh(a,b){return Eh(a,0,b)}
Ch.prototype.M=function(a,b){return Eh(a,1,b)};
function Fh(a,b){Eh(a,2,b)}
function Gh(a){var b=C("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Hh(){Ch.apply(this,arguments)}
v(Hh,Ch);function Ih(){Hh.h||(Hh.h=new Hh);return Hh.h}
function Eh(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):zh(a,c||0)}
Hh.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):Ah(a)}};
Hh.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Hh.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};var Jh=Ih();var Kh={};
function Lh(a){var b=void 0===a?{}:a;a=void 0===b.Wb?!1:b.Wb;b=void 0===b.Mb?!0:b.Mb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Mh();wh(document,"keydown",Mh);wh(document,"keyup",Mh);wh(document,"mousedown",Mh);wh(document,"mouseup",Mh);a?wh(window,"touchmove",function(){Nh("touchmove",200)},{passive:!0}):(wh(window,"resize",function(){Nh("resize",200)}),b&&wh(window,"scroll",function(){Nh("scroll",200)}));
new Bh(function(){Nh("mouse",100)});
wh(document,"touchstart",Mh,{passive:!0});wh(document,"touchend",Mh,{passive:!0})}}
function Nh(a,b){Kh[a]||(Kh[a]=!0,Jh.M(function(){Mh();Kh[a]=!1},b))}
function Mh(){null==C("_lact",window)&&Lh();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Oh(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Ph(){var a=Qh;C("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function Rh(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var Sh=/^[\w.]*$/,Th={q:!0,search_query:!0};function Uh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vh(f[0]||""),h=Vh(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Uh);k.args=[{key:l,value:f[1],query:a,method:Wh==m?"unchanged":m}];Th.hasOwnProperty(l)||ph(k)}}return c}
var Wh=String(Uh);function Xh(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yh(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uh(a,"&")}
function Zh(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Yh(1<a.length?a[1]:a[0])):{}}
function $h(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return jc(a,e)+d}
function ai(a){if(!b)var b=window.location.href;var c=a.match(ec)[1]||null,d=gc(a);c&&d?(a=a.match(ec),b=b.match(ec),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?gc(b)==d&&(Number(b.match(ec)[4]||null)||null)==(Number(a.match(ec)[4]||null)||null):!0;return a}
function Vh(a){return a&&a.match(Sh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bi(a){var b=ci;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Id;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ta){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?id:g;try{var h=g.history.length}catch(Ta){h=0}e.u_his=h;var k;e.u_h=null==(k=id.screen)?void 0:k.height;var l;e.u_w=null==(l=id.screen)?void 0:l.width;var m;e.u_ah=null==(m=id.screen)?void 0:m.availHeight;var q;e.u_aw=
null==(q=id.screen)?void 0:q.availWidth;var u;e.u_cd=null==(u=id.screen)?void 0:u.colorDepth}catch(Ta){}h=b.h;try{var r=h.screenX;var z=h.screenY}catch(Ta){}try{var A=h.outerWidth;var K=h.outerHeight}catch(Ta){}try{var S=h.innerWidth;var T=h.innerHeight}catch(Ta){}try{var U=h.screenLeft;var Uc=h.screenTop}catch(Ta){}try{S=h.innerWidth,T=h.innerHeight}catch(Ta){}try{var kg=h.screen.availWidth;var Eo=h.screen.availTop}catch(Ta){}r=[U,Uc,r,z,kg,Eo,A,K,S,T];z=b.h.top;try{var ta=(z||window).document,fa=
"CSS1Compat"==ta.compatMode?ta.documentElement:ta.body;var Ja=(new qd(fa.clientWidth,fa.clientHeight)).round()}catch(Ta){Ja=new qd(-12245933,-12245933)}ta=Ja;Ja={};fa=new Ie;y.SVGElement&&y.document.createElementNS&&fa.set(0);z=Cd();z["allow-top-navigation-by-user-activation"]&&fa.set(1);z["allow-popups-to-escape-sandbox"]&&fa.set(2);y.crypto&&y.crypto.subtle&&fa.set(3);y.TextDecoder&&y.TextEncoder&&fa.set(4);fa=Je(fa);Ja.bc=fa;Ja.bih=ta.height;Ja.biw=ta.width;Ja.brdim=r.join();b=b.i;ta="ja";Ke.ja&&
Ke.hasOwnProperty(ta)?ta=Ke.ja:(fa=new Ke,Ke.ja=fa,Ke.hasOwnProperty(ta),ta=fa);b=(Ja.vis=ta.C(Jd.flag,Jd.defaultValue)&&b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ja.wgl=!!id.WebGLRenderingContext,Ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ci=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Xh(bi(a))},void 0);Date.now();var di="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function ei(){if(!di)return null;var a=di();return"open"in a?a:null}
function fi(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var gi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},hi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),ii=!1;
function ji(a,b){b=void 0===b?{}:b;var c=ai(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in gi){var f=F(gi[e]);!f||!c&&gc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!gc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!gc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!gc(a))b["X-YouTube-Ad-Signals"]=Xh(bi(void 0));return b}
function ki(a){var b=window.location.search,c=gc(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!ai(a)||(c=document.location.hostname);var d=fc(a.match(ec)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yh(b),f={};E(hi,function(g){e[g]&&(f[g]=e[g])});
return $h(a,f||{},!1)}
function li(a,b){var c=b.format||"JSON";a=mi(a,b);var d=ni(a,b),e=!1,f=oi(a,function(k){if(!e){e=!0;h&&Ah(h);var l=fi(k),m=null,q=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||q||u)m=pi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};q=b.context||y;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=zh(function(){e||(e=!0,f.abort(),Ah(h),g.call(b.context||y,f))},b.timeout)}return f}
function mi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=$h(a,b||{},!0);return a}
function ni(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=dh("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||gc(a)&&!b.withCredentials&&gc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Yh(e),tb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):ic(e));f=e||f&&!mb(f);!ii&&f&&"POST"!=
b.method&&(ii=!0,oh(Error("AJAX request with postData should use POST")));return e}
function pi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ph(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?qi(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=ri(g)})}d&&si(e);
return e}
function si(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;yb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Yb(a[b],null);a[c]=d}else si(a[b])}}
function qi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ri(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function oi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&nh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ei();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=ki(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ji(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ti=Cc||Dc;function ui(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var vi={},wi=0;
function xi(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ui("cobalt")){if(a){a instanceof Nb||(a="object"==typeof a&&a.ea?a.da():String(a),Sb.test(a)?a=new Nb(a,Ob):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Rb))&&Qb.test(b[1])?new Nb(a,Ob):null));b=Pb(a||Tb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Xb)a=b;else{var f="object"==typeof b;a=null;f&&b.Va&&(a=b.Ra());b=f&&b.ea?b.da():String(b);Mb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Gb,"&amp;")),-1!=
b.indexOf("<")&&(b=b.replace(Hb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Ib,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Jb,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Kb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Lb,"&#0;")));a=Yb(b,a)}a instanceof Xb&&a.constructor===Xb?a=a.h:(Ma(a),a="type_error:SafeHtml");a=encodeURIComponent(String(zf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=ud("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||
a.document).body.appendChild(a))}}else if(e)oi(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)oi(a,b,"GET","",d);else{b:{try{var g=new $a({url:a});if(g.j&&g.i||g.l){var h=fc(a.match(ec)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(kc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var q=a.charCodeAt(c+2);if(!q||61==q||38==q||35==q){var u=c;break d}}c+=3}u=-1}if(0>u)var r=null;else{var z=a.indexOf("&",u);if(0>z||z>l)z=l;u+=3;
r=decodeURIComponent(a.substr(u,z-u).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(A){}f=!1}f?yi(a)?(b&&b(),f=!0):f=!1:f=!1;f||zi(a,b)}}
function Ai(){var a=void 0===a?"":a;yi("/generate_204",a)||xi("/generate_204",void 0,void 0,void 0,a)}
function yi(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function zi(a,b){var c=new Image,d=""+wi++;vi[d]=c;c.onload=c.onerror=function(){b&&vi[d]&&b();delete vi[d]};
c.src=a}
;var Bi=y.ytPubsubPubsubInstance||new M,Ci=y.ytPubsubPubsubSubscribedKeys||{},Di=y.ytPubsubPubsubTopicToKeys||{},Ei=y.ytPubsubPubsubIsSynchronous||{};function Fi(a,b){var c=Gi();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ci[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Ei[a]?f():zh(f,0)}catch(g){oh(g)}},void 0);
Ci[d]=!0;Di[a]||(Di[a]=[]);Di[a].push(d);return d}return 0}
function Hi(a){var b=Gi();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Ci[c]}))}
function Ii(a,b){var c=Gi();c&&c.publish.apply(c,arguments)}
function Ji(a){var b=Gi();if(b)if(b.clear(a),a)Ki(a);else for(var c in Di)Ki(c)}
function Gi(){return y.ytPubsubPubsubInstance}
function Ki(a){Di[a]&&(a=Di[a],E(a,function(b){Ci[b]&&delete Ci[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ra;M.prototype.publish=M.prototype.ha;M.prototype.clear=M.prototype.clear;B("ytPubsubPubsubInstance",Bi,void 0);B("ytPubsubPubsubTopicToKeys",Di,void 0);B("ytPubsubPubsubIsSynchronous",Ei,void 0);B("ytPubsubPubsubSubscribedKeys",Ci,void 0);var Li=window,O=Li.ytcsi&&Li.ytcsi.now?Li.ytcsi.now:Li.performance&&Li.performance.timing&&Li.performance.now&&Li.performance.timing.navigationStart?function(){return Li.performance.timing.navigationStart+Li.performance.now()}:function(){return(new Date).getTime()};var Mi=fh("initial_gel_batch_timeout",2E3),Ni=Math.pow(2,16)-1,Oi=void 0;function Pi(){this.j=this.h=this.i=0}
var Qi=new Pi,Ri=new Pi,Si=!0,Ti=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Ti,void 0);var Ui=y.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Ui,void 0);var Vi=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Vi,void 0);var Wi=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Wi,void 0);
function Xi(a,b){if("log_event"===a.endpoint){var c=Yi(a),d=Ti.get(c)||[];Ti.set(c,d);d.push(a.payload);Zi(b,d,c)}}
function $i(a,b){if("log_event"===a.endpoint){var c=Yi(a,!0),d=Ui.get(c)||[];Ui.set(c,d);d.push(a.payload);Zi(b,d,c,!0)}}
function Zi(a,b,c,d){d=void 0===d?!1:d;a&&(Oi=new a);a=fh("tvhtml5_logging_max_batch")||fh("web_logging_max_batch")||100;var e=O(),f=d?Ri.j:Qi.j;b.length>=a?aj({writeThenSend:!0},N("flush_only_full_queue")?c:void 0,d):10<=e-f&&(bj(d),d?Ri.j=e:Qi.j=e)}
function cj(a,b){if("log_event"===a.endpoint){var c=Yi(a),d=new Map;d.set(c,[a.payload]);b&&(Oi=new b);return new Gf(function(e){Oi&&Oi.isReady()?dj(d,e,{bypassNetworkless:!0},!0):e()})}}
function ej(a,b){if("log_event"===a.endpoint){var c=Yi(a,!0),d=new Map;d.set(c,[a.payload]);b&&(Oi=new b);return new Gf(function(e){Oi&&Oi.isReady()?fj(d,e,{bypassNetworkless:!0},!0):e()})}}
function Yi(a,b){var c="";if(a.sa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Kg;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Xc(d,2,Lg,c.playlistId);Wi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vi[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function aj(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Gf(function(d){c?(Ah(Ri.i),Ah(Ri.h),Ri.h=0):(Ah(Qi.i),Ah(Qi.h),Qi.h=0);if(Oi&&Oi.isReady())if(void 0!==b)if(c){var e=new Map,f=Ui.get(b)||[];e.set(b,f);fj(e,d,a);Ui.delete(b)}else e=new Map,f=Ti.get(b)||[],e.set(b,f),dj(e,d,a),Ti.delete(b);else c?(fj(Ui,d,a),Ui.clear()):(dj(Ti,d,a),Ti.clear());else bj(c),d()})}
function bj(a){a=void 0===a?!1:a;if(N("web_gel_timeout_cap")&&(!a&&!Qi.h||a&&!Ri.h)){var b=zh(function(){aj({writeThenSend:!0},void 0,a)},6E4);
a?Ri.h=b:Qi.h=b}Ah(a?Ri.i:Qi.i);b=F("LOGGING_BATCH_TIMEOUT",fh("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Si&&(b=Mi);b=zh(function(){aj({writeThenSend:!0},void 0,a)},b);
a?Ri.i=b:Qi.i=b}
function dj(a,b,c,d){var e=Oi;c=void 0===c?{}:c;var f=Math.round(O()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=rb({context:gj(e.config_||hj())});k.events=l;(l=Vi[h])&&ij(k,h,l);delete Vi[h];h="visitorOnlyApprovedKey"===h;jj(k,f,h);kj(c);N("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Ai();lj(e,"log_event",k,mj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Si=!1}}
function fj(a,b,c,d){var e=Oi;c=void 0===c?{}:c;var f=Math.round(O()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new Mg;var m=nj(e.config_||hj());J(k,1,m);for(m=0;m<l.length;m++)cd(k,3,Ig,l[m]);(l=Wi[h])&&oj(k,h,l);delete Wi[h];h="visitorOnlyApprovedKey"===h;pj(k,f,h);kj(c);a:{Mc=!0;try{var q=JSON.stringify(k.toJSON(),dd);break a}finally{Mc=!1}q=void 0}k=q;h=mj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;lj(e,"log_event","",h);Si=!1}}
function kj(a){N("always_send_and_write")&&(a.writeThenSend=!1)}
function mj(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,vb:a,sa:b,Gn:!!e,headers:{},postBodyFormat:"",postBody:""}}
function jj(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&(c=qj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function pj(a,b,c){I(a,2,b);if(!c&&(b=F("EVENT_ID",void 0))){c=qj();var d=new Jg;I(d,1,b);I(d,2,c);J(a,5,d)}}
function qj(){var a=F("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Ni/2));a++;a>Ni&&(a=1);ch("BATCH_CLIENT_COUNTER",a);return a}
function ij(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function oj(a,b,c){if(Vc(c,1===Yc(c,Lg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,4,c);a=Zc(a,Bg,1)||new Bg;c=Zc(a,zg,3)||new zg;var e=new yg;e.setToken(b);I(e,1,d);cd(c,12,yg,e);J(a,3,c)}
;var rj=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",rj,void 0);
function sj(a,b,c,d){d=void 0===d?{}:d;if(N("lr_drop_other_and_business_payloads")){if(ih[a]||hh[a])return}else if(N("lr_drop_other_payloads")&&ih[a])return;var e={},f=Math.round(d.timestamp||O());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Oh();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&d.S&&(a=e.context,b=d.S,b={index:tj(b),groupKey:b},a.sequence=b,d.ob&&delete rj[d.S]);(d.cc?cj:Xi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
sa:d.sa},c)}
function tj(a){rj[a]=a in rj?rj[a]+1:0;return rj[a]}
;function uj(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function vj(){var a=uj();a=Object.keys(He).indexOf(a);return-1===a?null:a}
;function wj(a,b,c,d,e){Rd.set(""+a,b,{Za:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var xj=C("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",xj,void 0);function yj(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Rd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(xj[d]=c.toString())}}}
yj.prototype.get=function(a,b){zj(a);Aj(a);a=void 0!==xj[a]?xj[a].toString():null;return null!=a?a:b?b:""};
yj.prototype.set=function(a,b){zj(a);Aj(a);if(null==b)throw Error("ExpectedNotNull");xj[a]=b.toString()};
yj.prototype.remove=function(a){zj(a);Aj(a);delete xj[a]};
yj.prototype.clear=function(){for(var a in xj)delete xj[a]};
function Aj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function zj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Bj(a){a=void 0!==xj[a]?xj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
La(yj);var Cj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Dj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ej={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Fj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Gj(){var a=y.navigator;return a?a.connection:void 0}
;function Hj(){return"INNERTUBE_API_KEY"in Xg&&"INNERTUBE_API_VERSION"in Xg}
function hj(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Wa:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xa:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ob:F("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),sb:F("INNERTUBE_CONTEXT_HL",void 0),rb:F("INNERTUBE_CONTEXT_GL",void 0),Pb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Rb:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Qb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function gj(a){var b={client:{hl:a.sb,gl:a.rb,clientName:a.Xa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Wa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=gh();0<c.length&&(b.request={internalExperimentFlags:c});Ij(a,void 0,b);Jj(a,void 0,b);Kj(void 0,b);Lj(a,void 0,b);Mj(void 0,b);F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&
(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(Yh(F("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function nj(a){var b=new Bg,c=new ug;I(c,1,a.sb);I(c,2,a.rb);I(c,16,a.Ob);I(c,17,a.innertubeContextClientVersion);if(a.Wa){var d=a.Wa,e=new rg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,62,e)}(d=y.devicePixelRatio)&&1!=d&&I(c,65,d);d=F("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=gh();if(0<d.length){e=new wg;for(var f=0;f<d.length;f++){var g=new pg;I(g,1,d[f].key);g.setValue(d[f].value);
cd(e,15,pg,g)}J(b,5,e)}Ij(a,c);Jj(a,c);Kj(c);Lj(a,c);Mj(c);F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(a=new zg,I(a,3,F("DELEGATED_SESSION_ID")));a=t(Object.entries(Yh(F("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,1,c);return b}
function Ij(a,b,c){a=a.Xa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Zc(b,sg,96)||new sg;var d=vj();null!==d&&I(c,3,d);J(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=uj())}
function Jj(a,b,c){a=a.Xa;if(("WEB_REMIX"===a||76===a)&&!N("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=Zc(b,tg,70))?d:new tg;d=vj();null!==d&&I(c,10,d);J(b,70,c)}else if(c){var e;c.client.ub=null!=(e=c.client.ub)?e:{};c.client.ub.webDisplayMode=uj()}}
function Kj(a,b){var c;if(N("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Lj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Zc(b,rg,62))?d:new rg;I(c,6,a.appInstallData);J(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Mj(a,b){a:{var c=Gj();if(c){var d=Cj[c.type||"unknown"]||"CONN_UNKNOWN";c=Cj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Dj[d]):b&&(b.client.connectionType=d));N("web_log_effective_connection_type")&&(d=Gj(),d=null!==d&&void 0!==d&&d.effectiveType?Fj.hasOwnProperty(d.effectiveType)?Fj[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&
(a?I(a,94,Ej[d]):b&&(b.client.effectiveConnectionType=d)))}
function Nj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.En||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Dn:b=Vd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Oj(a){a=Object.assign({},a);delete a.Authorization;var b=Vd();if(b){var c=new bf;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Hc(c.digest(),3)}return a}
;function Pj(a){var b=new hg;(b=b.isAvailable()?a?new og(b,a):b:null)||(a=new ig(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new dg(a):null;this.i=document.domain||window.location.hostname}
Pj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(zf(b))}catch(f){return}else e=escape(b);wj(a,e,c,this.i)};
Pj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Rd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Pj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Rd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Qj;function Rj(){Qj||(Qj=new Pj("yt.innertube"));return Qj}
function Sj(a,b,c,d){if(d)return null;d=Rj().get("nextId",!0)||1;var e=Rj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Oj(c),requestTime:Math.round(O())};Rj().set("nextId",d+1,86400,!0);Rj().set("requests",e,86400,!0);return d}
function Tj(a){var b=Rj().get("requests",!0)||{};delete b[a];Rj().set("requests",b,86400,!0)}
function Uj(a){var b=Rj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=Oj(Nj(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),lj(a,d.method,e,{}));delete b[c]}}Rj().set("requests",b,86400,!0)}}
;var Vj=function(){var a;return function(){a||(a=new Pj("ytidb"));return a}}();
function Wj(){var a;return null===(a=Vj())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Xj=[],Yj,Zj=!1;function ak(){var a={};for(Yj=new bk(void 0===a.handleError?ck:a.handleError,void 0===a.logEvent?P:a.logEvent);0<Xj.length;)switch(a=Xj.shift(),a.type){case "ERROR":Yj.handleError(a.payload);break;case "EVENT":Yj.logEvent(a.eventType,a.payload)}}
function dk(a){Zj||(Yj?Yj.handleError(a):(Xj.push({type:"ERROR",payload:a}),10<Xj.length&&Xj.shift()))}
function ek(a,b){Zj||(Yj?Yj.logEvent(a,b):(Xj.push({type:"EVENT",eventType:a,payload:b}),10<Xj.length&&Xj.shift()))}
;function fk(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
v(fk,Error);function gk(){try{return hk(),!0}catch(a){return!1}}
function hk(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new fk("Datasync ID not set","unknown");}
;function ik(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function jk(a){return a.substr(0,a.indexOf(":"))||a}
;var kk={},lk=(kk.AUTH_INVALID="No user identifier specified.",kk.EXPLICIT_ABORT="Transaction was explicitly aborted.",kk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",kk.MISSING_INDEX="Index not created.",kk.MISSING_OBJECT_STORES="Object stores not created.",kk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",kk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",kk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
kk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",kk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",kk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",kk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",kk),mk={},nk=(mk.AUTH_INVALID="ERROR",mk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",mk.EXPLICIT_ABORT="IGNORED",mk.IDB_NOT_SUPPORTED="ERROR",mk.MISSING_INDEX=
"WARNING",mk.MISSING_OBJECT_STORES="ERROR",mk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",mk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",mk.QUOTA_EXCEEDED="WARNING",mk.QUOTA_MAYBE_EXCEEDED="WARNING",mk.UNKNOWN_ABORT="WARNING",mk.INCOMPATIBLE_DB_VERSION="WARNING",mk),ok={},pk=(ok.AUTH_INVALID=!1,ok.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ok.EXPLICIT_ABORT=!1,ok.IDB_NOT_SUPPORTED=!1,ok.MISSING_INDEX=!1,ok.MISSING_OBJECT_STORES=!1,ok.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ok.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ok.QUOTA_EXCEEDED=!1,ok.QUOTA_MAYBE_EXCEEDED=!0,ok.UNKNOWN_ABORT=!0,ok.INCOMPATIBLE_DB_VERSION=!1,ok);function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?lk[a]:c;d=void 0===d?nk[a]:d;e=void 0===e?pk[a]:e;fk.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,fk);function qk(a,b){Q.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},lk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,qk.prototype)}
v(qk,Q);function rk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,rk.prototype)}
v(rk,Error);var sk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function tk(a,b,c,d){b=jk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Q)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Q("QUOTA_EXCEEDED",a);if(Ec&&"UnknownError"===e.name)return new Q("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof rk)return new Q("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&sk.some(function(f){return e.message.includes(f)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Q("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Nn:e.name})];e.level="WARNING";return e}
function uk(a,b,c){var d=Wj();return new Q("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function vk(a){if(!a)throw Error();throw a;}
function wk(a){return a}
function xk(a){this.h=a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(new xk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={la:0};f.la<a.length;f={la:f.la},++f.la)yk(R.resolve(a[f.la]).then(function(g){return function(h){d[g.la]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
R.resolve=function(a){return new R(new xk(function(b,c){a instanceof R?a.then(b,c):b(a)}))};
R.reject=function(a){return new R(new xk(function(b,c){c(a)}))};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:wk,e=null!==b&&void 0!==b?b:vk;return new R(new xk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){zk(c,c,d,f,g)}),c.onRejected.push(function(){Ak(c,c,e,f,g)})):"FULFILLED"===c.state.status?zk(c,c,d,f,g):"REJECTED"===c.state.status&&Ak(c,c,e,f,g)}))};
function yk(a,b){a.then(void 0,b)}
function zk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?Bk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ak(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?Bk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?Bk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ck(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Dk(a){return new Promise(function(b,c){Ck(a,b,c)})}
function Ek(a){return new R(new xk(function(b,c){Ck(a,b,c)}))}
;function Fk(a,b){return new R(new xk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Gk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(O());this.i=!1}
n=Gk.prototype;n.add=function(a,b,c){return Hk(this,[a],{mode:"readwrite",N:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Hk(this,[a],{mode:"readwrite",N:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Hk(this,[a],{mode:"readonly",N:!0},function(c){return c.objectStore(a).count(b)})};
function Ik(a,b,c){a=a.h.createObjectStore(b,c);return new Jk(a)}
n.delete=function(a,b){return Hk(this,[a],{mode:"readwrite",N:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Hk(this,[a],{mode:"readonly",N:!0},function(c){return c.objectStore(a).get(b)})};
function Kk(a,b){return Hk(a,["LogsRequestsStore"],{mode:"readwrite",N:!0},function(c){c=c.objectStore("LogsRequestsStore");return Ek(c.h.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Hk(a,b,c,d){var e,f,g,h,k,l,m,q,u,r,z,A;return x(function(K){switch(K.h){case 1:var S={mode:"readonly",N:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?S.mode=c:Object.assign(S,c);e=S;a.transactionCount++;f=e.N?3:1;g=0;case 2:if(h){K.s(3);break}g++;k=Math.round(O());sa(K,4);l=a.h.transaction(b,e.mode);S=new Lk(l);S=Mk(S,d);return w(K,S,6);case 6:return m=K.i,q=Math.round(O()),Nk(a,k,q,g,void 0,b.join(),e),K.return(m);case 4:u=va(K);r=Math.round(O());z=tk(u,a.h.name,b.join(),a.h.version);
if((A=z instanceof Q&&!z.h)||g>=f)Nk(a,k,r,g,z,b.join(),e),h=z;K.s(2);break;case 3:return K.return(Promise.reject(h))}})}
function Nk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ek("QUOTA_EXCEEDED",{dbName:jk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),ek("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Ok(a,!1,d,f,b,g.tag),dk(e)):Ok(a,!0,d,f,b,g.tag)}
function Ok(a,b,c,d,e,f){ek("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function Jk(a){this.h=a}
n=Jk.prototype;n.add=function(a,b){return Ek(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return Ek(this.h.clear()).then(function(){})};
n.count=function(a){return Ek(this.h.count(a))};
function Pk(a,b){return Qk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Pk(this,a):Ek(this.h.delete(a))};
n.get=function(a){return Ek(this.h.get(a))};
n.index=function(a){try{return new Rk(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new rk(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function Qk(a,b,c){a=a.h.openCursor(b.query,b.direction);return Sk(a).then(function(d){return Fk(d,c)})}
function Lk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Mk(a,b){var c=new Promise(function(d,e){try{yk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Lk.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
Lk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Jk(a),this.j.set(a,b));return b};
function Rk(a){this.h=a}
n=Rk.prototype;n.count=function(a){return Ek(this.h.count(a))};
n.delete=function(a){return Tk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return Ek(this.h.get(a))};
n.getKey=function(a){return Ek(this.h.getKey(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function Tk(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Sk(a).then(function(d){return Fk(d,c)})}
function Uk(a,b){this.request=a;this.cursor=b}
function Sk(a){return Ek(a).then(function(b){return b?new Uk(a,b):null})}
n=Uk.prototype;n.advance=function(a){this.cursor.advance(a);return Sk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Sk(this.request)};
n.delete=function(){return Ek(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.getValue=function(){return this.cursor.value};
n.update=function(a){return Ek(this.cursor.update(a))};function Vk(a,b,c){return new Promise(function(d,e){function f(){u||(u=new Gk(g.result,{closed:q}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.nc,m=c.upgrade,q=c.closed,u;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&ek("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:jk(a)});var z=f(),A=new Lk(g.transaction);
m&&m(z,function(K){return r.oldVersion<K&&r.newVersion>=K},A);
A.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){ek("IDB_UNEXPECTEDLY_CLOSED",{dbName:jk(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Wk(a,b,c){c=void 0===c?{}:c;return Vk(a,b,c)}
function Xk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return sa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Dk(c),4);
if(2!=g.h)return ua(g,0);f=va(g);throw tk(f,a,"",-1);})}
;function Yk(a){return new Promise(function(b){Fh(function(){b()},a)})}
function Zk(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
Zk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Wk(a,b,c)};
Zk.prototype.delete=function(a){a=void 0===a?{}:a;return Xk(this.name,a)};
function $k(a,b){return new Q("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function al(a,b){if(!b)throw uk("openWithToken",jk(a.name));return a.open()}
Zk.prototype.open=function(){function a(){var f,g,h,k,l,m,q,u,r,z;return x(function(A){switch(A.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",sa(A,2),w(A,c.j(c.name,c.options.version,e),4);case 4:k=A.i;for(var K=c.options,S=[],T=t(Object.keys(K.va)),U=T.next();!U.done;U=T.next()){U=U.value;var Uc=K.va[U],kg=void 0===Uc.Yb?Number.MAX_VALUE:Uc.Yb;!(k.h.version>=Uc.Qa)||k.h.version>=kg||k.h.objectStoreNames.contains(U)||S.push(U)}l=S;if(0===l.length){A.s(5);break}m=Object.keys(c.options.va);
q=k.objectStoreNames();if(c.m<fh("ytidb_reopen_db_retries",0))return c.m++,k.close(),dk(new Q("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),A.return(a());if(!(c.o<fh("ytidb_remake_db_retries",1))){A.s(6);break}c.o++;if(!N("ytidb_remake_db_enable_backoff_delay")){A.s(7);break}return w(A,Yk(c.i),8);case 8:c.i*=2;case 7:return w(A,c.delete(),9);case 9:return dk(new Q("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),
A.return(a());case 6:throw new qk(q,m);case 5:return A.return(k);case 2:u=va(A);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){A.s(10);break}return w(A,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:r=A.i;z=r.h.version;if(void 0!==c.options.version&&z>
c.options.version+1)throw r.close(),c.l=!1,$k(c,z);return A.return(r);case 10:throw b(),u instanceof Error&&!N("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+h.substring(h.indexOf("\n")+1)),tk(u,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw $k(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,nc:b,upgrade:this.options.upgrade};return this.h=d=a()};var bl=new Zk("YtIdbMeta",{va:{databases:{Qa:1}},upgrade:function(a,b){b(1)&&Ik(a,"databases",{keyPath:"actualName"})}});
function cl(a,b){var c;return x(function(d){if(1==d.h)return w(d,al(bl,b),2);c=d.i;return d.return(Hk(c,["databases"],{N:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ek(f.h.put(a,void 0)).then(function(){})})}))})}
function dl(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,al(bl,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function el(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,al(bl,b),2)):3!=e.h?(d=e.i,w(e,Hk(d,["databases"],{N:!0,mode:"readonly"},function(f){c.length=0;return Qk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function fl(a){return el(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var gl,hl=new function(){}(new function(){});
function il(){var a,b,c;return x(function(d){switch(d.h){case 1:a=Wj();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=ti)e=/WebKit\/([0-9]+)/.exec(Ub()),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Ub()),e=!(e&&602<=parseInt(e[1],10)));if(e||pc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
sa(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(d,cl(c,hl),4);case 4:return w(d,dl("yt-idb-test-do-not-use",hl),5);case 5:return d.return(!0);case 2:return va(d),d.return(!1)}})}
function jl(){if(void 0!==gl)return gl;Zj=!0;return gl=il().then(function(a){Zj=!1;var b,c;null!==(b=Vj())&&void 0!==b&&b.h&&(b=Wj(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=Vj())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function kl(){return C("ytglobal.idbToken_")||void 0}
function ll(){var a=kl();return a?Promise.resolve(a):jl().then(function(b){(b=b?hl:void 0)&&B("ytglobal.idbToken_",b,void 0);return b})}
;new gd;function ml(a){if(!gk())throw a=new Q("AUTH_INVALID",{dbName:a}),dk(a),a;var b=hk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function nl(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",w(m,ll(),2);case 2:g=m.i;if(!g)throw h=uk("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),dk(h),h;ik(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ml(a);sa(m,3);return w(m,cl(k,g),5);case 5:return w(m,Wk(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=va(m),sa(m,7),w(m,dl(k.actualName,
g),9);case 9:ua(m,8);break;case 7:va(m);case 8:throw l;}})}
function ol(a,b,c){c=void 0===c?{}:c;return nl(a,b,!1,c)}
function pl(a,b,c){c=void 0===c?{}:c;return nl(a,b,!0,c)}
function ql(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,ll(),2);if(3!=e.h){c=e.i;if(!c)return e.return();ik(a);d=ml(a);return w(e,Xk(d.actualName,b),3)}return w(e,dl(d.actualName,c),0)})}
function rl(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Xk(d.actualName,b),2):w(e,dl(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function sl(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,ll(),2);if(3!=d.h){b=d.i;if(!b)return d.return();ik("LogsDatabaseV2");return w(d,fl(b),3)}c=d.i;return w(d,rl(c,a,b),0)})}
function tl(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,ll(),2);if(3!=d.h){c=d.i;if(!c)return d.return();ik(a);return w(d,Xk(a,b),3)}return w(d,dl(a,c),0)})}
;function ul(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.oa=function(){};
this.now=Date.now;this.ta=!1;this.Db=null!==(b=a.Db)&&void 0!==b?b:100;this.Ab=null!==(c=a.Ab)&&void 0!==c?c:1;this.yb=null!==(d=a.yb)&&void 0!==d?d:2592E6;this.wb=null!==(e=a.wb)&&void 0!==e?e:12E4;this.zb=null!==(f=a.zb)&&void 0!==f?f:5E3;this.v=null!==(g=a.v)&&void 0!==g?g:void 0;this.Ga=!!a.Ga;this.Fa=null!==(h=a.Fa)&&void 0!==h?h:.1;this.La=null!==(k=a.La)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.oa&&(this.oa=a.oa);a.ta&&(this.ta=a.ta);this.C=a.C;this.R=a.R;this.H=a.H;
this.K=a.K;this.Z=a.Z;this.cb=a.cb;this.bb=a.bb;this.v&&(!this.C||this.C("networkless_logging"))&&vl(this)}
function vl(a){return x(function(b){if(1==b.h)return!a.v||a.ta?b.return():a.Ga&&Math.random()<=a.Fa?w(b,a.H.Jb(a.v),2):b.s(2);wl(a);a.K.G()&&a.xa();a.K.W(a.cb,a.xa.bind(a));a.K.W(a.bb,a.ib.bind(a));a.h=!0;b.h=0})}
n=ul.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.H.set(d,this.v).then(function(e){d.id=e;c.K.G()&&xl(c,d)}).catch(function(e){xl(c,d);
yl(c,e)})}else this.Z(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.H.set(e,d.v).catch(function(l){yl(d,l)}),2);
f(g,h);k.h=0})}}this.Z(a,b,e.skipRetry)}else this.H.set(e,this.v).catch(function(g){d.Z(a,b,e.skipRetry);
yl(d,g)})}else this.Z(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.H.na(d.id,c.v):e=!0;c.K.X&&c.C&&c.C("vss_network_hint")&&c.K.X(!0);f(g,h)};
this.Z(d.url,d.options);this.H.set(d,this.v).then(function(g){d.id=g;e&&c.H.na(d.id,c.v)}).catch(function(g){yl(c,g)})}else this.Z(a,b)};
n.xa=function(){var a=this;if(!this.v)throw uk("throttleSend");this.i||(this.i=this.R.M(function(){var b;return x(function(c){if(1==c.h)return w(c,a.H.qb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?w(c,xl(a,b),3):(a.ib(),c.return());a.i&&(a.i=0,a.xa());c.h=0})},this.Db))};
n.ib=function(){this.R.U(this.i);this.i=0};
function xl(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.v)throw c=uk("immediateSend"),c;if(void 0===b.id){e.s(2);break}return w(e,a.H.Sb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.oa(Error("The request cannot be found in the database."));case 2:if(zl(a,b,a.yb)){e.s(4);break}a.oa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return w(e,a.H.na(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Al(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return w(e,a.H.na(b.id,a.v),8);case 8:a.Z(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Al(a,b){if(!a.v)throw uk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=Bl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.La)){h.s(2);break}if(!a.K.aa){h.s(3);break}return w(h,a.K.aa(),3);case 3:if(a.K.G()){h.s(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.s(6);break}return w(h,a.H.eb(b.id,a.v,!1),6);case 6:return h.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.La)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.s(8);break}return b.sendCount<a.Ab?w(h,a.H.eb(b.id,a.v),12):w(h,a.H.na(b.id,a.v),8);case 12:a.R.M(function(){a.K.G()&&a.xa()},a.zb);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.s(2):w(g,a.H.na(b.id,a.v),2);a.K.X&&a.C&&a.C("vss_network_hint")&&a.K.X(!0);d(e,f);g.h=0})};
return b}
function zl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function wl(a){if(!a.v)throw uk("retryQueuedRequests");a.H.qb("QUEUED",a.v).then(function(b){b&&!zl(a,b,a.wb)?a.R.M(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.s(2):w(c,a.H.eb(b.id,a.v),2);wl(a);c.h=0})}):a.K.G()&&a.xa()})}
function yl(a,b){a.Eb&&!a.K.G()?a.Eb(b):a.handleError(b)}
function Bl(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Cl(a,b){this.version=a;this.args=b}
;function Dl(a,b){this.topic=a;this.h=b}
Dl.prototype.toString=function(){return this.topic};var El=C("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ra;M.prototype.publish=M.prototype.ha;M.prototype.clear=M.prototype.clear;B("ytPubsub2Pubsub2Instance",El,void 0);var Fl=C("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",Fl,void 0);var Gl=C("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",Gl,void 0);var Hl=C("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",Hl,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Il(a,b){var c=Jl();c&&c.publish.call(c,a.toString(),a,b)}
function Kl(a){var b=Ll,c=Jl();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Fl[d])try{if(f&&b instanceof Dl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var l=new h;h.ga=l.version}var m=h.ga}catch(q){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
hb(k.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){oh(q)}},Hl[b.toString()]?C("yt.scheduler.instance")?Jh.M(g):zh(g,0):g())});
Fl[d]=!0;Gl[b.toString()]||(Gl[b.toString()]=[]);Gl[b.toString()].push(d);return d}
function Ml(){var a=Nl,b=Kl(function(c){a.apply(void 0,arguments);Ol(b)});
return b}
function Ol(a){var b=Jl();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete Fl[c]}))}
function Jl(){return C("ytPubsub2Pubsub2Instance")}
;function Pl(a,b){Zk.call(this,a,b);this.options=b;ik(a)}
v(Pl,Zk);function Ql(a,b){var c;return function(){c||(c=new Pl(a,b));return c}}
Pl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.fb?pl:ol)(a,b,Object.assign({},c))};
Pl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.fb?tl:ql)(this.name,a)};
function Rl(a,b){return Ql(a,b)}
;var Sl;
function Tl(){if(Sl)return Sl();var a={};Sl=Rl("LogsDatabaseV2",{va:(a.LogsRequestsStore={Qa:2},a),fb:!1,upgrade:function(b,c,d){c(2)&&Ik(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Sl()}
;function Ul(a){return al(Tl(),a)}
function Vl(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Ul(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Kk(d,e),3);f=g.i;c.oc=O();Wl(c);return g.return(f)})}
function Xl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Ul(b),2);if(3!=l.h)return d=l.i,e=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,O()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Hk(d,["LogsRequestsStore"],{mode:"readwrite",N:!0},function(m){return Tk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.getValue()&&(k=q.getValue(),"NEW"===a&&(k.status="QUEUED",
q.update(k)))})}),3);
c.oc=O();Wl(c);return l.return(k)})}
function Yl(a,b){var c;return x(function(d){if(1==d.h)return w(d,Ul(b),2);c=d.i;return d.return(Hk(c,["LogsRequestsStore"],{mode:"readwrite",N:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ek(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Zl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,Ul(b),2);d=e.i;return e.return(Hk(d,["LogsRequestsStore"],{mode:"readwrite",N:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Ek(g.h.put(h,void 0)).then(function(){return h})):R.resolve(void 0)})}))})}
function $l(a,b){var c;return x(function(d){if(1==d.h)return w(d,Ul(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function am(a){var b,c;return x(function(d){if(1==d.h)return w(d,Ul(a),2);b=d.i;c=O()-2592E6;return w(d,Hk(b,["LogsRequestsStore"],{mode:"readwrite",N:!0},function(e){return Qk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function bm(){return x(function(a){return w(a,sl(),0)})}
function Wl(a){N("nwl_csi_killswitch")||.01>=Math.random()&&Il("nwl_transaction_latency_payload",a)}
;var cm={},dm=Rl("ServiceWorkerLogsDatabase",{va:(cm.SWHealthLog={Qa:1},cm),fb:!0,upgrade:function(a,b){b(1)&&Ik(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function em(a){return al(dm(),a)}
function fm(a){var b,c;return x(function(d){if(1==d.h)return w(d,em(a),2);b=d.i;c=O()-2592E6;return w(d,Hk(b,["SWHealthLog"],{mode:"readwrite",N:!0},function(e){return Qk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function gm(a){var b;return x(function(c){if(1==c.h)return w(c,em(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;function hm(){this.h=new Map;this.i=!1}
function im(){if(!hm.h){var a=C("yt.networkRequestMonitor.instance")||new hm;B("yt.networkRequestMonitor.instance",a,void 0);hm.h=a}return hm.h}
hm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
hm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
hm.prototype.removeParams=function(a){return a.split("?")[0]};
hm.prototype.removeParams=hm.prototype.removeParams;hm.prototype.isEndpointCFR=hm.prototype.isEndpointCFR;hm.prototype.requestComplete=hm.prototype.requestComplete;hm.getInstance=im;var jm;function km(){jm||(jm=new Pj("yt.offline"));return jm}
function lm(a){if(N("offline_error_handling")){var b=km().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);km().set("errors",b,2592E3,!0)}}
function mm(){if(N("offline_error_handling")){var a=km().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new fk(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;oh(c)}km().set("errors",{},2592E3,!0)}}}
;var nm=fh("network_polling_interval",3E4);function V(){Be.call(this);this.J=0;this.O=this.m=!1;this.l=this.Ua();N("use_shared_nsm")?(Ee.h||(Ee.h=new Ee(Jh)),this.j=Ee.h):(om(this),pm(this))}
v(V,Be);function qm(){if(!V.h){var a=C("yt.networkStatusManager.instance")||new V;B("yt.networkStatusManager.instance",a,void 0);V.h=a}return V.h}
n=V.prototype;n.G=function(){var a;return N("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.G():this.l};
n.X=function(a){var b;N("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
n.Tb=function(a){!N("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.J||rm(this))};
n.Ua=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.Lb=function(){this.O=!0};
n.W=function(a,b){return N("use_shared_nsm")&&this.j?this.j.W(a,b):Be.prototype.W.call(this,a,b)};
function pm(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.aa(),2);a.O&&mm();b.h=0})})}
function om(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.aa(),0)})})}
function rm(a){a.J=Dh(function(){return x(function(b){if(1==b.h)return a.l?a.Ua()||!a.m?b.s(3):w(b,a.aa(),3):w(b,a.aa(),3);rm(a);b.h=0})},nm)}
n.aa=function(a){var b=this;if(N("use_shared_nsm")&&this.j){var c=Fe(this.j,a);c.then(function(d){N("use_cfr_monitor")&&im().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g;return x(function(h){switch(h.h){case 1:return e=window.AbortController?new window.AbortController:void 0,f=null===e||void 0===e?void 0:e.signal,g=!1,sa(h,2,3),e&&(b.A=Jh.M(function(){e.abort()},a||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:wa(h);N("use_cfr_monitor")&&im().requestComplete("generate_204",g);b.u=void 0;b.A&&Jh.U(b.A);g!==b.l&&(b.l=g,b.l&&b.m?Ce(b,"ytnetworkstatus-online"):b.m&&Ce(b,"ytnetworkstatus-offline"));d(g);xa(h);break;case 2:va(h),g=!1,h.s(3)}})})};
V.prototype.sendNetworkCheckRequest=V.prototype.aa;V.prototype.listen=V.prototype.W;V.prototype.enableErrorFlushing=V.prototype.Lb;V.prototype.getWindowStatus=V.prototype.Ua;V.prototype.monitorNetworkStatusChange=V.prototype.Tb;V.prototype.networkStatusHint=V.prototype.X;V.prototype.isNetworkAvailable=V.prototype.G;V.getInstance=qm;function sm(a){a=void 0===a?{}:a;Be.call(this);var b=this;this.l=this.J=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";N("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.j=qm();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.nb);a.Ja&&!N("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Na?
(this.Na=a.Na,c(this.u,function(){tm(b,"publicytnetworkstatus-online");N("use_shared_nsm")&&a.Ja&&mm()}),c(this.m,function(){tm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Ce(b,"publicytnetworkstatus-online");
N("use_shared_nsm")&&a.Ja&&mm()}),c(this.m,function(){Ce(b,"publicytnetworkstatus-offline")}))}
v(sm,Be);sm.prototype.G=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
sm.prototype.X=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
sm.prototype.aa=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return N("skip_network_check_if_cfr")&&im().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.X((null===(f=window.navigator)||void 0===f?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function tm(a,b){a.Na?a.l?(Jh.U(a.J),a.J=Jh.M(function(){a.A!==b&&(Ce(a,b),a.A=b,a.l=O())},a.Na-(O()-a.l))):(Ce(a,b),a.A=b,a.l=O()):Ce(a,b)}
;var um;function vm(){ul.call(this,{H:{Jb:am,na:$l,qb:Xl,Sb:Yl,eb:Zl,set:Vl},K:wm(),handleError:oh,oa:ph,Z:xm,now:O,Eb:lm,R:Ih(),cb:"publicytnetworkstatus-online",bb:"publicytnetworkstatus-offline",Ga:!0,Fa:.1,La:fh("potential_esf_error_limit",10),C:N,ta:!gk()});this.j=new gd;this.Ga&&Math.random()<=this.Fa&&this.v&&fm(this.v);N("networkless_immediately_drop_sw_health_store")&&ym(this);N("networkless_immediately_drop_all_requests")&&bm();tl("LogsDatabaseV2")}
v(vm,ul);function zm(){var a=C("yt.networklessRequestController.instance");a||(a=new vm,B("yt.networklessRequestController.instance",a,void 0),N("networkless_logging")&&ll().then(function(b){return x(function(c){if(1==c.h)return a.v=b,w(c,vl(a),2);a.j.resolve();c.h=0})}));
return a}
vm.prototype.writeThenSend=function(a,b){b||(b={});gk()||(this.h=!1);ul.prototype.writeThenSend.call(this,a,b)};
vm.prototype.sendThenWrite=function(a,b,c){b||(b={});gk()||(this.h=!1);ul.prototype.sendThenWrite.call(this,a,b,c)};
vm.prototype.sendAndWrite=function(a,b){b||(b={});gk()||(this.h=!1);ul.prototype.sendAndWrite.call(this,a,b)};
vm.prototype.awaitInitialization=function(){return this.j.promise};
function ym(a){var b;x(function(c){if(!a.v)throw b=uk("clearSWHealthLogsDb"),b;return c.return(gm(a.v).catch(function(d){a.handleError(d)}))})}
function xm(a,b,c){N("use_cfr_monitor")&&Am(a,b);var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(O());c&&0===Object.keys(b).length?xi(a):li(a,b)}
function wm(){um||(um=new sm({Ja:!0,nb:!0}));return um}
function Am(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){im().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){im().requestComplete(a,!0);d(e,f)}}
;var Bm=!1,Cm=0,Dm=0,Em,Fm=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Bm,potentialEsfErrorCounter:Dm};B("ytNetworklessLoggingInitializationOptions",Fm,void 0);
function Gm(){var a;x(function(b){switch(b.h){case 1:return w(b,ll(),2);case 2:a=b.i;if(!a||!gk()&&!N("nwl_init_require_datasync_id_killswitch")){b.s(0);break}Bm=!0;Fm.isNwlInitialized=Bm;return w(b,tl("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.s(5);break}return w(b,am(a),6);case 6:return w(b,fm(a),5);case 5:Hm();Im().G()&&Jm();Im().W("publicytnetworkstatus-online",Jm);Im().W("publicytnetworkstatus-offline",Km);if(!N("networkless_immediately_drop_sw_health_store")){b.s(8);break}return w(b,
Lm(),8);case 8:if(N("networkless_immediately_drop_all_requests"))return w(b,bm(),0);b.s(0)}})}
function Mm(a,b){function c(d){var e=Im().G();if(!Nm()||!d||e&&N("vss_networkless_bypass_write"))Om(a,b);else{var f={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0};Vl(f,d).then(function(g){f.id=g;Im().G()&&Pm(f)}).catch(function(g){Pm(f);
Im().G()?oh(g):lm(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?ll().then(function(d){c(d)}):c(kl())}
function Qm(a,b){function c(d){if(Nm()&&d){var e={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){N("use_cfr_monitor")&&im().requestComplete(e.url,!0);void 0!==e.id?$l(e.id,d):f=!0;N("vss_network_hint")&&Im().X(!0);g(k,l)};
if(N("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){im().requestComplete(e.url,!1);h(k,l)}}Om(e.url,e.options);
Vl(e,d).then(function(k){e.id=k;f&&$l(e.id,d)}).catch(function(k){Im().G()?oh(k):lm(k)})}else Om(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?ll().then(function(d){c(d)}):c(kl())}
function Jm(){var a=kl();if(!a)throw uk("throttleSend");Cm||(Cm=Jh.M(function(){var b;return x(function(c){if(1==c.h)return w(c,Xl("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,Pm(b),3):(Km(),c.return());Cm&&(Cm=0,Jm());c.h=0})},100))}
function Km(){Jh.U(Cm);Cm=0}
function Pm(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=kl();if(!b)throw c=uk("immediateSend"),c;if(void 0===a.id){e.s(2);break}return w(e,Yl(a.id,b),3);case 3:(d=e.i)?a=d:ph(Error("The request cannot be found in the database."));case 2:if(Rm(a,2592E6)){e.s(4);break}ph(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return w(e,$l(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Sm(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(O());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return w(e,$l(a.id,b),8);case 8:Om(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Sm(a){var b=kl();if(!b)throw uk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:N("use_cfr_monitor")&&im().requestComplete(a.url,!1);g=Bl(f);if(!(N("nwl_consider_error_code")&&g||!N("nwl_consider_error_code")&&Tm()<=fh("potential_esf_error_limit",10))){h.s(2);break}if(N("skip_checking_network_on_cfr_failure")&&(!N("skip_checking_network_on_cfr_failure")||im().isEndpointCFR(a.url))){h.s(3);break}return w(h,Im().aa(),3);case 3:if(Im().G()){h.s(2);break}c(e,f);if(!N("nwl_consider_error_code")||void 0===
(null===a||void 0===a?void 0:a.id)){h.s(6);break}return w(h,Zl(a.id,b,!1),6);case 6:return h.return();case 2:if(N("nwl_consider_error_code")&&!g&&Tm()>fh("potential_esf_error_limit",10))return h.return();C("ytNetworklessLoggingInitializationOptions")&&Fm.potentialEsfErrorCounter++;Dm++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.s(8);break}return 1>a.sendCount?w(h,Zl(a.id,b),12):w(h,$l(a.id,b),8);case 12:Jh.M(function(){Im().G()&&Jm()},5E3);
case 8:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return N("use_cfr_monitor")&&im().requestComplete(a.url,!0),void 0===(null===a||void 0===a?void 0:a.id)?g.s(2):w(g,$l(a.id,b),2);N("vss_network_hint")&&Im().X(!0);d(e,f);g.h=0})};
return a}
function Rm(a,b){a=a.timestamp;return O()-a>=b?!1:!0}
function Hm(){var a=kl();if(!a)throw uk("retryQueuedRequests");Xl("QUEUED",a).then(function(b){b&&!Rm(b,12E4)?Jh.M(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.s(2):w(c,Zl(b.id,a),2);Hm();c.h=0})}):Im().G()&&Jm()})}
function Lm(){var a,b;return x(function(c){a=kl();if(!a)throw b=uk("clearSWHealthLogsDb"),b;return c.return(gm(a).catch(function(d){oh(d)}))})}
function Im(){if(N("use_new_nwl"))return wm();Em||(Em=new sm({Ja:!0,nb:!0}));return Em}
function Om(a,b,c){c&&0===Object.keys(b).length?xi(a):li(a,b)}
function Nm(){return C("ytNetworklessLoggingInitializationOptions")?Fm.isNwlInitialized:Bm}
function Tm(){return C("ytNetworklessLoggingInitializationOptions")?Fm.potentialEsfErrorCounter:Dm}
;function Um(a){var b=this;this.config_=null;a?this.config_=a:Hj()&&(this.config_=hj());Dh(function(){Uj(b)},5E3)}
Um.prototype.isReady=function(){!this.config_&&Hj()&&(this.config_=hj());return!!this.config_};
function lj(a,b,c,d){function e(z){z=void 0===z?!1:z;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||N("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=Sj(b,c,l,k)),A)){var K=g.onSuccess,S=g.onFetchSuccess;g.onSuccess=function(T,U){Tj(A);K(T,U)};
c.onFetchSuccess=function(T,U){Tj(A);S(T,U)}}try{z&&d.retry&&!d.vb.bypassNetworkless?(g.method="POST",d.vb.writeThenSend?N("use_new_nwl")?zm().writeThenSend(r,g):Mm(r,g):N("use_new_nwl")?zm().sendAndWrite(r,g):Qm(r,g)):(g.method="POST",g.postParams||(g.postParams={}),li(r,g))}catch(T){if("InvalidAccessError"==T.name)A&&(Tj(A),A=0),ph(Error("An extension is blocking network request."));
else throw T;}A&&Dh(function(){Uj(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ph(new fk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new fk("innertube xhrclient not ready",b,c,d);oh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,A){if(d.onError)d.onError(A)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Pb)&&(h=f);var k=a.config_.Rb||!1,l=Nj(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},u=a.config_.Qb&&f;N("omit_innertube_api_key_for_bearer_auth_header")&&(u=u&&f.startsWith("Bearer"));u||(q.key=a.config_.innertubeApiKey);var r=$h(""+
h+m,q||{},!0);N("use_new_nwl")&&zm().h||!N("use_new_nwl")&&Nm()?jl().then(function(z){e(z)}):e(!1)}
;function P(a,b,c){c=void 0===c?{}:c;var d=Um;F("ytLoggingEventsDefaultDisabled",!1)&&Um==Um&&(d=null);sj(a,b,d,c)}
;var Vm=[{ab:function(a){return"Cannot read property '"+a.key+"'"},
Ka:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ab:function(a){return"Cannot call '"+a.key+"'"},
Ka:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ab:function(a){return a.key+" is not defined"},
Ka:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Xm={fa:[],ca:[{ia:Wm,weight:500}]};function Wm(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ym(){this.ca=[];this.fa=[]}
var Zm;function $m(){if(!Zm){var a=Zm=new Ym;a.fa.length=0;a.ca.length=0;Xm.fa&&a.fa.push.apply(a.fa,Xm.fa);Xm.ca&&a.ca.push.apply(a.ca,Xm.ca)}return Zm}
;var an=new M;function bn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=cn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=cn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=cn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function cn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function dn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=en(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=bn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?en(e+".ve",f,g,h):0;d+=g;d+=en(e,a[e],b,c);if(500<d)break}}else c[b]=fn(a),d+=c[b].length;else c[b]=fn(a),d+=c[b].length;return d}
function en(a,b,c,d){c+="."+a;a=fn(b);d[c]=a;return c.length+a.length}
function fn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var gn=new Set,hn=0,jn=0,kn=0,ln=[],mn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ck(a){nn(a)}
function on(a){nn(a,"WARNING")}
function nn(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),N("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=hn))){d=ln;var g=$d(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.stack||a.i||"Not available";if(h.startsWith(f+": "+e)){var k=h.split("\n");k.shift();h=k.join("\n")}k=g.lineNumber||"Not available";g=g.fileName||"Not available";var l=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var m=0;m<a.args.length&&!(l=dn(a.args[m],"params."+m,c,l),500<=l);m++);else if(a.hasOwnProperty("params")&&
a.params){var q=a.params;if("object"===typeof a.params)for(m in q){if(q[m]){var u="params."+m,r=fn(q[m]);c[u]=r;l+=u.length+r.length;if(500<l)break}}else c.params=fn(q)}if(d.length)for(m=0;m<d.length&&!(l=dn(d[m],"params.context."+m,c,l),500<=l);m++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);m={message:e,name:f,lineNumber:k,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(m.lineNumber=m.lineNumber+":"+c);if("IGNORED"===a.level)a=
0;else a:{a=$m();c=t(a.fa);for(d=c.next();!d.done;d=c.next())if(d=d.value,m.message&&m.message.match(d.Mn)){a=d.weight;break a}a=t(a.ca);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ia(m)){a=c.weight;break a}a=1}m.sampleWeight=a;a=t(Vm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ka[m.name])for(e=t(c.Ka[m.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=m.message.match(f.regexp)){m.params["params.error.original"]=d[0];e=f.groups;f={};for(k=0;k<e.length;k++)f[e[k]]=d[k+1],m.params["params.error."+
e[k]]=d[k+1];m.message=c.ab(f);break}m.params||(m.params={});a=$m();m.params["params.errorServiceSignature"]="msg="+a.fa.length+"&cb="+a.ca.length;m.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(m.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));yb("sample").constructor!==wb&&(m.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(m);if(0!==m.sampleWeight&&!gn.has(m.message)){"ERROR"===
b?(an.ha("handleError",m),N("record_app_crashed_web")&&0===kn&&1===m.sampleWeight&&(kn++,a={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},N("report_client_error_with_app_crash_ks")||(a.systemHealth={crashData:{clientError:{logMessage:{message:m.message}}}}),P("appCrashed",a)),jn++):"WARNING"===b&&an.ha("handleWarning",m);if(N("kevlar_gel_error_routing")){a=b;b:{c=t(mn);for(d=c.next();!d.done;d=c.next())if(ui(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:m.stack};m.fileName&&
(d.filename=m.fileName);c=m.lineNumber&&m.lineNumber.split?m.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:m.message,errorClassName:m.name,sampleWeight:m.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));f=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);k=Xg.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(g=t(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:k,value:String(f[k])});if(f=m.params)for(g=t(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:"client."+k,value:String(f[k])});f=dh("SERVER_NAME");k=dh("SERVER_VERSION");
f&&k&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:k}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(P("clientError",c),("ERROR"===a||N("errors_flush_gel_always_killswitch"))&&aj())}if(!N("suppress_error_204_logging")){a=m.params||{};b={urlParams:{a:"logerror",t:"jserror",type:m.name,msg:m.message.substr(0,250),line:m.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:m.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){m.stack&&(b.postParams.stack=m.stack);c=t(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=t(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}li(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{gn.add(m.message)}catch(z){}hn++}}}
function pn(a){var b=Ea.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,ha(b))}
;function qn(){this.register=new Map}
function rn(a){a=t(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Pn("ABORTED")}
qn.prototype.clear=function(){rn(this);this.register.clear()};
var sn=new qn;var tn=Date.now().toString();
function un(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(tn)for(a=1,b=0;b<tn.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^tn.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vn,wn=y.ytLoggingDocDocumentNonce_;wn||(wn=un(),Xa("ytLoggingDocDocumentNonce_",wn));vn=wn;var xn={Yf:0,bd:1,kd:2,jj:3,ag:4,cn:5,Yj:6,yl:7,Vk:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function yn(a){this.h=a}
function zn(a){return new yn({trackingParams:a})}
yn.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
yn.prototype.getAsJspb=function(){var a=new Dg;void 0!==this.h.trackingParams?I(a,1,this.h.trackingParams):(void 0!==this.h.veType&&I(a,2,this.h.veType),void 0!==this.h.veCounter&&I(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&I(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();J(a,7,b)}return a};
yn.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
yn.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function An(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Bn(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Cn(a){return F(Bn(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",Cn,void 0);function Dn(a){return(a=Cn(void 0===a?0:a))?new yn({veType:a,youtubeData:void 0}):null}
function En(){var a=F("csn-to-ctt-auth-info");a||(a={},ch("csn-to-ctt-auth-info",a));return a}
function Fn(a){a=void 0===a?0:a;var b=F(An(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!N("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
B("yt_logging_screen.getCurrentCsn",Fn,void 0);function Gn(a,b,c){var d=En();(c=Fn(c))&&delete d[c];b&&(d[a]=b)}
function Hn(a){return En()[a]}
B("yt_logging_screen.getCttAuthInfo",Hn,void 0);function In(a,b,c,d){c=void 0===c?0:c;if(a!==F(An(c))||b!==F(Bn(c)))Gn(a,d,c),ch(An(c),a),ch(Bn(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:vn,clientScreenNonce:a};N("use_default_heartbeat_client")?P("foregroundHeartbeatScreenAssociated",e):sj("foregroundHeartbeatScreenAssociated",e,Um)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",In,void 0);var Jn=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",Jn,void 0);function Kn(a){Sg(Jn,arguments)}
;var Ln={Zc:3611,pc:27686,qc:85013,sc:23462,uc:42016,vc:62407,wc:26926,tc:43781,xc:51236,yc:79148,zc:50160,Ac:77504,Mc:87907,Nc:18630,Oc:54445,Pc:80935,Qc:105675,Rc:37521,Sc:47786,Tc:98349,Uc:123695,Vc:6827,Wc:29434,Xc:7282,Yc:124448,dd:32276,cd:76278,ed:93911,fd:106531,gd:27259,hd:27262,jd:27263,ld:21759,md:27107,nd:62936,od:49568,pd:38408,qd:80637,rd:68727,sd:68728,td:80353,ud:80356,vd:74610,wd:45707,xd:83962,yd:83970,zd:46713,Ad:89711,Bd:74612,Cd:93265,Dd:74611,Ed:131380,Gd:128979,Hd:139311,Id:128978,
Fd:131391,Jd:105350,Ld:139312,Md:134800,Kd:131392,Od:113533,Pd:93252,Qd:99357,Sd:94521,Td:114252,Ud:113532,Vd:94522,Rd:94583,Wd:88E3,Xd:139580,Yd:93253,Zd:93254,ae:94387,be:94388,ce:93255,de:97424,Nd:72502,ee:110111,ge:76019,ie:117092,je:117093,he:89431,ke:110466,le:77240,me:60508,ne:137401,oe:137402,pe:137046,qe:73393,re:113534,se:92098,te:131381,ue:84517,we:83759,xe:80357,ye:86113,ze:72598,Ae:72733,Be:107349,Ce:124275,De:118203,Ee:133275,Fe:133274,Ge:133272,He:133273,Ie:133276,Je:143247,Ke:143248,
Le:143249,Me:143250,Ne:143251,Pe:117431,Oe:133797,Qe:128572,Re:133405,Se:117429,Te:117430,Ue:117432,Ve:120080,We:117259,Xe:121692,Ye:132972,Ze:133051,af:133658,bf:132971,cf:97615,ef:143359,df:143356,gf:143361,ff:143358,jf:143360,hf:143357,kf:142303,lf:143353,mf:143354,nf:143355,pf:31402,rf:133624,sf:133623,tf:133622,qf:133621,uf:84774,vf:95117,wf:98930,xf:98931,yf:98932,zf:43347,Af:129889,Bf:45474,Cf:100352,Df:84758,Ef:98443,Ff:117985,Gf:74613,Hf:74614,If:64502,Jf:136032,Kf:74615,Lf:74616,Mf:122224,
Nf:74617,Of:77820,Pf:74618,Qf:93278,Rf:93274,Sf:93275,Tf:93276,Uf:22110,Vf:29433,Wf:133798,Xf:132295,Zf:120541,cg:82047,dg:113550,eg:75836,fg:75837,gg:42352,hg:84512,ig:76065,jg:75989,kg:16623,lg:32594,mg:27240,ng:32633,og:74858,qg:3945,pg:16989,rg:45520,sg:25488,tg:25492,ug:25494,vg:55760,wg:14057,xg:18451,yg:57204,zg:57203,Ag:17897,Bg:57205,Cg:18198,Dg:17898,Eg:17909,Fg:43980,Gg:46220,Hg:11721,Ig:49954,Jg:96369,Kg:3854,Lg:56251,Mg:25624,Ng:16906,Og:99999,Pg:68172,Qg:27068,Rg:47973,Sg:72773,Tg:26970,
Ug:26971,Vg:96805,Wg:17752,Xg:73233,Yg:109512,Zg:22256,ah:14115,bh:22696,dh:89278,eh:89277,fh:109513,gh:43278,hh:43459,ih:43464,jh:89279,kh:43717,lh:55764,mh:22255,nh:89281,oh:40963,ph:43277,qh:43442,rh:91824,sh:120137,th:96367,uh:36850,vh:72694,wh:37414,xh:36851,zh:124863,yh:121343,Ah:73491,Bh:54473,Ch:43375,Dh:46674,Eh:139095,Fh:32473,Gh:72901,Hh:72906,Ih:50947,Jh:50612,Kh:50613,Lh:50942,Mh:84938,Nh:84943,Oh:84939,Ph:84941,Qh:84944,Rh:84940,Sh:84942,Th:35585,Uh:51926,Vh:79983,Wh:63238,Xh:18921,
Yh:63241,Zh:57893,ai:41182,bi:135732,ci:33424,di:22207,fi:42993,gi:36229,hi:22206,ii:22205,ji:18993,ki:19001,li:18990,mi:18991,ni:18997,oi:18725,ri:19003,si:36874,ti:44763,vi:33427,wi:67793,xi:22182,yi:37091,zi:34650,Ai:50617,Bi:47261,Ci:22287,Di:25144,Ei:97917,Fi:62397,Gi:125598,Hi:137935,Ii:36961,Ji:108035,Ki:27426,Li:27857,Mi:27846,Ni:27854,Oi:69692,Pi:61411,Qi:39299,Ri:38696,Si:62520,Ti:36382,Ui:108701,Vi:50663,Wi:36387,Xi:14908,Yi:37533,Zi:105443,aj:61635,bj:62274,cj:133818,dj:65702,ej:65703,
fj:65701,gj:76256,hj:37671,ij:49953,kj:36216,lj:28237,mj:39553,nj:29222,oj:26107,pj:38050,qj:26108,sj:120745,rj:26109,tj:26110,uj:66881,vj:28236,wj:14586,xj:57929,yj:74723,zj:44098,Aj:44099,Dj:23528,Ej:61699,Bj:134104,Cj:134103,Fj:59149,Gj:101951,Hj:97346,Ij:118051,Jj:95102,Kj:64882,Lj:119505,Mj:63595,Nj:63349,Oj:95101,Pj:75240,Qj:27039,Rj:68823,Sj:21537,Tj:83464,Uj:75707,Vj:83113,Wj:101952,Xj:101953,Zj:79610,ak:125755,bk:24402,ck:24400,dk:32925,ek:57173,fk:122502,gk:138480,hk:64423,ik:64424,jk:33986,
kk:100828,lk:129089,mk:21409,rk:135155,sk:135156,tk:135157,uk:135158,vk:135159,wk:135160,xk:135161,yk:135162,zk:135163,Ak:135164,Bk:135165,Ck:135166,nk:11070,pk:11074,qk:17880,Dk:14001,Fk:30709,Gk:30707,Hk:30711,Ik:30710,Jk:30708,Ek:26984,Kk:63648,Lk:63649,Mk:51879,Nk:111059,Ok:5754,Pk:20445,Rk:130975,Qk:130976,Sk:110386,Tk:113746,Uk:66557,Wk:17310,Xk:28631,Yk:21589,Zk:68012,al:60480,bl:138664,dl:141121,fl:31571,il:141978,jl:76980,kl:41577,ll:45469,ml:38669,nl:13768,ol:13777,pl:141842,ql:62985,rl:4724,
sl:59369,ul:43927,vl:43928,wl:12924,xl:100355,Al:56219,Bl:27669,Cl:10337,zl:47896,Dl:122629,Fl:139723,El:139722,Gl:121258,Hl:107598,Il:127991,Jl:96639,Kl:107536,Ll:130169,Ml:96661,Nl:96658,Ol:116646,Pl:121122,Ql:96660,Rl:127738,Sl:127083,Tl:104443,Ul:96659,Vl:106442,Wl:134840,Xl:63667,Yl:63668,Zl:63669,am:130686,bm:78314,cm:55761,dm:127098,em:134841,fm:96368,gm:67374,hm:48992,im:49956,jm:31961,km:26388,lm:23811,mm:5E4,nm:126250,om:96370,pm:47355,qm:47356,rm:37935,sm:45521,tm:21760,um:83769,vm:49977,
wm:49974,xm:93497,ym:93498,zm:34325,Am:140759,Bm:115803,Cm:123707,Dm:100081,Em:35309,Fm:68314,Gm:25602,Hm:100339,Im:143516,Jm:59018,Km:18248,Lm:50625,Mm:9729,Nm:37168,Om:37169,Pm:21667,Qm:16749,Rm:18635,Sm:39305,Tm:18046,Um:53969,Vm:8213,Wm:93926,Xm:102852,Ym:110099,Zm:22678,an:69076,bn:137575,dn:139224,en:100856,fn:17736,gn:3832,hn:55759,jn:64031,qn:93044,rn:93045,sn:34388,tn:17657,un:17655,vn:39579,wn:39578,xn:77448,yn:8196,zn:11357,An:69877,Bn:8197,Cn:82039};function Mn(){var a=qb(Nn),b;return Nf(new Gf(function(c,d){a.onSuccess=function(e){fi(e)?c(new On(e)):d(new Pn("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Pn("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Pn("Request timed out","net.timeout",e))};
b=li("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Of&&b.abort();
return Lf(c)})}
function Pn(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Pn,Za);function On(a){this.xhr=a}
;function Qn(){this.i=0;this.h=null}
Qn.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ff(a)?a:Rn(a)):2===this.i&&b?(a=b.call(c,this.h),Ff(a)?a:Sn(a)):this};
Qn.prototype.getValue=function(){return this.h};
Qn.prototype.$goog_Thenable=!0;function Sn(a){var b=new Qn;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Rn(a){var b=new Qn;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Tn(){if(Td())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||ti&&ui("applewebkit")&&!ui("version")&&(!ui("safari")||ui("gsa/"))||sc&&ui("version/")?!0:(a=Rd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function Un(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Vn;this.isTimeout=a instanceof Pn&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Of}
v(Un,Za);Un.prototype.name="BiscottiError";function Vn(){Za.call(this,"Biscotti ID is missing from server")}
v(Vn,Za);Vn.prototype.name="BiscottiMissingError";var Nn={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Wn=null;function Qh(){if(N("disable_biscotti_fetch_entirely_for_all_web_clients"))return Lf(Error("Biscotti id fetching has been disabled entirely."));if(!Tn())return Lf(Error("User has not consented - not fetching biscotti id."));if("1"==ob())return Lf(Error("Biscotti ID is not available in private embed mode"));Wn||(Wn=Nf(Mn().then(Xn),function(a){return Yn(2,a)}));
return Wn}
function Xn(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Vn;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Vn;a=a.id;Rh(a);Wn=Rn(a);Zn(18E5,2);return a}
function Yn(a,b){b=new Un(b);Rh("");Wn=Sn(b);0<a&&Zn(12E4,a-1);throw b;}
function Zn(a,b){zh(function(){Nf(Mn().then(Xn,function(c){return Yn(b,c)}),Ka)},a)}
function $n(){try{var a=C("yt.ads.biscotti.getId_");return a?a():Qh()}catch(b){return Lf(b)}}
;function ao(a){if("1"!=ob()){a&&Ph();try{$n().then(function(){},function(){}),zh(ao,18E5)}catch(b){oh(b)}}}
;function bo(a){Cl.call(this,1,arguments);this.csn=a}
v(bo,Cl);var Ll=new Dl("screen-created",bo),co=[],fo=eo,go=0;function ho(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:db(e,function(f){return f.getAsJson()})};
d=t(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(mb(e)||!e.trackingParams&&!e.veType)&&on(Error("Child VE logged with no data"));d={cttAuthInfo:Hn(b),S:b};"UNDEFINED_CSN"==b?io("visualElementAttached",c,d):a?sj("visualElementAttached",c,a,d):P("visualElementAttached",c,d)}
function eo(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Hc(b,3)}
function io(a,b,c){co.push({payloadName:a,payload:b,options:c});go||(go=Ml())}
function Nl(a){if(co){for(var b=t(co),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,sj(c.payloadName,c.payload,null,c.options));co.length=0}go=0}
;function jo(){this.i=new Set;this.h=new Set;this.j=new Map}
jo.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
La(jo);function ko(a){var b=Ea.apply(1,arguments);if(!lo(a)||b.some(function(e){return!lo(e)}))throw Error("Only objects may be merged.");
var c=a;b=t(b);for(var d=b.next();!d.done;d=b.next())mo(c,d.value);return c}
function mo(a,b){for(var c in b)if(lo(b[c])){if(c in a&&!lo(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});mo(a[c],b[c])}else if(no(b[c])){if(c in a&&!no(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);oo(a[c],b[c])}else a[c]=b[c];return a}
function oo(a,b){b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,lo(c)?a.push(mo({},c)):no(c)?a.push(oo([],c)):a.push(c);return a}
function lo(a){return"object"===typeof a&&!Array.isArray(a)}
function no(a){return"object"===typeof a&&Array.isArray(a)}
;function po(a,b){Cl.call(this,1,arguments)}
v(po,Cl);var qo=new Dl("aft-recorded",po);var ro=window;function so(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=ro.performance||ro.mozPerformance||ro.msPerformance||ro.webkitPerformance||new so;var to=!1,uo={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Va(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ka,W);function vo(a){var b=wo(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function xo(){var a;if(N("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=yo(e.requestStart),e.responseEnd=yo(e.responseEnd),e.redirectStart=yo(e.redirectStart),e.redirectEnd=yo(e.redirectEnd),e.domainLookupEnd=yo(e.domainLookupEnd),e.connectStart=yo(e.connectStart),
e.connectEnd=yo(e.connectEnd),e.responseStart=yo(e.responseStart),e.secureConnectionStart=yo(e.secureConnectionStart),e.domainLookupStart=yo(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function zo(){return N("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function yo(a){return Math.round(zo()+a)}
function Ao(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Xa("ytcsi."+(a||"")+"data_",b));return b}
function Bo(a){a=Ao(a);a.info||(a.info={});return a.info}
function wo(a){a=Ao(a);a.tick||(a.tick={});return a.tick}
function Co(a){a=Ao(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Do(a){a=Co(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Fo(a){var b=Ao(a).nonce;b||(b=un(),Ao(a).nonce=b);return b}
function Go(a){var b=wo(a||""),c=vo(a);c&&!to&&(Il(qo,new po(Math.round(c-b._start),a)),to=!0)}
;function Ho(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=fb(a,function(b){return"first-paint"===b.name}))return yo(a.startTime)}a=W.timing;
return a.Ub?Math.max(0,a.Ub):0}
;function Io(){var a=C("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function Jo(a){a=a||"";var b=C("ytcsi.reference");b||(Io(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=Io(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Ko=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",Ko,void 0);function Lo(a,b){b=void 0===b?{}:b;var c=!1;F("ytLoggingEventsDefaultDisabled",!1)&&Um===Um&&(c=!0);c=c?null:Um;b=void 0===b?{}:b;var d=Math.round(b.timestamp||O());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Oh();d=new Hg;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(N("log_sequence_info_on_gel_web")&&b.S){e=b.S;var f=tj(e),g=new Gg;I(g,2,f);I(g,1,e);J(d,3,g);b.ob&&delete Ko[b.S]}J(a,33,d);(b.cc?ej:$i)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,sa:b.sa},c)}
;var Mo=y.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",Mo,void 0);function No(){this.h=0}
function Oo(){No.h||(No.h=new No);return No.h}
No.prototype.tick=function(a,b,c,d){Po(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},N("web_csi_via_jspb")?(d=new Fg,I(d,1,a),I(d,2,b),a=new Ig,ad(a,5,d),Lo(a,c)):P("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
No.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Po(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,P("latencyActionInfo",a,{cttAuthInfo:c}))};
No.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Po(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,P("latencyActionSpan",a,{cttAuthInfo:c}))};
function Po(a,b){Mo[b]=Mo[b]||{count:0};var c=Mo[b];c.count++;c.time=O();a.h||(a.h=Dh(function(){var d=O(),e;for(e in Mo)Mo[e]&&6E4<d-Mo[e].time&&delete Mo[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new fk("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||on(c)),!0):!1}
;var X={},Qo=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",
X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",
X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},Ro=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",
Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",
Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",
Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw=
"screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph=
"viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),So="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
To={},Uo=(To.ccs="CANARY_STATE_",To.mver="MEASUREMENT_VERSION_",To.pis="PLAYER_INITIALIZED_STATE_",To.yt_pt="LATENCY_PLAYER_",To.pa="LATENCY_ACTION_",To.ctop="TOP_ENTITY_TYPE_",To.yt_vst="VIDEO_STREAM_TYPE_",To),Vo="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Wo(a,b,c){var d=Co(c);d.gelTicks&&(d.gelTicks[a]=!0);c||b||O();Jo(c||"").tick[a]=b||O();d=Fo(c);var e=Ao(c).cttAuthInfo;"_start"===a?(a=Oo(),Po(a,"baseline_"+d)||(b={timestamp:b,cttAuthInfo:e},N("web_csi_via_jspb")?(a=new Eg,I(a,1,d),d=new Ig,ad(d,6,a),Lo(d,b)):P("latencyActionBaselined",{clientActionNonce:d},b))):Oo().tick(a,d,b,e);Go(c)}
function Xo(a,b,c){c=Co(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ro){c=Ro[a];0<=bb(So,c)&&(b=!!b);a in Uo&&"string"===typeof b&&(b=Uo[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return ko({},d)}0<=bb(Vo,a)||on(new fk("Unknown label logged with GEL CSI",a))}
;function Yo(){var a=["ol"];Jo("").info.actionType="embed";a&&ch("TIMING_AFT_KEYS",a);ch("TIMING_ACTION","embed");a=F("TIMING_INFO",{});for(var b in a)a.hasOwnProperty(b)&&Zo(b,a[b]);b={isNavigation:!0,actionType:Qo[dh("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(a=dh("PREVIOUS_ACTION"))b.previousAction=Qo[a]||"LATENCY_ACTION_UNKNOWN";if(a=F("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=F("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Fn())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=$o();if(1===a||
-1===a)b.isVisible=!0;a=Bo();b.loadType="cold";var c=xo(),d=zo();d&&(Z("srt",c.responseStart),1!==a.prerender&&(Zo("yt_sts","n",void 0),Z("_start",d,void 0)));a=Ho();0<a&&Z("fpt",a);a=xo();a.isPerformanceNavigationTiming&&Zo("pnt",1,void 0);Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,
void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=zo()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));W&&"getEntriesByType"in W&&ap();a=[];if(document.querySelector&&W&&W.getEntriesByName)for(var e in uo)uo.hasOwnProperty(e)&&(c=uo[e],bp(e,c)&&a.push(c));if(0<a.length)for(b.resourceInfo=[],e=t(a),a=e.next();!a.done;a=
e.next())b.resourceInfo.push({resourceCache:a.value});cp(b);e=Bo();a=wo();if("cold"===e.yt_lt){b=Co();c=b.gelTicks?b.gelTicks:b.gelTicks={};b=b.gelInfos?b.gelInfos:b.gelInfos={};for(var f in a)f in c||Wo(f,a[f]);f=Do();a=Fo();c=Ao().cttAuthInfo;d={};var g=!1;for(k in e)if(!(k in b)){var h=Xo(k,e[k]);h&&(ko(f,h),ko(d,h),g=!0)}g&&Oo().info(d,a,c)}Xa("ytglobal.timingready_",!0);var k=dh("TIMING_ACTION");C("ytglobal.timingready_")&&k&&"_start"in wo(void 0)&&vo()&&Go()}
function Zo(a,b,c){null!==b&&(Bo(c)[a]=b,(a=Xo(a,b,c))&&cp(a,c))}
function cp(a,b){var c=Jo(b||"");ko(c.info,a);ko(Do(b),a);c=Fo(b);b=Ao(b).cttAuthInfo;Oo().info(a,c,b)}
function Z(a,b,c){var d=wo(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||O();d[a]=e;Wo(a,b,c);return d[a]}
function dp(){var a=Fo(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Fo(void 0)&&Z("ol",void 0,void 0)},0)})}
function $o(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=kh+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function bp(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);bc()&&a.setAttribute("nonce",bc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=zo(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ap(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=cb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=eb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",yo(b.startTime)),Z("wffe",yo(b.responseEnd)))}
var ep=window;ep.ytcsi&&(ep.ytcsi.info=Zo,ep.ytcsi.tick=Z);function fp(){this.o=[];this.D=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function gp(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Fn(c),h=Dn(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&ho(a.client,g,h,[zn(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&ho(a.client,g,h,[zn(d.playerResponse.trackingParams)]))})}
function hp(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=Fn(d);c=c||Dn(d);e&&c&&ho(a.client,e,c,[b])}}
fp.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=Fn(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:zn(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Hn(c),S:c};"UNDEFINED_CSN"==c?io("visualElementGestured",a,b):d?sj("visualElementGestured",a,d,b):P("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function ip(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){jp(a,b,c);var f=Dn(c.layer);if(f){for(var g=t(a.o),h=g.next();!h.done;h=g.next())h=h.value,hp(a,h[0],h[1]||f,c.layer);f=t(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Fn(g);var l=k[0]||Dn(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Hn(h),S:h},"UNDEFINED_CSN"==h?io("visualElementStateChanged",k,l):g?sj("visualElementStateChanged",k,g,l):P("visualElementStateChanged",
k,l))}}};
Fn(c.layer)||a.j();if(c.mb)for(var d=t(c.mb),e=d.next();!e.done;e=d.next())gp(a,e.value,c.layer);else nn(Error("Delayed screen needs a data promise."))}
function jp(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Vb?c.Vb:c.layer;var e=Fn(d);d=Dn(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.lb,m=c.cttAuthInfo,q=c.Jn,u=fo(),r={csn:u,pageVe:(new yn({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(r.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},q&&(r.implicitGesture.gestureType=q)):h&&on(new fk("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={cttAuthInfo:m,S:u};k?sj("screenCreated",r,k,l):P("screenCreated",r,l);Il(Ll,new bo(u));var z=u}catch(A){pn(A,{Qn:b,rootVe:d,parentVisualElement:void 0,Hn:e,On:f,lb:c.lb});nn(A);return}In(z,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=N("screen_manager_skip_hide_killswitch"))){a:{b=
t(Object.values(xn));for(f=b.next();!f.done;f=b.next())if(Fn(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Hn(e),S:e,ob:f},"UNDEFINED_CSN"==e?io("visualElementHidden",d,f):b?sj("visualElementHidden",d,b,f):P("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=z||"");Zo("csn",z);jo.getInstance().clear();d=Dn(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(N("web_mark_root_visible")||
N("music_web_mark_root_visible"))&&(e=z,z={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Hn(e),S:e},"UNDEFINED_CSN"==e?io("visualElementShown",z,b):P("visualElementShown",z,b));a.i.delete(c.layer||0);a.j=void 0;e=t(a.u);for(z=e.next();!z.done;z=e.next())b=t(z.value),z=b.next().value,b=b.next().value,b.has(c.layer)&&d&&hp(a,z,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){nn(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){nn(A)}}}
;function kp(a){a&&(a.dataset?a.dataset[lp("loaded")]="true":a.setAttribute("data-loaded","true"))}
function mp(a,b){return a?a.dataset?a.dataset[lp(b)]:a.getAttribute("data-"+b):null}
var np={};function lp(a){return np[a]||(np[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var op=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pp=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function qp(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(op,""),c=c.replace(pp,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else rp(a,b,c)}
function rp(a,b,c){c=void 0===c?null:c;var d=sp(a),e=document.getElementById(d),f=e&&mp(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Fi(d,b),b=""+Pa(b),tp[b]=f),g||(e=up(a,d,function(){mp(e,"loaded")||(kp(e),Ii(d),zh(Wa(Ji,d),0))},c)))}
function up(a,b,c,d){d=void 0===d?null:d;var e=vd(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);od(e,xf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function vp(a){a=sp(a);var b=document.getElementById(a);b&&(Ji(a),b.parentNode.removeChild(b))}
function wp(a,b){a&&b&&(a=""+Pa(b),(a=tp[a])&&Hi(a))}
function sp(a){var b=document.createElement("a");Zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+dc(a)}
var tp={};var xp=[],yp=!1;function zp(){if(!N("disable_biscotti_fetch_for_ad_blocker_detection")&&!N("disable_biscotti_fetch_entirely_for_all_web_clients")&&Tn()&&"1"!=ob()){var a=function(){yp=!0;"google_ad_status"in window?ch("DCLKSTAT",1):ch("DCLKSTAT",2)};
try{qp("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}xp.push(Jh.M(function(){if(!(yp||"google_ad_status"in window)){try{wp("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}yp=!0;ch("DCLKSTAT",3)}},5E3))}}
function Ap(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function Bp(){this.state=0;this.h=null}
Bp.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;yb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=vb();g=k?k.createScript(g):g;g=(new Ab(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,yb("From proto message. b/166824318"),h=Eb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());Cp(this,g,h,a.program,b,c,d)}else on(Error("Cannot initialize botguard without program"))};
function Cp(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.state=1,qp(c,function(){var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?Dp(a,d,!!g,h,e):(a.state=2,vp(c),on(new fk("Unable to load Botguard","from "+c)))},f)):b&&(f=vd(document,"SCRIPT"),f.textContent=b,f.nonce=bc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?Dp(a,d,!!g,b,e):(a.state=3,on(Error("Unable to load Botguard from JS"))))}
Bp.prototype.isInitialized=function(){return!!this.h};
function Dp(a,b,c,d,e){var f,g;a.state=4;if(N("use_bg_facade"))if(c=d?"trayride":"botguard",window[c])try{var h=new hd({program:b,globalName:c});h.kc.then(function(){a.state=5;e&&e(b)});
Ep(a,h)}catch(k){k instanceof Error&&(a.state=6,on(k))}else a.state=6,on(Error("VM not loaded, cannot start"));else if(h=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{Ep(a,new h(b,function(){a.state=5;e&&e(b)}))}catch(k){a.state=6,k instanceof Error&&on(k)}else{try{Ep(a,new h(b)),a.state=5}catch(k){a.state=6,k instanceof Error&&on(k)}e&&e(b)}else a.state=6,on(Error("Failed to finish initializing VM"))}
Bp.prototype.invoke=function(a){a=void 0===a?{}:a;if(this.h){if(this.h.Cb)return this.h.Cb({kb:a});if(this.h.hot)return this.h.hot(void 0,void 0,a);if(this.h.invoke)return this.h.invoke(void 0,void 0,a);on(Error("VM has unknown interface"))}return null};
Bp.prototype.dispose=function(){Ep(this,null);this.state=7};
function Ep(a,b){Wd(a.h);a.h=b}
;var Fp=new Bp;function Gp(){return Fp.isInitialized()}
function Hp(a){a=void 0===a?{}:a;return Fp.invoke(a)}
;function Ip(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Ih():d;this.l=c;this.j=d;this.i=new gd;this.h=a;a={};c=t(this.h.entries());for(d=c.next();!d.done;a={qa:a.qa,ya:a.ya},d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;a.ya=d;a.qa=e;d=function(f){return function(){f.qa.Ya();b.h[f.ya].Ma=!0;b.h.every(function(g){return!0===g.Ma})&&b.i.resolve()}}(a);
e=Eh(d,Jp(this,a.qa));this.h[a.ya]=Object.assign(Object.assign({},a.qa),{Ya:d,Ia:e})}}
function Kp(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Jp(a,a.h[e])-Jp(a,a.h[d])});
b=t(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Ia||c.Ma||(a.j.U(c.Ia),Eh(c.Ya,10))}
Ip.prototype.cancel=function(){for(var a=t(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Ia||b.Ma||this.j.U(b.Ia),b.Ma=!0;this.i.resolve()};
function Jp(a,b){var c;return null!==(c=b.priority)&&void 0!==c?c:a.l}
;function Lp(a){this.state=a;this.plugins=[];this.m=void 0}
Lp.prototype.install=function(){this.plugins.push.apply(this.plugins,ha(Ea.apply(0,arguments)))};
Lp.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(Kp(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Mp(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Mp(a,b,c){return function(){var d=Ea.apply(0,arguments),e=b.filter(function(k){var l;return 10===(null!==(l=null!==c&&void 0!==c?c:k.priority)&&void 0!==l?l:0)}),f=b.filter(function(k){var l;
return 10!==(null!==(l=null!==c&&void 0!==c?c:k.priority)&&void 0!==l?l:0)});
Ih();var g={};e=t(e);for(var h=e.next();!h.done;g={za:g.za},h=e.next())g.za=h.value,Gh(function(k){return function(){k.za.ia.apply(k.za,ha(d))}}(g));
f=f.map(function(k){var l;return{Ya:function(){k.ia.apply(k,ha(d))},
priority:null!==(l=null!==c&&void 0!==c?c:k.priority)&&void 0!==l?l:0}});
f.length&&(a.j=new Ip(f))}}
da.Object.defineProperties(Lp.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Np(a){Lp.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.D=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",c)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",c)});
N("teardown_lifecycle_skip_unload")||window.addEventListener("unload",function(c){b.transition("document_disposed",c);b.h=new Map})}
v(Np,Lp);Np.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b),(null===b||void 0===b?0:b.defaultPrevented)||(null===b||void 0===b?0:b.returnValue))){b.returnValue||(b.returnValue=!0);b.defaultPrevented||b.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Np.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Np.prototype.o=function(a,b){a(b);this.transition("document_active")};
Np.prototype.i=function(){N("teardown_lifecycle_skip_unload")&&(this.h=new Map)};function Op(a){Lp.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",c):b.transition("document_hidden",c)});
N("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",c)}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",c)}))}
v(Op,Lp);Op.prototype.i=function(a,b){a(b);N("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Op.prototype.h=function(a,b){a(b);N("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Op.prototype.l=function(a,b){a(b)};
Op.prototype.o=function(a,b){a(b)};function Pp(){this.h=new Np;this.i=new Op}
Pp.prototype.install=function(){var a=Ea.apply(0,arguments);this.h.install.apply(this.h,ha(a));this.i.install.apply(this.i,ha(a))};function Qp(){Pp.call(this);var a={};this.install((a.document_disposed={ia:this.j},a));a={};this.install((a.flush_logs={ia:this.l},a))}
var Rp;v(Qp,Pp);Qp.prototype.l=function(){P("finalPayload",{csn:Fn()})};
Qp.prototype.j=function(){rn(sn)};function Sp(){}
Sp.getInstance=function(){var a=C("ytglobal.storage_");a||(a=new Sp,B("ytglobal.storage_",a,void 0));return a};
Sp.prototype.estimate=function(){var a,b,c;return x(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(Tp()):d.return()})};
function Tp(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
B("ytglobal.storageClass_",Sp,void 0);function bk(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=fh("ytidb_transaction_ended_event_rate_limit",.02)}
bk.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":N("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":N("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Up(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Up(a,b){Sp.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Vp(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:Vp(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Vp(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Wp=window;
function Xp(){var a=Wp.uaChPolyfill.state;if(0===a.type)P("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),nn(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);P("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),P("clientHintsPolyfillDiagnostics",
b))}}
var Yp=!1;function Zp(){var a;1===(null===(a=Wp.uaChPolyfill)||void 0===a?void 0:a.state.type)?Yp||(Wp.uaChPolyfill.onReady=Zp,Yp=!0):Wp.uaChPolyfill&&Xp()}
;function $p(a,b,c){L.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.I="*";this.l=c;this.sessionId=null;this.channel="widget";this.J=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.J&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.I=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=bb(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
v($p,L);$p.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.I)}catch(d){ph(d)}}};
$p.prototype.F=function(){window.removeEventListener("message",this.A);L.prototype.F.call(this)};function aq(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new $p(!!F("WIDGET_ID_ENFORCE")),b=this.Xb.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
n=aq.prototype;n.Xb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,bq(this,a)),this.j[a]=!0)):this.gb(a,b,c)};
n.gb=function(){};
function bq(a,b){return function(c){return a.sendMessage(b,c)}}
n.addEventListener=function(){};
n.Nb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ta());this.sendMessage("onReady");E(this.i,this.Bb,this);this.i=[]};
n.Ta=function(){return null};
function cq(a,b){a.sendMessage("infoDelivery",b)}
n.Bb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.Bb({event:a,info:void 0===b?null:b})};
n.dispose=function(){this.h=null};function dq(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function eq(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function fq(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function gq(a){aq.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.hc.bind(this));this.addEventListener("onVolumeChange",this.ic.bind(this));this.addEventListener("onApiChange",this.Zb.bind(this));this.addEventListener("onPlaybackQualityChange",this.dc.bind(this));this.addEventListener("onPlaybackRateChange",this.ec.bind(this));this.addEventListener("onStateChange",this.fc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.jc.bind(this))}
v(gq,aq);n=gq.prototype;
n.gb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&dq(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=eq(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=eq(e);break;case "loadPlaylist":case "cuePlaylist":e=fq(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);dq(a)&&cq(this,this.Ta())}};
n.onReady=function(){var a=this.Nb.bind(this);this.h.i=a};
n.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
n.Ta=function(){if(!this.api)return null;var a=this.api.getApiInterface();gb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
n.fc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());cq(this,a)};
n.dc=function(a){cq(this,{playbackQuality:a})};
n.ec=function(a){cq(this,{playbackRate:a})};
n.Zb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.ic=function(){cq(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
n.hc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());cq(this,a)};
n.jc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};cq(this,a)};
n.dispose=function(){aq.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function hq(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.xb,this)}
v(hq,L);n=hq.prototype;n.start=function(){this.started||this.h()||(this.started=!0,this.connection.ka("RECEIVING"))};
n.ka=function(a,b){this.started&&!this.h()&&this.connection.ka(a,b)};
n.xb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=iq(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=jq(a,c))&&this.ka(a,c))}}};
n.addListener=function(a){if(!(a in this.i)){var b=this.ac.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
n.ac=function(a,b){this.started&&!this.h()&&this.connection.ka(a,this.Sa(a,b))};
n.Sa=function(a,b){if(null!=b)return{value:b}};
n.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
n.F=function(){var a=this.connection;a.h()||Yf(a.i,"command",this.xb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.F.call(this)};function kq(a,b){hq.call(this,b);this.api=a;this.start()}
v(kq,hq);kq.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
kq.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function iq(a,b){switch(a){case "loadVideoById":return a=eq(b),[a];case "cueVideoById":return a=eq(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=fq(b),[a];case "cuePlaylist":return a=fq(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function jq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
kq.prototype.Sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return hq.prototype.Sa.call(this,a,b)};
kq.prototype.F=function(){hq.prototype.F.call(this);delete this.api};function lq(a){a=void 0===a?!1:a;L.call(this);this.i=new M(a);Yd(this,Wa(Wd,this.i))}
D(lq,L);lq.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
lq.prototype.l=function(a,b){this.h()||this.i.ha.apply(this.i,arguments)};function mq(a,b,c){lq.call(this);this.j=a;this.destination=b;this.id=c}
v(mq,lq);mq.prototype.ka=function(a,b){this.h()||this.j.ka(this.destination,this.id,a,b)};
mq.prototype.F=function(){this.destination=this.j=null;lq.prototype.F.call(this)};function nq(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=wh(window,"message",this.j.bind(this));this.connection=new mq(this,a,b);Yd(this,Wa(Wd,this.connection))}
v(nq,L);nq.prototype.ka=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(zf(a),this.origin))};
nq.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
nq.prototype.F=function(){xh(this.i);this.destination=null;L.prototype.F.call(this)};function oq(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||qb(b);this.assets=a.assets||{};this.attrs=a.attrs||qb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
oq.prototype.clone=function(){var a=new oq,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=qb(c):a[b]=c}return a};var pq=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function qq(a){a=a||"";if(window.spf){var b=a.match(pq);spf.style.load(a,b?b[1]:"",void 0)}else rq(a)}
function rq(a){var b=sq(a),c=document.getElementById(b),d=c&&mp(c,"loaded");d||c&&!d||(c=tq(a,b,function(){mp(c,"loaded")||(kp(c),Ii(b),zh(Wa(Ji,b),0))}))}
function tq(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=xf(a);$b(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sq(a){var b=vd(document,"A");yb("This URL is never added to the DOM");Zb(b,new Nb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+dc(a)}
;function uq(){L.call(this);this.i=[]}
v(uq,L);uq.prototype.F=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ia,void 0)}L.prototype.F.call(this)};function vq(){uq.apply(this,arguments)}
v(vq,uq);function wq(a,b,c,d){L.call(this);var e=this;this.J=b;this.webPlayerContextConfig=d;this.Oa=!1;this.api={};this.Aa=this.u=null;this.O=new M;this.i={};this.ba=this.Ba=this.elementId=this.Pa=this.config=null;this.T=!1;this.l=this.A=null;this.Ca={};this.Fb=["onReady"];this.lastError=null;this.hb=NaN;this.I={};this.Gb=new vq(this);this.ma=0;this.j=this.m=a;Yd(this,Wa(Wd,this.O));xq(this);yq(this);Yd(this,Wa(Wd,this.Gb));c?this.ma=zh(function(){e.loadNewVideoConfig(c)},0):d&&(zq(this),Aq(this))}
v(wq,L);n=wq.prototype;n.getId=function(){return this.J};
n.loadNewVideoConfig=function(a){if(!this.h()){this.ma&&(Ah(this.ma),this.ma=0);var b=a||{};b instanceof oq||(b=new oq(b));this.config=b;this.setConfig(a);Aq(this);this.isReady()&&Bq(this)}};
function zq(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.J,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.J:a.config.attrs.id=a.J);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
n.setConfig=function(a){var b;this.Pa=a;this.config=Cq(a);zq(this);this.Ba||(this.Ba=Dq(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Hd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Hd(Number(a)||a))};
function Bq(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Eq(a){var b=!0,c=Fq(a);c&&a.config&&(a=Gq(a),b=mp(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Aq(a){if(!a.h()&&!a.T){var b=Eq(a);if(b&&"html5"===(Fq(a)?"html5":null))a.ba="html5",a.isReady()||Hq(a);else if(Iq(a),a.ba="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Hq(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Jq(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?Cq(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Hq(a)};
a.T=!0;b?a.A():(qp(Gq(a),a.A),(b=Kq(a))&&qq(b),Lq(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function Fq(a){var b=rd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Hq(a){var b;if(!a.h()){var c=Fq(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.T=!1,!Jq(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Mq(a)):a.hb=zh(function(){Hq(a)},50)}}
function Mq(a){xq(a);a.Oa=!0;var b=Fq(a);if(b){a.u=Nq(a,b,"addEventListener");a.Aa=Nq(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Nq(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);Bq(a);a.Ba&&a.Ba(a.api);a.O.ha("onReady",a.api)}
function Nq(a,b,c){var d=b[c];return function(){var e=Ea.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,on(f))}}}
function xq(a){a.Oa=!1;if(a.Aa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Aa(b,a.i[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&Ah(Number(c));a.I={};a.u=null;a.Aa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Pa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
n.isReady=function(){return this.Oa};
function yq(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Ii("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Ii("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Ii("a11y-announce",b)})}
n.addEventListener=function(a,b){var c=this,d=Dq(this,b);d&&(0<=bb(this.Fb,a)||this.i[a]||(b=Oq(this,a),this.u&&this.u(a,b)),this.O.subscribe(a,d),"onReady"===a&&this.isReady()&&zh(function(){d(c.api)},0))};
n.removeEventListener=function(a,b){this.h()||(b=Dq(this,b))&&Yf(this.O,a,b)};
function Dq(a,b){var c=b;if("string"===typeof b){if(a.Ca[b])return a.Ca[b];c=function(){var d=Ea.apply(0,arguments),e=C(b);if(e)try{e.apply(y,d)}catch(f){nn(f)}};
a.Ca[b]=c}return c?c:null}
function Oq(a,b){var c="ytPlayer"+b+a.J;a.i[b]=c;y[c]=function(d){var e=zh(function(){if(!a.h()){a.O.ha(b,null!==d&&void 0!==d?d:void 0);var f=a.I,g=String(e);g in f&&delete f[g]}},0);
nb(a.I,String(e))};
return c}
n.getPlayerType=function(){return this.ba||(Fq(this)?"html5":null)};
n.getLastError=function(){return this.lastError};
function Iq(a){a.cancel();xq(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=Fq(a);b&&(Eq(a)||!Lq(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){this.A&&wp(Gq(this),this.A);Ah(this.hb);this.T=!1};
n.F=function(){Iq(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){nn(b)}this.Ca=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Pa=this.config=this.api=null;delete this.m;delete this.j;L.prototype.F.call(this)};
function Lq(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Gq(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Kq(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Jq(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Uh(d||"","&")[b]}
function Cq(a){for(var b={},c=t(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?qb(e):e}return b}
;var Pq={},Qq="player_uid_"+(1E9*Math.random()>>>0);function Rq(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?rd(d):d;var e=Qq+"_"+Pa(d),f=Pq[e];if(f&&c)return Sq(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new wq(d,e,a,b);Pq[e]=f;Ii("player-added",f.api);Yd(f,function(){delete Pq[f.getId()]});
return f.api}
function Sq(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Tq=null,Uq=null,Vq=null;function Wq(){var a=Tq.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Xq(a,b,c){a="ST-"+dc(a).toString(36);b=b?ic(b):"";c=c||5;Tn()&&wj(a,b,c)}
;function Yq(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=gc(window.location.href);g&&f.push(g);g=gc(d);if(0<=bb(f,g)||!g&&0==d.lastIndexOf("/",0))if(N("autoescape_tempdata_url")&&(f=document.createElement("a"),Zb(f,d),d=f.href),d){g=d.match(ec);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Fn()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Xq(d,b,k)}else Xq(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=jc(a,l)+m;var u=void 0===u?Gd:u;a:{u=void 0===u?Gd:u;for(l=0;l<u.length;++l)if(m=u[l],m instanceof Ed&&m.isValid(a)){u=new ld(a,jd);break a}u=void 0}c.href=nd(u||md)}return!0}
;B("yt.setConfig",ch,void 0);B("yt.config.set",ch,void 0);B("yt.setMsg",Kn,void 0);B("yt.msgs.set",Kn,void 0);B("yt.logging.errors.log",nn,void 0);
B("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}ao(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);N("embeds_js_api_set_1p_cookie")&&(c=Zh(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Yo();if((c=F("WEB_PLAYER_CONTEXT_CONFIGS",
void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Zh();d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Tq=Rq(a,c,!1)}else Tq=Rq(a);Tq.addEventListener("onVideoDataChange",Wq);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Vq=new gq(Tq):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Uq=new nq(window.parent,a,b),Vq=new kq(Tq,Uq.connection));zp();
N("ytidb_create_logger_embed_killswitch")||ak();N("flush_gel_on_teardown")&&(a={},Rp||(Rp=new Qp),Rp.install((a.flush_logs={ia:function(){aj()}},a)));
N("networkless_logging_web_embedded")&&(N("embeds_web_enable_new_nwl")?zm():Gm());N("embeds_enable_ua_ch_polyfill")&&Zp()},void 0);
var Zq=nh(function(){dp();var a=yj.getInstance(),b=!!((Bj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&ff(document.body,"exp-invert-logo"))if(c&&!ff(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ff(d,"inverted-hdpi")){var e=df(d);ef(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ff(document.body,"inverted-hdpi")&&gf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Bj(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete xj[b]:(c=d.toString(16),xj[b]=c.toString());c=!0;N("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in xj)d.push(f+"="+encodeURIComponent(String(xj[f])));wj(b,d.join("&"),63072E3,a.i,c)}fp.h||(fp.h=new fp);a=fp.h;f=16623;var g=void 0===g?{}:g;Object.values(Ln).includes(f)||(on(new fk("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.D=[];g.mb?ip(a,f,g):jp(a,f,g)}),$q=nh(function(){Tq&&
Tq.sendAbandonmentPing&&Tq.sendAbandonmentPing();
F("PL_ATT")&&Fp.dispose();for(var a=0,b=xp.length;a<b;a++)Jh.U(xp[a]);xp.length=0;vp("//static.doubleclick.net/instream/ad_status.js");yp=!1;ch("DCLKSTAT",0);Xd(Vq,Uq);Tq&&(Tq.removeEventListener("onVideoDataChange",Wq),Tq.destroy())});
window.addEventListener?(window.addEventListener("load",Zq),window.addEventListener("unload",$q)):window.attachEvent&&(window.attachEvent("onload",Zq),window.attachEvent("onunload",$q));Xa("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||Gp);Xa("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||Hp);Xa("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||Ap);
Xa("yt.player.exports.navigate",C("yt.player.exports.navigate")||Yq);Xa("yt.util.activity.init",C("yt.util.activity.init")||Lh);Xa("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||Oh);Xa("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||Mh);}).call(this);
