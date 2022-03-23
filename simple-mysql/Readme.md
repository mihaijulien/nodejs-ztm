### Troubleshoot

If you get the following error when starting the app:

```sh
  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
```

Execute the following query in MYSQL Workbench:

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`

Where **root** as your user **localhost** as your URL and **password** as your password