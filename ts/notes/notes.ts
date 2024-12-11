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
 *  Method overloading 
 */

class Greeter {
  greet(person: string): string;
  greet(persons: string[]): string;

  greet(person: unknown) {
    if (typeof person === "string") {
      return `Hello ${person}!`;
    } else if (Array.isArray(person)) {
      return person.map((name) => `Hello ${name}!`).join("\n");
    }
    return "";
  }
}

