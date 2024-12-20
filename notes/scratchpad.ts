// Typescript pass by value vs pass by reference examples

// Pritive types are passed by value
let i = 0
function increment(value: number): void {
  value++
}
console.log(i) // 0
increment(i)
console.log(i) //0


// objects are passed by reference
const obj = { value: 0 }
function updateObject(obj: { value: number }): void {
  obj.value++
}

// const arr =  Array()

// function addToArray(value: string, array: Array<string>): void {
//   array.push(value)
// }

// console.log(arr)
// addToArray("hello", arr)
// console.log(arr)