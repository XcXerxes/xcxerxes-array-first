var arrayFirst = require('../lib')
var assert = require('assert')

assert.equal(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f']), 'a')
assert.deepEqual(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 2), ['a', 'b'])
assert.deepEqual(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['a', 'b', 'c'])
// assert.throws(arrayFirst(), 'array-first expects an array as the first argument')
