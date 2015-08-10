var view_header = Ti.UI.createView({
    backgroundColor:'white',
    width: Ti.UI.SIZE,
    height: "20%",
    layout: 'horizontal',
});
var view_body = Ti.UI.createView({
    height: Ti.UI.FILL,
    width: Ti.UI.SIZE,
    layout: 'horizontal'
});

var title=Titanium.UI.createLabel({
	color: '#000',
    text: Alloy.Globals.aux_categoria+" - "+Alloy.Globals.aux_juego,
    top: "50%",
    font: {
		fontSize: 18,
		color:"#000",
		fontweight:"bold",
		textAlign:"center"
	},
	left: "10%"
});

var anterior=Titanium.UI.createImageView({
	image: "/images/icon/anterior.png",
	top: "40%",
	left: "10%",
	height: "60%"
});
anterior.addEventListener('click',function(e){
	$.win.close();          
});
var audio=Titanium.UI.createImageView({
	image: "/images/icon/sound.png",
	top: "40%",
	right: "0%",
	height: "60%"
});
view_header.add(anterior);
view_header.add(title);
view_header.add(audio);

// body
var button=[];
if(Alloy.Globals.aux_categoria=="Habilidades Sociales"){
	if(Alloy.Globals.aux_juego=="Colorea"){
		for (var i=0; i < 4; i++){
			if(Ti.App.Properties.getBool("HS_colorea"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});
				Ti.API.info(i);	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	animacionRabia = Alloy.createController('animacionRabia');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	animacionRabia = Alloy.createController('animacionPena');
             	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	animacionRabia = Alloy.createController('animacionMiedo');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	animacionRabia = Alloy.createController('animacionAlegria');
             	//alert("Vamos!");
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Selecciona"){
		for (var i=0; i < 11; i++){
			if(Ti.App.Properties.getBool("HS_selecciona"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_1=Alloy.createController('selecciona_nivel_1');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_2=Alloy.createController('selecciona_nivel_2');
             	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_3=Alloy.createController('selecciona_nivel_3');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_4=Alloy.createController('selecciona_nivel_4');
             	//alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_5=Alloy.createController('selecciona_nivel_5');
             	//alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_6=Alloy.createController('selecciona_nivel_6');
             	//alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_7=Alloy.createController('selecciona_nivel_7');
             	//alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_8=Alloy.createController('selecciona_nivel_8');
             	//alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_9=Alloy.createController('selecciona_nivel_9');
             	//alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_10=Alloy.createController('selecciona_nivel_10');
             	//alert("Vamos!");
            }
        });
        button[10].addEventListener('click',function(e){
            if(button[10].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	selecciona_nivel_11=Alloy.createController('selecciona_nivel_11');
             	//alert("Vamos!");
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Acciones"){
		for (var i=0; i < 10; i++){
			if(Ti.App.Properties.getBool("HS_acciones"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_1=Alloy.createController('acciones_nivel_1');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_2=Alloy.createController('acciones_nivel_2');
             	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_3=Alloy.createController('acciones_nivel_3');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_4=Alloy.createController('acciones_nivel_4');
             	//alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_5=Alloy.createController('acciones_nivel_5');
             	//alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_6=Alloy.createController('acciones_nivel_6');
             	//alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_7=Alloy.createController('acciones_nivel_7');
             	//alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_8=Alloy.createController('acciones_nivel_8');
             	//alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_9=Alloy.createController('acciones_nivel_9');
             	//alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	acciones_nivel_10=Alloy.createController('acciones_nivel_10');
             	//alert("Vamos!");
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Gestos"){
		for (var i=0; i < 15; i++){
			if(Ti.App.Properties.getBool("HS_gestos"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
    	button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_1=Alloy.createController('gestos_nivel_1');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_2=Alloy.createController('gestos_nivel_2');
            	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_3=Alloy.createController('gestos_nivel_3');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_4=Alloy.createController('gestos_nivel_4');
             	//alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_5=Alloy.createController('gestos_nivel_5');
             	//alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_6=Alloy.createController('gestos_nivel_6');
             	//alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_7=Alloy.createController('gestos_nivel_7');
             	//alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_8=Alloy.createController('gestos_nivel_8');
             	//alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_9=Alloy.createController('gestos_nivel_9');
             	//alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_10=Alloy.createController('gestos_nivel_10');
             	//alert("Vamos!");
            }
        });
        button[10].addEventListener('click',function(e){
            if(button[10].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_11=Alloy.createController('gestos_nivel_11');
             	//alert("Vamos!");
            }
        });
        button[11].addEventListener('click',function(e){
            if(button[11].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_12=Alloy.createController('gestos_nivel_12');
             	//alert("Vamos!");
            }
        });
        button[12].addEventListener('click',function(e){
            if(button[12].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_13=Alloy.createController('gestos_nivel_13');
             	//alert("Vamos!");
            }
        });
        button[13].addEventListener('click',function(e){
            if(button[13].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_14=Alloy.createController('gestos_nivel_14');
             	//alert("Vamos!");
            }
        });
        button[14].addEventListener('click',function(e){
            if(button[14].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	gestos_nivel_15=Alloy.createController('gestos_nivel_15');
             	//alert("Vamos!");
            }
        });
	}
        
}
if(Alloy.Globals.aux_categoria=="Tolerancia a la Frustración"){
	if(Alloy.Globals.aux_juego=="Siluetas"){
		for (var i=0; i < 10; i++){
			if(Ti.App.Properties.getBool("TF_siluetas"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_1 = Alloy.createController('siluetas_nivel_1');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_2 = Alloy.createController('siluetas_nivel_2');
             	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_3 = Alloy.createController('siluetas_nivel_3');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_4 = Alloy.createController('siluetas_nivel_4');
             	//alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_5 = Alloy.createController('siluetas_nivel_5');
             	//alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_6 = Alloy.createController('siluetas_nivel_6');
             	//alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
             	//alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_8 = Alloy.createController('siluetas_nivel_8');
             	//alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_9 = Alloy.createController('siluetas_nivel_9');
             	//alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
             	//alert("Vamos!");
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Encúentralos"){
		for (var i=0; i < 10; i++){
			if(Ti.App.Properties.getBool("TF_encuentralos"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_1 = Alloy.createController('encuentralos_nivel_1');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_2 = Alloy.createController('encuentralos_nivel_2');
             	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_3 = Alloy.createController('encuentralos_nivel_3');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_4 = Alloy.createController('encuentralos_nivel_4');
             	//alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_5 = Alloy.createController('encuentralos_nivel_5');
             	//alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_6 = Alloy.createController('encuentralos_nivel_6');
             	//alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_7 = Alloy.createController('encuentralos_nivel_7');
             	//alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_8 = Alloy.createController('encuentralos_nivel_8');
             	//alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_9 = Alloy.createController('encuentralos_nivel_9');
             	//alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	encuentralos_nivel_10 = Alloy.createController('encuentralos_nivel_10');
             	//alert("Vamos!");
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Objetos"){
		for (var i=0; i < 5; i++){
			if(Ti.App.Properties.getBool("TF_objetos"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	objetos_nivel_1 = Alloy.createController('objetos_nivel_1');
             	//alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	objetos_nivel_2 = Alloy.createController('objetos_nivel_2');
             	//alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	objetos_nivel_3 = Alloy.createController('objetos_nivel_3');
             	//alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	objetos_nivel_4 = Alloy.createController('objetos_nivel_4');
             	//alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	objetos_nivel_5 = Alloy.createController('objetos_nivel_5');
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Diferencias"){
		for (var i=0; i < 10; i++){
			if(Ti.App.Properties.getBool("TF_diferencias"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: (i+1),
				   height: "10%",
				   top: "6%",
				   left: "6%",
				   width: "10%",
				   backgroundColor: "#81F79F"
				});
			}
			view_body.add(button[i]);
    	}
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_1=Alloy.createController('diferencias_nivel_1').getView();
				diferencias_nivel_1.open();
             //alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
            	diferencias_nivel_2.open();
             //alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
				diferencias_nivel_3.open();
             //alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
				diferencias_nivel_4.open();
             //alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
				diferencias_nivel_5.open();
             //alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
				diferencias_nivel_6.open();
             //alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
				diferencias_nivel_7.open();
             //alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
				diferencias_nivel_8.open();
             //alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
				diferencias_nivel_9.open();
             //alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
				diferencias_nivel_10.open();
             //alert("Vamos!");
            }
        });
	}
	//
	if(Alloy.Globals.aux_juego=="Memorice"){
		if(Ti.App.Properties.getBool("TF_memorice"+0)==false){
			button[0] = Titanium.UI.createButton({
			   title: "Nivel 1",
			   height: "90",
			   top: "6%",
			   left: "6%",
			   width: "90",
			   backgroundColor: "#A4A4A4"
			});	
		}
		else{
			button[0] = Titanium.UI.createButton({
			   title: "Nivel 1",
			   height: "90",
			   top: "6%",
			   left: "6%",
			   width: "90",
			   backgroundColor: "#81F79F"
			});
		}
		view_body.add(button[0]);
		button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
            	memorice = Alloy.createController('memorice');
             	//alert("Vamos!");
            }
        });
    }
}
$.win.add(view_header);
$.win.add(view_body);