var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});
var sonido = Ti.Media.createSound({url:"/images/encabezados/Siluetas.m4a"});

var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/Siluetas.png',
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


function shuffle(array) {
  var currentsiluetas = array.length, temporaryValue, randomsiluetas ;

  // While there remain elements to shuffle...
  while (0 !== currentsiluetas) {

    // Pick a remaining element...
    randomsiluetas = Math.floor(Math.random() * currentsiluetas);
    currentsiluetas -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentsiluetas];
    array[currentsiluetas] = array[randomsiluetas];
    array[randomsiluetas] = temporaryValue;
  }

  return array;
}

var dir = '/images/siluetas/sombra';
var dir_2 = '/images/siluetas_imagen/simpsons';
var indice = [1,2,3,4,5,6,7,8,9,10];
var indice2 = [1,2,3,4,5,6,7,8,9,10];
shuffle(indice);
shuffle(indice2);




var image1 = Ti.UI.createImageView({image: ''+dir+''+indice[0]+'.png', left:'3%', top:'23%', width:'12%', height:'25%'});
var image2 = Ti.UI.createImageView({image: ''+dir+''+indice[1]+'.png', left:'15%', top:'23%', width:'12%', height:'25%'});
var image3 = Ti.UI.createImageView({image: ''+dir+''+indice[2]+'.png', left:'27%', top:'23%', width:'12%', height:'25%'});
var image4 = Ti.UI.createImageView({image: ''+dir+''+indice[3]+'.png', left:'39%', top:'23%', width:'12%', height:'25%'});
var image5 = Ti.UI.createImageView({image: ''+dir+''+indice[4]+'.png', left:'51%', top:'23%', width:'12%', height:'25%'});
var image6 = Ti.UI.createImageView({image: ''+dir+''+indice[5]+'.png', left:'3%', top:'55%', width:'12%', height:'25%' });
var image7 = Ti.UI.createImageView({image: ''+dir+''+indice[6]+'.png', left:'15%', top:'55%', width:'12%', height:'25%'});
var image8 = Ti.UI.createImageView({image: ''+dir+''+indice[7]+'.png', left:'27%', top:'55%', width:'12%', height:'25%'});
var image9 = Ti.UI.createImageView({image: ''+dir+''+indice[8]+'.png', left:'39%', top:'55%', width:'12%', height:'25%'});
var image10 = Ti.UI.createImageView({image: ''+dir+''+indice[9]+'.png', left:'51%', top:'55%', width:'12%', height:'25%'});
var image11 = Ti.UI.createImageView({image: '/images/siluetas_imagen/simpsons10.png', left:'70%', top:'25%', width:'25%', height:'60%'});
		  
win.add(image1);
win.add(image2);
win.add(image3);
win.add(image4);
win.add(image5);
win.add(image6);
win.add(image7);
win.add(image8);
win.add(image9);
win.add(image10);
win.add(image11);

var contador = 0;
var exito = 0;

image1.addEventListener('click',function(e){
   
   if(indice[0] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image2.addEventListener('click',function(e){
   
   if(indice[1] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image3.addEventListener('click',function(e){
   
   if(indice[2] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image4.addEventListener('click',function(e){
   
   if(indice[3] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
});

image5.addEventListener('click',function(e){
   if(indice[4] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image6.addEventListener('click',function(e){
   
   if(indice[5] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 
 
image7.addEventListener('click',function(e){
   
	if(indice[6] == 10){
		nivel10_siluetas=Alloy.createController('fin');
		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image8.addEventListener('click',function(e){
   
   if(indice[7] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image9.addEventListener('click',function(e){
   
   if(indice[8] == 10){
   		nivel10_siluetas=Alloy.createController('fin');
   		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

image10.addEventListener('click',function(e){
	if(indice[9] == 10){
		nivel10_siluetas=Alloy.createController('fin');
		nivel10_siluetas=Alloy.createController('animacionFuegos');
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
			contador = 0;
		}
	}	
}); 

//lineas de codigo para que cuando apreten el boton back de android los lleve al index
win.addEventListener('android:back', function() {			
		index = Alloy.createController('index');
		win.close();
		});


win.open();
