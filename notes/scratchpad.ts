// Typescript pass by value vs pass by reference examples

import { log, logLineBreak } from "../utils/logger";

// Primitive types are passed by value
let i = 0;
function increment(param: number): void {
  log("param before", param);
  param++;
  console.log("param after", param);
}

log(`i before`, i); // 0
increment(i);
log(`i after`, i); // 0

logLineBreak();

// Objects are passed by reference
const myObj = { value: 0 };
function updateObject(param: { value: number }): void {
  log("param before", param);
  param.value++;
  log("param after", param);
}

log(`myObj before`, myObj); // 0
updateObject(myObj);
log(`myObj after`, myObj); // 1
logLineBreak();

// Arrays are passed by reference
const arr = Array();

function addToArray(value: string, param: Array<string>): void {
  log("param before", param); // []
  param.push(value);
  log("param after", param); // ["1"]
}

log(`myObj before`, arr); // []
addToArray("1", arr);
log(`myObj after`, arr); // ["1"]
