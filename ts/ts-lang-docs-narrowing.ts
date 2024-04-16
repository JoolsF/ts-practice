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

// Beware the null is "object" 

// function printAll(strs: string | string[] | null) {
//     if(typeof strs === "object") {
//         for (const s of strs) { // typescript will hard you here that type is only narrowed to string[] | null
//           ...
//         }
//     }
// }

