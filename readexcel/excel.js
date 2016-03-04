/**
 * Created by noah.r on 16/3/1.
 */
var csv = require("fast-csv");


function Excel(){
    var csvStream="";
    this.getData = function(){
        csv.fromPath("detaillist.csv",{headers:true,ignoreEmpty:true})
            //.transform(function(obj){
            //    return{
            //        date:obj.Date,
            //        divition:obj.Division,
            //        supplier:obj.Supplier,
            //        name:obj.Name,
            //        unit:obj.Unit,
            //        number:obj.Number,
            //        uprice:obj.UnitPrice,
            //        tprice:obj.TotalPrice
            //    }
            //})
            .on("data",function(data){
                var num2 = parseFloat(data.Number) + 2;
                console.log(data);
                //console.log(num2);
                csvStream += parseJSON(data);
            })
            .on("end", function() {
                console.log("done");
            });
        return csvStream;
    };
}
module.exports = Excel;