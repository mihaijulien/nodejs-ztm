const express = require('express');
const {
  createLightship
} = require( 'lightship');

async function main(){

  const lightship = await createLightship();
  const port = 8000;
  
  lightship.queueBlockingTask(new Promise((resolve) => {
    setTimeout(() => {
      // Lightship service status will be `SERVER_IS_NOT_READY` until all promises
      // submitted to `queueBlockingTask` are resolved.
      resolve();
    }, 1000);
  }));
  
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  const startServer = app.listen(port, () => {
    // All signals will be queued until after all blocking tasks are resolved.
    lightship.signalReady();
    console.log(`Server listening on ${port}`);
  });
}

main();