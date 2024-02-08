## The tool which runs multiple cli commands

We can use node's built-in `process.argv` property to handle them.

```javascript
console.log(process.argv);
```

If we now run our tool, we'll see a similar output. process.argv returns an array, where the first member of the array is the node executable, the second is the name of the executed file, and the third and onward are the arguments we passed the script.

```shell
cli-tool/testProject$ tool --start

[

  '/Users/user/.nvm/versions/node/v12.16.1/bin/node',

  '/Users/user/tool-tutorial/tool/bin/index.js',

  '--start'

]
```

Using **arg** library:

**arg** receives a configuration object which states which arguments it can receive and their type. Types can be booleans, strings, numbers, arrays, and counters. In our case, we'll use a boolean because we want to know whether the user passed the flag or not.
```javascript
console.log(args);
```

```shell
cli-tool/testProject$ tool --start

{ _: [], '--start': true }
```

### Developer Experience

Such as UX is a loading-bearing column in visual applications, Developer Experience, or DX for short, is one when creating tools for developers.
DX has many manifestations such as delightfulness when using the tool, better error messages, less guessing, good docs, and snappiness. In the end, DX boils down to **maximizing value** and **minimizing wasted time**.

In our tool project, install the **chalk** package(npm i chalk). chalk lets us add colors to our console.log statements which will help make our output clearer.
