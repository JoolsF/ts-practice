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

type gridNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9


class Grid {
    squares: SmallSquare[]


    row(n: gridNumber) {
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

    //TODO start here
    column(n: gridNumber): SmallSquare {
        return this.squares[n-1]
    }


    constructor(squares: SmallSquare[]) {
        this.squares = squares
    }


    displayGame() {
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

    displayColumn() {
        console.log(this.column(1))
    }

}

const g: Grid = new Grid(
    [
        // TOP ROW
        new SmallSquare([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        new SmallSquare([2, 3, 4, 5, 6, 7, 8, 9, 1]),
        new SmallSquare([3, 4, 5, 6, 7, 8, 9, 1, 2]),
        // MIDDLE ROW
        new SmallSquare([4, 5, 6, 7, 8, 9, 1, 2, 3]),
        new SmallSquare([5, 6, 7, 8, 9, 1, 2, 3, 4]),
        new SmallSquare([6, 7, 8, 9, 1, 2, 3, 4, 5]),
        // BOTTOM ROW
        new SmallSquare([7, 8, 9, 1, 2, 3, 4, 5, 6]),
        new SmallSquare([8, 9, 1, 2, 3, 4, 5, 6, 7]),
        new SmallSquare([9, 1, 2, 3, 4, 5, 6, 7, 8]),



    ],
)


g.displayGame()
g.displayColumn()