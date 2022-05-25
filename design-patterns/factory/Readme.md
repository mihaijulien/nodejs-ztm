## Object Creational: Prototype

**Intent**: "Define an interface for creating an object but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."

```js
var alex = new Shopper('Alex Banks', 100);
var eve = new Employee('Eve Porcello', 100, 'This and That');
```

 Instead of using these classes directly within our client application, we're going to use a factory method instead. And instead of using the instances to create instances of the users, we'll actually let the factory decide which type of user to create. 

 ```js
 var userFactory = require('./userFactory');

var alex = userFactory('Alex Banks', 100);
var eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');
```