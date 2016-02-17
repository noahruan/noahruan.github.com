/**
 * Created by Administrator on 2016/1/27.
 */
var x = -47;
//定义数字样式
var money = [
    {word:"0 0"},             //1
    {word: "0 " + x + "px"},  //2
    {word: "0 "+ x*2 + "px"}, //3
    {word: "0 " +x*3 + "px"}, //4
    {word: "0 " +x*4 + "px"}, //5
    {word: "0 " +x*5 + "px"}, //6
    {word: "0 " +x*6 + "px"}, //7
    {word: "0 " +x*7 + "px"}, //8
    {word: "0 " +x*8 + "px"}, //9
    {word: "0 " +x*9 + "px"}  //0
];


$(function () {
    $(".try").click(function(){
        //启动数字转动
        turnNum(".try");
        //改变按钮文本及属性
        changebtn1(".try");
    });

    $(".try-again").click(function(){
        if( $(".try-again").attr("data-enable")==1){
            //启动数字转动
            turnNum(".try-again");
            //改变按钮文本及属性
            changebtn2();
        }else{
            return false;
        }
    });

    //分享层点击事件
    $(".mask,.share,.btn-close").click(function(){
        $(".mask,.share,.div-pro").addClass("hide")
    });

    //若只有一张图片，隐藏左右按钮
    countimg();

    //判断商品数量是否为零
    countpro();
});

var dothtml = '<p class="dotpager">';
function countimg(){
    if($(".cycle-slideshow img").length==1){
        $("#prev,#next").addClass("hide");
        $("#no-template-pager").addClass("hide");
    }else if($(".cycle-slideshow img").length>1){
        $("#prev,#next").removeClass("hide");
        $("#no-template-pager").removeClass("hide");

        for(var i= 0;i<$(".cycle-slideshow img").length-1;i++){
            dothtml += '<p class="dotpager">';
        }
        $("#no-template-pager").html(dothtml);
    }
}

function countpro(){
    if(produnt <= 0){
        $(".try,.try-again").addClass("hide");
        $(".try-empty,.tip-empty").removeClass("hide");
    }else if(produnt>0){
        $(".try").removeClass("hide");
        $(".try-empty,.tip-empty").addClass("hide");
    }
}

function changebtn1(){
    $(".try").attr("data-n",1);
    setTimeout(function(){
        $(".try").html("去使用");
        $(".try-again").attr("data-enable",1);
    },3000)
}
function changebtn2(){
    $(".try-again").attr("data-n",1);
    setTimeout(function(){
        $(".try-again").html("再试一次");
    },3000)
}

function turnNum(btn){
    if($(btn).attr("data-n") == 1){
        //如果按钮变为去使用，设置跳转页面
        //或者直接去分享
        //判断
        return true;
    }else{
        startN("c01");
        setTimeout(function () {
            startN("c1");
        },200);
        setTimeout(function(){
            startN("c10");
        },400);
        setTimeout(function(){
            startN("c100");
        },600);
    }
}

function startN(nump){
    var changeNum = setInterval(function(){move(nump);},1);
    var transR = setTimeout(function(){
        clearInterval(changeNum);
        generateWord(nump);
        clearTimeout(transR);
    },3000);
}

function move(nump){
    $("#" + nump + " p").css("background-position","0 " + x + "px");
    if(x<=-460){
        x=0;
    }else{
        x=x-2;
    }
}
var afterdot = num[4];
var singled = num[2];
var ten = num[1];
var hundred = num[0];

function generateWord(nump){

    if($("#" + nump + " p").attr("data-place") == 100){
        $("#" + nump + " p").css("background-position",money[hundred-1].word);
    }
    else if($("#" + nump + " p").attr("data-place")==10){
        $("#" + nump + " p").css("background-position",money[ten-1].word);
    }
    else if($("#" + nump + " p").attr("data-place")==1){
        $("#" + nump + " p").css("background-position",money[singled-1].word);
    }
    else if($("#" + nump + " p").attr("data-place")==0){
        $("#" + nump + " p").css("background-position",money[afterdot-1].word);
    }
    else{alert("error")}
}