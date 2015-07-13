
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
		Ti.App.Properties.removeProperty("TF_diferencias6");
		Ti.App.Properties.setBool("TF_diferencias6",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
				diferencias_nivel_7.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
			diferencias_nivel_7.open();
			clearInterval(change_view);
		},5000);
	}
}
$.ojo1_iz.add.addEventListener('click',function(e){
	if(aux_ojo1_iz==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ojo1_dr.add.addEventListener('click',function(e){
	if(aux_ojo1_dr==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ojo2_iz.add.addEventListener('click',function(e){
	if(aux_ojo2_iz==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ojo2_dr.add.addEventListener('click',function(e){
	if(aux_ojo2_dr==false){
		aux_ojo1_iz=true;
		aux_ojo1_dr=true;
		aux_ojo2_iz=true;
		aux_ojo2_dr=true;
		punto=punto+1;
		$.ojo1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.bigote1_iz.add.addEventListener('click',function(e){
	if(aux_bigote1_iz==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.bigote1_dr.add.addEventListener('click',function(e){
	if(aux_bigote1_dr==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.bigote2_iz.add.addEventListener('click',function(e){
	if(aux_bigote2_iz==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.bigote2_dr.add.addEventListener('click',function(e){
	if(aux_bigote2_dr==false){
		aux_bigote1_iz=true;
		aux_bigote1_dr=true;
		aux_bigote2_iz=true;
		aux_bigote2_dr=true;
		punto=punto+1;
		$.bigote1_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote1_dr.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.bigote2_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.collar_iz.add.addEventListener('click',function(e){
	if(aux_collar_iz==false){
		aux_collar_iz=true;
		aux_collar_dr=true;
		punto=punto+1;
		$.collar_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.collar_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.collar_dr.add.addEventListener('click',function(e){
	if(aux_collar_dr==false){
		aux_collar_iz=true;
		aux_collar_dr=true;
		punto=punto+1;
		$.collar_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.collar_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.sombra_iz.add.addEventListener('click',function(e){
	if(aux_sombra_iz==false){
		aux_sombra_iz=true;
		aux_sombra_dr=true;
		punto=punto+1;
		$.sombra_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.sombra_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.sombra_dr.add.addEventListener('click',function(e){
	if(aux_sombra_dr==false){
		aux_sombra_iz=true;
		aux_sombra_dr=true;
		punto=punto+1;
		$.sombra_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.sombra_dr.backgroundColor="rgba(255,0,0,0.5)";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias6")==true){
		var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
		diferencias_nivel_7.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias6")==true){
		var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
		diferencias_nivel_7.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
