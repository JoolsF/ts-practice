/*
 Index signatures

 A way of describing the dictionary pattern.  Useful if you don't know all the names of a type's property for example but
 you know the shape of the value
*/
type NameMap = {
  [name: string]: number;
};
function setAge(ageLookup: NameMap, name: string, age: number) {
  ageLookup[name] = age;
}

const p1: NameMap = {
  John: 20,
};

p1["Jane"] = 22;

console.log(p1); // { John: 20, Jane: 22 }
setAge(p1, "John", 25);
console.log(p1); // { John: 25, Jane: 22 }
setAge(p1, "John1", 25);
console.log(p1); // { John: 25, Jane: 22, John1: 25 }

// It is also possible to return multiple types from the dictionary
type PersonMap = {
  [name: string]: number | string;
  nickname: string;
};

const p2: PersonMap = {
  John: 20,
  nickname: "JJ",
};

p2["Jane"] = "foobar"

// CONTINUE HERE