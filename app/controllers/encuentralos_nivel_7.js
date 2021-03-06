//hace llamada a sonido de alerta de error
var sonido = Ti.Media.createSound({url:"/images/alertas/pajarito.m4a"});
/**************************************************************************/
var intentos =0; //variable para calcular cantidad de intentos
var vidas=0; //variable que da cuenta de cuantos pajaros ha encontrado
var mensaje=1;
/******************************************************************/
var win0 = Ti.UI.createWindow({ //crea ventana general del juego
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});
/********************************************************************/
var imagen_fondo= Ti.UI.createImageView({  //carga imagen base
    image: '/images/pajaritos/imagen7.jpg',
    backgroundColor:'white',
    top:"10%",
	left:"5%",
	//right:'30%',
	height:'85%',
	width: "90%"
});

win0.add(imagen_fondo);
/********************************************************************/
var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/encuentra_pajarito.png',
 	top: '2%', 
 	left: '15%',
	width: '70%',
	height: '10%'
});

win0.add(encabezado);

var mensaje = 0;
encabezado.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido.play();
		mensaje=mensaje+1;
	}
});
/************************************************************************/
var estrella1 = Ti.UI.createImageView({  //carga imagen de las vidas
    image: '/images/pajaritos/estrella.png',
    backgroundColor:'transparent',
    top:"15%",
	left:"89%",
	height:'8%',
	width: "6%"
});

var estrella2 = Ti.UI.createImageView({  //carga imagen de las vidas
    backgroundImage: '/images/pajaritos/estrella.png',
    backgroundColor:'transparent',
    top:"27%",
	left:"89%",
	height:'8%',
	width: "6%"
});

var estrella3 = Ti.UI.createImageView({  //carga imagen de las vidas
    backgroundImage: '/images/pajaritos/estrella.png',
    backgroundColor:'transparent',
    top:"39%",
	left:"89%",
	height:'8%',
	width: "6%"
});

var estrella4 = Ti.UI.createImageView({  //carga imagen de las vidas
    backgroundImage: '/images/pajaritos/estrella.png',
    backgroundColor:'transparent',
    top:"51%",
	left:"89%",
	height:'8%',
	width: "6%"
});

var estrella5 = Ti.UI.createImageView({  //carga imagen de las vidas
    backgroundImage:'/images/pajaritos/estrella.png',
    backgroundColor:'transparent',
    top:"63%",
	left:"89%",
	height:'8%',
	width: "6%"
});

var estrella6 = Ti.UI.createImageView({  //carga imagen de las vidas
    backgroundImage: '/images/pajaritos/estrella.png',
    backgroundColor:'transparent',
    top:"75%",
	left:"89%",
	height:'8%',
	width: "6%"
});

win0.add(estrella1);
win0.add(estrella2);
win0.add(estrella3);
win0.add(estrella4);
win0.add(estrella5);
win0.add(estrella6);
/*************************************************************************/
//función que mezcla el indice de las imágenes base
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
//mezcla indice de los juegos
var indice = [10,1,2,3,4,5,6,7,8,9];
shuffle(indice);
/*************************************************************************/
//asigna un pajarito a un boton
var boton1 = Ti.UI.createImageView({  //carga imagen de pajarito
    image: '/images/pajaritos/pajarito1.png',
   	backgroundColor:"transparent",
    top:"35%",
	left:"57%",
	height:'11%',
	width: "9%"
});

var boton2 = Ti.UI.createImageView({  //carga imagen de pajarito
    image: '/images/pajaritos/pajarito2.png',
  	backgroundColor:"transparent",
    top:"77%",
	left:"22%",
	height:'11%',
	width: "9%"
});

var boton3 = Ti.UI.createImageView({  //carga imagen de pajarito
    image: '/images/pajaritos/pajarito3.png',
   	backgroundColor:"transparent",
    top:"23%",
	left:"36%",
	height:'11%',
	width: "9%"
});

var boton4 = Ti.UI.createImageView({  //carga imagen de pajarito
    image: '/images/pajaritos/pajarito4.png',
   	backgroundColor:"transparent",
    top:"27%",
	left:"73%",
	height:'11%',
	width: "9%"
});

var boton5 = Ti.UI.createImageView({  //carga imagen de pajarito
    image: '/images/pajaritos/pajarito5.png',
   	backgroundColor:"transparent",
    top:"78%",
	left:"76%",
	height:'11%',
	width: "9%"
});

var boton6 = Ti.UI.createImageView({  //carga imagen de pajarito
    image: '/images/pajaritos/pajarito6.png',
   	backgroundColor:"transparent",
    top:"15%",
	left:"9%",
	height:'11%',
	width: "9%"
});

//permite que el boton sea visible
boton1.visible=true;
boton2.visible=true;
boton3.visible=true;
boton4.visible=true;
boton5.visible=true;
boton6.visible=true;

