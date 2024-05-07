function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return NaN;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
