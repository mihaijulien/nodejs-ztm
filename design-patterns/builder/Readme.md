## Object Creational: Builder

**Intent**: "Separate the construction of a complex object from its representation so that the same construction process can create different representations."

```js
var Person = require('./Person')

// Employees
var sue = new Person('Sue', true, true, 60);
var bill = new Person('Bill', true, false, 20);
var phil = new Person('Phil', true, false);

// Shoppers
var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
var tabbitha = new Person('Tabbitha', false, false, 0, 1000);
```

 We're sending all of these arguments to the constructor to create the variations of these people. As a developer, I have no idea what sue, true, true, 60 means when we create Sue on line four. In order to understand what those arguments mean, I might have to go look at the person class itself. And here we can see that we have a constructor that takes in many different arguments. So this problem here is an `anti-pattern` called the `telescoping constructor`. And the issue is, is whenever we have a constructor that has too many arguments, it can become confusing to understand what those arguments are later in our code.