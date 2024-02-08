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

