/*
Problem 6

The sum of the squares of the first ten natural numbers is 385

The square of the sum of the first ten natural numbers is 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

import {rangeMapReduce } from "../../utils/helpers";

export const sumOfSquare = rangeMapReduce(10, (n) => n ** 2, (a,b) => a + b)
export const sum = rangeMapReduce(10, (n) => n, (a,b) => a + b)
export const squareOfSum = sum ** 2

export const problem6Result =  squareOfSum - sumOfSquare
