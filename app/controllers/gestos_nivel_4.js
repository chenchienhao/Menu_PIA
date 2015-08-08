//hace llamada a sonido de alerta de error
var sonido = Ti.Media.createSound({url:"/images/alertas/gestos.m4a"});
/**************************************************************************/
var intentos =0; //variable para calcular cantidad de intentos
var mensaje=1;
/******************************************************************/
var win1 = Ti.UI.createWindow({ //crea ventana general del juego
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});
/********************************************************************/
var imagen_globo = Ti.UI.createImageView({  //carga imagen a descifrar
    image: '/images/gestos/hola estoy en casa.png',
    backgroundColor:'white',
    top:"15%",
	left:"0%",
	height:'75%',
	width: "50%"
});

win1.add(imagen_globo);
/*********************************************************************/
titulo_1= Ti.UI.createLabel({  //crea el titulo de la pantalla(indicaciones)
		  color: 'black',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'Selecciona la frase        ',
		  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  top: 10,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
titulo_2= Ti.UI.createLabel({  //crea el titulo de la pantalla(indicaciones)
		  color: 'Blue',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'CORRECTA',
		  left:'60%',
		  //textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  top: 10,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
win1.add(titulo_1);
win1.add(titulo_2);

titulo_1.addEventListener('click',function(e) 
{
	if(mensaje<=2){
		sonido.play();
		mensaje=mensaje+1;
	}
});

titulo_2.addEventListener('click',function(e) 
{
	if(mensaje<=2){
		sonido.play();
		mensaje=mensaje+1;
	}
});
/************************************************************************/
//función que mezcla las imágenes
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}//fin funcion de mezcla
/*********************************************************************/
//mezcla las frases
var fr = ['/images/frases/frase',
'/images/frases/frase',
'/images/frases/frase',
'/images/frases/frase'
];
shuffle(fr);
/************************************************************************/
//mezcla indice de las frases
var indice = [2,4,10,11];
shuffle(indice);
/**************************************************************************/
//asigna cada imagen de frase a un boton
var button1 = Titanium.UI.createButton({
			backgroundColor:'white',
			id: ''+fr[0],
		    image: ''+fr[0]+''+indice[0]+'.png',
		    left:'51%', top:'15%',
		    width:'48%', height:'20%'   
		  });
		  
var button2 = Titanium.UI.createButton({
			backgroundColor:'white',
			id: ''+fr[1],
		    image: ''+fr[1]+''+indice[1]+'.png',
		    left:'51%', top:'32%',
		    width:'48%', height:'20%'
		  });
		  
var button3 = Titanium.UI.createButton({
			backgroundColor:'white',
			id: ''+fr[2],
		    image: ''+fr[1]+''+indice[2]+'.png',
		    left:'51%', top:'53%',
		    width:'48%', height:'20%'
		  });
		  
var button4 = Titanium.UI.createButton({
			backgroundColor:'white',
			id: ''+fr[3],
		    image: ''+fr[3]+''+indice[3]+'.png',
		    left:'51%', top:'74%',
		    width:'48%', height:'20%'
		  });
		  
win1.add(button1);
win1.add(button2);
win1.add(button3);
win1.add(button4);
/**************************************************************************/
var htmlstrng='<html>
				<body>
					<img src="images/alertas/globos.gif"  style="width: 85%; height: auto;"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 top:'2%', 
	 left:'5%', 
	 background:'transparent',
	 html:htmlstrng 
});
/**********************************************************************/
//crea funcionalidad para boton1
button1.addEventListener('click',function(e) 
{
	if(indice[0]=='10'){
		/*	Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.info(Ti.App.Properties.getBool("HS_gestos5", true));*/
		
		win1.add(gifView);
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.Properties.setBool("HS_gestos4",true);
		setTimeout(function(){
		/*desbloquear sgte. nivel
		if(Ti.App.Properties.getBool("HS_gestos5") == 'true'){*/
			juego1=Alloy.createController('gestos_nivel_5');
		/*}else{
			index = Alloy.createController('index');
		win1.close();*/
 	 	}, 4000);
	}
	else {
		if(indice[0]=='2' && intentos<1){
			//sonido.play();
			intentos=intentos+1;
		}
		else {
			if(indice[0]=='4' && intentos<1){
				//sonido.play();
				intentos=intentos+1;
			}
			else{
				if(indice[0]=='11' && intentos<1){
					//sonido.play();
					intentos=intentos+1;
				}
				else{
					//sonido.play();	
					juego3=Alloy.createController('gestos_nivel_4');
				}
			}
		}
	}
});
/****************************************************************************/
//crea funcionalidad para boton2
button2.addEventListener('click',function(e)
{
	if(indice[1]=='10'){
		/*	Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.info(Ti.App.Properties.getBool("HS_gestos5", true));*/
		
		win1.add(gifView);
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.Properties.setBool("HS_gestos4",true);
		setTimeout(function(){
		/*desbloquear sgte. nivel
		if(Ti.App.Properties.getBool("HS_gestos5") == 'true'){*/
			juego1=Alloy.createController('gestos_nivel_5');
		/*}else{
			index = Alloy.createController('index');
		win1.close();*/
 	 	}, 4000);
	}
	else {
		if(indice[1]=='2' && intentos<1){
			//sonido.play();
			intentos=intentos+1;
		}
		else {
			if(indice[1]=='4' && intentos<1){
				//sonido.play();
				intentos=intentos+1;
			}
			else{
				if(indice[1]=='11' && intentos<1){
					//sonido.play();
					intentos=intentos+1;
				}
				else{
					//sonido.play();	
					juego3=Alloy.createController('gestos_nivel_4');
				}
			}
		}
	}
});
/**************************************************************************/
//crea funcionalidad para boton3
button3.addEventListener('click',function(e)
{
	if(indice[2]=='10'){
		/*	Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.info(Ti.App.Properties.getBool("HS_gestos5", true));*/
		
		win1.add(gifView);
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.Properties.setBool("HS_gestos4",true);
		setTimeout(function(){
		/*desbloquear sgte. nivel
		if(Ti.App.Properties.getBool("HS_gestos5") == 'true'){*/
			juego1=Alloy.createController('gestos_nivel_5');
		/*}else{
			index = Alloy.createController('index');
		win1.close();*/
 	 	}, 4000);
	}
	else {
		if(indice[2]=='2' && intentos<1){
			//sonido.play();
			intentos=intentos+1;
		}
		else {
			if(indice[2]=='4' && intentos<1){
				//sonido.play();
				intentos=intentos+1;
			}
			else{
				if(indice[2]=='11' && intentos<1){
					//sonido.play();
					intentos=intentos+1;
				}
				else{
					//sonido.play();
					juego3=Alloy.createController('gestos_nivel_4');
				}
			}
		}
	}
});
/****************************************************************************/
//crea funcionalidad para boton4
button4.addEventListener('click',function(e)
{
	if(indice[3]=='10'){
		/*	Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.info(Ti.App.Properties.getBool("HS_gestos5", true));*/
		
		win1.add(gifView);
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("HS_gestos4");
		Ti.App.Properties.setBool("HS_gestos4",true);
		setTimeout(function(){
		/*desbloquear sgte. nivel
		if(Ti.App.Properties.getBool("HS_gestos5") == 'true'){*/
			juego1=Alloy.createController('gestos_nivel_5');
		/*}else{
			index = Alloy.createController('index');
		win1.close();*/
 	 	}, 4000);
	}
	else {
		if(indice[3]=='2' && intentos<1){
			//sonido.play();
			intentos=intentos+1;
		}
		else {
			if(indice[3]=='4' && intentos<1){
				//sonido.play();
				intentos=intentos+1;
			}
			else{
				if(indice[3]=='11' && intentos<1){
					//sonido.play();
					intentos=intentos+1;
				}
				else{	
					//sonido.play();
					juego3=Alloy.createController('gestos_nivel_4');
				}
			}
		}
	}
});
/************************************************************************/
win1.addEventListener('android:back', function() {
	index = Alloy.createController('index');
	win1.close(); 
});
win1.open(); //abre la ventana en el dispositivo