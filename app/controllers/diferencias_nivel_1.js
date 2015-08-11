var sonido = Ti.Media.createSound({url:"/images/encabezados/diferencias_dibujos.m4a"});

var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/diferencias_dibujos.png',
 	top: '5%', 
 	left: '15%',
	width: '70%',
	height: '50%'
});

$.view_header.add(encabezado);

var mensaje = 0;
encabezado.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido.play();
		mensaje=mensaje+1;
	}
});
var aux_ojo_iz=false;
var aux_ojo_dr=false;
var aux_circulo_iz=false;
var aux_circulo_dr=false;
var aux_cola_iz=false;
var aux_cola_dr=false;
var aux_fuego_iz=false;
var aux_fuego_dr=false;
var aux_nube_iz=false;
var aux_nube_dr=false;

var punto=0;

function estrella (punto) {
	if(punto==0){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==5){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		
		if(Ti.App.Properties.getBool("TF_diferencias1")==true){
			var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
				diferencias_nivel_2.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		 }
		 animacionGlobos = Alloy.createController('animacionGlobos');
	}
}
$.ojo_iz.addEventListener('click',function(e){
	if(aux_ojo_iz==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="#80FF0000";
		$.ojo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ojo_dr.addEventListener('click',function(e){
	if(aux_ojo_dr==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="#80FF0000";
		$.ojo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.circulo_iz.addEventListener('click',function(e){
	if(aux_circulo_iz==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="#80FF0000";
		$.circulo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.circulo_dr.addEventListener('click',function(e){
	if(aux_circulo_dr==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="#80FF0000";
		$.circulo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.cola_iz.addEventListener('click',function(e){
	if(aux_cola_iz==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="#80FF0000";
		$.cola_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.cola_dr.addEventListener('click',function(e){
	if(aux_cola_dr==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="#80FF0000";
		$.cola_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.fuego_iz.addEventListener('click',function(e){
	if(aux_fuego_iz==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="#80FF0000";
		$.fuego_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.fuego_dr.addEventListener('click',function(e){
	if(aux_fuego_dr==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="#80FF0000";
		$.fuego_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
//
$.nube_iz.addEventListener('click',function(e){
	if(aux_nube_iz==false){
		aux_nube_iz=true;
		aux_nube_dr=true;
		punto=punto+1;
		$.nube_iz.backgroundColor="#80FF0000";
		$.nube_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.nube_dr.addEventListener('click',function(e){
	if(aux_nube_dr==false){
		aux_nube_iz=true;
		aux_nube_dr=true;
		punto=punto+1;
		$.nube_iz.backgroundColor="#80FF0000";
		$.nube_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
//
$.label_AT.addEventListener('click',function(e){
	var inicio=Alloy.createController('index').getView();
	inicio.open();
});
$.anterior.addEventListener('click',function(e){
	var inicio=Alloy.createController('index').getView();
	inicio.open();
});
$.label_SG.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias1")==true){
		var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
		diferencias_nivel_2.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	Ti.API.info("valor :"+Ti.App.Properties.getBool("TF_diferencias1"));
	//El caso desbloqueado
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias1")==true){
	var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
		diferencias_nivel_2.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.diferencias_nivel_1.open();