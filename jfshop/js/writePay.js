/**
 * Created by ASUS on 2015/12/19.
 */

var sCartList =  $(".cListUl").html();
    sCartList = "<div></div>";

var sAddList =  $(".addRPartSList").html();
    sAddList = "<div></div>";

$(function () {
    writeAdd();
    writeDetail();
    writeAddSList();
    writePro();
});

function writeAdd(){
        addList ='<p class="spaceTop">'+
            '<span class="addName">'+selectedAdd.name[0]+'</span>'+
            '<span class="addTel">'+selectedAdd.tel[0]+'</span></p>'+
            '<p class="addD">'+selectedAdd.add[0]+'</p>';
        $(".addRPart").html(addList);
}

function writeAddSList(){
    for(var i=0;i<selectedAdd.add.length;i++){
        sAddList +=  '<li><p class="spaceTop">'+
            '<span class="addName">'+selectedAdd.name[i]+'</span>'+
            '<span class="addTel">'+selectedAdd.tel[i]+'</span></p>'+
            '<p class="addD">'+selectedAdd.add[i]+'</p></li>';
        $(".addRPartSList").html(sAddList);
    }
}


function writeDetail(){
    for(var i=0;i<cartArray.pName.length;i++){
        sCartList +=
            '<li id="cList'+i+'">'+
            '<div class="cartDetail"><div class="cartText"><div class="selectedPro"></div><div class="cDLeft">'+
            '<div class="cartProTit"><h3><b>'+cartArray.pName[i]+'</b></h3></div>'+
             '<div class="selectedProPrice"><span class="presentSign"></span>'+
             '<span class="presentPrice">'+cartArray.pPriceNow[i]+'</span>'+
             '<span class="usedSign"></span>'+
              '<span class="usedPrice">'+cartArray.pPriceOriginal[i]+'</span>'+
              '<div class="lab-send"></div><span class="pCountNum">x'+cartArray.pCount[i]+'</span></div></div></div></div></li>';

        $(".cListUl").html(sCartList);
    }
}

function writePro(){
    for(var i=0;i<cartArray.pName.length;i++){
        $("#cList" +i+" .selectedPro").css("background",cartArray.proImg[i]);
    }
}