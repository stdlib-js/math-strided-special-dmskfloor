"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=u(function(C,v){
var x=require('@stdlib/strided-base-dmskmap/dist'),R=require('@stdlib/math-base-special-floor/dist');function _(e,r,a,i,s,t,o){return x(e,r,a,i,s,t,o,R)}v.exports=_
});var m=u(function(D,d){
var E=require('@stdlib/strided-base-dmskmap/dist').ndarray,O=require('@stdlib/math-base-special-floor/dist');function b(e,r,a,i,s,t,o,k,y,j){return E(e,r,a,i,s,t,o,k,y,j,O)}d.exports=b
});var p=u(function(F,c){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),h=m();g(f,"ndarray",h);c.exports=f
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=p(),n,l=z(w(__dirname,"./native.js"));l instanceof Error?n=A:n=l;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
