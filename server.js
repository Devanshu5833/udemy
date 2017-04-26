var express = require('express');
var app = express();
var path = require('path');
var webpackmiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackconfig = require('./webpack.config.js');

app.use(express.static(__dirname));

app.use(webpackmiddleware(webpack(webpackconfig)));

app.use('*',function(req,res){
	res.redirect('index.html');
})

app.listen(8090,function(err){
	if(!err){
		console.log("server started successfully");
	}
})
