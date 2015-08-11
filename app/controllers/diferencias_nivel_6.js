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
var aux_ojo1_iz=false;
var aux_ojo1_dr=false;
var aux_ojo2_iz=false;
var aux_ojo2_dr=false;
var aux_bigote1_iz=false;
var aux_bigote1_dr=false;
var aux_bigote2_iz=false;
var aux_bigote2_dr=false;
var aux_collar_iz=false;
var aux_collar_dr=false;
var aux_sombra_iz=false;
var aux_sombra_dr=false;
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
		
		if(Ti.App.Properties.getBool("TF_diferencias6")==true){
			var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
				diferencias_nivel_7.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		 }
		 animacionGlobos = Alloy.createController('animacionGlobos');
	}
}
$.ojo1_iz.addEventListener('click',function(e){
	if(aux_ojo1_iz==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="#80FF0000";
		$.ojo1_dr.backgroundColor="#80FF0000";
		$.ojo2_iz.backgroundColor="#80FF0000";
		$.ojo2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ojo1_dr.addEventListener('click',function(e){
	if(aux_ojo1_dr==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="#80FF0000";
		$.ojo1_dr.backgroundColor="#80FF0000";
		$.ojo2_iz.backgroundColor="#80FF0000";
		$.ojo2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ojo2_iz.addEventListener('click',function(e){
	if(aux_ojo2_iz==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="#80FF0000";
		$.ojo1_dr.backgroundColor="#80FF0000";
		$.ojo2_iz.backgroundColor="#80FF0000";
		$.ojo2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ojo2_dr.addEventListener('click',function(e){
	if(aux_ojo2_dr==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="#80FF0000";
		$.ojo1_dr.backgroundColor="#80FF0000";
		$.ojo2_iz.backgroundColor="#80FF0000";
		$.ojo2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.bigote1_iz.addEventListener('click',function(e){
	if(aux_bigote1_iz==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="#80FF0000";
		$.bigote1_dr.backgroundColor="#80FF0000";
		$.bigote2_iz.backgroundColor="#80FF0000";
		$.bigote2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.bigote1_dr.addEventListener('click',function(e){
	if(aux_bigote1_dr==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="#80FF0000";
		$.bigote1_dr.backgroundColor="#80FF0000";
		$.bigote2_iz.backgroundColor="#80FF0000";
		$.bigote2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.bigote2_iz.addEventListener('click',function(e){
	if(aux_bigote2_iz==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="#80FF0000";
		$.bigote1_dr.backgroundColor="#80FF0000";
		$.bigote2_iz.backgroundColor="#80FF0000";
		$.bigote2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.bigote2_dr.addEventListener('click',function(e){
	if(aux_bigote2_dr==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="#80FF0000";
		$.bigote1_dr.backgroundColor="#80FF0000";
		$.bigote2_iz.backgroundColor="#80FF0000";
		$.bigote2_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.collar_iz.addEventListener('click',function(e){
	if(aux_collar_iz==false){
		aux_collar_iz=true;
		aux_collar_dr=true;
		punto=punto+1;
		$.collar_iz.backgroundColor="#80FF0000";
		$.collar_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.collar_dr.addEventListener('click',function(e){
	if(aux_collar_dr==false){
		aux_collar_iz=true;
		aux_collar_dr=true;
		punto=punto+1;
		$.collar_iz.backgroundColor="#80FF0000";
		$.collar_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.sombra_iz.addEventListener('click',function(e){
	if(aux_sombra_iz==false){
		aux_sombra_iz=true;
		aux_sombra_dr=true;
		punto=punto+1;
		$.sombra_iz.backgroundColor="#80FF0000";
		$.sombra_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.sombra_dr.addEventListener('click',function(e){
	if(aux_sombra_dr==false){
		aux_sombra_iz=true;
		aux_sombra_dr=true;
		punto=punto+1;
		$.sombra_iz.backgroundColor="#80FF0000";
		$.sombra_dr.backgroundColor="#80FF0000";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias6")==true){
		var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
		diferencias_nivel_7.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias6")==true){
		var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
		diferencias_nivel_7.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
