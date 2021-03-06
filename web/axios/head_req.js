const axios = require('axios');

async function makeHeadRequest() {

  let res = await axios.head('http://webcode.me');

  console.log(`Status: ${res.status}`);
  console.log(`Server: ${res.headers.server}`);
  console.log(`Date: ${res.headers.date}`);
}

makeHeadRequest();

/*
Status: 200
Server: nginx/1.6.2
Date: Wed, 30 Mar 2022 07:22:16 GMT
*/
