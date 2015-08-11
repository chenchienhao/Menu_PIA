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
var aux_rueda_iz=false;
var aux_rueda_dr=false;
var aux_puerta_iz=false;
var aux_puerta_dr=false;
var aux_carro_iz=false;
var aux_carro_dr=false;
var aux_aveja_iz=false;
var aux_aveja_dr=false;
var aux_flor_iz=false;
var aux_flor_dr=false;

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
		
		if(Ti.App.Properties.getBool("TF_diferencias7")==true){
			var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
				diferencias_nivel_8.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		 }
		 animacionGlobos = Alloy.createController('animacionGlobos');
	}
}
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
$.puerta_iz.addEventListener('click',function(e){
	if(aux_puerta_iz==false){
		aux_puerta_iz=true;
		aux_puerta_dr=true;
		punto=punto+1;
		$.puerta_iz.backgroundColor="#80FF0000";
		$.puerta_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.puerta_dr.addEventListener('click',function(e){
	if(aux_puerta_dr==false){
		aux_puerta_iz=true;
		aux_puerta_dr=true;
		punto=punto+1;
		$.puerta_iz.backgroundColor="#80FF0000";
		$.puerta_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.carro_iz.addEventListener('click',function(e){
	if(aux_carro_iz==false){
		aux_carro_iz=true;
		aux_carro_dr=true;
		punto=punto+1;
		$.carro_iz.backgroundColor="#80FF0000";
		$.carro_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.carro_dr.addEventListener('click',function(e){
	if(aux_carro_dr==false){
		aux_carro_iz=true;
		aux_carro_dr=true;
		punto=punto+1;
		$.carro_iz.backgroundColor="#80FF0000";
		$.carro_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.aveja_iz.addEventListener('click',function(e){
	if(aux_aveja_iz==false){
		aux_aveja_iz=true;
		aux_aveja_dr=true;
		punto=punto+1;
		$.aveja_iz.backgroundColor="#80FF0000";
		$.aveja_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.aveja_dr.addEventListener('click',function(e){
	if(aux_aveja_dr==false){
		aux_aveja_iz=true;
		aux_aveja_dr=true;
		punto=punto+1;
		$.aveja_iz.backgroundColor="#80FF0000";
		$.aveja_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});

//
$.flor_iz.addEventListener('click',function(e){
	if(aux_flor_iz==false){
		aux_flor_iz=true;
		aux_flor_dr=true;
		punto=punto+1;
		$.flor_iz.backgroundColor="#80FF0000";
		$.flor_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.flor_dr.addEventListener('click',function(e){
	if(aux_flor_dr==false){
		aux_flor_iz=true;
		aux_flor_dr=true;
		punto=punto+1;
		$.flor_iz.backgroundColor="#80FF0000";
		$.flor_dr.backgroundColor="#80FF0000";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias7")==true){
		var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
		diferencias_nivel_8.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias7")==true){
		var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
		diferencias_nivel_8.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
