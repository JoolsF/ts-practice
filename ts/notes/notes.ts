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
    if(n) {
        console.log(`Processing: ${n}, remaining: ${rest}`)
        processNumbers(rest)
    } else {
        console.log('end')
    }
    

}
