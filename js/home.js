;$(function(){
    $("#backtop").click(function(){
      $("html,body").animate(
        {scrollTop:0},500);
    });
    $('#backtop').fadeOut(1);
    $(window).scroll(function(){
    	
    	var clientH=$(window).height();
	    var scrollTop=$(window).scrollTop();
		if (scrollTop>clientH) {
	        $('#backtop').fadeIn();
	    }else{
	    	$('#backtop').fadeOut();
	    }
    })
});
window.onload=function(){
	waterFall('waterfall','waterfall_box');
}


function waterFall(parent,box){
	var oParent=document.getElementById(parent);
	var oBoxs=oParent.getElementsByClassName(box);
	var oBoxW=oBoxs[0].offsetWidth;
	var loadTag=document.getElementById('loading');
	var wholeWidth=document.getElementById('container').offsetWidth;
	var cols=Math.floor(wholeWidth/oBoxW);
	var hArr=[];
	for (var i = 0; i < oBoxs.length; i++) {
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxW*index+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	};
	oParent.style.height=hArr[index]+'px';
	loadTag.style.marginLeft=(((cols-1)*oBoxW+280)/2-17)+'px';

}
function getMinhIndex(arr,val){
	for(var i in arr){
		if (arr[i]==val) {
			return i;
		}
	}
}
