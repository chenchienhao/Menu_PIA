
var Draggable = require('ti.draggable');

var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});

titulo = Ti.UI.createLabel({
		  color: 'black',
		  font: { fontSize:20 },
		  shadowColor: '#000099',
		  text: 'Forma una cara de PENA y TRISTEZA',
		  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  top: 0,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
win.add(titulo);

var rel = 0;
var newLeft = 0;
var newTop = 0;
var mensaje=0;
var intentos =0;
var logroOjos =0;
var logroBoca =0;

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
'/images/cara/ojosenojado.png',
'/images/cara/bocaenojado.png',
'/images/cara/ojosfeliz.png',
'/images/cara/bocafeliz.png',
'/images/cara/bocaasustado.png',
'/images/cara/ojostristes.png',
'/images/cara/bocatriste.png',
'/images/cara/ojosasustado.png'
];
shuffle(dir);
/********************************************************************/

var cara = Ti.UI.createImageView({
		    image: '/images/cara/cara.png',
		    left:'5%', top:'10%',
		    width:'55%', height:'75%'
		  });
		  
win.add(cara);

var image1 = Draggable.createView({
			id: ''+dir[0],
			backgroundImage: ''+dir[0],
		    left:'60%', top: '10%',
		    width:'20%',
			height:'20%',
});

win.add(image1);

var image2 = Draggable.createView({
			id: ''+dir[1],
			backgroundImage: ''+dir[1],
		    left:'80%', top: '10%',
		    width:'20%',
			height:'20%',
});

win.add(image2);

var image3 = Draggable.createView({
			id: ''+dir[2],
			backgroundImage: ''+dir[2],
		    left:'60%', top: '30%',
		    width:'20%',
			height:'20%',
});

win.add(image3);

var image4 = Draggable.createView({
			id: ''+dir[3],
			backgroundImage: ''+dir[3],
		    left:'80%', top: '30%',
		    width:'20%',
			height:'20%',
});

win.add(image4);

var image5 = Draggable.createView({
			id: ''+dir[4],
			backgroundImage: ''+dir[4],
		    left:'60%', top: '50%',
		    width:'20%',
			height:'20%',
});

win.add(image5);

var image6 = Draggable.createView({
			id: ''+dir[5],
			backgroundImage: ''+dir[5],
		    left:'80%', top: '50%',
		    width:'20%',
			height:'20%',
});

win.add(image6);

var image7 = Draggable.createView({
			id: ''+dir[6],
			backgroundImage: ''+dir[6],
		    left:'60%', top: '70%',
		    width:'20%',
			height:'20%',
});

win.add(image7);

var image8 = Draggable.createView({
			id: ''+dir[7],
			backgroundImage: ''+dir[7],
		    left:'80%', top: '70%',
		    width:'20%',
			height:'20%',
});

win.add(image8);

	if(image1.id == '/images/cara/ojostristes.png'){
			image1.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image1.setTop('30%');
						image1.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image1.setTop(image1.getTop());
						image1.setLeft(image1.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
			if(image1.id == '/images/cara/bocatriste.png'){
			image1.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroBoca = 1;
							image1.setTop('50%');
							image1.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
					}
					else{
						intentos++;
						image1.setTop(image1.getTop());
						image1.setLeft(image1.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		image1.addEventListener('end', function(e){
				image1.setTop(image1.getTop());
				image1.setLeft(image1.getLeft());
				intentos++;
				if(intentos>=4){
					cara_nivel_3 = Alloy.createController('cara_nivel_3');
				}
		
		});
	}
	}
	
	if(image2.id == '/images/cara/ojostristes.png'){
			image2.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image2.setTop('30%');
						image2.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image2.setTop(image2.getTop());
						image2.setLeft(image2.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
			if(image2.id == '/images/cara/bocatriste.png'){
				image2.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image2.setTop('50%');
							image2.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image2.setTop(image2.getTop());
							image2.setLeft(image2.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image2.addEventListener('end', function(e){
					image2.setTop(image2.getTop());
					image2.setLeft(image2.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}

	}
	
	if(image3.id == '/images/cara/ojostristes.png'){
			image3.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image3.setTop('30%');
						image3.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image3.setTop(image3.getTop());
						image3.setLeft(image3.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		if(image3.id == '/images/cara/bocatriste.png'){
				image3.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image3.setTop('50%');
							image3.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image3.setTop(image3.getTop());
							image3.setLeft(image3.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image3.addEventListener('end', function(e){
					image3.setTop(image3.getTop());
					image3.setLeft(image3.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}
	}
	
	if(image4.id == '/images/cara/ojostristes.png'){
			image4.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image4.setTop('30%');
						image4.setLeft('25%');
						if(logroBoca==1 && logroOjos==1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
							image4.setTop(image4.getTop());
							image4.setLeft(image4.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		if(image4.id == '/images/cara/bocatriste.png'){
				image4.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image4.setTop('50%');
							image4.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image4.setTop(image4.getTop());
							image4.setLeft(image4.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image4.addEventListener('end', function(e){
					image4.setTop(image4.getTop());
					image4.setLeft(image4.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}
	}
	
	if(image5.id == '/images/cara/ojostristes.png'){
			image5.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image5.setTop('30%');
						image5.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image5.setTop(image5.getTop());
						image5.setLeft(image5.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		if(image5.id == '/images/cara/bocatriste.png'){
				image5.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image5.setTop('50%');
							image5.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image5.setTop(image5.getTop());
							image5.setLeft(image5.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image5.addEventListener('end', function(e){
					image5.setTop(image5.getTop());
					image5.setLeft(image5.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}
	}
	
	if(image6.id == '/images/cara/ojostristes.png'){
			image6.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image6.setTop('30%');
						image6.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image6.setTop(image6.getTop());
						image6.setLeft(image6.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		if(image6.id == '/images/cara/bocatriste.png'){
				image6.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image6.setTop('50%');
							image6.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image6.setTop(image6.getTop());
							image6.setLeft(image6.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image6.addEventListener('end', function(e){
					image6.setTop(image6.getTop());
					image6.setLeft(image6.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}
	}
	
	if(image7.id == '/images/cara/ojostristes.png'){
			image7.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image7.setTop('30%');
						image7.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image7.setTop(image7.getTop());
						image7.setLeft(image7.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		if(image7.id == '/images/cara/bocatriste.png'){
				image7.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image7.setTop('50%');
							image7.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image7.setTop(image7.getTop());
							image7.setLeft(image7.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image7.addEventListener('end', function(e){
					image7.setTop(image7.getTop());
					image7.setLeft(image7.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}
	}
	
	if(image8.id == '/images/cara/ojostristes.png'){
			image8.addEventListener('end', function(e){
			
		    mensaje=0;
			ancho = Titanium.Platform.displayCaps.platformWidth;
			alto = Titanium.Platform.displayCaps.platformHeight;
		
						var p = {x: e.left, y: e.top};
		    			var tp = win.convertPointToView(p, cara);
		    			
		    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (-0.10*alto)<=tp.y && tp.y<=(0.35*alto)){
							mensaje = 1;
						}
					if(mensaje == 1){
						intentos =0;
						logroOjos = 1;
						image8.setTop('30%');
						image8.setLeft('25%');
						if(logroOjos == 1 && logroBoca == 1){
							//Desbloquear siguiente nivel.
					Ti.App.Properties.removeProperty("HS_colorea2");
					Ti.App.Properties.setBool("HS_colorea2",true);
					animacionMiedo = Alloy.createController('animacionMiedo');
					animacionGlobos = Alloy.createController('animacionGlobos');
						}
					}
					else{
						intentos++;
						image8.setTop(image8.getTop());
						image8.setLeft(image8.getLeft());
					}
					
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
				
			
		});
	}
	else{
		if(image8.id == '/images/cara/bocatriste.png'){
				image8.addEventListener('end', function(e){
				
			    mensaje=0;
				ancho = Titanium.Platform.displayCaps.platformWidth;
				alto = Titanium.Platform.displayCaps.platformHeight;
			
							var p = {x: e.left, y: e.top};
			    			var tp = win.convertPointToView(p, cara);
			    			
	    			if((-0.02*ancho)<=tp.x && tp.x<=(0.55*ancho) && (0.35*alto)<=tp.y && tp.y<=(0.70*alto)){
								mensaje = 1;
							}
						if(mensaje == 1){
							intentos =0;
							logroBoca = 1;
							image8.setTop('50%');
							image8.setLeft('25%');
							if(logroOjos == 1 && logroBoca == 1){
								cara_nivel_2 = Alloy.createController('cara_nivel_2');
								animacionGlobos = Alloy.createController('animacionGlobos');
							}
						}
						else{
							intentos++;
							image8.setTop(image8.getTop());
							image8.setLeft(image8.getLeft());
						}
						
						if(intentos>=4){
							cara_nivel_3 = Alloy.createController('cara_nivel_3');
						}
					
				
			});
		}
		else{
			image8.addEventListener('end', function(e){
					image8.setTop(image8.getTop());
					image8.setLeft(image8.getLeft());
					intentos++;
					if(intentos>=4){
						cara_nivel_3 = Alloy.createController('cara_nivel_3');
					}
			
			});
		}
	}

win.addEventListener('android:back', function() {
			
		index = Alloy.createController('index');
		win.close();		 
});

win.open();