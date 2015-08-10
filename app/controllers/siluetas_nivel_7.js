var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});
var sonido_siluetas = Ti.Media.createSound({url:"/images/alertas/Siluetas.m4a"});

titulo_1= Ti.UI.createLabel({  //crea el titulo de la pantalla(indicaciones)
		  color: 'red',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'ENCUENTRA',
		  left:'24%',
		  top: 10,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
titulo_2= Ti.UI.createLabel({  //crea el titulo de la pantalla(indicaciones)
		  color: 'Black',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'la silueta correcta',
		  left:'50%',
		  //textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  top: 10,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
win.add(titulo_1);
win.add(titulo_2);

var mensaje = 0;
titulo_1.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido_siluetas.play();
		mensaje=mensaje+1;
	}
});

titulo_2.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido_siluetas.play();
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
var image11 = Ti.UI.createImageView({image: '/images/siluetas_imagen/simpsons7.png', left:'70%', top:'25%', width:'25%', height:'60%'});
		  
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

/*****************************************************************/
var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			color:'white',
			height:'50%',
			message: '¡Muy Bien! ¡Vamos al siguiente nivel!',
			font: { fontSize:40 }
		});
/**********************************************************************/
//CREAR ".GIFT"    PARA FIN DE NIVEL
/******************************************************************************************/
var htmlstrng='<html>
				<body>
					<img src="images/alertas/globos.gif"  style="width: 85%; height: auto;"/>
				</body>
			</html>';


var gifView = Titanium.UI.createWebView({
	 top:'2%', 
	 left:'2%', 
	 background:'transparent',
	 html:htmlstrng 
});
/***********************************************************************/


image1.addEventListener('click',function(e){
   
   if(indice[0] == 7){
   		dialog.show();
   		//Despues de 5 segundo se abre otro nivel de juego automáticamente
   		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
		var change_view=setInterval(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
			clearInterval(change_view);
		},5000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image2.addEventListener('click',function(e){
   
   if(indice[1] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image3.addEventListener('click',function(e){
   
   if(indice[2] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image4.addEventListener('click',function(e){
   
   if(indice[3] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
});

image5.addEventListener('click',function(e){
   if(indice[4] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image6.addEventListener('click',function(e){
   
   if(indice[5] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 
 
image7.addEventListener('click',function(e){
   
	if(indice[6] == 7){
		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image8.addEventListener('click',function(e){
   
   if(indice[7] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image9.addEventListener('click',function(e){
   
   if(indice[8] == 7){
   		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
			contador = 0;
		}
	}	
}); 

image10.addEventListener('click',function(e){
	if(indice[9] == 7){
		win.add(gifView);
   		//Despues de 3 segundo se abre otro nivel de juego automáticamente
   		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_siluetas7");
		Ti.App.Properties.setBool("TF_siluetas7",true);
    	setTimeout(function(){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_8');
		},3000);
	}else{
		contador = contador + 1;
		if(contador >=5){
			siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
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