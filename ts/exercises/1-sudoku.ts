type validNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

// implement array range with Array.from
function fillArraySequential(n: number) {
    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    }

    return array
}

const array = fillArraySequential(81)

// 1 - 9
function row(n: validNumber) {
    const nMinus = n// - 1
    return array.slice(nMinus, nMinus + 9)
}


/*
 1,2,3,4,5,6,7,8,9
*/
function column(n: validNumber) {
    // set limit for start
    // set acceptable values
    const result: number[] = []
    const start = n - 1


    for (let i = 0; i <= 8; i++) {
        result.push(array[start + i * 9])
    }

    return result;
}

//TODO express this more elegantly
function square(n: validNumber) {
    const indices: number[] = []
    switch(n) {
        case 1: return  [0, 1, 2, 9,  10, 11, 18, 19, 20];
        case 2: return  [3, 4, 5, 12, 13, 14, 21, 22, 23];
        case 3: return  [6, 7, 8, 15, 16, 17, 24, 25, 26];
        case 4: return  [27, 28, 29, 36, 37, 38, 45, 46, 47];
        case 5: return  [30, 31, 32, 39, 40, 41, 48, 49, 50];
        case 6: return  [33, 34, 35, 42, 43, 44, 51, 52, 53];
        case 7: return  [54, 55, 56, 63, 64, 65, 72, 73, 74];
        case 8: return  [57, 58, 59, 66, 67, 68, 75, 76, 77];
        case 9: return  [60, 61, 62, 69, 70, 71, 78, 79, 80];
        default: return [];
    }  
   

    const res = indices
        .map(i => i * n)
        .map(i => array[i])

    return res

}


