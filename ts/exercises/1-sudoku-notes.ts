// /*
//   Sudoku Game

//   1. Setup

//   i.    Implement a 9X9 square made of 9 3X3 boxes.
//   ii.   Each horizontal and vertical line in the 9X9 square must contain the numbers 1 to 9 with no repeated numbers.
//   iii.  Each 3X3 box must have no repeating numbers
// */
// class SmallSquare {
//     numbers: number[]

//     constructor(numbers: number[]) {
//         this.numbers = numbers
//     }

//     sqRowOne() {
//         return this.numbers.slice(0, 3)
//     }

//     sqRowTwo() {
//         return this.numbers.slice(3, 6)
//     }

//     sqRowThree() {
//         return this.numbers.slice(6, 9)
//     }

// }

// type gridNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9


// class Grid {
//     squares: SmallSquare[]

//     constructor(generateRandom: Boolean) {
//         if (generateRandom) {
//             this.squares = []
//             for (let i = 0; i <= 8; i++) {
//                 const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//                 this.squares.push(new SmallSquare(this.shuffleArray(a)))
//             }

//         } else {
//             // FOR TESTING
//             const squares = [
//                 // TOP ROW
//                 new SmallSquare([1, 2, 3, 4, 5, 6, 7, 8, 9]),
//                 new SmallSquare([2, 3, 4, 5, 6, 7, 8, 9, 1]),
//                 new SmallSquare([3, 4, 5, 6, 7, 8, 9, 1, 2]),
//                 // MIDDLE ROW
//                 new SmallSquare([4, 5, 6, 7, 8, 9, 1, 2, 3]),
//                 new SmallSquare([5, 6, 7, 8, 9, 1, 2, 3, 4]),
//                 new SmallSquare([6, 7, 8, 9, 1, 2, 3, 4, 5]),
//                 // BOTTOM ROW
//                 new SmallSquare([7, 8, 9, 1, 2, 3, 4, 5, 6]),
//                 new SmallSquare([8, 9, 1, 2, 3, 4, 5, 6, 7]),
//                 new SmallSquare([9, 1, 2, 3, 4, 5, 6, 7, 8])
//             ]
//             this.squares = squares

//         }
//     }

//     private shuffleArray<T>(array: T[]): T[] {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
//             [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//         }
//         return array;
//     }

//     //TODO used gridNumber
//     row(n: number) {
//         let sq: SmallSquare[]

//         //TODO improve this
//         if (n < 4) {
//             sq = this.squares.slice(0, 3)
//         } else if (n < 7) {
//             sq = this.squares.slice(3, 6)
//         } else {
//             sq = this.squares.slice(6, 9)
//         }

//         switch (n % 3) {
//             case 1: return sq.map(s => s.sqRowOne());
//             case 2: return sq.map(s => s.sqRowTwo())
//             case 0: return sq.map(s => s.sqRowThree())
//         }
//     }

//     //TODO start here
//     column(n: number) {
//         return this.squares.map(s => s.numbers[n])
//     }

//     // //TODO work in progress
//     // validGame(): boolean {
//     //     for (let i = 1; i <= 2; i++) {
//     //         console.log(this.column(i))
//     //         const s = new Set(this.column(i))
//     //         console.log(s)
//     //         console.log(s.size)
//     //         if (s.size != 9) {
//     //             return true;
//     //         }
//     //     }
//     //     return true;

//     // }

//     displayGame() {
//         console.log(this.row(1))
//         console.log(this.row(2))
//         console.log(this.row(3))
//         console.log()
//         console.log(this.row(4))
//         console.log(this.row(5))
//         console.log(this.row(6))
//         console.log()
//         console.log(this.row(7))
//         console.log(this.row(8))
//         console.log(this.row(9))
//     }

//     // displayColumn() {
//     //     console.log(this.column(3))
//     // }


// }

// const g: Grid = new Grid(false)
// console.log(g.displayGame)
// console.log(g.column(0))


// // g.displayGame()
// // console.log(`valid game? ${g.validGame()}`)

// // for (let i = 0; i <= 1; i++) {
// //     // console.log(i)
// //     const game = new Grid(true)
    
// //     if (game.validGame()) {
// //         game.displayGame()
// //         break;
// //     }

// // }


// //TODO experiment with brute force approach of generating random boards until one is valid