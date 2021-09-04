const functions = require("firebase-functions");

const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()

app.all('/*', basicAuth(function(user, password) {
  return user === 'sepal' && password === 'sepaltest';
}));

app.use(express.static(__dirname + '/public/'))

exports.app = functions.https.onRequest(app)
