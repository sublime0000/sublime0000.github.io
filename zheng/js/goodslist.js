
// 取消搜素栏内容

!function(){
	var deletes = document.querySelector(".delete-search");
	var input = document.querySelector(".search-input");


    deletes.addEventListener("touchstart",function(){
    	input.value = '';
    })


}();



// 商品列表的无限加载
!function(){

	var content = $(".content");
    var winh = $(window).height();
    var ul = $("#link-ul");



    function appendLoading(content){

    	var html = "";
    	var wrap;

    	html += '<div class="loading">';
    	html += '<img src="img/icon_loading.png">';
    	html += '<span>正在加载</span>';
    	html += '</div>';

    	wrap = $(html)

    	$(content).append(wrap);

    	return wrap;
    }

    var loading = appendLoading(content)[0];
    var loadTop = 0;
    var isFinish = false;

    $(window).on("scroll",function(){
    	loadTop = loading.getBoundingClientRect().top;

    	if(loadTop < winh && !isFinish){

    		ajaxLoad();
    		isFinish = true;
    	}
    })

    function ajaxLoad(){

    	$.ajax({
    		type:"GET",
    		url:"goods.json"
    	}).done(function( obj ){
            var html = "";
            for(var key in obj){
            	html += '<li><a href="#"><img src=" '+ obj[key]["img"] +' "><p>'+ obj[key]["describe"] +'</p><span><i>￥</i>'+ obj[key]["price"] +'</span><s>￥'+ obj[key]["s"] +'</s></a></li>';
            }
                // html += '<li><a href="#"><img src=" '+ obj[key]["img"] +' "><p>'+ obj[key]["describe"] +'</p><span><i>￥</i>'+ obj[key]["price"] +'</span><s>￥'+ obj[key]["s"] +'</s></a></li>';
            // ul[0].insertAdjacentHTML("beforeend",html);
            // 
            // setTimeout为了测试作用，真正开发不需要
            setTimeout(function(){
                ul.append(html)
                isFinish = false;
            },500);
    	})
    }

}();


!function(){

    // $(".price").on("touchstart",function(){
    //     $(".price-layer").toggle();
    // });

    $(".to-top").on("touchstart",function(){
         $('body,html').animate({ scrollTop: 0 }, 500); 
    })

}();
