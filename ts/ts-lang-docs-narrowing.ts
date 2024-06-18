/**
    Narrowing
    https://www.typescriptlang.org/docs/handbook/2/narrowing.html 
 **/

/*
If padding is a number, it will treat that as the number of spaces we want to prepend to input. If padding is a string, 
it should just prepend padding to input.
*/
function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") { //type guard allows us to refine the type to a more specific type in a process called narrowing
        return " ".repeat(padding) + input; //at the point that we pass padding to the repeat method, the type is recognised as a number

    } else {
        return padding + input;
    }
}

console.log(padLeft(0, "julian"))

/*
    'In' operator narrowing
*/

type Fish = {
    swim: "swimming"
}

type Bird = {
    fly: "flying"
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim
    } else {
        animal.fly
    }
}


/*
    'instanceof' narrowing
*/
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


/*
  Assignment
*/

let x: string | number;

x = 1
const a: number = x // x changes to a number here

x = "string"
const b: string = x // but we can still assign a string because it is the 'declared' type that is important


//TODO START HERE
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis