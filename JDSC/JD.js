//JavaScript Document
$(function() {
	//top部分
	$('#send-to-city').mouseover(function(){
		$('#top-null').css('background','white').css('top', 26);
		$('#top-city').css('display','block');
});
	$('#send-to-city').mouseout(function() {
	$('#top-null').css('background','#f1f1f1').css('top', 24);
		$('#top-city').css('display','none');
});
	$('#myjd').mouseover(function() {
	$('#myjd3').css('background','white').css('top', -195);
		$('#myjd2').css('display', 'block');
});
	$('#myjd').mouseout(function() {
	$('#myjd3').css('background','#f1f1f1').css('top', -6);
		$('#myjd2').css('display', 'none');
});
	$('#appjd').mouseover(function() {
	$('#appjd3').css('background','white').css('top', -201);
		$('#appjd2').css('display', 'block');
});
	$('#appjd').mouseout(function() {
	$('#appjd3').css('background','#f1f1f1').css('top', -6);
		$('#appjd2').css('display', 'none');
});
	$('#aboutjd').mouseover(function() {
	$('#aboutjd3').css('background','white').css('top', -111);
		$('#aboutjd2').css('display', 'block');
});
	$('#aboutjd').mouseout(function() {
	$('#aboutjd3').css('background','#f1f1f1').css('top', -6);
		$('#aboutjd2').css('display', 'none');
});
	$('#serv').mouseover(function() {
	$('#serv3').css('background','white').css('top', -170);
		$('#serv2').css('display', 'block');
});
	$('#serv').mouseout(function() {
	$('#serv3').css('background','#f1f1f1').css('top', -6);
		$('#serv2').css('display', 'none');
});
	$('#nav').mouseover(function() {
	$('#nav3').css('background','white').css('top', -191);
		$('#nav2').css('display', 'block').css('left', -1129);
});
	$('#nav').mouseout(function() {
	$('#nav3').css('background','#f1f1f1').css('top', -6);
		$('#nav2').css('display', 'none');
});
	//search部分
	$('#search-car').mouseover(function() {
	$('#search-car3').css('background','white').css('display', 'block').css('top', -75);
		$('#search-car2').css('display', 'block').css('left', -170);
		$('#search-car .search-ico').attr("style","background:url('imges/jd-car2.png') no-repeat left;");
		$('#search-car .search-smail').attr("style","background:url('imges/search-smail2.png') no-repeat left;");
});
	$('#search-car').mouseout(function() {
	$('#search-car3').css('display', 'none');
		$('#search-car2').css('display', 'none');
		$('#search-car .search-ico').attr("style","background:url('imges/jd-car.png') no-repeat left;");
		$('#search-car .search-smail').attr("style","background:url('imges/search-smail.png') no-repeat left;");
});
	//goodsnav部分
	//product部分
	//--左边导航栏
	function productleft() {
	var productoUl = document.getElementById('product-ul1');
	var productaLi	= productoUl.getElementsByTagName('li');
	var porductoDiv = document.getElementById('product-left-infos-top1');
	var oUlinfo = document.getElementById('product-left-infos');
	var aLiinfo = $(oUlinfo).children('li');
	var porductinfoaA = porductoDiv.getElementsByTagName('a');
		
		for(var i=0; i<aLiinfo.length; i++){
			$(aLiinfo[i]).attr('class', 'product-left-infos-none');
}

for(var i=0; i<productaLi.length;i++) {
	productaLi[i].index = i;
			$(productaLi[i]).mouseover(function(){
				$(oUlinfo).css('display','block');
				for(var i=0; i<aLiinfo.length; i++){
					$(aLiinfo[i]).attr('class', 'product-left-infos-none');
}
				$(aLiinfo[this.index]).attr('class', '')
				$(this).find('div').css('display', 'block');
});
			$(productaLi[i]).mouseout(function() {
$(this).find('div').css('display', 'none');
					for(var i=0; i<aLiinfo.length; i++){
						$(oUlinfo).css('display','none');
						$(aLiinfo[i]).attr('class', 'product-left-infos-none');
}
			});
			$(aLiinfo[i]).mouseover(function() {
$(oUlinfo).css('display','block');
				for(var i=0; i<aLiinfo.length; i++){
					$(aLiinfo[i]).attr('class', 'product-left-infos-none');
}
				$(this).attr('class', '')
				$(this).find('div').css('display', 'block');
});
			$(aLiinfo[i]).mouseout(function() {
$(oUlinfo).css('display','none');
});
			
			
		}
		//---------------------------------------------------------------
		for(var i=0; i<porductinfoaA.length; i++) {
porductinfoaA[i].index = i;
			$(porductinfoaA[i]).mouseover(function(){
				$(this).find('span').attr('style', 'background:#b1191a;');
});
			$(porductinfoaA[i]).mouseout(function() {
$(this).find('span').attr('style', 'background:#5c5251;');
});
		}

for(var i=0; i<productaLi.length; i++) {
productaLi[i].index = i;
			$(productaLi[i]).mouseover(function(){
				var productaA = productaLi[this.index].getElementsByTagName('a');
				$(this).find('span').css('display', 'none');
				for(var j=0; j<productaA.length; j++){
					$(productaA[j]).css('color', '#c81623');
}
			});
			$(productaLi[i]).mouseout(function() {
var productaA = productaLi[this.index].getElementsByTagName('a');
				$(this).find('span').css('display', 'block');
				for(var j=0; j<productaA.length; j++){
					$(productaA[j]).css('color', 'white');
}
			});
		}
	}

productleft();
	//--中间轮播图
	function productImg() {
var oDiv = document.getElementById('product-imgs');
		var aImg = oDiv.getElementsByTagName('img');
		var oOl = document.getElementById('product-ol');
		var aLi = oOl.getElementsByTagName('li');
		var timer = null;
		var iNow = 0;
		
		function fun1(){
			for( var i=0; i<aImg.length; i++){
				aImg[i].index = i;
				aLi[i].index = i;
				startMove(aImg[i], {'opacity': 0
},1000, 'linear', function() {
});
				$(aLi[i]).attr('class','');
}

if(iNow<aImg.length-1) {
iNow++;
}

else {
iNow = 0;
}

startMove(aImg[iNow], {
'opacity'
:100
},1000, 'linear', function() {
})
				$(aLi[iNow]).attr('class','olacitve');
}
		//-----------
		clearInterval(timer);
		timer = setInterval(fun1, 3000);
			for(var i=0; i<aLi.length; i++) {
aLi[i].index = i;
				$(aLi[i]).mouseover(function(){
					clearInterval(timer);
});
				$(aLi[i]).mouseout(function() {
timer = setInterval(fun1, 3000);
});
				$(aLi[i]).mousedown(function() {
for(var i=0; i<aImg.length; i++){
						startMove(aImg[i], {'opacity': 0
},1000, 'linear', function() {
});
						$(aLi[i]).attr('class','');
}

iNow = INOW = this.index;	
					
					startMove(aImg[iNow], {
'opacity'
:100
},1000, 'linear', function() {
})
					$(aLi[iNow]).attr('class','olacitve');
					clearInterval(timer);
});
				
			}
			//-----------
			$(oDiv).mouseover(function() {
clearInterval(timer);
});
			$(oDiv).mouseout(function() {
timer = setInterval(fun1, 3000);
});			
	}

productImg();
	//--右边功能项
	function powerright() {
var oUl = document.getElementById('product-powers-ul');
		var aLi = oUl.getElementsByTagName('li');
		for(i=0; i<aLi.length; i++){
			$(aLi[i]).attr('style', 'background:url(imges/product-power'+(i+1)+'.png) left top no-repeat');
}
		
	}

powerright();
	//adver------------
	function adver() {
var oprev = document.getElementById('adver-imgs-prev');
		var onext = document.getElementById('adver-imgs-next');
		var oUl = document.getElementById('adver-imgs-ul');
		var aLi = oUl.getElementsByTagName('li');
		var oDiv = document.getElementById('active-imgs');
		var width = $(aLi[0]).width();
		var timer = null;
		var iNow = 0;
		
		function adverfun1(){
			iNow++;
			iNow = iNow%5;
			if(iNow){
				startMove(oUl, {'left': -iNow*width
},1000, 'linear', function() {
});
			}

else {
startMove(oUl, {'left': -iNow*width
},1, 'linear', function() {
});
			}
			
		}

clearInterval(timer);
		timer = setInterval(adverfun1,3000);
		//--------------------------------------
		
		
		$(oDiv).mouseover(function() {
clearInterval(timer);
			startMove(oprev, {'opacity': 30
},300, 'linear', function() {
});

startMove(onext, {
'opacity'
:30
},300, 'linear', function() {
});
			$(onext).mousedown(function() {
iNow++;
				iNow = iNow%4;
				startMove(oUl, {'left': -iNow*width
},1000, 'linear', function() {
});
			});
			$(oprev).mousedown(function() {
iNow++;
				iNow = iNow%4;
				if(iNow == 0){
					$(oUl).css('left', 4000);
}

startMove(oUl, {
'left'
:iNow*width
},1000, 'linear', function() {
});
			});
		});
		$(oDiv).mouseout(function() {
timer = setInterval(adverfun1,3000);
			startMove(oprev, {'opacity': 0
},300, 'linear', function() {
});

startMove(onext, {
'opacity'
:0
},300, 'linear', function() {
});
		});
		
	}

adver();
	
	//猜你喜欢部分-----------------
	function love() {
var oSpan = document.getElementById('love-span');
		var oDiv = document.getElementById('love-img');
		var aUl = oDiv.getElementsByTagName('ul');
		var iNow = 0;
		$(oSpan).mousedown(function(){
			for(i=0; i<aUl.length; i++){
				$(aUl[i]).attr('class', '');
}

iNow++;
			iNow = iNow%3;
			$(aUl[iNow]).attr('class', 'love-active');
});
		
	}

love();
	
	//F1部分-----------------
	F('f1-ul1','f1-info-right-ul', 'f1-img2-imgs-active' );
	//F2部分-----------------
	F('f2-ul1','f2-info-right-ul', 'f2-img2-imgs-active');
	//F3部分-----------------
	F('f3-ul1','f3-info-right-ul', 'f3-img2-imgs-active');
	//F4部分-----------------
	F('f4-ul1','f4-info-right-ul', 'f4-img2-imgs-active');
	//F5部分-----------------
	F('f5-ul1','f5-info-right-ul', 'f5-img2-imgs-active');
	//F6部分-----------------
	F('f6-ul1','f6-info-right-ul', 'f6-img2-imgs-active');
	//F7部分-----------------
	F('f7-ul1','f7-info-right-ul', 'f7-img2-imgs-active');
	//F8部分-----------------
	F('f8-ul1','f8-info-right-ul', 'f8-img2-imgs-active');
	//F9部分-----------------
	F('f9-ul1','f9-info-right-ul', 'f9-img2-imgs-active');
	//F10部分-----------------
	F('f10-ul1','f10-info-right-ul', 'f10-img2-imgs-active');
	//F11部分-----------------
	F('f11-ul1','f11-info-right-ul', 'f11-img2-imgs-active');
	//F12部分-----------------

	
	function F(ul,ul2,active) {
var oUl = document.getElementById(ul);
		var aDivNull = oUl.getElementsByTagName('div');
		var aLi = oUl.getElementsByTagName('li');
		var oUl1 = document.getElementById(ul2);
		var aLi1 = oUl1.getElementsByTagName('li');
		for(i=0; i<aLi.length; i++){
			aLi[i].index = i
			$(aLi[i]).mouseover(function(){
				$(aDivNull[this.index]).css('display', 'block');
				for(i=0; i<aLi.length; i++){
				$(aLi1[i]).attr('class', '');
}
				$(aLi1[this.index]).attr('class', active);
});
			$(aLi[i]).mouseout(function() {
$(aDivNull[this.index]).css('display', 'none');
});
		}
	}
		
	
	//时间版运动框架-------------
	function startMove(obj, json, times, fx, fn) {
var iCur = {
};

for(var attr in json) {
iCur[attr] = 0;
			if(attr == 'opacity'){
				iCur[attr] = Math.round(getStyle(obj,attr)*100);
}

else {
iCur[attr] = parseInt(getStyle(obj,attr));
}
		}

var startTime = now();
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
var changeTime = now();
			var t = times - Math.max(0, startTime - changeTime + times);
			for(var attr in json){
				var value = Tween[fx](t, iCur[attr], json[attr] - iCur[attr], times);
				if(attr == 'opacity'){
					obj.style.opacity = value/100;
					obj.style.filter = 'alpha(opacity='+value+')';
}

else {
obj.style[attr] = value + 'px';
}
			}

if(t == times) {
clearInterval(obj.timer);
				if(fn){
					fn.call(obj);
}
			}	
		},13);
};

