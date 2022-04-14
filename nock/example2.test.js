'use strict';

const nock = require('nock');
const service = require('./example2');

const base_path = 'http://localhost:9000';

describe('Test', () => {
    it('should run get example', async () => {
        const response = [];
        nock(base_path, {
            reqheaders: {'accept': 'application/json'}})
            .get('/api/v1/id=1')
            .reply(200, response);
        service.getExample(1, {})
            .then((result) => {
                expect(result.length).toEqual(0);
            });
    });
    it('should return the error attached', async () => {
        const response = {
            error: 'err'
        }
        nock(base_path, {
            reqheaders: {'accept': 'application/json'}})
            .get('/api/v1/id=1')
            .replyWithError(response);
        service.getExample(1, {})
            .catch((error) => {
                expect(error.error).toEqual('err');
            });
    });

    it('should run the post example', async () => {
        const response = [];
        nock(base_path, {
            reqheaders: {'accept': 'application/json'}})
            .post('/api/v1/example')
            .reply(201, response);
        const requestBody = {
            id: 1,
            msg: 'test'
        }
        service.postExample(requestBody, {})
            .then((result) => {
                expect(result.length).toEqual(0);
            });
    });
});