'use strict';

const { caching } = require('cache-manager');
const express = require('express');

const app = express();
const port = 3000;

let cache;

(async () => {

  // Single store with memory cache
  cache = await caching('memory', {
    max: 100, // Max number of items in the cache
    ttl: 10 * 1000, // Time-to-live (TTL) 1 minute
  });

  app.get('/test', (req, res) => {
    res.send('test endpoint');
  });

  app.get('/cached-test', async (req, res) => {
    const key = 'cached-test-endpoint';

    try {
      const cachedValue = await cache.get(key);

      if (cachedValue) {
        // get the keys that were set in the cache
        console.log(await cache.store.keys());
        return res.send(`From cache: ${cachedValue}`);
      } else {
        const value = 'cached-test endpoint';
        await cache.set(key, value);
        await cache.set('key2', 'julien');
        return res.send(`New request`);
      }
    } catch (err) {
      return res.status(500).send('Error fetching from cache');
    }
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();

module.exports = {
  cache
};