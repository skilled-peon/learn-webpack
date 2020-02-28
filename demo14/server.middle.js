const express = require('express');
const webpack = require('webpack')
const middle = require('webpack-dev-middleware')

const app = express();
const config = require('./webpack.config.js');

const compiler = webpack(config);

app.use(middle(compiler));

app.get('/user', (req, res)=> {
    res.json({name: 'Hello World'})
})

app.listen(3000);