/**
 * Created by Administrator on 2016/1/29.
 */
    //写入页面数据

$(function(){
    writeAcdList();
});
var acdHtml = "";
function writeAcdList(){
    for(var i=0;i<listArray.uTime.length;i++){
        acdHtml += '<div class="single-l center">'+
            '<div class="time-value">'+
            '<p class="t-v-time"> ' + listArray.uTime[i] + '</p>'+
            '<p class="t-v-value"><span class="tvv-n">'+listArray.acdState[i]+'</span><span class="tvv-v">'+listArray.stateValue[i]+'</span></p>'+
            '</div>'+
            '<img src="'+ listArray.acdImg[i] + '">'+
            '<p class="list-text">' + listArray.listText[i]+ '</p>' +
            '</div>'
    }
    $(".acdlist").html(acdHtml);
}
