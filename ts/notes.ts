/*
    Depedency Injection using classes
*/

class ServiceA {
    doSomething() {
      console.log('Doing something');
    }
  }
  
  class ServiceB {
    constructor(private serviceA: ServiceA) {}
  
    doSomethingElse() {
      this.serviceA.doSomething();
      console.log('Doing something else');
    }
  }
  
  const serviceA = new ServiceA();
  const serviceB = new ServiceB(serviceA);
  serviceB.doSomethingElse();