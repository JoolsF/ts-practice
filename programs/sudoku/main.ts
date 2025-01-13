import { randomNumber } from "../random/random--value-generator";

// TODO 
// This is a naive, inefficient approach using a brute force method of generating a sudoku board
// and may have several bugs where it never terminates.
// 
// 1. Write unit tests covering the current cases
// 2. Further refactor into simpler components
// 3. Refactor and simplify methods
// 4. Debug and improve efficiency
type validNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

class Sudoku {
    sudokuGrid: number[]

    constructor(array: number[]) {
        this.sudokuGrid = array;
    }

    row(n: validNumber) {
        const start = (n - 1) * 9
        return this.sudokuGrid.slice(start, start + 9)
    }

    column(n: validNumber) {
        // set limit for start
        // set acceptable values
        const result: number[] = []
        const start = n - 1


        for (let i = 0; i <= 8; i++) {
            result.push(this.sudokuGrid[start + i * 9])
        }

        return result;
    }

    //TODO express this more elegantly
    square(n: validNumber) {
        let indices: number[]
        switch (n) {
            case 1:
                indices = [0, 1, 2, 9, 10, 11, 18, 19, 20];
                break;
            case 2:
                indices = [3, 4, 5, 12, 13, 14, 21, 22, 23];
                break;
            case 3:
                indices = [6, 7, 8, 15, 16, 17, 24, 25, 26];
                break;
            case 4:
                indices = [27, 28, 29, 36, 37, 38, 45, 46, 47];
                break;
            case 5:
                indices = [30, 31, 32, 39, 40, 41, 48, 49, 50];
                break;
            case 6:
                indices = [33, 34, 35, 42, 43, 44, 51, 52, 53];
                break;
            case 7:
                indices = [54, 55, 56, 63, 64, 65, 72, 73, 74];
                break;
            case 8:
                indices = [57, 58, 59, 66, 67, 68, 75, 76, 77];
                break;
            case 9:
                indices = [60, 61, 62, 69, 70, 71, 78, 79, 80];
                break;
        }


        return indices.map(i => this.sudokuGrid[i])

    }

    noDuplicates(a: number[]) {
        const filtered = a.filter(n => n != undefined)
        return new Set(filtered).size === filtered.length
    }

    //TODO DRY issues
    valid() {
        const oneToNine: validNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const validColumns = oneToNine.map(i => this.noDuplicates(this.column(i))).reduce((previous, current) => previous && current)
        const validRows = oneToNine.map(i => this.noDuplicates(this.row(i))).reduce((previous, current) => previous && current)
        const validSquares = oneToNine.map(i => this.noDuplicates(this.square(i))).reduce((previous, current) => previous && current)
        const validRes = validRows && validColumns && validSquares
        
        return validRes;
    }

    printSudokuGrid() {
        if (this.sudokuGrid.length !== 81) {
            console.error("Invalid sudoku array. It must contain 81 elements.");
            return;
        }

        for (let row = 0; row < 9; row++) {
            let rowString = "";

            for (let col = 0; col < 9; col++) {
                const value = this.sudokuGrid[row * 9 + col] || "."; // Use "." for empty cells (0 values)

                // Add space between columns and thicker borders after every 3rd column
                rowString += (col % 3 === 0 ? " | " : " ") + value;
            }

            // Add row to the grid and borders after every 3rd row
            console.log(rowString + " |");
            if ((row + 1) % 3 === 0 && row !== 8) {
                console.log("---------+---------+---------");
            }
        }
    }

}

function generateValidSudokuGame() {

    let result: number[] = []
    let numberAttempt = 0
    let highestSuccesfulUpdate: number = -1
    let backtrackIndex = null

    function complete() {
        return result.length === 81
    }

    while (!complete()) {
    
        result[result.length] = randomNumber()
        if (!new Sudoku(result).valid()) {

            result = result.slice(0, -1) //remove the invalid element to try another
            numberAttempt++
        } else {
            // console.log(`valid ${result.filter(i => i != undefined).length} - ${result}`);
            numberAttempt = 0
            if (result.length > highestSuccesfulUpdate) {
                console.log(`${highestSuccesfulUpdate} ${result}`)
                // Set the furthest point we've got to
                highestSuccesfulUpdate = result.length
                // We don't want to back
                backtrackIndex = null
                // Backtrack to the backtrackIndex 

            }


        }

        if (numberAttempt >= 9) {
            numberAttempt = 0
            backtrackIndex === null ? backtrackIndex = 0 : 0
            if (result.length === highestSuccesfulUpdate) {
                backtrackIndex = backtrackIndex - 1
                console.log(`backtrack ${backtrackIndex}`)
            }
            if (backtrackIndex < 0) {
                result = result.slice(0, backtrackIndex)
            }
        }
    }

    console.log(`COMPLETE: ${result}`)
    return result;


}

const game = new Sudoku(generateValidSudokuGame())
game.printSudokuGrid()

