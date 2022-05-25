## Object Creational: Prototype

**Intent**: "Specify the kinds of objects to create using prototypical instance, and create new objects by copying this prototype"

```js
var alex = new Shopper('Alex Banks');
alex.addItemToList('camping knife');
alex.addItemToList('tent');
alex.addItemToList('backpack');
alex.addItemToList('map');
alex.addItemToList('slingshot');

var eve = new Shopper('Eve Porcello');
eve.addItemToList('camping knife');
eve.addItemToList('tent');
eve.addItemToList('backpack');
eve.addItemToList('map');
eve.addItemToList('reading light');
```

 Both of these shoppers actually have essentially the same list, so the process of setting up each shopper requires that we duplicate the same code. Both Eve and Alex have a camping knife, a tent, a backpack and a map. So what we can do is we can save time and reduce redundancy by implementing the prototype pattern. 

 To do so, we will create a new file called `scout_prototype.js` and add the common information to it. Then we will use that to create the objects using the `clone()` method to get an exact copy of the scout_prototype in its current state.