export {};  // Turn a file with any imports or exports into a module

/*
    Depedency Injection using classes
*/

class ServiceA {
  doSomething() {
    console.log('Doing something');
  }
}

class ServiceB {
  constructor(private serviceA: ServiceA) { }

  doSomethingElse() {
    this.serviceA.doSomething();
    console.log('Doing something else');
  }
}

const serviceA = new ServiceA();
const serviceB = new ServiceB(serviceA);
serviceB.doSomethingElse();

/*
 * Pattern match arrays example 
 */


function processNumbers(nums: number[]) {
  const [n, ...rest] = nums
  if (n) {
    console.log(`Processing: ${n}, remaining: ${rest}`)
    processNumbers(rest)
  } else {
    console.log('end')
  }
}


/*
 * Override with Partial
 */
type SomeType = {
  name: string,
  age: number
}

export function makeSomeType(t?: Partial<SomeType>) {
  return {
    name: "default",
    age: 1,
    ...t
  }
}

/*
 *  Method overloading  (not really overloading and not necessarily best practice!)
 */
class Greeter {
  greet(person: string): string;
  greet(persons: string[]): string;

  greet(person: unknown) {
    if (typeof person === "number") {
      return `Hello ${person}!`;
    } else if (Array.isArray(person)) {
      return person.map((name) => `Hello ${name}!`).join("\n");
    }
    return "";
  }
}


/*
 * Typescript pass by value vs pass by reference examples
 */

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


/**
 * Creates a lazy range of numbers using a generator.
 * @param start - The starting number of the range (inclusive).
 * @param end - The ending number of the range (inclusive).
 * @returns A generator that yields numbers from start to end.
 */
function* lazyRange(start: number, end: number): Generator<number> {
  for (let i = start; i <= end; i++) {
      yield i;
  }
}

const res = Array.from( {length: 5}, (_, n) => n ** n)
