// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,t=1023;function n(r){return r!=r}function i(t){return t===r||t===e}var a=2147483648,o=2147483647,c="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty;function f(r){return"number"==typeof r}function s(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function l(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+s(i):s(i)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=l(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=l(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===y.call(r.specifier)?y.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var d=Math.abs,h=String.prototype.toLowerCase,w=String.prototype.toUpperCase,b=String.prototype.replace,v=/e\+(\d)$/,m=/e-(\d)$/,A=/^(\d+)$/,_=/^(\d+)e/,E=/\.0$/,U=/\.0*e/,S=/(\..*[^0])0*e/;function I(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!f(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":d(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=b.call(t,S,"$1e"),t=b.call(t,U,"e"),t=b.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=b.call(t,v,"e+0$1"),t=b.call(t,m,"e-0$1"),r.alternate&&(t=b.call(t,A,"$1."),t=b.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===w.call(r.specifier)?w.call(t):h.call(t)}function x(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var k=String.fromCharCode,F=Array.isArray;function j(r){return r!=r}function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,o,c,u,f,s,p,y,d;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,j(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,p=n.width,y=n.padRight,d=void 0,(d=p-s.length)<0?s:s=y?s+x(d):x(d)+s)),o+=n.arg||"",c+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[G(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var H=Object.prototype,W=H.toString,C=H.__defineGetter__,L=H.__defineSetter__,P=H.__lookupGetter__,R=H.__lookupSetter__,Z=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?u:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&L&&L.call(r,e,t.set),r};function M(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X,Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,q=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return z.call(r);t=r[D],a=D,e=null!=(i=r)&&q.call(i,a);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,tr=X,nr="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,ar="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=e,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,cr=er,ur="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),t=e,r=(ur&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(yr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:lr,uint8:pr};(hr=new wr.uint16(1))[0]=4660;var br,vr,mr=52===new wr.uint8(hr.buffer)[0];!0===mr?(br=1,vr=0):(br=0,vr=1);var Ar={HIGH:br,LOW:vr},_r=new cr(1),Er=new tr(_r.buffer),Ur=Ar.HIGH,Sr=Ar.LOW;function Ir(r,e,t,n){return _r[0]=r,e[n]=Er[Ur],e[n+t]=Er[Sr],e}function xr(r){return Ir(r,[0,0],1,0)}M(xr,"assign",Ir);var kr,Fr,jr=!0===mr?1:0,Tr=new cr(1),Or=new tr(Tr.buffer);function Vr(r){return Tr[0]=r,Or[jr]}!0===mr?(kr=1,Fr=0):(kr=0,Fr=1);var $r={HIGH:kr,LOW:Fr},Gr=new cr(1),Nr=new tr(Gr.buffer),Hr=$r.HIGH,Wr=$r.LOW;function Cr(r,e){return Nr[Hr]=r,Nr[Wr]=e,Gr[0]}var Lr=[0,0],Pr=22250738585072014e-324,Rr=4503599627370496;function Zr(r,e,t,a){return n(r)||i(r)?(e[a]=r,e[a+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Pr?(e[a]=r*Rr,e[a+t]=-52,e):(e[a]=r,e[a+t]=0,e)}M((function(r){return Zr(r,[0,0],1,0)}),"assign",Zr);var Mr=2146435072,Xr=[0,0],Yr=[0,0];return function(c,u){var f,s,l,p,y,g;return 0===u||0===c||n(c)||i(c)?c:(Zr(c,Xr,1,0),u+=Xr[1],(u+=function(r){var e=Vr(r);return(e=(e&Mr)>>>20)-t|0}(c=Xr[0]))<-1074?(l=0,p=c,xr.assign(l,Lr,1,0),y=Lr[0],y&=o,g=Vr(p),Cr(y|=g&=a,Lr[1])):u>1023?c<0?e:r:(u<=-1023?(u+=52,s=2220446049250313e-31):s=1,xr.assign(c,Yr,1,0),f=Yr[0],f&=2148532223,s*Cr(f|=u+t<<20,Yr[1])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ldexp=e();
//# sourceMappingURL=index.js.map
