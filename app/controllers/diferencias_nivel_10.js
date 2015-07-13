
var aux_cata_bigote_iz=false;
var aux_cata_bigote_dr=false;
var aux_cata_cola_iz=false;
var aux_cata_cola_dr=false;
var aux_pez_iz=false;
var aux_pez_dr=false;
var aux_perro_ojo_iz=false;
var aux_perro_ojo_dr=false;
var aux_perro_cola_iz=false;
var aux_perro_cola_dr=false;
var aux_pelota_iz=false;
var aux_pelota_dr=false;

var punto=0;

function estrella (punto) {
	if(punto==0){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==5){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==6){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_6.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			message: '¡Bien! ¡Ya terminó todos los niveles!',
			cancel: 1,
    		buttonNames: ['OK', 'Cacelar']
		});
		dialog.show();
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var inicio=Alloy.createController('index').getView();
				inicio.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var inicio=Alloy.createController('index').getView();
			inicio.open();
			clearInterval(change_view);
		},5000);
		var diferencias_felicidad=Alloy.createController('diferencias_felicidad').getView();
		diferencias_felicidad.open();
	}
}
$.cata_bigote_iz.add.addEventListener('click',function(e){
	if(aux_cata_bigote_iz==false){
		aux_cata_bigote_iz=true;
		aux_cata_bigote_dr=true;
		punto=punto+1;
		$.cata_bigote_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cata_bigote_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cata_bigote_dr.add.addEventListener('click',function(e){
	if(aux_cata_bigote_dr==false){
		aux_cata_bigote_iz=true;
		aux_cata_bigote_dr=true;
		punto=punto+1;
		$.cata_bigote_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cata_bigote_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cata_cola_iz.add.addEventListener('click',function(e){
	if(aux_cata_cola_iz==false){
		aux_cata_cola_iz=true;
		aux_cata_cola_dr=true;
		punto=punto+1;
		$.cata_cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cata_cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cata_cola_dr.add.addEventListener('click',function(e){
	if(aux_cata_cola_dr==false){
		aux_cata_cola_iz=true;
		aux_cata_cola_dr=true;
		punto=punto+1;
		$.cata_cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cata_cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.pez_iz.add.addEventListener('click',function(e){
	if(aux_pez_iz==false){
		aux_pez_iz=true;
		aux_pez_dr=true;
		punto=punto+1;
		$.pez_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pez_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.pez_dr.add.addEventListener('click',function(e){
	if(aux_pez_dr==false){
		aux_pez_iz=true;
		aux_pez_dr=true;
		punto=punto+1;
		$.pez_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pez_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.perro_ojo_iz.add.addEventListener('click',function(e){
	if(aux_perro_ojo_iz==false){
		aux_perro_ojo_iz=true;
		aux_perro_ojo_dr=true;
		punto=punto+1;
		$.perro_ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.perro_ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.perro_ojo_dr.add.addEventListener('click',function(e){
	if(aux_perro_ojo_dr==false){
		aux_perro_ojo_iz=true;
		aux_perro_ojo_dr=true;
		punto=punto+1;
		$.perro_ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.perro_ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

//
$.perro_cola_iz.add.addEventListener('click',function(e){
	if(aux_perro_cola_iz==false){
		aux_perro_cola_iz=true;
		aux_perro_cola_dr=true;
		punto=punto+1;
		$.perro_cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.perro_cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.perro_cola_dr.add.addEventListener('click',function(e){
	if(aux_perro_cola_dr==false){
		aux_perro_cola_iz=true;
		aux_perro_cola_dr=true;
		punto=punto+1;
		$.perro_cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.perro_cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//
$.pelota_iz.add.addEventListener('click',function(e){
	if(aux_pelota_iz==false){
		aux_pelota_iz=true;
		aux_pelota_dr=true;
		punto=punto+1;
		$.pelota_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pelota_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.pelota_dr.add.addEventListener('click',function(e){
	if(aux_pelota_dr==false){
		aux_pelota_iz=true;
		aux_pelota_dr=true;
		punto=punto+1;
		$.pelota_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pelota_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

$.label_AT.add.addEventListener('click',function(e){
	$.win.close();
});
$.anterior.add.addEventListener('click',function(e){
	$.win.close();
});
$.label_SG.add.addEventListener('click',function(e){
	if(punto==6){
		var dialog_out = Ti.UI.createAlertDialog({
			title: 'No hay más nivel',
			message: '¿Quiere volver a menú principal?',
			cancel: 1,
    		buttonNames: ['OK', 'NO']
		});
		dialog_out.show();
		dialog_out.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				Ti.API.info('The cancel button was clicked');
		    }
			else{
				var inicio=Alloy.createController('index').getView();
				inicio.open();
			}	
		});
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	if(punto==6){
		var dialog_out = Ti.UI.createAlertDialog({
			title: 'No hay más nivel',
			message: '¿Quiere volver a menú principal?',
			cancel: 1,
    		buttonNames: ['OK', 'NO']
		});
		dialog_out.show();
		dialog_out.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				Ti.API.info('The cancel button was clicked');
		    }
			else{
				var inicio=Alloy.createController('index').getView();
				inicio.open();
			}	
		});
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
