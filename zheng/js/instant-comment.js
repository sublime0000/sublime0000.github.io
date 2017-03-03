/*!function(){	
    var ul = document.getElementsByClassName("evaluate");

    
    for(var i = 0; i<ul.length; i++){
    	var doubi = ul[i].getElementsByTagName("li");
    	kengbi(doubi);
    }


    function kengbi(qwer){
    	for(var i = 0; i<qwer.length; i++){
			qwer[i].index = i;
			qwer[i].toggle = false;

			qwer[i].onclick = function(){
				alert(1111);
				for(var j =0; j<qwer.length; j++){
					qwer[j].innerHTML = "<img src='img/instant-comment/icon-d.png'>";
					
				}
				var length = this.index;
				for(var sb = 0; sb<length; sb++){
					qwer[sb].innerHTML = "<img src='img/instant-comment/icon-u.png'>";
					qwer[sb].toggle = true;
				}
				if(this.toggle){
					for(var j =0; j<qwer.length; j++){
						qwer[j].innerHTML = "<img src='img/instant-comment/icon-d.png'>";
					}
				}
				
			}
		}
    }

     
}();*/






 
   

