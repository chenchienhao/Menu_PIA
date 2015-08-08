var win1 = Titanium.UI.createWindow({  
    title:'PIA',
    backgroundColor:'WHITE',
    width: '100%',
    height: '100%',
});

var titulo = Ti.UI.createLabel({
  color:'blue',
  font: { fontSize: '20%' },
  text: 'Identifica y Selecciona la',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '0%', top: '1%', 
  width: '40%',
  height: '10%'
});
var titulo2 = Ti.UI.createLabel({
  color:'RED',
  font: { fontSize: '22%' },
  text: 'EMOCIÓN',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '31%', top: '0%', 
  width: '30%',
  height: '12%'
});

var titulo3 = Ti.UI.createLabel({
  color:'blue',
  font: { fontSize: '20%' },
  text: 'que representa la animación.',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '45%', top: '1%', 
  width: '60%',
  height: '10%'
});


var button1 = Ti.UI.createImageView({
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

var button3 = Ti.UI.createImageView({
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
					<img src="images/seleccione/frame5.gif" style="width: 95%; height: auto;"/>
				</body>
			</html>'; 

var disp_rythm_imageView = Titanium.UI.createWebView({ height: '90%', width: '60%', top:'10%', left:'2%', html:htmlString });


button3.addEventListener('click',function(e) 
{

var htmlstrng='<html>
				<body>
					<img src="images/animacion/globos.gif"  style="width: 95%; height: auto;"/>
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
    //Desbloquear siguiente nivel.
	Ti.App.Properties.removeProperty("HS_selecciona5");
	Ti.App.Properties.setBool("HS_selecciona5",true);	

	selecciona_nivel_6=Alloy.createController('selecciona_nivel_6');
	win1.close();
    	}, 4000);
    	    	
});


win1.addEventListener('android:back', function(){

}); 

button2.addEventListener('click',function(e) 
{

}); 

button4.addEventListener('click',function(e) 
{

}); 


win1.add(titulo);
win1.add(titulo2);
win1.add(titulo3);
win1.add(disp_rythm_imageView);
win1.add(button1);
win1.add(button2);
win1.add(button3);
win1.add(button4);

win1.open();
