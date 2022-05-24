## Object Creational: Singleton

**Intent**: "Ensure a class only has one instance, and provide a global point of access to it."

```js
class Singleton {

    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger();
        }
    }

    getInstance(){
        return Singleton.instance;
    }
}
```

And then use the same instance anywhere:
`var logger = new Logger().getInstance();`

But the easier way to do it, in Node.js, is to just export the instance.

```js
module.exports = new Logger();
```

 The idea here is that when we run this file it will run once, create the new instance of the logger, and save it in the cache. That means that Node JS will automatically handle exporting the same instance of the logger to every other module that wants to consume it. 