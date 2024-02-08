We want to test our tool in the test project we created earlier. For that, we'll need to install our tool package in the testProject directory.We'll use npm link to simulate an installation.

```bash
cd ../testProject
npm link tool
```

    When you run npm link in a module’s root directory, npm creates a symbolic link from your “global node_modules” directory to the local module’s directory.
    The “global node_modules” directory is a special directory where all modules installed with npm install -g are stored. You can find the path to your global node_modules directory by running npm root -g.

    When you run npm link <module_name> in a project’s directory, npm creates a symbolic link from ./node_modules/<module_name> to <global_node_modules>/<module_name>.

If we look in the node_modules/.bin directory of the testProject, we can see that the installation created a new file called tool, which points, using a symlink, to the entry point script we created earlier.