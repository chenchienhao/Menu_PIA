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
var aux_boca_iz=false;
var aux_boca_dr=false;
var aux_nariz_iz=false;
var aux_nariz_dr=false;
var aux_caneta_iz=false;
var aux_caneta_dr=false;
var aux_rueda_iz=false;
var aux_rueda_dr=false;
var aux_cola_iz=false;
var aux_cola_dr=false;

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
		
		if(Ti.App.Properties.getBool("TF_diferencias3")==true){
			var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
				diferencias_nivel_4.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		 }
		 animacionGlobos = Alloy.createController('animacionGlobos');
	}
}
$.boca_iz.addEventListener('click',function(e){
	if(aux_boca_iz==false){
		aux_boca_iz=true;
		aux_boca_dr=true;
		punto=punto+1;
		$.boca_iz.backgroundColor="#80FF0000";
		$.boca_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.boca_dr.addEventListener('click',function(e){
	if(aux_boca_dr==false){
		aux_boca_iz=true;
		aux_boca_dr=true;
		punto=punto+1;
		$.boca_iz.backgroundColor="#80FF0000";
		$.boca_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.nariz_iz.addEventListener('click',function(e){
	if(aux_nariz_iz==false){
		aux_nariz_iz=true;
		aux_nariz_dr=true;
		punto=punto+1;
		$.nariz_iz.backgroundColor="#80FF0000";
		$.nariz_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.nariz_dr.addEventListener('click',function(e){
	if(aux_nariz_dr==false){
		aux_nariz_iz=true;
		aux_nariz_dr=true;
		punto=punto+1;
		$.nariz_iz.backgroundColor="#80FF0000";
		$.nariz_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.caneta_iz.addEventListener('click',function(e){
	if(aux_caneta_iz==false){
		aux_caneta_iz=true;
		aux_caneta_dr=true;
		punto=punto+1;
		$.caneta_iz.backgroundColor="#80FF0000";
		$.caneta_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.caneta_dr.addEventListener('click',function(e){
	if(aux_caneta_dr==false){
		aux_caneta_iz=true;
		aux_caneta_dr=true;
		punto=punto+1;
		$.caneta_iz.backgroundColor="#80FF0000";
		$.caneta_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.rueda_iz.addEventListener('click',function(e){
	if(aux_rueda_iz==false){
		aux_rueda_iz=true;
		aux_rueda_dr=true;
		punto=punto+1;
		$.rueda_iz.backgroundColor="#80FF0000";
		$.rueda_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.rueda_dr.addEventListener('click',function(e){
	if(aux_rueda_dr==false){
		aux_rueda_iz=true;
		aux_rueda_dr=true;
		punto=punto+1;
		$.rueda_iz.backgroundColor="#80FF0000";
		$.rueda_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});

//
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
//

$.label_AT.addEventListener('click',function(e){
	$.win.close();
});
$.anterior.addEventListener('click',function(e){
	$.win.close();
});
$.label_SG.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias3")==true){
		var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
		diferencias_nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias3")==true){
		var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
		diferencias_nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
