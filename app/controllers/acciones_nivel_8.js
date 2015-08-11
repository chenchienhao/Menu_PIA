var win1 = Titanium.UI.createWindow({  
    backgroundColor:'WHITE',
    width: '100%',
    height: '100%'
});

var sonido = Ti.Media.createSound({url:"/images/encabezados/acciones.m4a"});

var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/acciones.png',
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
 	image: '/images/acciones/frame8.png',
 	top: '10%', 
 	left: '2%',
	width: '60%',
	height: '90%'
});

win1.add(loaderImage); 
win1.add(bueno); 
win1.add(button1);
win1.add(malo);
win1.add(button2);

button1.addEventListener('click',function(e) 
{

animacionGlobos = Alloy.createController('animacionGlobos');

setTimeout(function(){
   if(Ti.App.Properties.getBool("HS_acciones8") == true){
		acciones_nivel_9=Alloy.createController('acciones_nivel_9');
		win1.close();
	}else{
		win1.close();
	}
    	}, 4000);
}); 

button2.addEventListener('click',function(e) 
{
	
});

win1.addEventListener('android:back', function(){
index = Alloy.createController('index');
win1.close();		
});


win1.open();