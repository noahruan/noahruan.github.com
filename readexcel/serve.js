/**
 * Created by noah.r on 16/2/23.
 */
var express = require("express");
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080,function(){
    console.log("Serve start!");
});

//module.exports = app;