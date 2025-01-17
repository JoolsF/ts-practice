/*
 Problem 1
 
 Multiples of 3 or 5

 https://projecteuler.net/problem=1

*/

import { getRunningMode } from "vitest";

const multipleOf3or5 = (n: number) => n % 3 === 0 || n % 5 === 0;
export let problem1Result: number = 0;

for (let i = 0; i < 1000; i++) {
  if (multipleOf3or5(i)) {
    problem1Result = problem1Result + i;
  }
}

/*
 Problem 2

 Even Fibonacci numbers

 https://projecteuler.net/problem=2

*/

/*
  0 - 0
  1 - 1
  2 - 1
  3 - 2
  4 - 3
  5 - 5
  6 - 8
  ...

*/

// const memo: Map<number, number> = new Map<number, number>();

// function fibonacciRecursiveMemoised(n: number): number {
//   if (n <= 1) {
//     return n;
//   } else if (memo.get(n) !== undefined) {
//     return memo.get(n)!;
//   } else {
//     const result =
//       fibonacciRecursiveMemoised(n - 1) + fibonacciRecursiveMemoised(n - 2);
//     memo.set(n, result);
//     return result;
//   }
// }

// Simpler sequential approach
function fibonacciSequential(n: number): number {
  let fibMinus1 = 0;
  let fib = 1;

  if (n == 0) {
    return fibMinus1;
  }

  let currentN = 1;

  while (currentN != n) {
    const newFib = fib + fibMinus1;
    fibMinus1 = fib;
    fib = newFib;
    currentN++;
  }

  return fib;
}

function problem2Generator() {
  let currentFib = 0;
  let latestResult = 0;
  const results: number[] = [];

  do {
    latestResult = fibonacciSequential(currentFib);
    if (latestResult % 2 == 0) {
      results.push(latestResult);
    }
    currentFib++;
  } while (latestResult <= 4000000);

  return results.reduce((a, b) => a + b);
}

export const problem2Result = problem2Generator();

/*
 Largest prime factor of 600851475143

 https://projecteuler.net/problem=3
*/

function isPrime(n: number) {
  if (n === 0 || n === 1) {
    return false;
  }
  let currentDivisor = n - 1;
  while (currentDivisor > 1) {
    const isdivisibleByCurrentDivisor = Number.isInteger(n / currentDivisor);
    if (isdivisibleByCurrentDivisor) {
      return false;
    }
    currentDivisor--;
  }
  return true;
}

function largestPrimeFactor(n: number): number {
  const nIsEven = n % 2 === 0;
  const startAt1 = nIsEven ? n / 2 : n / 3;
  const startAt2 = startAt1 % 2 === 0 ? startAt1 - 1 : startAt1; // always start on an odd number, no point in checking even

  for (let i = startAt2; i > 0; i -= 2) {
    if (isPrime(i)) {
      if (Number.isInteger(n / i)) {
        return i;
      }
    }
  }
  return -1;
}

/*
  If the number n is even, then the largest possible prime factor would be ( (n / 2) -1 )

  And then you iterate backwards through primes from that starting point looking for the first that divides n

*/
export const problem3Result = JSON.stringify(largestPrimeFactor(796));
