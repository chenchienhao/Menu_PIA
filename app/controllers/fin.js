var win = Titanium.UI.createWindow({
    backgroundColor:'transparent',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true,
	layout: "vertical"
});
 
var htmlstrng='<html>
				<body>
					<img src="images/alertas/globos.gif"  style="width: 70%; height: auto;"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({ 
	 left:'25%',
	 top:'15%',
	 backgroundColor: 'transparent',
	 html:htmlstrng 
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	index = Alloy.createController('index');
    	win.close();
    	}, 5000);
});


win.open();