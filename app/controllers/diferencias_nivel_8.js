
var aux_maliposa_iz=false;
var aux_maliposa_dr=false;
var aux_chinita_iz=false;
var aux_chinita_dr=false;
var aux_pelo_iz=false;
var aux_pelo_dr=false;
var aux_hojas_iz=false;
var aux_hojas_dr=false;
var aux_tierra_iz=false;
var aux_tierra_dr=false;
var aux_caracol_iz=false;
var aux_caracol_dr=false;

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
			message: '¡Bien! ¡Vamos a siguiente nivel!',
			cancel: 1,
    		buttonNames: ['Vamos', 'Cacelar']
		});
		dialog.show();
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_diferencias8");
		Ti.App.Properties.setBool("TF_diferencias8",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
				diferencias_nivel_9.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
			diferencias_nivel_9.open();
			clearInterval(change_view);
		},5000);
	}
}
$.maliposa_iz.add.addEventListener('click',function(e){
	if(aux_maliposa_iz==false){
		aux_maliposa_iz=true;
		aux_maliposa_dr=true;
		punto=punto+1;
		$.maliposa_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.maliposa_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.maliposa_dr.add.addEventListener('click',function(e){
	if(aux_maliposa_dr==false){
		aux_maliposa_iz=true;
		aux_maliposa_dr=true;
		punto=punto+1;
		$.maliposa_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.maliposa_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.chinita_iz.add.addEventListener('click',function(e){
	if(aux_chinita_iz==false){
		aux_chinita_iz=true;
		aux_chinita_dr=true;
		punto=punto+1;
		$.chinita_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.chinita_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.chinita_dr.add.addEventListener('click',function(e){
	if(aux_chinita_dr==false){
		aux_chinita_iz=true;
		aux_chinita_dr=true;
		punto=punto+1;
		$.chinita_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.chinita_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.pelo_iz.add.addEventListener('click',function(e){
	if(aux_pelo_iz==false){
		aux_pelo_iz=true;
		aux_pelo_dr=true;
		punto=punto+1;
		$.pelo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pelo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.pelo_dr.add.addEventListener('click',function(e){
	if(aux_pelo_dr==false){
		aux_pelo_iz=true;
		aux_pelo_dr=true;
		punto=punto+1;
		$.pelo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pelo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.hojas_iz.add.addEventListener('click',function(e){
	if(aux_hojas_iz==false){
		aux_hojas_iz=true;
		aux_hojas_dr=true;
		punto=punto+1;
		$.hojas_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.hojas_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.hojas_dr.add.addEventListener('click',function(e){
	if(aux_hojas_dr==false){
		aux_hojas_iz=true;
		aux_hojas_dr=true;
		punto=punto+1;
		$.hojas_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.hojas_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

//
$.tierra_iz.add.addEventListener('click',function(e){
	if(aux_tierra_iz==false){
		aux_tierra_iz=true;
		aux_tierra_dr=true;
		punto=punto+1;
		$.tierra_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.tierra_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.tierra_dr.add.addEventListener('click',function(e){
	if(aux_tierra_dr==false){
		aux_tierra_iz=true;
		aux_tierra_dr=true;
		punto=punto+1;
		$.tierra_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.tierra_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//
$.caracol_iz.add.addEventListener('click',function(e){
	if(aux_caracol_iz==false){
		aux_caracol_iz=true;
		aux_caracol_dr=true;
		punto=punto+1;
		$.caracol_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.caracol_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.caracol_dr.add.addEventListener('click',function(e){
	if(aux_caracol_dr==false){
		aux_caracol_iz=true;
		aux_caracol_dr=true;
		punto=punto+1;
		$.caracol_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.caracol_dr.backgroundColor="rgba(255,0,0,0.5)";
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
	if(punto==6||Ti.App.Properties.getBool("TF_diferencias8")==true){
		var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
		diferencias_nivel_9.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	if(punto==6||Ti.App.Properties.getBool("TF_diferencias8")==true){
		var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
		diferencias_nivel_9.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
