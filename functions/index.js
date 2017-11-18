'use strict';

const DialogflowApp = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

const tellColor = app => {
    return app.tell('blue');
};

const actionMap = new Map();
actionMap.set('color.favorite', tellColor);

const colorPicker = functions.https.onRequest((request, response) => {
    const app = new DialogflowApp({ request, response });
    app.handleRequest(actionMap);
});

module.exports = {
    colorPicker
};

