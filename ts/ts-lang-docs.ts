/**
    STRUCTURAL TYPES 
**/
// Erased strctural types
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

//TODO https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
