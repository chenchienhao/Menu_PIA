
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
		Ti.App.Properties.removeProperty("TF_diferencias7");
		Ti.App.Properties.setBool("TF_diferencias7",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
				diferencias_nivel_8.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
			diferencias_nivel_8.open();
			clearInterval(change_view);
		},5000);
	}
}
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
$.puerta_iz.add.addEventListener('click',function(e){
	if(aux_puerta_iz==false){
		aux_puerta_iz=true;
		aux_puerta_dr=true;
		punto=punto+1;
		$.puerta_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.puerta_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.puerta_dr.add.addEventListener('click',function(e){
	if(aux_puerta_dr==false){
		aux_puerta_iz=true;
		aux_puerta_dr=true;
		punto=punto+1;
		$.puerta_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.puerta_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.carro_iz.add.addEventListener('click',function(e){
	if(aux_carro_iz==false){
		aux_carro_iz=true;
		aux_carro_dr=true;
		punto=punto+1;
		$.carro_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.carro_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.carro_dr.add.addEventListener('click',function(e){
	if(aux_carro_dr==false){
		aux_carro_iz=true;
		aux_carro_dr=true;
		punto=punto+1;
		$.carro_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.carro_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.aveja_iz.add.addEventListener('click',function(e){
	if(aux_aveja_iz==false){
		aux_aveja_iz=true;
		aux_aveja_dr=true;
		punto=punto+1;
		$.aveja_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.aveja_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.aveja_dr.add.addEventListener('click',function(e){
	if(aux_aveja_dr==false){
		aux_aveja_iz=true;
		aux_aveja_dr=true;
		punto=punto+1;
		$.aveja_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.aveja_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

//
$.flor_iz.add.addEventListener('click',function(e){
	if(aux_flor_iz==false){
		aux_flor_iz=true;
		aux_flor_dr=true;
		punto=punto+1;
		$.flor_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.flor_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.flor_dr.add.addEventListener('click',function(e){
	if(aux_flor_dr==false){
		aux_flor_iz=true;
		aux_flor_dr=true;
		punto=punto+1;
		$.flor_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.flor_dr.backgroundColor="rgba(255,0,0,0.5)";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias7")==true){
		var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
		diferencias_nivel_8.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias7")==true){
		var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
		diferencias_nivel_8.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
