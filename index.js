const express = require('express');

app.get('/', function(req, res){
    res.send("hello world!");
    console.log("hello world!");
})

app.listen(8080);
