export {};

/**
    Narrowing
    https://www.typescriptlang.org/docs/handbook/2/narrowing.html 
   **/

/*
  If padding is a number, it will treat that as the number of spaces we want to prepend to input. If padding is a string, 
  it should just prepend padding to input.
  */
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    //type guard allows us to refine the type to a more specific type in a process called narrowing
    return " ".repeat(padding) + input; //at the point that we pass padding to the repeat method, the type is recognised as a number
  } else {
    return padding + input;
  }
}

console.log(padLeft(0, "julian"));

/*
    'In' operator narrowing
  */

type Fish = {
  swim: "swimming";
  name: string;
};

type Bird = {
  fly: "flying";
};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  } else {
    animal.fly;
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

x = 1;
const a: number = x; // x changes to a number here

x = "string";
const b: string = x; // but we can still assign a string because it is the 'declared' type that is important

/*
    Control flow analysis

    This analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types 
    as it encounters type guards and assignments
  */

//
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5; // string | number | boolean;

  console.log(x); // boolean

  if (Math.random() < 0.5) {
    // boolean
    x = "hello"; // Even though x is boolean above, assignability is always checked against the declared type
    console.log(x); // string
  } else {
    x = 100;
    console.log(x); // number
  }

  return x; // string | number
}

/*
   Type predicate
  */

// When using this in an if statement e.g. if(isFish(pet)) the else branch will know it's a bird

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet: (Fish | Bird)[] = [
  { swim: "swimming", name: "flipper" },
  { fly: "flying" },
  { fly: "flying" },
  { fly: "flying" },
];

pet.filter(isFish);

/*
    Discriminated unions

    Use a property common to every type in the union to narrow the type
  */

type Dog = {
  kind: "dog";
  bark: string;
};

type Cat = {
  kind: "cat";
  meow: string;
};

type Budgie = {
  kind: "budgie";
  chirp: string;
};

type Pet = Dog | Cat | Budgie;

function talkToPet(pet: Pet) {
  switch (pet.kind) {
    case "dog":
      return pet.bark;
    case "cat":
      return pet.meow;
    case "budgie":
      return pet.chirp;
    default:
      const _exhaustivenessCheck: never = pet; // by adding this exhaustiveness check, adding another member to Pet will cause a compilation error
      return _exhaustivenessCheck;
  }
}
