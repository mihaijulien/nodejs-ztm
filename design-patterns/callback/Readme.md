## Callback pattern

A callback is a block of instruction wrapped in a function to be called when an asynchronous call has completed.

Synchronous code:
```js
// direct style
function hideString(str) {
    return str.replace(/[a-zA-Z]/g, 'X');
}

var hidden = hideString("Hello World");

console.log( hidden );

console.log('end');
```

Output:

```
XXXXX XXXXX
end
```

Refactoring the code to return the value from `hideString` function using another function:
```js
// continuation passing style
function hideString(str, done) {
   done(str.replace(/[a-zA-Z]/g, 'X'));
}

hideString("Hello World", (hidden) => {
    console.log(hidden);
});

console.log('end');
```
Refactoring the code to  work asynchronously:
```js
// Invokink process.nextTick() tells Node.js to run the function that we send to nextTick on the next loop
function hideString(str, done) {
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    });
}

hideString("Hello World", (hidden) => {
    console.log(hidden);
});

console.log('end');
```

Output:

```
end
XXXXX XXXXX
```
The code is executed and then we're passing the results back in the next tick.

Another way to introduce asynchronicity:

```js
function delay(seconds, callckack){
    setTimeout(callback, seconds * 1000);
}

consolge.log('starting delays');

delay(2, () => {
    console.log('two seconds');
});

```