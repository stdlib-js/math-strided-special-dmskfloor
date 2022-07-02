// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(r,e,t){var c,_,f,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},f=e()?c:_;var p=function(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var y=function(r,e,t,n,o,a,u,i){var l,c,_,f;if(r<=0)return a;for(l=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,_=u<0?(1-r)*u:0,f=0;f<r;f++)0===n[c]&&(a[_]=i(e[l])),l+=t,c+=o,_+=u;return a},b=function(r,e,t,n,o,a,u,i,l,c,_){var f,p,y,b;if(r<=0)return i;for(f=n,p=u,y=c,b=0;b<r;b++)0===o[p]&&(i[y]=_(e[f])),f+=t,p+=a,y+=l;return i};p(y,"ndarray",b);var v=y,d=Math.floor;function s(r,e,t,n,o,a,u){return v(r,e,t,n,o,a,u,d)}function j(r,e,t,n,o,a,u,i,l,c){return b(r,e,t,n,o,a,u,i,l,c,d)}p(s,"ndarray",j);export{s as default,j as ndarray};
//# sourceMappingURL=mod.js.map
