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


    row(n: number) {
        let sq: SmallSquare[]

        //TODO improve this
        if (n < 4) {
            sq = this.squares.slice(0, 3)
        } else if (n < 7) {
            sq = this.squares.slice(3, 6)
        } else {
            sq = this.squares.slice(6, 9)
        }

        switch (n % 3) {
            case 1: return sq.map(s => s.sqRowOne());
            case 2: return sq.map(s => s.sqRowTwo())
            case 0: return sq.map(s => s.sqRowThree())
        }
    }


    constructor(squares: SmallSquare[]) {
        this.squares = squares
    }


    display() {
        console.log(this.row(1))
        console.log(this.row(2))
        console.log(this.row(3))
        console.log()
        console.log(this.row(4))
        console.log(this.row(5))
        console.log(this.row(6))
        console.log()
        console.log(this.row(7))
        console.log(this.row(8))
        console.log(this.row(9))
    }

}

const g: Grid = new Grid(
    [
        // TOP ROW
        new SmallSquare([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        new SmallSquare([4, 4, 4, 5, 5, 5, 6, 6, 6]),
        new SmallSquare([7, 7, 7, 8, 8, 8, 9, 9, 9]),
        // MIDDLE ROW
        new SmallSquare([8, 7, 7, 8, 8, 8, 9, 9, 9]),
        new SmallSquare([8, 4, 4, 5, 5, 5, 6, 6, 6]),
        new SmallSquare([8, 1, 1, 2, 2, 2, 3, 3, 3]),
        // BOTTOM ROW
        new SmallSquare([9, 7, 7, 8, 8, 8, 9, 9, 9]),
        new SmallSquare([9, 4, 4, 5, 5, 5, 6, 6, 6]),
        new SmallSquare([9, 1, 1, 2, 2, 2, 3, 3, 3]),



    ],
)


g.display()