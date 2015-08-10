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
					<img src="images/animacion/globos.gif"  style="width: 70%; height: auto;"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 backgroundColor: 'transparent',
	 top:'20%', 
	 left:'0%', 
	 html:htmlstrng 
}); 

win.add(gifView);

win.addEventListener("open", function () {
    setTimeout(function(){
    	win.close();
    	}, 5000);
});


win.open();