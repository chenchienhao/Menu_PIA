var htmlstrng='<html><body><img src="images/fuegos.gif"/></body></html>';
var gifView = Titanium.UI.createWebView({
	 backgroundColor: "transparent",
	 width: Ti.UI.SIZE,
	 height: Ti.UI.SIZE,
	 html:htmlstrng 
}); 
gifView.addEventListener('click',function(e){
		$.win.close();
});

$.win.add(gifView);