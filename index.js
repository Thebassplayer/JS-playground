class Animal {
  sleep() {
    console.log("Shhhh, i'm sleeping");
  }
  eat() {
    console.log('Mmmmm, tasty');
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

const dog1 = new Dog('Raul');

const dogFunctionalities = {
  bark: () => console.log('woof!'),
  run: () => console.log("Let's go out!"),
};

Object.assign(Dog.prototype, dogFunctionalities);

console.log(dog1.eat());

console.log(Object.getPrototypeOf(dog1));

const dogMethods = () => {
  let methods = [];

  for (let method in dog1) {
    if (typeof dog1[method] === 'function') {
      methods.push(method);
    }
  }

  console.log('Methods:', methods);
};

dogMethods();
