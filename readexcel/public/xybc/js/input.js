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

    //控制我的信息or他人的信息页
    $(".submit").click(function(){
        page++;
        if(page==1){otherInfoPage();}else if(page==2){window.location.assign("usertest.html")}else{myInfoPage();}
    });

    //提示框
    $(".xyMask").css("display","block").click(function(){
        $(this).css("display","none");
        $(".connectTip").css("display","none");
    });
    $(".closeTip").click(function(){
        $(".xyMask").css("display","none");
        $(".connectTip").css("display","none");
    });

    //地区滑轮插件
    var opt = {
    };
    opt.tree_list = {
        preset : 'list',
//                    labels: ['Region', 'Country', 'City','Town']
        labels: [' ', ' ', ' ',' ']
    };
    <!--Script-->
    $('select.changes').bind('change', function() {
        var demo = $('#demo').val();
        $(".demos").hide();
        if (!($("#demo_"+demo).length))
            demo = 'default';

        $("#demo_" + demo).show();
        $('#test_'+demo).val('').scroller('destroy').scroller($.extend(opt[$('#demo').val()], { theme: $('#theme').val(), mode: $('#mode').val(), display: $('#display').val(), lang: $('#language').val() }));
    });
    $('#demo').trigger('change');


    //列表点击事件
    $("#ageS").click(function(){
        //$(".myMask").css("display","block");
        $(".ageList").slideToggle("fast");
        $(".areaList,.skinList,.sexList").slideUp("fast");
    });
    $("#areaS").click(function(){
        //$(".myMask").css("display","block");
        $(".areaList").slideToggle("fast");
        $(".ageList,.skinList,.sexList").slideUp("fast");
    });
    $("#skinS").click(function(){
        //$(".myMask").css("display","block");
        $(".skinList").slideToggle("fast");
        $(".ageList,.areaList,.sexList").slideUp("fast");
    });
    $("#sexS").click(function(){
        //$(".myMask").css("display","block");
        $(".sexList").slideToggle("fast");
        $(".ageList,.skinList,.areaList").slideUp("fast");
    });

    //弹出内容li点击事件
    $(".ageList .detailList li").click(function(){
            $(".ageList .detailList li").removeClass("markA");
            $(this).addClass("markA");
            var liCount = $(".markA").length;
            var markAge =  $(".markA").text();

            if(liCount == 1){
                //$(".myMask").css("display","none");
                $(".ageList").slideToggle("fast");
                $("#ageInput").val(markAge);
            }else{
                alert("please select")
            }
    });

    $(".skinList .detailList li").click(function(){
        $(".skinList .detailList li").removeClass("markB");
        $(this).addClass("markB");
        var liCount = $(".markB").length;
        var markSkin =  $(".markB").text();

        if(liCount == 1){
            //$(".myMask").css("display","none");
            $(".skinList").slideToggle("fast");
            $("#skinInput").val(markSkin);
        }else{
            alert("please select")
        }
    });
    $(".sexList .sexdetailList li").click(function(){
        $(".sexList .sexdetailList li").removeClass("markC");
        $(this).addClass("markC");
        var liCount = $(".markC").length;
        var markSex =  $(".markC").text();

        if(liCount == 1){
            //$(".myMask").css("display","none");
            $(".sexList").slideToggle("fast");
            $("#sexInput").val(markSex);
        }else{
            alert("please select")
        }
    });

    //完成按钮点击事件
    $("#areaSelect").click(function(){
        var listNum = $("#test_tree_list_dummy").val();
        var listNumArray = $("#test_tree_list_dummy").val().split(" ");
        var x = listNumArray[0];
        var y = listNumArray[1];

        if( listNum == 0 ){
            $("#areaInput").val("上海市 嘉定区");
            $(".myMask").css("display","none");
            $(".areaList").slideToggle("fast");
        }else{
            var leftArea = $(".cityName p").eq(x).html();
            var rightArea = $(".c" + x + " " + "li").eq(y).html();
            listNum = leftArea + " " + rightArea;
            $(".myMask").css("display","none");
            $(".areaList").slideToggle("fast");
            $("#areaInput").val(listNum);
        }
    });
});

function otherInfoPage(){
    $(".pageName p").css("background-position","0 -410px");
    $("#areaS").css("display","none");
    $(".sjyz-form li").css("margin-top","80px");
    $(".sjyz-form .submit").css("margin-top","173px");
    $(".passThis p").css("display","block");
}
function myInfoPage(){
    $(".pageName p").css("background-position","0 -263px");
    $("#areaS").css("display","block");
    $(".sjyz-form li").css("margin-top","50px");
    $(".sjyz-form .submit").css("margin-top","137px");
    $(".passThis p").css("display","none");
}