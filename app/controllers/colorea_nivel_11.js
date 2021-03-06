
var Draggable = require('ti.draggable');

var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});

var sonido = Ti.Media.createSound({url:"/images/encabezados/colorea_rabia.m4a"});

var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/colorea_rabia.png',
 	top: '2%', 
 	left: '15%',
	width: '70%',
	height: '10%'
});

win.add(encabezado);

var mensaje = 0;
encabezado.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido.play();
		mensaje=mensaje+1;
	}
});

var rel = 0;
var newLeft = 0;
var newTop = 0;
var mensaje=0;
var intentos =0;
var logrados = 0;
/**************random array*******************************************/
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
}
var dir = [
'/images/colorear/alegria/alegria',
'/images/colorear/miedo/miedo',
'/images/colorear/miedo/miedo',
'/images/colorear/tristeza/pena',
'/images/colorear/rabia/enojo',
'/images/colorear/rabia/enojo',
'/images/colorear/tristeza/pena',
'/images/colorear/alegria/alegria'
];
shuffle(dir);


var indice = [1,2,3,4,5,6,7,8,9,10,11,12];
shuffle(indice);
/********************************************************************************************/

var image1 = Ti.UI.createImageView({
			id: ''+dir[0],
		    image: ''+dir[0]+''+indice[0]+'.png',
		    left:'5%', top:'35%',
		    width:'20%', height:'20%'
		  });
var image2 = Ti.UI.createImageView({
			id: ''+dir[1],
		    image: ''+dir[1]+''+indice[1]+'.png',
		    left:'25%', top:'35%',
		    width:'20%', height:'20%'
		  });
		  
var image3 = Ti.UI.createImageView({
			id: ''+dir[2],
		    image: ''+dir[2]+''+indice[2]+'.png',
		    left:'45%', top:'35%',
		    width:'20%', height:'20%'
		  });
		  
var image4 = Ti.UI.createImageView({
			id: ''+dir[3],
		    image: ''+dir[3]+''+indice[3]+'.png',
		    left:'65%', top:'35%',
		    width:'20%', height:'20%'
		  });
		  
var image5 = Ti.UI.createImageView({
			id: ''+dir[4],
		    image: ''+dir[4]+''+indice[4]+'.png',
		    left:'5%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
var image6 = Ti.UI.createImageView({
			id: ''+dir[5],
		    image: ''+dir[5]+''+indice[5]+'.png',
		    left:'25%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
var image7 = Ti.UI.createImageView({
			id: ''+dir[6],
		    image: ''+dir[6]+''+indice[6]+'.png',
		    left:'45%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
var image8 = Ti.UI.createImageView({
			id: ''+dir[7],
		    image: ''+dir[7]+''+indice[7]+'.png',
		    left:'65%', top:'65%',
		    width:'20%', height:'20%'
		  });
		  
win.add(image1);
win.add(image2);
win.add(image3);
win.add(image4);
win.add(image5);
win.add(image6);
win.add(image7);
win.add(image8);

var rojo = Draggable.createView({
			backgroundImage: '/images/colorear/rojo.png',
		    left:'85%', top: '35%',
		    width:'10%',
			height:'18%',
});

win.add(rojo);

var amarillo = Draggable.createView({
			backgroundImage: '/images/colorear/amarillo.png',
		    left:'85%', top: '10%',
		    width:'10%',
			height:'18%',
});

win.add(amarillo);

var azul = Draggable.createView({
			backgroundImage: '/images/colorear/azul.png',
		    left:'85%', top: '60%',
		    width:'10%',
			height:'18%',
});

win.add(azul);

var naranjo = Draggable.createView({
			backgroundImage: '/images/colorear/naranjo.png',
		    left:'85%', top: '85%',
		    width:'10%',
			height:'18%',
});

win.add(naranjo);

rojo.addEventListener('start', function(e){
	Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	Ti.API.info('Event "start"');
	Ti.API.info('left: '+e.left);
	Ti.API.info('top:  '+e.top);
	Ti.API.info('center:'+JSON.stringify(e.center));
});

rojo.addEventListener('move', function(e){
	Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	Ti.API.info('Event "move"');
	Ti.API.info('left: '+e.left);
	Ti.API.info('top:  '+e.top);
	Ti.API.info('center:'+JSON.stringify(e.center));
});


rojo.addEventListener('end', function(e){
	
    mensaje=0;
	ancho = Titanium.Platform.displayCaps.platformWidth;
	alto = Titanium.Platform.displayCaps.platformHeight;
	
			if(image1.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image1);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image1.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			
			if(image2.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image2);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image2.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(image3.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image3);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image3.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(image4.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image4);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image4.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(image5.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image5);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image5.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(image6.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image6);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image6.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(image7.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image7);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image7.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(image8.id == '/images/colorear/rabia/enojo'){
				var p = {x: e.left, y: e.top};
    			var tp = win.convertPointToView(p, image8);
    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.15*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.20*alto)){
					image8.backgroundColor="red";
					mensaje = 1;
				}
			}
			
			if(mensaje == 1){
				intentos =0;
				logrados++;
				rojo.setTop('35%');
				rojo.setLeft('85%');
				if(logrados == 2){
					colorea_nivel_12 = Alloy.createController('colorea_nivel_12');
					animacionGlobos = Alloy.createController('animacionGlobos');
				}
			}
			else{
				intentos++;
				rojo.setTop('35%');
				rojo.setLeft('85%');
			}
			
			if(intentos>=4){
				colorea_nivel_11 = Alloy.createController('colorea_nivel_11');
			}
		
	
});

amarillo.addEventListener('end', function(e){
			amarillo.setTop(amarillo.getTop());
			amarillo.setLeft(amarillo.getLeft());
			intentos++;
			if(intentos>=4){
				colorea_nivel_11 = Alloy.createController('colorea_nivel_11');
			}
	
});

azul.addEventListener('end', function(e){
			azul.setTop(azul.getTop());
			azul.setLeft(azul.getLeft());
			intentos++;
			if(intentos>=4){
				colorea_nivel_11 = Alloy.createController('colorea_nivel_11');
			}
	
});

naranjo.addEventListener('end', function(e){
			naranjo.setTop(naranjo.getTop());
			naranjo.setLeft(naranjo.getLeft());
			intentos++;
			if(intentos>=4){
				colorea_nivel_11 = Alloy.createController('colorea_nivel_11');
			}
	
});

win.addEventListener('android:back', function() {
			
		index = Alloy.createController('index');
		win.close();		 
});

win.open();
