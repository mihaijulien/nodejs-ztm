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