/**
 * Creates a lazy range of numbers using a generator.
 * @param start - The starting number of the range (inclusive).
 * @param end - The ending number of the range (inclusive).
 * @returns A generator that yields numbers from start to end.
 */
export function* lazyRange(start: number, end: number): Generator<number> {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

export function rangeMap(end: number, f:(n: number) => number): number[] {
   return Array.from({length: end}).map((_,n) => f(n+1))
}

export function rangeMapReduce(end: number, f:(n: number) => number, r: (a: number,b: number) => number): number {
    const res1 = Array.from({length: end}).map((_,n) => f(n+1))
    return res1.reduce(r)
 }