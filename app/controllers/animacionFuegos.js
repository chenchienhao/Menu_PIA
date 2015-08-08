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
					<DIV STYLE="position:absolute; top:0%; left:%10; visibility:visible z-index:1">
						<img src="images/animacion/pic.png"  style="width: 100%; height: auto;"/>
					</div>
					<DIV STYLE="position:absolute; top:0%; left:%0; visibility:visible z-index:1">
						<img src="images/animacion/globos.gif"  style="width: 60%; height: auto;"/>
					</div>
					<DIV STYLE="position:absolute; top:0%; left:%0; visibility:visible z-index:1">
						<img src="images/animacion/fuegos.gif"  style="width: 60%; height: auto;"/>
					</div>
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
    	index = Alloy.createController('index');
    	win.close();
    	}, 10000);
});


win.open();