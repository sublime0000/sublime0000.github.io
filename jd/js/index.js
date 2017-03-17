window.onload = function(){
	images();
	selector("smail_move_nav","line","move_ul_day21")
	checks("content_left");
	showHidden("city");
	showHidden("my_jd");
	showHidden("server_person");
	showHidden("webnav");
	selectCity("city_ul");
	function selectCity(ul){
		var oUl = document.getElementById(ul);
		var oParent = oUl.parentNode.parentNode;
		var child = oParent.children;
		var city_name;
		var aA = oUl.getElementsByTagName("a");
		for (var i = 0; i < aA.length; i++) {
			aA[i].onclick = function(){
				for(var i=0; i<aA.length; i++){
					aA[i].className="";
				}
				this.className = "active";
				city_name = this.innerHTML;
				for(var i= 0; i<child.length;i++){
					var name = child[i].nodeName.toLowerCase();
					if(name == "span"){
						child[i].innerHTML = city_name;
					}
				}
			}
		}
		
	}
	function showHidden(btn){
		var oBtn = document.getElementById(btn);
		var child = oBtn.children;
		var aDiv = [];
		for (var i = 0; i < child.length; i++) {
			var ele_name = child[i].nodeName.toLowerCase();
			if(ele_name == "div"){
				aDiv.push(child[i]);
			}
		}
		oBtn.onmouseover = function(){
			for(var i=0;i<aDiv.length;i++){
				aDiv[i].style.display = "block";
			}
		}
		oBtn.onmouseout = function(){
				for(var i=0;i<aDiv.length;i++){
				aDiv[i].style.display = "none";
			}
		}
	}
	function selector(btn,target1, ul){
		var oDiv = document.getElementById(btn);
		var aBtn = oDiv.getElementsByTagName("div");
		var line = document.getElementById(target1);
		var span = line.getElementsByTagName("span")[0];
		var oUl = document.getElementById(ul);
		var contents = oUl.getElementsByTagName("div");
		var contents_w = contents[0].offsetWidth;
		for(var i = 0; i<aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onmouseover = function(){
				startMove(span,{"left":this.index*50},200,"linear",function(){});
				startMove(oUl,{"left":-this.index*contents_w},200,"linear",function(){});
			}
		}

	}
	function checks(div){
		var oDiv = document.getElementById(div);
		var oUl = oDiv.getElementsByTagName("ul")[0];
		var aBtn = oUl.getElementsByTagName("li");
		var oOl = oDiv.getElementsByTagName("ol")[0];
		var aLi = oOl.getElementsByTagName("li");
		var oBody = document.getElementsByTagName("body")[0];
		oBody.onmouseover = function(){
			oOl.style.display = "none";
		}
		for(var i = 0; i<aBtn.length;i++){
			aBtn[i].index= i;
			aBtn[i].onmouseover = function(event){
				event = window.event || event;
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble  = true;
				}
				console.log(aLi[this.index]);
				
				for(var i = 0; i<aBtn.length;i++){
					aLi[i].style.display = "none";
				}
				aLi[this.index].style.display = "block";
				oOl.style.display = "block";
			}
			aLi[i].onmouseover = function(event){
				event = window.event || event;
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble = true;
				}
			}

		}
	}
	function images(){
		function Image(){
		}
		Image.prototype.begin = function(oDiv,oUl,prev,next,item){
			document.onselectstart = new Function("return false");
			this.oDiv = document.getElementById(oDiv);
			this.oUl = document.getElementById(oUl);		
			this.oPrev = document.getElementById(prev);
			this.oNext = document.getElementById(next);
			this.aLi = this.oUl.getElementsByTagName("li");
			this.aLi_w = this.aLi[0].offsetWidth;
			this.aLi_len = this.aLi.length;
			this.isList = item;
			if(item){
				this.oOl = document.getElementById(item);
				this.aItem = this.oOl.getElementsByTagName("li");
				this.old = this.aItem[0];
				this.items();
			}
			this.toggle = true;
			this.isFinish = false;
			this.iNow = 0; 
		}
		Image.prototype.init = function(oDiv,oUl,prev,next,item){
			this.begin(oDiv,oUl,prev,next,item);
			this.imgs();
			this.next();
			this.prev();
		}
		Image.prototype.imgs = function(){
			this.autoMove();
			this.stopMove();
		}
		Image.prototype.autoMove = function(){
			var This = this
			clearInterval(this.timer);
			this.timer = setInterval(function(){
				This.doSomeThing(This);
			},2000);
		}
		Image.prototype.stopMove = function(){
			var This = this;
			this.oDiv.onmouseover = function(){
				This.toggle = false;
				clearInterval(this.timer);
			}
			this.oDiv.onmouseout = function(){
				This.toggle = true;
				This.stopMove();
			}
		}
		Image.prototype.prev = function(){
			var This = this;
			This.oPrev.onclick = function(){
				if(!This.isFinish){
					This.isFinish = true;
					This.iNow--;
					This.doSomeThing(This);
				}
			}
		}
		Image.prototype.next = function(){
			var This = this;
			This.oNext.onclick = function(){
				if(!This.isFinish){
					This.isFinish = true;
					This.iNow++;
					This.doSomeThing(This);
				}
			}
		}
		Image.prototype.items = function(){
			var This = this;
			for(var i=0;i<this.aItem.length;i++){
				this.aItem[i].index = i;
			}
			this.addEvent(this.oOl,"click",function(event){
				var event = window.event || event;
				var target = event.target || event.srcElement;
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble = true;
				}
				var btn = target.nodeName.toLowerCase();
				if(btn == "li"){
					target.className = "active";
					This.old.className = "";
					This.old = target;
					This.iNow = target.index;
					This.doSomeThing(This);
				}
			})

		}
		Image.prototype.addEvent = function(element,type,fn){
			if(element.addEventListener){
			element.addEventListener(type,fn,false);
		}else{
			element.attachEvent("on"+type,fn,false)
		}
		}
		Image.prototype.doSomeThing = function(This){
			var self = This || this;
			self.toggle && self.iNow++;
			if(self.iNow>=self.aLi_len){
				self.iNow = 0;
				self.oUl.style.left = self.iNow*self.aLi_w+"px";
				self.iNow++;
			}
			if(self.iNow< 0){
				self.iNow = self.aLi_len-1;
				self.oUl.style.left = -self.iNow*self.aLi_w+"px";
				self.iNow--;
			}
			if(self.isList){
				for(var i=0;i<self.aItem.length;i++){
					self.aItem[i].className = "none";
				}
				if(self.iNow == self.aLi.length-1){
					self.aItem[0].className = "active";
				}else{
					self.aItem[self.iNow].className = "active";
				}
			}
			startMove(self.oUl,{"left":-self.iNow*self.aLi_w},1000,"easeOut",function(){ self.isFinish = false})
		}
		var Img = new Image();
		Img.init("content_center_top","ul_day20","prev","next","images_item");
	}
}

