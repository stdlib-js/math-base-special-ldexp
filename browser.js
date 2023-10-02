// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function t(r){return r!=r}function n(t){return t===r||t===e}var i="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty;function o(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(i):c(i)+r,n&&(r="-"+r)),r}var f=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function l(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(r){return"string"==typeof r}var y=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,m=/^(\d+)e/,A=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function U(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":y(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,E,"$1e"),t=h.call(t,_,"e"),t=h.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,w,"e+0$1"),t=h.call(t,b,"e-0$1"),r.alternate&&(t=h.call(t,v,"$1."),t=h.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):g.call(t)}function I(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+I(n):I(n)+r}var x=String.fromCharCode,k=isNaN,F=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,o,c,f,s;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(p(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=U(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function G(r){var e,t,n;if(!$(r))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var H=Object.prototype,W=H.toString,C=H.__defineGetter__,L=H.__defineSetter__,P=H.__lookupGetter__,R=H.__lookupSetter__,Z=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?a:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&L&&L.call(r,e,t.set),r};function M(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X,Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,q=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return z.call(r);t=r[D],a=D,e=null!=(i=r)&&q.call(i,a);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,tr=X,nr="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,ar="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=e,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,cr=er,ur="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),t=e,r=(ur&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(yr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:lr,uint8:pr};(hr=new wr.uint16(1))[0]=4660;var br,vr,mr=52===new wr.uint8(hr.buffer)[0];!0===mr?(br=1,vr=0):(br=0,vr=1);var Ar={HIGH:br,LOW:vr},_r=new cr(1),Er=new tr(_r.buffer),Ur=Ar.HIGH,Ir=Ar.LOW;function Sr(r,e,t,n){return _r[0]=r,e[n]=Er[Ur],e[n+t]=Er[Ir],e}function xr(r){return Sr(r,[0,0],1,0)}M(xr,"assign",Sr);var kr,Fr,jr=!0===mr?1:0,Tr=new cr(1),Or=new tr(Tr.buffer);function Vr(r){return Tr[0]=r,Or[jr]}!0===mr?(kr=1,Fr=0):(kr=0,Fr=1);var Nr={HIGH:kr,LOW:Fr},$r=new cr(1),Gr=new tr($r.buffer),Hr=Nr.HIGH,Wr=Nr.LOW;function Cr(r,e){return Gr[Hr]=r,Gr[Wr]=e,$r[0]}var Lr=[0,0];function Pr(r,e,i,a){return t(r)||n(r)?(e[a]=r,e[a+i]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[a]=4503599627370496*r,e[a+i]=-52,e):(e[a]=r,e[a+i]=0,e)}M((function(r){return Pr(r,[0,0],1,0)}),"assign",Pr);var Rr=[0,0],Zr=[0,0];return function(i,a){var o,c,u,f,s,l;return 0===a||0===i||t(i)||n(i)?i:(Pr(i,Rr,1,0),a+=Rr[1],a+=function(r){var e=Vr(r);return(e=(2146435072&e)>>>20)-1023|0}(i=Rr[0]),a<-1074?(u=0,f=i,xr.assign(u,Lr,1,0),s=Lr[0],s&=2147483647,l=Vr(f),Cr(s|=l&=2147483648,Lr[1])):a>1023?i<0?e:r:(a<=-1023?(a+=52,c=2220446049250313e-31):c=1,xr.assign(i,Zr,1,0),o=Zr[0],o&=2148532223,c*Cr(o|=a+1023<<20,Zr[1])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ldexp=e();
//# sourceMappingURL=browser.js.map