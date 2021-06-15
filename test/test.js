/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var ldexp = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );
var subnormal = require( './fixtures/julia/subnormal.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ldexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (small values)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = small.expected;
	frac = small.frac;
	exp = small.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (medium values)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = medium.expected;
	frac = medium.frac;
	exp = medium.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (large values)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = large.expected;
	frac = large.frac;
	exp = large.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (subnormals)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = subnormal.expected;
	frac = subnormal.frac;
	exp = subnormal.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided a fraction equal to `+0`, the function returns `+0`', function test( t ) {
	var v = ldexp( 0.0, 10 );
	t.equal( isPositiveZero( v ), true, 'returns +0' );
	t.end();
});

tape( 'if provided a fraction equal to `-0`, the function returns `-0`', function test( t ) {
	var v = ldexp( -0.0, 10 );
	t.equal( isNegativeZero( v ), true, 'returns -0' );
	t.end();
});

tape( 'if provided a fraction equal to `+infinity`, the function returns `+infinity`', function test( t ) {
	var v = ldexp( PINF, 10 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided a fraction equal to `-infinity`, the function returns `-infinity`', function test( t ) {
	var v = ldexp( NINF, 10 );
	t.equal( v, NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided a fraction equal to `NaN`, the function returns `NaN`', function test( t ) {
	var v = ldexp( NaN, 10 );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0` if the result of multiplying a positive fraction and an integer power of two underflows', function test( t ) {
	// Min subnormal ~5e-324 ~ 2**-1074
	var v = ldexp( 0.005, -1073 );
	t.equal( isPositiveZero( v ), true, 'returns +0' );
	t.end();
});

tape( 'the function returns `-0` if the result of multiplying a negative fraction and an integer power of two underflows', function test( t ) {
	// Min subnormal ~5e-324 ~ 2**-1074
	var v = ldexp( -0.005, -1073 );
	t.equal( isNegativeZero( v ), true, 'returns -0' );
	t.end();
});

tape( 'the function returns `+infinity` if the result of multiplying a positive fraction and an integer power of two overflows', function test( t ) {
	// Max double ~1e308 ~ 2**1023
	var v = ldexp( 1.0e3, 1021 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if the result of multiplying a negative fraction and an integer power of two overflows', function test( t ) {
	// Max double ~1e308 ~ 2**1023
	var v = ldexp( -1.0e3, 1021 );
	t.equal( v, NINF, 'returns -infinity' );
	t.end();
});
