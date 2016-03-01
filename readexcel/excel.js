/**
 * Created by noah.r on 16/3/1.
 */
var Excel = require("exceljs");
var workbook = new Excel.Workbook();
workbook.xlsx.readFile("detaillist-s.xlsx").then(function(){
    console.log(workbook);
});

//var workbook = new Excel.Workbook();
