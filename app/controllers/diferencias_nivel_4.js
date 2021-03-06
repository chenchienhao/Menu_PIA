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
var aux_sol_iz=false;
var aux_sol_dr=false;
var aux_piramide_iz=false;
var aux_piramide_dr=false;
var aux_sombrero_iz=false;
var aux_sombrero_dr=false;
var aux_zapato_iz=false;
var aux_zapato_dr=false;
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
		
		if(Ti.App.Properties.getBool("TF_diferencias4")==true){
			var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
				diferencias_nivel_5.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		 }
		 animacionGlobos = Alloy.createController('animacionGlobos');
	}
}
$.sol_iz.addEventListener('click',function(e){
	if(aux_sol_iz==false){
		aux_sol_iz=true;
		aux_sol_dr=true;
		punto=punto+1;
		$.sol_iz.backgroundColor="#80FF0000";
		$.sol_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.sol_dr.addEventListener('click',function(e){
	if(aux_sol_dr==false){
		aux_sol_iz=true;
		aux_sol_dr=true;
		punto=punto+1;
		$.sol_iz.backgroundColor="#80FF0000";
		$.sol_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.piramide_iz.addEventListener('click',function(e){
	if(aux_piramide_iz==false){
		aux_piramide_iz=true;
		aux_piramide_dr=true;
		punto=punto+1;
		$.piramide_iz.backgroundColor="#80FF0000";
		$.piramide_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.piramide_dr.addEventListener('click',function(e){
	if(aux_piramide_dr==false){
		aux_piramide_iz=true;
		aux_piramide_dr=true;
		punto=punto+1;
		$.piramide_iz.backgroundColor="#80FF0000";
		$.piramide_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.sombrero_iz.addEventListener('click',function(e){
	if(aux_sombrero_iz==false){
		aux_sombrero_iz=true;
		aux_sombrero_dr=true;
		punto=punto+1;
		$.sombrero_iz.backgroundColor="#80FF0000";
		$.sombrero_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.sombrero_dr.addEventListener('click',function(e){
	if(aux_sombrero_dr==false){
		aux_sombrero_iz=true;
		aux_sombrero_dr=true;
		punto=punto+1;
		$.sombrero_iz.backgroundColor="#80FF0000";
		$.sombrero_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.zapato_iz.addEventListener('click',function(e){
	if(aux_zapato_iz==false){
		aux_zapato_iz=true;
		aux_zapato_dr=true;
		punto=punto+1;
		$.zapato_iz.backgroundColor="#80FF0000";
		$.zapato_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.zapato_dr.addEventListener('click',function(e){
	if(aux_zapato_dr==false){
		aux_zapato_iz=true;
		aux_zapato_dr=true;
		punto=punto+1;
		$.zapato_iz.backgroundColor="#80FF0000";
		$.zapato_dr.backgroundColor="#80FF0000";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias4")==true){
		var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
		diferencias_nivel_5.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias4")==true){
		var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
		diferencias_nivel_5.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
