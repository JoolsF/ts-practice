/*
  Record type
*/

// Allows us to pass any number of dynamic keys to that object at runtime.
const cache: Record<string, string> = {}

cache['a'] = 'AAA'

console.log(cache['a']) // AAA

// this is the same

const cache2: {[id: string]: string} = {}

cache['b'] = 'BBB'

console.log(cache['b']) // BBB