var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});

var sonido_memorice = Ti.Media.createSound({url:"/images/alertas/memorice.m4a"});

titulo_1= Ti.UI.createLabel({  //crea el titulo de la pantalla(indicaciones)
		  color: 'red',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'MEMORICE',
		  left:'30%',
		  top: 10,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		
titulo_2= Ti.UI.createLabel({  //crea el titulo de la pantalla(indicaciones)
		  color: 'Black',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'los objetos',
		  left:'55%',
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
		sonido_memorice.play();
		mensaje=mensaje+1;
	}
});

titulo_2.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido_memorice.play();
		mensaje=mensaje+1;
	}
});

//+++++++++++++++	Random	++++++++++++++++++++++++++++++++++++
function shuffle(array) {
  var currentmemo = array.length, temporaryValue, randommemo ;

  // While there remain elements to shuffle...
  while (0 !== currentmemo) {

    // Pick a remaining element...
    randommemo = Math.floor(Math.random() * currentmemo);
    currentmemo -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentmemo];
    array[currentmemo] = array[randommemo];
    array[randommemo] = temporaryValue;
  }

  return array;
}

var tapa = '/images/memorice/reverso.png';
var dir = '/images/memorice/memo';
var indice = [1,1,2,2,3,3,4,4,5,5,6,6];
shuffle(indice);



// +++++++++  CARGA DE IMAGENES	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var image1 = Ti.UI.createImageView({image: ''+tapa, left:'15%', top:'17%', width:'14%', height:'25%'});
var image2 = Ti.UI.createImageView({image: ''+tapa, left:'35%', top:'17%', width:'14%', height:'25%'});
var image3 = Ti.UI.createImageView({image: ''+tapa, left:'55%', top:'17%', width:'14%', height:'25%'});
var image4 = Ti.UI.createImageView({image: ''+tapa, left:'75%', top:'17%', width:'14%', height:'25%'});
var image5 = Ti.UI.createImageView({image: ''+tapa, left:'15%', top:'44%', width:'14%', height:'25%'});
var image6 = Ti.UI.createImageView({image: ''+tapa, left:'35%', top:'44%', width:'14%', height:'25%'});
var image7 = Ti.UI.createImageView({image: ''+tapa, left:'55%', top:'44%', width:'14%', height:'25%'});
var image8 = Ti.UI.createImageView({image: ''+tapa, left:'75%', top:'44%', width:'14%', height:'25%'});	  
var image9 = Ti.UI.createImageView({image: ''+tapa, left:'15%', top:'71%', width:'14%', height:'25%'});
var image10 = Ti.UI.createImageView({image: ''+tapa, left:'35%', top:'71%', width:'14%', height:'25%'});
var image11 = Ti.UI.createImageView({image: ''+tapa, left:'55%', top:'71%', width:'14%', height:'25%'});
var image12 = Ti.UI.createImageView({image: ''+tapa, left:'75%', top:'71%', width:'14%', height:'25%'});

//**********************************************************

var mostrar = [Ti.UI.createImageView({image: ''+dir+''+indice[0]+'.png', left:'15%', top:'17%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[1]+'.png', left:'35%', top:'17%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[2]+'.png', left:'55%', top:'17%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[3]+'.png', left:'75%', top:'17%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[4]+'.png', left:'15%', top:'44%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[5]+'.png', left:'35%', top:'44%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[6]+'.png', left:'55%', top:'44%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[7]+'.png', left:'75%', top:'44%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[8]+'.png', left:'15%', top:'71%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[9]+'.png', left:'35%', top:'71%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[10]+'.png', left:'55%', top:'71%', width:'14%', height:'25%'}),
			Ti.UI.createImageView({image: ''+dir+''+indice[11]+'.png', left:'75%', top:'71%', width:'14%', height:'25%'}),
			];
		
		
//	OK	IMAGENES		OK	IMAGENES	*********************************************
var ok = [Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'15%', top:'17%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'35%', top:'17%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'55%', top:'17%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'75%', top:'17%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'15%', top:'44%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'35%', top:'44%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'55%', top:'44%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'75%', top:'44%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'15%', top:'71%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'35%', top:'71%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'55%', top:'71%', width:'14%', height:'25%'}),
		Ti.UI.createImageView({image: '/images/memorice/ok.jpg', left:'75%', top:'71%', width:'14%', height:'25%'})
		];

win.add(mostrar[0]);
win.add(mostrar[1]);
win.add(mostrar[2]);
win.add(mostrar[3]);
win.add(mostrar[4]);
win.add(mostrar[5]);
win.add(mostrar[6]);
win.add(mostrar[7]);
win.add(mostrar[8]);
win.add(mostrar[9]);
win.add(mostrar[10]);
win.add(mostrar[11]);

