export {};
/*
 Object types
 https://www.typescriptlang.org/docs/handbook/2/objects.html
*/

/*
 Destructuring
*/

type Options = {
  a?: number;
  b?: number;
};

// note use of default values
function handleOptions({ a = 0, b = 0 }: Options) {
  return a + b;
}

/*
 Readonly properties
*/

type Home = {
  readonly resident: { name: string; age: number };
};

function handleHome(h: Home) {
  //   h.resident = { name: "John", age: 20 }; // the property can't be re-written
  h.resident.age++; // but the internal contents can be changed!
}

// properties can be changed by aliasing

type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = {
  readonly name: string;
  readonly age: number;
};

const writeablePerson: Person = {
  name: "Jon",
  age: 20,
};

const readOnlyPerson: ReadonlyPerson = writeablePerson;

console.log(readOnlyPerson.age); // 20
writeablePerson.age++;
console.log(readOnlyPerson.age); // 21 !

/*
 Index signatures

 A way of describing the dictionary pattern
*/

interface StringArray {
  // readonly stop assignment to indices
  readonly [index: number]: string;
}

const strArr1: StringArray = ["s"];
// const strArr2: StringArray = [1]; // Doesn't compile

type NumberDictionary = {
  [index: string]: number | string;
  length: number;
  name: string; // to add this property the return must be number | string
};
