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
var aux_cara_iz=false;
var aux_cara_dr=false;
var aux_nariz_iz=false;
var aux_nariz_dr=false;
var aux_diario_iz_1=false;
var aux_diario_dr_1=false;
var aux_diario_iz_2=false;
var aux_diario_dr_2=false;
var aux_brazo_iz=false;
var aux_brazo_dr=false;

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
		
		if(Ti.App.Properties.getBool("TF_diferencias2")==true){
			var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
				diferencias_nivel_3.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		 }
		 animacionGlobos = Alloy.createController('animacionGlobos');
	}
}
$.cara_iz.addEventListener('click',function(e){
	if(aux_cara_iz==false){
		aux_cara_iz=true;
		aux_cara_dr=true;
		punto=punto+1;
		$.cara_iz.backgroundColor="#80FF0000";
		$.cara_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.cara_dr.addEventListener('click',function(e){
	if(aux_cara_dr==false){
		aux_cara_iz=true;
		aux_cara_dr=true;
		punto=punto+1;
		$.cara_iz.backgroundColor="#80FF0000";
		$.cara_dr.backgroundColor="#80FF0000";
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
$.diario_iz_1.addEventListener('click',function(e){
	if(aux_diario_iz_1==false){
		aux_diario_iz_1=true;
		aux_diario_dr_1=true;
		punto=punto+1;
		$.diario_iz_1.backgroundColor="#80FF0000";
		$.diario_dr_1.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.diario_dr_1.addEventListener('click',function(e){
	if(aux_diario_dr_1==false){
		aux_diario_iz_1=true;
		aux_diario_dr_1=true;
		punto=punto+1;
		$.diario_iz_1.backgroundColor="#80FF0000";
		$.diario_dr_1.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.diario_iz_2.addEventListener('click',function(e){
	if(aux_diario_iz_2==false){
		aux_diario_iz_2=true;
		aux_diario_dr_2=true;
		punto=punto+1;
		$.diario_iz_2.backgroundColor="#80FF0000";
		$.diario_dr_2.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.diario_dr_2.addEventListener('click',function(e){
	if(aux_diario_dr_2==false){
		aux_diario_iz_2=true;
		aux_diario_dr_2=true;
		punto=punto+1;
		$.diario_iz_2.backgroundColor="#80FF0000";
		$.diario_dr_2.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.brazo_iz.addEventListener('click',function(e){
	if(aux_brazo_iz==false){
		aux_brazo_iz=true;
		aux_brazo_dr=true;
		punto=punto+1;
		$.brazo_iz.backgroundColor="#80FF0000";
		$.brazo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.brazo_dr.addEventListener('click',function(e){
	if(aux_brazo_dr==false){
		aux_brazo_iz=true;
		aux_brazo_dr=true;
		punto=punto+1;
		$.brazo_iz.backgroundColor="#80FF0000";
		$.brazo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.label_AT.addEventListener('click',function(e){
	$.win.close();
});
$.anterior.addEventListener('click',function(e){
	$.win.close();
});
$.label_SG.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias2")==true){
		var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
		diferencias_nivel_3.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	Ti.API.info("valor :"+Ti.App.Properties.getBool("TF_diferencias2"));
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias2")==true){
		var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
		diferencias_nivel_3.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
