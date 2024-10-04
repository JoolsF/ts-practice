/*
  Sudoku Game

  1. Setup

  i.    Implement a 9X9 square made of 9 3X3 boxes.
  ii.   Each horizontal and vertical line in the 9X9 square must contain the numbers 1 to 9 with no repeated numbers.
  iii.  Each 3X3 box must have no repeating numbers
*/
class SmallSquare {
    numbers: number[]

    constructor(numbers: number[]) {
        this.numbers = numbers
    }

    sqRowOne() {
        return this.numbers.slice(0, 3)
    }

    sqRowTwo() {
        return this.numbers.slice(3, 6)
    }

    sqRowThree() {
        return this.numbers.slice(6, 9)
    }



}

class Grid {
    squares: SmallSquare[]

    // Grid row is a row of three squares

    // Grid row 1
    rowOne() {
        return this.squares.slice(0,3).map(s => s.sqRowOne())
    }

    rowTwo() {
        return this.squares.slice(0,3).map(s => s.sqRowTwo())
    }

    rowThree() {
        return this.squares.slice(0,3).map(s => s.sqRowThree())
    }
    
    // Grid row 2
    rowFour() {
        return this.squares.slice(3,6).map(s => s.sqRowOne())
    }

    rowFive() {
        return this.squares.slice(3,6).map(s => s.sqRowTwo())
    }

    rowSix() {
        return this.squares.slice(3,6).map(s => s.sqRowThree())
    }

    // Grid row 3
    rowSeven() {
        return this.squares.slice(6,9).map(s => s.sqRowOne())
    }

    rowEight() {
        return this.squares.slice(6,9).map(s => s.sqRowTwo())
    }

    rowNine() {
        return this.squares.slice(6,9).map(s => s.sqRowThree())
    }


    constructor(squares: SmallSquare[]) {
        this.squares = squares
    }

    //TODO WRONG - Top row 
    display() {
       // Grid row one
        console.log(this.rowOne())
        console.log(this.rowTwo())
        console.log(this.rowThree())
        console.log()
        console.log(this.rowFour())
        console.log(this.rowFive())
        console.log(this.rowSix())
        console.log()
        console.log(this.rowSeven())
        console.log(this.rowEight())
        console.log(this.rowNine())
    }

}

const g: Grid = new Grid(
    [
        // TOP ROW
        new SmallSquare([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        new SmallSquare([4, 4, 4, 5, 5, 5, 6, 6, 6]),
        new SmallSquare([7, 7, 7, 8, 8, 8, 9, 9, 9]),
        // MIDDLE ROW
        new SmallSquare([-1, 7, 7, 8, 8, 8, 9, 9, 9]),
        new SmallSquare([-2, 4, 4, 5, 5, 5, 6, 6, 6]),
        new SmallSquare([-3, 1, 1, 2, 2, 2, 3, 3, 3]), 
        // BOTTOM ROW
        new SmallSquare([-4, 7, 7, 8, 8, 8, 9, 9, 9]),
        new SmallSquare([-5, 4, 4, 5, 5, 5, 6, 6, 6]),
        new SmallSquare([-6, 1, 1, 2, 2, 2, 3, 3, 3]),
        
        

    ],
)


g.display()