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
					<img src="images/animacion/alegria.gif"  style="width: 30%; height: auto;"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 top:'0%', 
	 left:'0%', 
	 html:htmlstrng 
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	if(Ti.App.Properties.getBool("HS_colorea3") == true){
    		colorea_nivel_1 = Alloy.createController('colorea_nivel_1');
    	}
    	win.close();
    	}, 10000);
});


win.open();