/**
 * Created by Administrator on 2016/1/9.
 */

var cW = document.documentElement.clientWidth;

$(function () {
    var skinV = 7.8;
    var skinrunV = skinV*10;
    var usingTime = "00: 18: 05";
    var waterValue = 28.8;
    var testTimes = 9;
    var testProductTit = "Innisfree悦诗风吟绿茶保湿泡沫洗面奶150mlInnisfree悦诗风吟绿茶保湿泡沫洗面奶150mlInnisfree悦诗风吟绿茶保湿泡沫洗面奶150ml";
    var introText = "1982年进入无线电视（TVB）艺员训练班就读。1987年，他参演无线剧集《生命之旅》扮一名叫杜朗贤的奸角成名。1997年，凭借电影《旺角揸Fit人》获得第3届香港电影评论学会奖最佳男演员奖。1998年，他执导了自己的第一部作品《9413》。2000年凭借电影《枪火》获得第37届台湾电影金马奖最佳男主角奖；同年凭借电影《爆裂刑警》获得第6届香港电影评论学会奖最佳男演员奖。2001年凭借电影《公元2000》获得第20届香港电影金像奖最佳男配角奖以及第7届香港电影评论学会奖最佳男演员奖。"

    $("#usingTime").html(usingTime);
    $(".wNV").html(waterValue);
    $(".wNT").html(testTimes);
    $(".testProduct").html(testProductTit);
    $(".bodyText p").html(introText);
    $(".icText").attr("data-attr",skinV);

    //进度条控制
    $('#indicatorContainer').radialIndicator({
        barWidth: 2,
        initValue: skinrunV,
        fontFamily:"Trebuchet MS",
        format: function (value) {
            return skinV;
        }
    });
    $('#indicatorContainer canvas').width(410).height(410);

    $(".esCountT").width($(".ctText").width() + $("#usingTime").width()+12);
    $(".waterCount").width((cW - $(".midPart").width())*0.5);
    $(".testTimes").width((cW - $(".midPart").width())*0.5);
});

//写入测试数据表格
var app = angular.module('effectSharePage', []);
app.controller('controlESP', function($scope) {

    $scope.resultTab = [
        {usingtime:'00:00:00',testvalue:'30%',teststate:'基础值'},
        {usingtime:'00:02:00',testvalue:'30%',teststate:'补水'},
        {usingtime:'00:10:00',testvalue:'30%',teststate:'补水'},
        {usingtime:'00:18:00',testvalue:'30%',teststate:'补水'}
    ];
});