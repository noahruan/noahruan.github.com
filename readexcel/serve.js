/**
 * Created by noah.r on 16/2/23.
 */
var express = require("express");
var Excel = require('./excel');
    app = express();
    cvsexcel = new Excel();


//本地共享文件夹
//app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){

    res.send(cvsexcel.getData());
});

var server = app.listen(8080,function(){
    console.log("Serve start!");
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例,访问地址为http://%s:%s",host,port)
});

//var excelcsv = new excel();
