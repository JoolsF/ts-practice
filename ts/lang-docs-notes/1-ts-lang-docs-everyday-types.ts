/**
    STRUCTURAL TYPES 
**/
// Erased structural types
// Relations between types are determined by the properties they contain.
// Also not 'refied' meaning there is nothing at runtime that will tell us the type of an object.
interface Pointlike {
    x: number;
    y: number;
}

interface Named {
    name: String;
}

function logPoint(point: Pointlike) {
    console.log(`x = ${point.x}, y= ${point.y}`);
}

function logName(x: Named) {
    console.log("Hello, " + x.name);
}

// Can think of this as being part of the set of Pointlike and Named set of values.
const obj = {
    x: 0,
    y: 0,
    name: "origin"
}



logPoint(obj)
logName(obj)


/* 
    Empty structural types 
*/
class Empty { }

function fn(arg: Empty) {
    // do something?
}

//Works because {k: 10} has all of the properties of Empty
fn({ 10: String })

/* 
    Identical Types
*/
class Car {
    drive() {
        //
    }
}

class Golfer {
    drive() {
        //
    }
}

let w: Car = new Golfer();

/**
 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 **/

/*
    Primitives
*/

const numEx: number = 1
const boolEx: boolean = true
const strEx: string = "hello world"

/*
    Arrays
*/

const numArrEx: number[] = [1, 2, 3]
const strArrEx: (string | number)[] = ["foo", 1, "bar", "baz"]
strArrEx.push(1)

/*
    Functions
*/

function funcOne(a: any) {
    console.log(a)
}

// Because promise is retruned, the function must be marked with async here
async function asyncFuncOne(): Promise<number> {
    return 25;
}

// anonymous

numArrEx.forEach(function (i) {
    console.log(i)
})

// or the preferred arrow function syntax
// note that type of anon function param is inferred from array
numArrEx.forEach(i => console.log(i))

/*
    Object Types
    
    Any Javascript value with properties which is almost all of them
*/

// To define an object simply define it's properies
function printObj(o: { x: number; y: number, z?: string }) {
    console.log(`x ${o.x} y ${o.y} z: ${o.z}`)
}

// note that z is optional so it prints 'undefined'
printObj({ x: 1, y: 2 })
printObj({
    x: 1,
    y: 2,
    z: "foo"

})

// To safely use undefined
function plusOne(a?: number) {
    console.log((a !== undefined) ? a + 1 : undefined)
}
plusOne(2)

// Or a coalescing operator ('??') could be used
function plusOneAlt(a?: number) {
    console.log((a ?? 0) + 1)
}
plusOneAlt(2)

/*
    Union types
*/

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) { // without this check .join could be not used
        console.log(`Hello ${x.join(" and ")}`)
    } else {
        console.log(`Hello ${x}`)
    }
}
welcomePeople(["julian", "linda", "steve"])

// If all members have something in common then the typecheck is not needed
// It has the 'intersection' of the types' properties
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3)
}

console.log(getFirstThree([4, 6, 7, 3]))


/*
    Types aliases
*/

// An example of naming an object type
type Point = {
    x: number
    y: number
}

function printCord(p: Point) {
    console.log(`x: ${p.x}, y ${p.y}`)
}

// It can be used for any type

type StringNum = string | number

/*
    Interfaces

    Another way to name an object type.
*/

interface Point2 {
    x: number
    y: number
}

// Very similar to a Type Alias but it can be extended.

interface Animal {
    name: string
}

interface Cat extends Animal {
    sleeping: boolean
}


// We could do something similar with a Type Alias however using intersections

type Animal2 = {
    name: string
}

type Cat2 = Animal & {
    sleeping: Boolean
}

// an interface can also be updated after creation as follows

interface Foo {
    foo: string
}

interface Foo {
    bar: string
}

function foobar(f: Foo) {
    console.log(f)
}

foobar({ foo: 'foo', bar: 'bar' })


/*
    Literal types
*/

let person: "julian" = "julian"

// on this assignment will work, not very useful
// person = "julian"

// however, literals can be combined into unions
function printDirection(t: "left" | "right" | "up" | "down") {
    console.log(t)
}

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1
}

console.log(compare("a", "b"))

// Literal and non-literal can be combined

interface Volume {
    amount: number
}
function changeSettings(input: Volume | "auto") {

}

// Literal inferece

function handleRequest(url: string, method: "POST" | "GET"): void {

}

const req = {
    url: "www.foo.com",
    method: "GET"
}

// Does not compile since method is a string
// handleRequest(req.url, req.method) 

const reqAlternative1 = {
    url: "www.foo.com",
    method: "GET" as "GET"
}

handleRequest(reqAlternative1.url, reqAlternative1.method)


const reqAlternative2 = {
    url: "www.foo.com",
    method: "GET"
} as const // acts like a const for the type system.  ensures that all types are assigned the literal type

/*
    Null and undefined
*/

// Assuming strictNullChecks on, you must test if a value is null or undefined

const maybeNull: string | null = null

// You either override it unsafely e.g

// maybeNull!.toUpperCase

//or check

function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

/*
    Enums
    Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

*/

enum Direction {
    Left = 0,
    Right // set to 1
}

console.log(Direction.Right) // prints 1 as numeric enums auto-increment

// String enums need every constant assigned
enum Band {
    John = "John",
    Paul = "Paul",
    Ringo = "Ringo",
    George = "George"
}

/*
    BigInt
    // Available from ES2020 onwards
*/

const bInt: bigint = BigInt(100)