function getStyle(obj, attr) {
if(obj.currentStyle){
			return obj.currentStyle[attr];
}

else {
return getComputedStyle(obj, false)[attr];
}
	};

function now() {
return (new Date()).getTime();
};
});
	
//-----------------------------------------------------------------------------------

var Tween = {
linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
},
easeIn: function(t, b, c, d) {
//加速曲线
		return c*(t/=d)*t + b;
},
easeOut: function(t, b, c, d) {
//减速曲线
		return -c *(t/=d)*(t-2) + b;
},
easeBoth: function(t, b, c, d) {
//加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
}

return -c/2 * ((--t)*(t-2) - 1) + b;
},
easeInStrong: function(t, b, c, d) {
//加加速曲线
		return c*(t/=d)*t*t*t + b;
},
easeOutStrong: function(t, b, c, d) {
//减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
},
easeBothStrong: function(t, b, c, d) {
//加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
}

return -c/2 * ((t-=2)*t*t*t - 2) + b;
},
elasticIn: function(t, b, c, d, a, p) {
//正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b;
}

if ( (t /= d) == 1 ) {
return b+c;
}

if (!p) {
p=d*0.3;
}

if (!a || a < Math.abs(c)) {
a = c; 
			var s = p/4;
}

else {
var s = p/(2*Math.PI) * Math.asin (c/a);
}

