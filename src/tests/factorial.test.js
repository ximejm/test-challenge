const assert = require('assert');
const factorial = require('../factorial.js');

describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
        assert.strictEqual(factorial(0), 1);
    });

    it('should return 1 for factorial of 1', () => {
        assert.strictEqual(factorial(1), 1);
    });

    it('should return 120 for factorial of 5', () => {
        assert.strictEqual(factorial(5), 120);
    });

    it('should return NaN for factorial of negative numbers', () => {
        assert(isNaN(factorial(-1)));
    });

    it('should return NaN for non-integer inputs', () => {
        assert(isNaN(factorial(1.5)));
    });
});