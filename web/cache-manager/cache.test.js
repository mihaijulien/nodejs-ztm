'use strict';

const { cache } = require('./index');

describe('Cache test', () => {
    test('Should set a value in the cache and get it afterwards', async () =>{
        const key = 'test-key';
        const value = 'test-value';
        await cache.set(key, value);
        const cachedValue = await cache.get(key);

        expect(cachedValue).toBe(value);
    });
});