/*
Problem 6

The sum of the squares of the first ten natural numbers is 385

The square of the sum of the first ten natural numbers is 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

import { rangeMapReduce } from "../../utils/helpers";
import { nextPrimeGenerator } from "./euler-1-5";

export function add(a: number, b: number) {
    return a + b
}

export const sumOfSquare = rangeMapReduce(100, (n) => n ** 2, add)
export const sum = rangeMapReduce(100, (n) => n, add)
export const squareOfSum = sum ** 2

export const problem6Result = squareOfSum - sumOfSquare

/*
  By listing the first six prime numbers: 2,3,5,7,11,13 we can see that the 6th prime is 13

  What is the 10,001st prime number?
*/

const getNextPrime = nextPrimeGenerator()
let res: number = 0
for (let i = 1; i <= 10001; i++) {
    console.log(i)

    res = getNextPrime()
}

export const problem7Result = res