/*
Problem 6

The sum of the squares of the first ten natural numbers is 385

The square of the sum of the first ten natural numbers is 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

import { lazyRange, nextNumberGenerator, rangeMapReduce } from "../../utils/helpers";
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
    res = getNextPrime()
}

export const problem7Result = res


/* 
 Problem 8

 The four adjacent digits in the 1000 digit number that have the greatest product are 9 * 9 * 8 * 9

    73167176531330624919225119674426574742355349194934
    96983520312774506326239578318016984801869478851843
    85861560789112949495459501737958331952853208805511
    12540698747158523863050715693290963295227443043557
    66896648950445244523161731856403098711121722383113
    62229893423380308135336276614282806444486645238749
    30358907296290491560440772390713810515859307960866
    70172427121883998797908792274921901699720888093776
    65727333001053367881220235421809751254540594752243
    52584907711670556013604839586446706324415722155397
    53697817977846174064955149290862569321978468622482
    83972241375657056057490261407972968652414535100474
    82166370484403199890008895243450658541227588666881
    16427171479924442928230863465674813919123162824586
    17866458359124566529476545682848912883142607690042
    24219022671055626321111109370544217506941658960408
    07198403850962455444362981230987879927244284909188
    84580156166097919133875499200524063689912560717606
    05886116467109405077541002256983155200055935729725
    71636269561882670428252483600823257530420752963450

  Find the 13 adjacent digits in the 1000-digit number that have the greatest product.  What is the value of this product?

*/

const num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
const numDigits = num.toString().split('').map(Number)


let res8: { product: number, digits: number[] } = {
    product: 0,
    digits: []
}
function checkProduct(digits: number[]) {
    const product = digits.reduce((a, b) => a * b)
    if (product > res8.product) {
        res8 = {
            digits,
            product
        }
        // console.log(product)
    }
}

for (let i = 0; i <= numDigits.length - 13; i++) {

    checkProduct(numDigits.slice(i, i + 13))
}

export const problem8Result = res8

/*
 Problem 9
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
   
  a*a + b*b = c*c

 For example 3*3 + 4*4 = 9 + 16 = 25 = 5*5

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc
*/


/*
    |   a   |   b   |   c   |
        1       2       3
                        4
                        ...
                        n   (where aa + bb + cc > 1000)
                3       4   (increment b)
                3       5   (increment b)
                3       ...
                        n
                4           (once b is too large for first iteration, increment a)
               ...            
        2       3       4
                        5
                        ...
                        N
    

*/
const expectedRes = 1000
let currentRes = 0
const nextNumber = nextNumberGenerator(0)

// while (expectedRes != currentRes) {
//     const a = nextNumber()
    
// }

export const problem9Result = 1
