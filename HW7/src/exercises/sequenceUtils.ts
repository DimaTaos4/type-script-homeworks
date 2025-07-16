export function generateFibonacci(limit: number): number[] {
    const fib: number[] = [0, 1];
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }
    return fib;
}

export function generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = [];
    for (let num = 2; num <= limit; num++) {
        if (primes.every(p => num % p !== 0)) {
            primes.push(num);
        }
    }
    return primes;
}
