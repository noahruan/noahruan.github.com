/**
 * Created by Administrator on 2016/1/12.
 */
var cH = document.documentElement.clientHeight;
var vH = 1334;

var username = "昵称";
var signNum = 0; //选择签

var x = -160;
var y = -523;
var sign = [
    {word:"0 0",text:"0 0"}, //穷
    {word: x + "px 0",text:"0 "+ y +"px"}, //涨
    {word: x*2 + "px 0",text:"0 "+ y*2 +"px"}, //买
    {word: x*3 + "px 0",text:"0 "+ y*3 +"px"}, //家
    {word: x*4 + "px 0",text:"0 "+ y*4 +"px"}, //念
    {word: x*5 + "px 0",text:"0 "+ y*5 +"px"}, //火
    {word: x*6 + "px 0",text:"0 "+ y*6 +"px"}, //作
    {word: x*7 + "px 0",text:"0 "+ y*7 +"px"}, //美
    {word: x*8 + "px 0",text:"0 "+ y*8 +"px"}, //喜
    {word: x*9 + "px 0",text:"0 "+ y*9 +"px"}, //简
    {word: x*10 + "px 0",text:"0 "+ y*10 +"px"}, //顺
    {word: x*11 + "px 0",text:"0 "+ y*11 +"px"}, //躁
    {word: x*12 + "px 0",text:"0 "+ y*12 +"px"}, //瘦
    {word: x*13 + "px 0",text:"0 "+ y*13 +"px"}, //赢
    {word: x*14 + "px 0",text:"0 "+ y*14 +"px"}, //撕
    {word: x*15 + "px 0",text:"0 "+ y*15 +"px"}, //爱
    {word: x*16 + "px 0",text:"0 "+ y*16 +"px"}, //壕
    {word: x*17 + "px 0",text:"0 "+ y*17 +"px"}, //断
    {word: x*18 + "px 0",text:"0 "+ y*18 +"px"}, //逆
    {word: x*19 + "px 0",text:"0 "+ y*19 +"px"} //路
];
$(function () {
    $(".inviteB a").click(function(){
        $(".mask").css("display","block");
        $(".share").css("display","block");
    });
    $(".mask").click(function(){
        $(".mask").css("display","none");
        $(".share").css("display","none");
    });
    $(".username p").html(username);

    //            写入result.html签
    $(".topFrame p").css("background-position",sign[signNum].word);
    $(".detailText p").css("background-position",sign[signNum].text);

    //             写入trans.html签

});

function move(){
    $(".midFrame p").css("background-position",x + "px 0");
    if(x<=-3120){
        x=0;
    }else{
        x=x-20;
    }
}
function generateWord(){
    signNum = Math.floor((Math.random()*20)+1);
    if(signNum<0||signNum>=20){
        signNum = 0;
    }
    $(".midFrame p").css("background-position",sign[signNum].word);
    window.location.assign("result.html");
}