return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
},
elasticOut: function(t, b, c, d, a, p) {
//正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
}

if ( (t /= d) == 1 ) {
return b+c;
}

if (!p) {
p=d*0.3;
}

if (!a || a < Math.abs(c)) {
a = c;
			var s = p / 4;
}

else {
var s = p/(2*Math.PI) * Math.asin (c/a);
}

return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
},    
elasticBoth: function(t, b, c, d, a, p) {
if (t === 0) {
			return b;
}

if ( (t /= d/2) == 2 ) {
return b+c;
}

if (!p) {
p = d*(0.3*1.5);
}

if ( !a || a < Math.abs(c) ) {
a = c; 
			var s = p/4;
}

else {
var s = p/(2*Math.PI) * Math.asin (c/a);
}

if (t < 1) {
return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
}

return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
},
backIn: function(t, b, c, d, s) {
//回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
}

return c*(t/=d)*t*((s+1)*t - s) + b;
},
backOut: function(t, b, c, d, s) {
if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
}

return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}, 
backBoth: function(t, b, c, d, s) {
if (typeof s == 'undefined') {
			s = 1.70158;
}

if ((t /= d/2 ) < 1) {
return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
}

return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
},
bounceIn: function(t, b, c, d) {
//弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
},       
bounceOut: function(t, b, c, d) {
if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
}

else if (t < (2/2.75)) {
return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
}

else if (t < (2.5/2.75)) {
return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
}

return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
},      
bounceBoth: function(t, b, c, d) {
if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
}

return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
}
}