setTimeout(function(){
	win.remove(mostrar[0]);
	win.remove(mostrar[1]);
	win.remove(mostrar[2]);
	win.remove(mostrar[3]);
	win.remove(mostrar[4]);
	win.remove(mostrar[5]);
	win.remove(mostrar[6]);
	win.remove(mostrar[7]);
	win.remove(mostrar[8]);
	win.remove(mostrar[9]);
	win.remove(mostrar[10]);
	win.remove(mostrar[11]);
	
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
	win.add(image12);
}, 5000);


var pulso = 0;
var p_anterior = 0;
var exito = 0;

image1.addEventListener('click', function(e){
	win.add(mostrar[0]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		//image1.duration(10);
		//esperar 1.5 seg.
		//$('selector').click(function(){return false;});
    	setTimeout(function(){
			if(indice[0]==indice[p_anterior]){
				pulso = 0;
				win.add(ok[0]);
				win.add(ok[p_anterior]);
				exito = exito + 1;
				if(exito == 6){
					memorice=Alloy.createController('fin');
				}
			}else{
				Titanium.API.info("valor pulso:" + pulso );
				win.remove(mostrar[0]);
				win.remove(mostrar[p_anterior]);
				pulso = 0;
			}
		},300);	
	}else{
		if(pulso > 2){
			pulso = 2;
		}
		
		p_anterior = 0;
	}
});

image2.addEventListener('click', function(e){
	win.add(mostrar[1]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[1]==indice[p_anterior]){
				pulso = 0;
				win.add(ok[1]);
				win.add(ok[p_anterior]);
				exito = exito + 1;
				if(exito == 6){
					memorice=Alloy.createController('fin');
				}
			}
			else{
				Titanium.API.info("valor pulso:" + pulso );
				win.remove(mostrar[1]);
				win.remove(mostrar[p_anterior]);
				pulso = 0;
			}
		},300);		
	}else{
		p_anterior = 1;
	}
});

image3.addEventListener('click', function(e){
	win.add(mostrar[2]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		//esperar 1.5 seg.
    	setTimeout(function(){
			if(indice[2]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[2]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[2]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);	
	}else{
		p_anterior = 2;
	}
});

image4.addEventListener('click', function(e){
	win.add(mostrar[3]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[3]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[3]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[3]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
	}else{
		p_anterior = 3;
	}
});

image5.addEventListener('click', function(e){
	win.add(mostrar[4]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[4]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[4]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[4]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 4;
	}
});

image6.addEventListener('click', function(e){
	win.add(mostrar[5]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[5]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[5]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[5]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 5;
	}
});

image7.addEventListener('click', function(e){
	win.add(mostrar[6]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[6]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[6]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[6]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 6;
	}
});

image8.addEventListener('click', function(e){
	win.add(mostrar[7]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[7]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[7]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[7]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 7;
	}
});

image9.addEventListener('click', function(e){
	win.add(mostrar[8]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[8]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[8]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[8]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 8;
	}
});

image10.addEventListener('click', function(e){
	win.add(mostrar[9]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[9]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[9]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[9]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 9;
	}
});

image11.addEventListener('click', function(e){
	win.add(mostrar[10]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[10]==indice[p_anterior]){
			pulso = 0;
			win.add(ok[10]);
			win.add(ok[p_anterior]);
			exito = exito + 1;
			if(exito == 6){
				memorice=Alloy.createController('fin');
			}
		}else{
			Titanium.API.info("valor pulso:" + pulso );
			win.remove(mostrar[10]);
			win.remove(mostrar[p_anterior]);
			pulso = 0;
		}
		},300);
		
	}else{
		p_anterior = 10;
	}
});

image12.addEventListener('click', function(e){
	win.add(mostrar[11]);
	pulso = pulso+1;
	
	Titanium.API.info("valor pulso:" + pulso );
	Titanium.API.info("valor pulso Anterior:" + p_anterior );
	if(pulso == 2){
		setTimeout(function(){
			if(indice[11]==indice[p_anterior]){
				pulso = 0;
				win.add(ok[11]);
				win.add(ok[p_anterior]);
				exito = exito + 1;
				if(exito == 6){
					memorice=Alloy.createController('fin');
				}
			}else{
				Titanium.API.info("valor pulso:" + pulso );
				win.remove(mostrar[11]);
				win.remove(mostrar[p_anterior]);
				pulso = 0;
			}
			
		},300);
		
	}else{
		p_anterior = 11;
	}
});

//lineas de codigo para que cuando apreten el boton back de android los lleve al index
win.addEventListener('android:back', function() {			
		index = Alloy.createController('index');
		win.close();
		});
		
win.open();