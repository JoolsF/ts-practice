/*
  Sudoku Game

  1. Setup

  i.    Implement a 9X9 square made of 9 3X3 boxes.
  ii.   Each horizontal and vertical line in the 9X9 square must contain the numbers 1 to 9 with no repeated numbers.
  iii.  Each 3X3 box must have no repating numbers
*/
class SmallSquare {
    numbers: number[]

    constructor(numbers: number[]) {
        this.numbers = numbers
    }

    rowOne() {
        return this.numbers.slice(0,3)
    }
    
    rowTwo() {
        return this.numbers.slice(3,6)
    }
    
    rowThree() {
        return this.numbers.slice(6,9)
    }

    

}

class BigSquare {
    squares: SmallSquare[]

    rowOne() {
        return this.squares.slice(0,3).map(s => s.rowOne())
    }
    
    // rowTwo() {
    //     return this.squares.slice(3,6).map(s => s.numbers)
    // }
    
    // rowThree() {
    //     return this.squares.slice(6,9).map(s => s.numbers)
    // }

    constructor(squares: SmallSquare[]) {
        this.squares = squares
    }

    //TODO WRONG - Top row 
    display() {
        return this.squares.map(s => console.log(`${this.rowOne()}`.trim()))
        // return this.rowOne()
    }

}

const bs: BigSquare = new BigSquare(
    [
        new SmallSquare([1,2,3,0,0,0,0,0,0]),
        new SmallSquare([4,5,6,0,0,0,0,0,0])
        // new SmallSquare(),
        // new SmallSquare(),
        // new SmallSquare(),
        // new SmallSquare(),
        // new SmallSquare(),
        // new SmallSquare(),
        // new SmallSquare()
    ],
)


bs.display()