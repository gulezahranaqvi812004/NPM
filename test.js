// test.js
const assert = require('assert');
const calculator = require('./index.js');

// Test the add function
assert.strictEqual(calculator.add(2, 3), 5, '2 + 3 should equal 5');
assert.strictEqual(calculator.add(-1, 1), 0, '-1 + 1 should equal 0');
assert.strictEqual(calculator.add(0, 0), 0, '0 + 0 should equal 0');

// Test the subtract function
assert.strictEqual(calculator.subtract(5, 2), 3, '5 - 2 should equal 3');
assert.strictEqual(calculator.subtract(-1, -1), 0, '-1 - -1 should equal 0');
assert.strictEqual(calculator.subtract(0, 5), -5, '0 - 5 should equal -5');

// Test the multiply function
assert.strictEqual(calculator.multiply(4, 3), 12, '4 * 3 should equal 12');
assert.strictEqual(calculator.multiply(-1, 1), -1, '-1 * 1 should equal -1');
assert.strictEqual(calculator.multiply(0, 5), 0, '0 * 5 should equal 0');

// Test the divide function
assert.strictEqual(calculator.divide(10, 2), 5, '10 / 2 should equal 5');
assert.throws(() => calculator.divide(10, 0), /Division by zero is not allowed/, 'Division by zero should throw an error');

// Test the modulus function
assert.strictEqual(calculator.modulus(10, 3), 1, '10 % 3 should equal 1');
assert.strictEqual(calculator.modulus(7, 2), 1, '7 % 2 should equal 1');

// Test the power function
assert.strictEqual(calculator.power(2, 3), 8, '2 raised to the power of 3 should equal 8');
assert.strictEqual(calculator.power(5, 0), 1, '5 raised to the power of 0 should equal 1');

// Test the squareRoot function
assert.strictEqual(calculator.squareRoot(16), 4, 'Square root of 16 should equal 4');
assert.throws(() => calculator.squareRoot(-1), /Cannot take the square root of a negative number/, 'Square root of a negative number should throw an error');

console.log('All tests passed!');
