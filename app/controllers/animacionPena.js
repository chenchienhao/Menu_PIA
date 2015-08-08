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
					<img src="images/animacion/pena.gif"  style="width: auto; height: auto; "/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 top:'0%', 
	 left:'0%', 
	 html:htmlstrng,
	 layout: "vertical" 
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	colorea_nivel_7 = Alloy.createController('colorea_nivel_7');
    	win.close();
    	}, 10000);
});


win.open();