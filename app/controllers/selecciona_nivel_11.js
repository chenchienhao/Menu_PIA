var win1 = Titanium.UI.createWindow({  
    title:'PIA',
    backgroundColor:'WHITE',
    width: '100%',
    height: '100%',
});
var sonido = Ti.Media.createSound({url:"/images/encabezados/emociones.m4a"});

var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/emociones.png',
 	top: '2%', 
 	left: '15%',
	width: '70%',
	height: '10%'
});

win1.add(encabezado);

var mensaje = 0;
encabezado.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido.play();
		mensaje=mensaje+1;
	}
});


var button3 = Ti.UI.createImageView({
   backgroundImage: '/images/seleccione/alegria.png',
 		top: '10%',
 		left: '59%',
		height: '42%',
		width: '21%'
	});
	
	
var button2 = Ti.UI.createImageView({
   backgroundImage: '/images/seleccione/rabia.png',
 		top: '10%',
 		left: '79%',
		height: '42%',
		width: '21%'
	});

var button1 = Ti.UI.createImageView({
   backgroundImage: '/images/seleccione/miedo.png',
 		top: '55%',
 		left: '59%',
		height: '42%',
		width: '21%'
	});

	
var button4 = Ti.UI.createImageView({
   backgroundImage: '/images/seleccione/pena.png',
 		top: '55%',
 		left: '79%',
		height: '42%',
		width: '21%'
	});
	

var htmlString='<html>
				<body>
					<img src="images/seleccione/frame11.gif" style="width: 60%; height: 90%;"/>
				</body>
			</html>'; 

var disp_rythm_imageView = Titanium.UI.createWebView({ height: '90%', width: '60%', top:'10%', left:'2%', html:htmlString });

button3.addEventListener('click',function(e) 
{

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
	 top:'1%', 
	 left:'10%', 
	 backgroundColor: 'transparent',
	 html:htmlstrng 
}); 

win1.add(gifView);

setTimeout(function(){
    	

	fin = Alloy.createController('fin');
	win1.close();
    	}, 4000);
    	    	
});


win1.addEventListener('android:back', function(){
index = Alloy.createController('index');
win1.close();       
});


button2.addEventListener('click',function(e) 
{

}); 

button4.addEventListener('click',function(e) 
{

}); 

win1.add(disp_rythm_imageView);
win1.add(button1);
win1.add(button2);
win1.add(button3);
win1.add(button4);

win1.open();

