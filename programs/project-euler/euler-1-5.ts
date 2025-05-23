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
 Problem 3

 Largest prime factor of 600851475143

 https://projecteuler.net/problem=3
*/

// TODO Runs efficiently for the number given but has bugs / inefficienices to fix

export function isPrime(n: number): boolean {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  if (n <= 3) return true; // 2 and 3 are prime numbers
  if (n % 2 === 0 || n % 3 === 0) return false; // eliminate multiples of 2 and 3

  // Check for factors from 5 to the square root of n, skipping even numbers and multiples of 3
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

export function nextPrimeGenerator() {
  let currentCandidate = 2;

  const loop = (x: number): number => {
    if (isPrime(x)) {
      currentCandidate = currentCandidate + 2;
      return x;
    } else {
      return loop((currentCandidate += 2));
    }
  };

  return () => {
    if (currentCandidate === 2) {
      currentCandidate = 3;
      return 2;
    } else {
      return loop(currentCandidate);
    }
  };
}

function largestPrimeFactor(n: number) {
  const nextPrimeAsc = nextPrimeGenerator();
  let currentPrimeDivisor: number;
  let largestPrimeFactorRes: number = -1;

  do {
    currentPrimeDivisor = nextPrimeAsc();
    while (n % currentPrimeDivisor === 0) {
      // Keep dividing out the prime factor
      largestPrimeFactorRes = currentPrimeDivisor;
      n /= currentPrimeDivisor;
    }
  } while (n > 1); // Stop only when n is fully factored

  nextPrimeAsc();

  return largestPrimeFactorRes;
}

export const problem3Result = JSON.stringify(largestPrimeFactor(600851475143));

/*
Problem 4

Largest Palindrome Product
A palindromic number reads the same both ways. The largest palindrome made from the product of two -digit numbers is 
9009 = 91 * 99

Find the largest palindrome made from the product of two 3-digit number

https://projecteuler.net/problem=4
*/

function threeDigitProducts(): number[] {
  let res: Set<number> = new Set();
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
      res.add(i * j);
    }
  }
  return Array.from(res);
}

function isPalindrome(input: number | string): boolean {
  let s: string = typeof input === "number" ? input.toString() : input;

  let startChar = 0;
  let endChar = s.length - 1;

  const first = s.charAt(startChar);
  const end = s.charAt(endChar);
  let match: boolean;

  do {
    const first = s.charAt(startChar);
    const end = s.charAt(endChar);
    match = first === end;
    startChar++;
    endChar--;
  } while (match && startChar <= endChar);

  return match;
}

function largestPalindrome(candidates: number[]) {
  let res: number = 0;
  candidates.some((num: number) => {
    if (isPalindrome(num)) {
      res = num;
      return true;
    }
    return false;
  });

  return res;
}

export const problem4Result = largestPalindrome(
  threeDigitProducts().sort((a, b) => b - a)
);

/*
 Problem 5
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 
?

*/

function isDivisibleWithoutRemainder(a: number, b: number): boolean {
  return a % b === 0;
}

function isEvenlyDivisibleByAll(n: number, from: number, to: number): boolean {
  for (let i = from; i <= to; i++) {
    if (!(n % i === 0)) {
      return false;
    }
  }
  return true;
}

export type Euler5Res = { res: number } | "limit_reached";

function smallestEvenlyDivisible(
  limit: number,
  from: number,
  to: number
): Euler5Res {
  for (let i = 1; i <= limit; i++) {
    if (isEvenlyDivisibleByAll(i, from, to)) {
      return { res: i };
    }
  }
  return "limit_reached";
}

export const problem5Result = smallestEvenlyDivisible(252000000, 1, 20);
