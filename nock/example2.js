'use strict'

const request = require('postman-request');

const base_path = 'http://localhost:9000';

function getExample(id, headers) {
    return new Promise((resolve, reject) => {
        request.get({
            url: `${base_path}/api/v1/id=${id}`,
            json: true,
            headers: headers
        }, (err, response) => {
            if(err) {
                reject(err);
            } else {
                if(response.statusCode === 200) {
                    resolve(response.body);
                } else {
                    reject(response.body);
                }
            }
        });
    });
}

function postExample(body, headers){
    return new Promise((resolve, reject) => {
        request.post({
            url: `${base_path}/api/v1/example`,
            body: body,
            headers: headers,
            json: true
        }, (err, response) => {
            if(err) {
                reject(err);
            } else {
                if(response.statusCode === 200) {
                    resolve(response.body);
                } else {
                    reject(response.body);
                }
            }
        });
    });
}

module.exports = {
    getExample,
    postExample
}
