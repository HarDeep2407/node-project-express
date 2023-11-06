const express = require('express');

app.get('/', function(req, res){
    res.send("hello world!");
    console.log("hello world!");
})
console.log("hello world! 2");
app.listen(8080);
