// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).ldexp=r()}(this,(function(){"use strict";var n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;var t=function(n){return n!=n},o=n,e=r;var i=function(n){return n===o||n===e};var u=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return u&&"symbol"==typeof Symbol.toStringTag},f=Object.prototype.toString,c=f;var y=function(n){return c.call(n)},l=Object.prototype.hasOwnProperty;var v=function(n,r){return null!=n&&l.call(n,r)},p="function"==typeof Symbol?Symbol.toStringTag:"",A=v,b=p,d=f;var w=y,U=function(n){var r,t,o;if(null==n)return d.call(n);t=n[b],r=A(n,b);try{n[b]=void 0}catch(r){return d.call(n)}return o=d.call(n),r?n[b]=t:delete n[b],o},m=a()?U:w,h=m,s="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null,g=function(n){return s&&n instanceof Uint32Array||"[object Uint32Array]"===h(n)},F=I;var N=function(){var n,r;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,4294967296,4294967297]),n=g(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var S="function"==typeof Uint32Array?Uint32Array:void 0,H=function(){throw new Error("not implemented")},O=N()?S:H,T=m,j="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null,G=function(n){return j&&n instanceof Float64Array||"[object Float64Array]"===T(n)},L=E;var W=function(){var n,r;if("function"!=typeof L)return!1;try{r=new L([1,3.14,-3.14,NaN]),n=G(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var x="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=W()?x:P,Y=m,_="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return _&&n instanceof Uint8Array||"[object Uint8Array]"===Y(n)},q=M;var z=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,256,257]),n=k(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=m,K="function"==typeof Uint16Array;var Q="function"==typeof Uint16Array?Uint16Array:null,R=function(n){return K&&n instanceof Uint16Array||"[object Uint16Array]"===J(n)},X=Q;var Z=function(){var n,r;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,65536,65537]),n=R(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var $,nn="function"==typeof Uint16Array?Uint16Array:void 0,rn=function(){throw new Error("not implemented")},tn={uint16:Z()?nn:rn,uint8:D};($=new tn.uint16(1))[0]=4660;var on,en,un=52===new tn.uint8($.buffer)[0];!0===un?(on=1,en=0):(on=0,en=1);var an=O,fn={HIGH:on,LOW:en},cn=new V(1),yn=new an(cn.buffer),ln=fn.HIGH,vn=fn.LOW;var pn=function(n,r){return cn[0]=r,n[0]=yn[ln],n[1]=yn[vn],n};var An=function(n,r){return 1===arguments.length?pn([0,0],n):pn(n,r)},bn=An,dn=O,wn=!0===un?1:0,Un=new V(1),mn=new dn(Un.buffer);var hn,sn,In=function(n){return Un[0]=n,mn[wn]};!0===un?(hn=1,sn=0):(hn=0,sn=1);var gn=O,Fn={HIGH:hn,LOW:sn},Nn=new V(1),Sn=new gn(Nn.buffer),Hn=Fn.HIGH,On=Fn.LOW;var Tn=function(n,r){return Sn[Hn]=n,Sn[On]=r,Nn[0]},jn=bn,En=In,Gn=Tn,Ln=[0,0];var Wn=i,xn=t,Pn=function(n){return Math.abs(n)};var Vn=function(n,r){return xn(r)||Wn(r)?(n[0]=r,n[1]=0,n):0!==r&&Pn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)};var Yn=function(n,r){return 1===arguments.length?Vn([0,0],n):Vn(n,r)},_n=In;var Mn=function(n){var r=_n(n);return(r=(2146435072&r)>>>20)-1023|0},kn=n,qn=r,zn=t,Bn=i,Cn=function(n,r){var t,o;return jn(Ln,n),t=Ln[0],t&=2147483647,o=En(r),Gn(t|=o&=2147483648,Ln[1])},Dn=Yn,Jn=Mn,Kn=bn,Qn=Tn,Rn=[0,0],Xn=[0,0];var Zn=function(n,r){var t,o;return 0===r||0===n||zn(n)||Bn(n)?n:(Dn(Rn,n),r+=Rn[1],(r+=Jn(n=Rn[0]))<-1074?Cn(0,n):r>1023?n<0?qn:kn:(r<=-1023?(r+=52,o=2220446049250313e-31):o=1,Kn(Xn,n),t=Xn[0],t&=2148532223,o*Qn(t|=r+1023<<20,Xn[1])))};return Zn}));
//# sourceMappingURL=bundle.js.map
