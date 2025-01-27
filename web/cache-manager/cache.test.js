'use strict';

const { cache } = require('./index');

describe('Cache test', () => {

    let memoryCache;

    beforeAll( async() => {
        memoryCache = await cache;
    });

    test('Should set a value in the cache and get it afterwards', async () =>{
        const key = 'test-key';
        const value = 'test-value';
        await memoryCache.set(key, value);
        const cachedValue = await memoryCache.get(key);

        expect(cachedValue).toBe(value);
    });
});