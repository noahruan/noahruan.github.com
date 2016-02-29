/**
 * Created by noah.r on 16/2/26.
 */
$(function(){
    $(".am_layout").height(document.documentElement.clientHeight);

//        跳转
    $(".bank_info").click(function(){
        window.location.assign("addbank.html")
    });
    $(".tip_confirm").click(function(){
        window.location.assign("addbank.html");
    });

//        隐藏弹窗
    $(".mask,.tip-close,.tip_confirm").click(function(){
        $(".mask").addClass("hide");
        $(".bank_tip").addClass("hide");
    });

//            根据是否有银行改变提现按钮样式
    //                输入框文本聚焦消失
    $("#costInput").focus(function(){
        var txt=$(this).val();
        var value="";
        if(txt==this.defaultValue){
            $(this).val("");
        }
    }).blur(function(){
        value=this.defaultValue;
        if($(this).val()==""){
            $(this).val(value);
            $(".bank_btn").addClass("nocard").attr("disabled");
        }else{
            $(".bank_btn").removeClass("nocard").removeAttr("disabled");
        }
    });

});