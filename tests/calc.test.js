// Import modules to test
const calc = require('../calc.js');

// 1st test
//

test('Returns the sum of a & b', () => {
    expect(calc.sum(10, 8)).toBe(18);
})

test('Returns the product of a & b', () => {
    expect(calc.multiply(10,8)).toBe(80);
})

test('Returns the power of a & b', () => {
    expect(calc.power(2,3)).toBe(8);
})
