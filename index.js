// index.js

// A simple function to add two numbers
function add(a, b) {
    return a + b;
}

// A simple function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// A simple function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// A simple function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// A simple function to find the modulus of two numbers
function modulus(a, b) {
    return a % b;
}

// A simple function to raise a number to a power
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// A simple function to find the square root of a number
function squareRoot(number) {
    if (number < 0) {
        throw new Error("Cannot take the square root of a negative number.");
    }
    return Math.sqrt(number);
}

// Export the functions to make them available for import
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    power,
    squareRoot
};


const calculator = require('./index.js');

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(4, 3)); // 12
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.modulus(10, 3)); // 1
console.log(calculator.power(2, 3)); // 8
console.log(calculator.squareRoot(16)); // 4
