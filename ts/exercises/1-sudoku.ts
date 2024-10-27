// HELPERS
let highest = 0
function updateHighest(n: number) {
    n > highest ? highest = n : highest
}
// TODO generalise this to produce and range
// Currently produce value between 1-9
function randomNumber() {
    const res = Math.floor(Math.random() * 10)
    return res === 0 ? 1 : res
}

// implement array range with Array.from
function fillArraySequential(n: number) {
    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    }

    return array
}

function shuffleArray<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [a[i], a[j]] = [a[j], a[i]]; // Swap elements
    }
    return a;
}

function generateRandomArray() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return a.flatMap(_ => shuffleArray(a))
}


//SUDOKU



type validNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

class Sudoku {
    grid: number[]

    constructor(array: number[]) {
        this.grid = array;
    }

    row(n: validNumber) {
        const start = (n - 1) * 9
        return this.grid.slice(start, start + 9)
    }

    column(n: validNumber) {
        // set limit for start
        // set acceptable values
        const result: number[] = []
        const start = n - 1


        for (let i = 0; i <= 8; i++) {
            result.push(this.grid[start + i * 9])
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


        return indices.map(i => this.grid[i])

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
        // if (!validRes) console.error(`validColumns: ${validColumns}, validRows: ${validRows}, validSquares: ${validSquares}`)
        return validRes;
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
            // console.log(`backtrackIndex ${backtrackIndex}`)
            // console.log(`numberAttempt ${numberAttempt}`)
            // console.log(`highestSuccesfulUpdate ${highestSuccesfulUpdate}`)

            numberAttempt = 0
            backtrackIndex === null ? backtrackIndex = 0 : 0
            if(result.length === highestSuccesfulUpdate) {
                backtrackIndex = backtrackIndex -1 
                console.log(`backtrack ${backtrackIndex}`)
            }
            if (backtrackIndex < 0) {
                // console.log(`before ${result}`)
                result = result.slice(0, backtrackIndex)
                // console.log(`after ${result}`)
            }


        }

    }

    console.log(`COMPLETE: ${result}`)
    return result;


    // let i = 0
    // let numberAttempts = 0

    // while (startArray.filter(i => i != -1).length <= 81) {
    //     let attemptBefore = [...startArray]
    //     let rand = randomNumber()

    //     attemptBefore[i] = rand
    //     if (new Sudoku(attemptBefore).valid()) {
    //         // console.log('valid')
    //         startArray[i] = rand
    //         // console.log(startArray.filter(i => i != -1))
    //         startArray[i] = rand
    //         numberAttempts = 0
    //         i++
    //     } else {
    //         // console.log('invalid')
    //         // console.log(attemptBefore.filter(i => i != -1))
    //         startArray[i] = -1
    //         numberAttempts++
    //         if (numberAttempts >= 9) {
    //             // console.log('fail')
    //             updateHighest(startArray.filter(i => i != -1).length)
    //             return null

    //         }

    //     }

    // }
    // return startArray

}

console.log(generateValidSudokuGame())
