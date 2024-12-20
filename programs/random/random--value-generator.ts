// // HELPERS
// let highest = 0
// function updateHighest(n: number) {
//     n > highest ? highest = n : highest
// }
// TODO generalise this to produce and range
// Currently produce value between 1-9
export function randomNumber() {
    const res = Math.floor(Math.random() * 10)
    return res === 0 ? 1 : res
}

// implement array range with Array.from
export function fillArraySequential(n: number) {
    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    }

    return array
}

export function shuffleArray<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [a[i], a[j]] = [a[j], a[i]]; // Swap elements
    }
    return a;
}

export function generateRandomArray() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return a.flatMap(_ => shuffleArray(a))  
}
