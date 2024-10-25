function fillArraySequential(n: number) {
    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    }

    return array
}

const array = fillArraySequential(81)

// 1 - 9
function row(n: number) {
    const nMinus = n// - 1
    return array.slice(nMinus, nMinus + 9)
}


/*
 1,2,3,4,5,6,7,8,9
*/
function column(n: number) {
    // set limit for start
    // set acceptable values
    const result: number[] = []
    const start = n - 1


    for (let i = 0; i <= 8; i++) {
        result.push(array[start + i * 9])
    }

    return result;
}

const res = column(9)

// console.log(array)
console.log(res)
