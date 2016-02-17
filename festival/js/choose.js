/**
 * Created by Administrator on 2016/1/27.
 */
var num = [
    {"name":"bb","value":110,"select":true},
    {"name":"sh","value":120,"select":false},
    {"name":"di","value":0,"select":false},
    {"name":"arc","value":13450,"select":false},
    {"name":"arr","value":654440,"select":false},
    {"name":"arh","value":0,"select":false}
];

$(function() {
//                写入数量及判断选定
    writeNum();
});

function writeNum(){
    $(".want").removeClass("hide");
    $(".empdiv").addClass("hide");


    for(var i=0;i<num.length;i++){
        $("."+ num[i].name).removeClass("selected");
        //判断是否有数量
        if(num[i].value == 0){
            $("."+ num[i].name +" .pro-info").addClass("empty");
            $("."+ num[i].name +" .want").addClass("hide");
            $("."+ num[i].name +" .empdiv").removeClass("hide");
            $("."+ num[i].name).addClass("m29");
        }else{
            $("."+ num[i].name).removeClass("m29");
            $("."+ num[i].name +" .leftNum").html(num[i].value);
        }

//                    判断是否选定
        if(num[i].select == true){
            $("."+ num[i].name).addClass("selected");
        }
    }
}