<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ldexp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a [double-precision floating-point number][ieee754] by an integer power of two.



<section class="usage">

## Usage

```javascript
import ldexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@deno/mod.js';
```

#### ldexp( frac, exp )

Multiplies a [double-precision floating-point number][ieee754] by an `integer` power of two (i.e., `x = frac * 2^exp`).

```javascript
var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0

x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
// returns 1.0
```

If `frac` equals positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a value equal to `frac`.

```javascript
var x = ldexp( 0.0, 20 );
// returns 0.0

x = ldexp( -0.0, 39 );
// returns -0.0

x = ldexp( NaN, -101 );
// returns NaN

x = ldexp( Infinity, 11 );
// returns Infinity

x = ldexp( -Infinity, -118 );
// returns -Infinity
```

<section class="usage">

<section class="notes">

## Notes

-   This function is the inverse of [`frexp`][@stdlib/math/base/special/frexp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';
import frexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-frexp@deno/mod.js';
import ldexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@deno/mod.js';

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    // Generate a random number:
    frac = randu() * 10.0;
    exp = round( randu()*616.0 ) - 308;
    x = sign * frac * pow( 10.0, exp );

    // Break the number into a normalized fraction and an integer power of two:
    f = frexp( x );

    // Reconstitute the original number:
    v = ldexp( f[ 0 ], f[ 1 ] );
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/frexp`][@stdlib/math/base/special/frexp]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a normalized fraction and an integer power of two.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ldexp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ldexp

[test-image]: https://github.com/stdlib-js/math-base-special-ldexp/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-ldexp/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ldexp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ldexp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ldexp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ldexp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ldexp/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-ldexp/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-ldexp/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-ldexp/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-ldexp/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-ldexp/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-ldexp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-ldexp/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/frexp]: https://github.com/stdlib-js/math-base-special-frexp/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
