`docker-compose up`

`npm run dev`

**POST**:
http://localhost:8080/login
```js
{
    "username" : "username",
    "password": "password"
}
```

**GET**:
http://localhost:8080/profile
```js
{
    "cookie": {
        "originalMaxAge": 1800000,
        "expires": "2022-08-09T20:26:14.806Z",
        "secure": false,
        "httpOnly": true,
        "path": "/"
    },
    "clientId": "abc123",
    "myNum": 5
}
```