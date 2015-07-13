
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
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==5){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			message: '¡Bien! ¡Vamos a siguiente nivel!',
			cancel: 1,
    		buttonNames: ['Vamos', 'Cacelar']
		});
		dialog.show();
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_diferencias3");
		Ti.App.Properties.setBool("TF_diferencias3",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
				diferencias_nivel_4.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
			diferencias_nivel_4.open();
			clearInterval(change_view);
		},5000);
	}
}
$.boca_iz.add.addEventListener('click',function(e){
	if(aux_boca_iz==false){
		aux_boca_iz=true;
		aux_boca_dr=true;
		punto=punto+1;
		$.boca_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.boca_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.boca_dr.add.addEventListener('click',function(e){
	if(aux_boca_dr==false){
		aux_boca_iz=true;
		aux_boca_dr=true;
		punto=punto+1;
		$.boca_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.boca_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.nariz_iz.add.addEventListener('click',function(e){
	if(aux_nariz_iz==false){
		aux_nariz_iz=true;
		aux_nariz_dr=true;
		punto=punto+1;
		$.nariz_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.nariz_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.nariz_dr.add.addEventListener('click',function(e){
	if(aux_nariz_dr==false){
		aux_nariz_iz=true;
		aux_nariz_dr=true;
		punto=punto+1;
		$.nariz_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.nariz_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.caneta_iz.add.addEventListener('click',function(e){
	if(aux_caneta_iz==false){
		aux_caneta_iz=true;
		aux_caneta_dr=true;
		punto=punto+1;
		$.caneta_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.caneta_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.caneta_dr.add.addEventListener('click',function(e){
	if(aux_caneta_dr==false){
		aux_caneta_iz=true;
		aux_caneta_dr=true;
		punto=punto+1;
		$.caneta_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.caneta_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.rueda_iz.add.addEventListener('click',function(e){
	if(aux_rueda_iz==false){
		aux_rueda_iz=true;
		aux_rueda_dr=true;
		punto=punto+1;
		$.rueda_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.rueda_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.rueda_dr.add.addEventListener('click',function(e){
	if(aux_rueda_dr==false){
		aux_rueda_iz=true;
		aux_rueda_dr=true;
		punto=punto+1;
		$.rueda_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.rueda_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

//
$.cola_iz.add.addEventListener('click',function(e){
	if(aux_cola_iz==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cola_dr.add.addEventListener('click',function(e){
	if(aux_cola_dr==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//

$.label_AT.add.addEventListener('click',function(e){
	$.win.close();
});
$.anterior.add.addEventListener('click',function(e){
	$.win.close();
});
$.label_SG.add.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias3")==true){
		var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
		diferencias_nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias3")==true){
		var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
		diferencias_nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
