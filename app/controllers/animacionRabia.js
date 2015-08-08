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
					<img src="images/animacion/rabia1.gif"  style="width: 40%; "/>
					<img src="images/animacion/rabia2.gif"  style="width: 40%; "/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 width: Ti.UI.SIZE,
	 height: Ti.UI.SIZE,
	 html:htmlstrng ,
	 layout: "horizontal"
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	colorea_nivel_10 = Alloy.createController('colorea_nivel_10');
    	win.close();
    	}, 10000);
});


win.open();