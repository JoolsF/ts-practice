export {};
/*
 More on functions
 
 https://www.typescriptlang.org/docs/handbook/2/functions.html
*/

/*
    Function type expressions
*/
type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
  fn("hello world");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

/*
    Call signatures
*/

type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // We can add a call signature to a function type
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(n: number): boolean {
  return n > 3;
}

myFunc.description = "default description"; // In TS and JS function are object and can have properties

doSomething(myFunc);

/*
    Construct signatures
*/

interface CallOrConstruct {
  (n: number): string;
  new (s: string): Date;
}

function fn(ctor: CallOrConstruct) {
  console.log(ctor(10)); // matches against first definition
  // console.log(new ctor("10")) this works too
}

fn(Date);

/*
 Generics
*/

function firstElement<A>(arr: A[]) {
  return arr[0];
}

const fe: number = firstElement([1, 2, 3]);
const fe2: string | number = firstElement([1, 2, 3, "4"]); // TS inferred these types

// constraints

function longest<T extends { length: number }>(a: T, b: T) {
  // Note that TS will infer the return type T
  if (a.length < b.length) {
    // .lenght accessible because of constaint
    return a;
  } else {
    return b;
  }
}

// console.log(longest([1,1], [2,2,2]))
console.log(longest("abcde", "a"));

/*
 Functions  
*/

// Optional parameters
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}

// Overloads
function makeDate(timestamp: number): Date; // overload function definitions
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  //implementation definition
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// simpler example

function func(s: string): void;
function func() {
  // this is a valid implementation because there is a single implementation and it chooses to not use the param
  console.log("func");
}

console.log(func(""));
// func() // error since the function used to write the function body can't be 'seen' from the outside

// The below would generate an error however
// function func2(s: string): void
// function func2(b: boolean): void // error
// function func2(s: string): void  {

// }

/*
 Other types to know about
*/

// 'void'

function noop() {
  // inferred type of function without a return statement or where no explicit value is returned
  return;
}

// 'object'
// Anything that isn't a primitive
// Different to empty object type { } and global type Object
// functions are objects

// 'unknown'
// Represents any value, similar to any type but it is safer because it is not legal to do anything with it

function f1(a: any) {
  a.b(); // OK
}
// errors
// function f2(a: unknown) {
//   a.b(); //   'a' is of type 'unknown'.
// }

// 'never'
//Some function never return a value
function fail(msg: string): never {
  throw new Error(msg);
}
// when union exhausted the final type is never
function fn2(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

/*
  Rest parameters and arguments
*/

function multiply(n: number, ...m: number[]) {
  // ...m: number[] is the rest parameter and means we can pass any amount of 'number'
  return m.map((x) => n * x);
}

console.log(multiply(10, 1, 2, 3, 4));

// Rest argument
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2); // push takes param ...items: T[]
console.log(`arr1: ${arr1}`); // 1,2,3,4,5,6

/*
 Parameter destructuring
*/

type SumArgs = {
  a: number;
  b: number;
  c: number;
};
function sum({ a, b, c }: SumArgs) {
  console.log(a + b + c);
}

/*
 Assinginability of functions
*/

type voidFunc = () => void;
const voidFun1: voidFunc = () => {
  return true;
};

const res: void = console.log(voidFun1()); // type is void, prints true

// Error
// function voidFunc2(): void {
//     return true;
// }