//agrega boton a la pantalla
win0.add(boton1);
win0.add(boton2);
win0.add(boton3);
win0.add(boton4);
win0.add(boton5);
win0.add(boton6);
/*********************************************************************/
//funcion que permite colorear las estrellas indicando progreso del juego
function pinta_estrella (vidas) {
	if(vidas==0){
		estrella1.backgroundImage="/images/pajaritos/estrella.png";
		estrella2.backgroundImage='/images/pajaritos/estrella.png';
		estrella3.backgroundImage='/images/pajaritos/estrella.png';
		estrella4.backgroundImage='/images/pajaritos/estrella.png';
		estrella5.backgroundImage='/images/pajaritos/estrella.png';
		estrella6.backgroundImage='/images/pajaritos/estrella.png';
	}
	if(vidas==1){
		estrella1.backgroundImage="/images/pajaritos/estrella_amarilla.png";
		estrella2.backgroundImage='/images/pajaritos/estrella.png';
		estrella3.backgroundImage='/images/pajaritos/estrella.png';
		estrella4.backgroundImage='/images/pajaritos/estrella.png';
		estrella5.backgroundImage='/images/pajaritos/estrella.png';
		estrella6.backgroundImage='/images/pajaritos/estrella.png';
	}
	if(vidas==2){
		estrella1.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella2.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella3.backgroundImage='/images/pajaritos/estrella.png';
		estrella4.backgroundImage='/images/pajaritos/estrella.png';
		estrella5.backgroundImage='/images/pajaritos/estrella.png';
		estrella6.backgroundImage='/images/pajaritos/estrella.png';
	}
	if(vidas==3){
		estrella1.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella2.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella3.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella4.backgroundImage='/images/pajaritos/estrella.png';
		estrella5.backgroundImage='/images/pajaritos/estrella.png';
		estrella6.backgroundImage='/images/pajaritos/estrella.png';
	}
	if(vidas==4){
		estrella1.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella2.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella3.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella4.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella5.backgroundImage='/images/pajaritos/estrella.png';
		estrella6.backgroundImage='/images/pajaritos/estrella.png';
	}
	if(vidas==5){
		estrella1.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella2.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella3.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella4.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella5.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella6.backgroundImage='/images/pajaritos/estrella.png';
	}
	if(vidas==6){
		estrella1.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella2.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella3.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella4.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella5.backgroundImage='/images/pajaritos/estrella_amarilla.png';
		estrella6.backgroundImage='/images/pajaritos/estrella_amarilla.png';
	}
}
/**********************************************************************/
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

imagen_fondo.addEventListener('click',function(e) 
{
		//sonido.play();
		intentos=intentos+1;
		nuevo_nivel_aleatorio(intentos);	
});

//crea funcionalidad para primer pajarito
boton1.addEventListener('click',function(e) 
{
	vidas=vidas+1;
	boton1.visible='false';
	pinta_estrella(vidas);
	nuevo_nivel(vidas);	
});
boton2.addEventListener('click',function(e) 
{
	vidas=vidas+1;
	boton2.visible='false';
	pinta_estrella(vidas);
	nuevo_nivel(vidas);	
});
boton3.addEventListener('click',function(e) 
{
	vidas=vidas+1;
	boton3.visible='false';
	pinta_estrella(vidas);	
	nuevo_nivel(vidas);
});
boton4.addEventListener('click',function(e) 
{
	vidas=vidas+1;
	boton4.visible='false';
	pinta_estrella(vidas);
	nuevo_nivel(vidas);	
});
boton5.addEventListener('click',function(e) 
{
	vidas=vidas+1;
	boton5.visible='false';
	pinta_estrella(vidas);
	nuevo_nivel(vidas);		
});
boton6.addEventListener('click',function(e) 
{
	vidas=vidas+1;
	boton6.visible='false';
	pinta_estrella(vidas);
	nuevo_nivel(vidas);	
});
/*****************************************************************/

/**********************************************************************/
//funcion que termina el juego y carga nuevo nivel
function nuevo_nivel_aleatorio(intentos){
	if(intentos>2){
		juegop7=Alloy.createController('encuentralos_nivel_'+indice[0]+'');
	}
}
//funcion que pasa al siguiente nivel
function nuevo_nivel(vidas){
	if(vidas==6){
		/*	Ti.App.Properties.removeProperty("TF_encuentralos7");
		Ti.App.info(Ti.App.Properties.getBool("TF_encuentralos8", true));*/
		
		win0.add(gifView);
		
		setTimeout(function(){
		/*desbloquear sgte. nivel
		if(Ti.App.Properties.getBool("TF_encuentralos8") == 'true'){*/
			var menu_nivel = Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
		/*}else{
			index = Alloy.createController('index');
		win0.close();*/
 	 	}, 4000);
	}
}

win0.addEventListener('android:back', function() {
	index = Alloy.createController('index');
	win0.close(); 
});

win0.open(); //abre la ventana en el dispositivo