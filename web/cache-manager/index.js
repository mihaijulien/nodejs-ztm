'use strict';

const { createCache } = require('cache-manager');
const express = require('express');

// Single store with memory cache
const cache = createCache({
  ttl: 60000,  // Time-to-live (TTL) 1 minute
  max: 100     // Max number of items in the cache
});

const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send('test endpoint');
});

app.get('/cached-test', async (req, res) => {
  const key = 'cached-test-endpoint';

  try {
    const cachedValue = await cache.get(key);

    if (cachedValue) {
      return res.send(`From cache: ${cachedValue}`);
    } else {
      const value = 'cached-test endpoint';
      await cache.set(key, value);
      return res.send(`New request`);
    }
  } catch (err) {
    return res.status(500).send('Error fetching from cache');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {
  cache
};