<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# ldexp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a [double-precision floating-point number][ieee754] by an integer power of two.



<section class="usage">

## Usage

```javascript
import ldexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@esm/index.mjs';
```

#### ldexp( frac, exp )

Multiplies a [double-precision floating-point number][ieee754] by an `integer` power of two; i.e., `x = frac * 2^exp`.

```javascript
var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0

x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
// returns 1.0
```

If `frac` equals positive or negative `zero`, `NaN`, or positive or negative `infinity`, the function returns a value equal to `frac`.

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs';
import frexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-frexp@esm/index.mjs';
import ldexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@esm/index.mjs';

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

/*
* 1) Generate random numbers.
* 2) Break each number into a normalized fraction and an integer power of two.
* 3) Reconstitute the original number.
*/
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*616.0 ) - 308;
    x = sign * frac * pow( 10.0, exp );
    f = frexp( x );
    v = ldexp( f[ 0 ], f[ 1 ] );
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/frexp`][@stdlib/math/base/special/frexp]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a normalized fraction and an integer power of two.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ldexp/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-ldexp/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-ldexp/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-ldexp/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/frexp]: https://github.com/stdlib-js/math-base-special-frexp/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
