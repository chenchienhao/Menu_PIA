var win1 = Titanium.UI.createWindow({  
    backgroundColor:'WHITE',
    width: '100%',
    height: '100%'
});

var titulo = Ti.UI.createLabel({
  color:'blue',
  font: { fontSize: '20%' },
  text: 'Identifica y selecciona la',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '0%', top: '1%', 
  width: '40%',
  height: '10%'
});
var titulo2 = Ti.UI.createLabel({
  color:'RED',
  font: { fontSize: '22%' },
  text: 'ACCIÓN',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '29%', top: '0%', 
  width: '30%',
  height: '12%'
});

var titulo3 = Ti.UI.createLabel({
  color:'blue',
  font: { fontSize: '20%' },
  text: 'correspondiente.',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '47%', top: '1%', 
  width: '30%',
  height: '10%'
});


var button1 = Ti.UI.createImageView({
   //title: 'bueno',
   backgroundImage: '/images/acciones/Bueno.png',
   left: '70%', top: '10%', 
   width: '20%',
   height: '35%'
});

var bueno = Ti.UI.createLabel({
  color:'blue',
  font: { fontSize: '20%' },
  text: 'Bueno',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '40%', top: '40%', 
  width: '80%',
  height: '10%'
});

var button2 = Ti.UI.createImageView({
   //title: 'malo',
   backgroundImage: '/images/acciones/Malo.png',
   left: '70%', top: '55%', 
   width: '20%',
   height: '35%'
});

var malo = Ti.UI.createLabel({
  color:'blue',
  font: { fontSize: '20%' },
  text: 'Malo',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  left: '40%', top: '85%', 
  width: '80%',
  height: '10%'
});

//IMAGEN 1

var loaderImage = Ti.UI.createImageView({
 	image: '/images/acciones/frame7.png',
 	top: '10%', 
 	left: '2%',
	width: '60%',
	height: '90%'
});

win1.add(titulo);
win1.add(titulo2);
win1.add(titulo3);
win1.add(loaderImage); 
win1.add(bueno); 
win1.add(button1);
win1.add(malo);
win1.add(button2);

button1.addEventListener('click',function(e) 
{

}); 

button2.addEventListener('click',function(e) 
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
	Ti.App.Properties.removeProperty("HS_acciones7");
	Ti.App.Properties.setBool("HS_acciones7",true); 	

	acciones_nivel_8=Alloy.createController('acciones_nivel_8');
	win1.close();
    	}, 4000);
    	    	
}); 

win1.addEventListener('android:back', function(){
index = Alloy.createController('index');
win1.close();		
});

win1.open();