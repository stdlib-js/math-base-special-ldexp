// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent-subnormal@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base2-exponent-subnormal@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@v0.2.0-esm/index.mjs";import{assign as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-normalize@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.2.1-esm/index.mjs";var b=[0,0],f=[0,0];function h(h,v){var c,x;return 0===v||0===h||o(h)||r(h)?h:(a(h,b,1,0),v+=b[1],(v+=l(h=b[0]))<m?d(0,h):v>n?h<0?t:s:(v<=i?(v+=52,x=2220446049250313e-31):x=1,j.assign(h,f,1,0),c=f[0],c&=2148532223,x*p(c|=v+e<<20,f[1])))}export{h as default};
//# sourceMappingURL=index.mjs.map
