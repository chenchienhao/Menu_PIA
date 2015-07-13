
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
		Ti.App.Properties.removeProperty("TF_diferencias1");
		Ti.App.Properties.setBool("TF_diferencias1",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
				diferencias_nivel_2.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
			diferencias_nivel_2.open();
			clearInterval(change_view);
		},5000);
	}
}
$.ojo_iz.add.addEventListener('click',function(e){
	if(aux_ojo_iz==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ojo_dr.add.addEventListener('click',function(e){
	if(aux_ojo_dr==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.circulo_iz.add.addEventListener('click',function(e){
	if(aux_circulo_iz==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.circulo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.circulo_dr.add.addEventListener('click',function(e){
	if(aux_circulo_dr==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.circulo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
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
$.fuego_iz.add.addEventListener('click',function(e){
	if(aux_fuego_iz==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.fuego_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.fuego_dr.add.addEventListener('click',function(e){
	if(aux_fuego_dr==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.fuego_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//
$.nube_iz.add.addEventListener('click',function(e){
	if(aux_nube_iz==false){
		aux_nube_iz=true;
		aux_nube_dr=true;
		punto=punto+1;
		$.nube_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.nube_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.nube_dr.add.addEventListener('click',function(e){
	if(aux_nube_dr==false){
		aux_nube_iz=true;
		aux_nube_dr=true;
		punto=punto+1;
		$.nube_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.nube_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//
$.label_AT.add.addEventListener('click',function(e){
	var inicio=Alloy.createController('index').getView();
	inicio.open();
});
$.anterior.add.addEventListener('click',function(e){
	var inicio=Alloy.createController('index').getView();
	inicio.open();
});
$.label_SG.add.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias1")==true){
		var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
		diferencias_nivel_2.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
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