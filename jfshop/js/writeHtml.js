/**
 * Created by ASUS on 2015/12/19.
 */

var addList = "<div></div>";

$(function () {
    writeDetail();
    writeCss();
    //test();
});

function writeDetail(){
    for(var i=0;i<user.add.length;i++){
        addList +=  '<li class="addressList">'+
            '<p class="spaceTop"><span class="name" id="name'+i+'"></span><span class="tel" id="tel'+i+'"></span></p>' +
            '<p class="addDetail" id="add' + i + '"></p>' + '<span class="defaultAdd"></span>'+
            '<div class="btn-m&d">'+
            '<div class="btn-delete"></div>'+
            '<div class="btn-modify"></div>'+
            '<div class="btn-default"></div>'+
            '</div></li>';
        $(".addUl").html(addList);
    }
}

function writeCss(){
    for(var i=0;i<user.add.length;i++){
        $("#name" + i).html(user.name[i]);
        $("#tel" + i).html(user.tel[i]);
        $("#add" + i).html(user.add[i]);
    }
}
//var carList
//function test(){
//    console.log(carList);
//
//    carList = 'nihao';
//    console.log(carList);
//
//    carList +=2;
//    console.log(carList);
//
//    foo('nima');
//    console.log(carList);
//}
//
//function foo(e){
//    carList = e;
//}