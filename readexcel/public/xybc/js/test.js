/**
 * Created by Administrator on 2016/1/14.
 */
var page = 0;
//userinput.html
$(function () {
    //判断控制窗口高度
    var cheight = document.documentElement.clientHeight;
    if(cheight>1206){
        $(".layout").height(cheight);
        $(".myInfoP").addClass("toBottom");
    }


    //提示框
    //$(".xyMask").css("display","block").click(function(){
    //    $(this).css("display","none");
    //    $(".connectTip").css("display","none");
    //});
    //$(".closeTip").click(function(){
    //    $(".xyMask").css("display","none");
    //    $(".connectTip").css("display","none");
    //});

});
