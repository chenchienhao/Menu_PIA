var win = Titanium.UI.createWindow({
    backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true,
	layout: "vertical"
});
 
var htmlstrng='<html>
				<body>
					<img src="images/animacion/miedo1.gif"  style="width: 30%; height: auto;"/>
					<img src="images/animacion/miedo2.gif"  style="width: 30%; height: auto; right:40%"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 top:'20%', 
	 left:'0%', 
	 html:htmlstrng 
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	colorea_nivel_4 = Alloy.createController('colorea_nivel_4');
    	win.close();
    	}, 10000);
});


win.open();