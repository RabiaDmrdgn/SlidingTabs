function movement(number){
    var slider_bg = document.getElementsByClassName("slider-bg")[0];
   
    var clicked = document.getElementsByTagName("a")[number];
     for(var i=0;i<3;i++){
		  var a = document.getElementsByTagName("a")[i]; 
		  a.style.color="black";
	 }
    slider_bg.style.position="relative";
    slider_bg.style.left=clicked.offsetLeft+"px";
    slider_bg.style.transition = "0.5s";
    clicked.style.zIndex="2";
	clicked.style.color="white";
	clicked.style.transition="color 1s";
    slider_bg.style.zIndex="1";
    console.log(clicked.offsetLeft);
}