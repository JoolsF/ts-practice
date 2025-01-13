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

myFunc.description = "default description"; // In TS and JS functions are objects and can have properties

doSomething(myFunc);
