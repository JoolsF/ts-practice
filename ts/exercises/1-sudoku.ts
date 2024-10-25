

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
        console.log(a)
        return new Set(a).size === a.length
    }

    //TODO DRY issues
    valid() {
        const oneToNine: validNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const validColumns = oneToNine.map(i => this.noDuplicates(this.column(i))).reduce((previous, current) => previous && current)
        const validRows = oneToNine.map(i => this.noDuplicates(this.row(i))).reduce((previous, current) => previous && current)
        const validSquares = oneToNine.map(i => this.noDuplicates(this.square(i))).reduce((previous, current) => previous && current)

        const validRes = validColumns && validRows && validSquares
        // if (!validRes) console.error(`validColumns: ${validColumns}, validRows: ${validRows}, validSquares: ${validSquares}`)
        return validRes;
    }





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

const input = fillArraySequential(81)


for (let i = 0; i <= 10; i++) {
    const s = new Sudoku(generateRandomArray())
    console.log(i)
    if(s.valid()) {
        console.log(`VALID!!! ${s.grid}`);
        break;
    }
}