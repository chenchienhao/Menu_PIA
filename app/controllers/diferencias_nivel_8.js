
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
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==5){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_vacio.png";
	}
	if(punto==6){
		$.estrella_1.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
		$.estrella_6.backgroundImage="/images/Diferencias/Estrella_amarilla.png";
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
$.maliposa_iz.addEventListener('click',function(e){
	if(aux_maliposa_iz==false){
		aux_maliposa_iz=true;
		aux_maliposa_dr=true;
		punto=punto+1;
		$.maliposa_iz.backgroundColor="#80FF0000";
		$.maliposa_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.maliposa_dr.addEventListener('click',function(e){
	if(aux_maliposa_dr==false){
		aux_maliposa_iz=true;
		aux_maliposa_dr=true;
		punto=punto+1;
		$.maliposa_iz.backgroundColor="#80FF0000";
		$.maliposa_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.chinita_iz.addEventListener('click',function(e){
	if(aux_chinita_iz==false){
		aux_chinita_iz=true;
		aux_chinita_dr=true;
		punto=punto+1;
		$.chinita_iz.backgroundColor="#80FF0000";
		$.chinita_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.chinita_dr.addEventListener('click',function(e){
	if(aux_chinita_dr==false){
		aux_chinita_iz=true;
		aux_chinita_dr=true;
		punto=punto+1;
		$.chinita_iz.backgroundColor="#80FF0000";
		$.chinita_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.pelo_iz.addEventListener('click',function(e){
	if(aux_pelo_iz==false){
		aux_pelo_iz=true;
		aux_pelo_dr=true;
		punto=punto+1;
		$.pelo_iz.backgroundColor="#80FF0000";
		$.pelo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.pelo_dr.addEventListener('click',function(e){
	if(aux_pelo_dr==false){
		aux_pelo_iz=true;
		aux_pelo_dr=true;
		punto=punto+1;
		$.pelo_iz.backgroundColor="#80FF0000";
		$.pelo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.hojas_iz.addEventListener('click',function(e){
	if(aux_hojas_iz==false){
		aux_hojas_iz=true;
		aux_hojas_dr=true;
		punto=punto+1;
		$.hojas_iz.backgroundColor="#80FF0000";
		$.hojas_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.hojas_dr.addEventListener('click',function(e){
	if(aux_hojas_dr==false){
		aux_hojas_iz=true;
		aux_hojas_dr=true;
		punto=punto+1;
		$.hojas_iz.backgroundColor="#80FF0000";
		$.hojas_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});

//
$.tierra_iz.addEventListener('click',function(e){
	if(aux_tierra_iz==false){
		aux_tierra_iz=true;
		aux_tierra_dr=true;
		punto=punto+1;
		$.tierra_iz.backgroundColor="#80FF0000";
		$.tierra_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.tierra_dr.addEventListener('click',function(e){
	if(aux_tierra_dr==false){
		aux_tierra_iz=true;
		aux_tierra_dr=true;
		punto=punto+1;
		$.tierra_iz.backgroundColor="#80FF0000";
		$.tierra_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
//
$.caracol_iz.addEventListener('click',function(e){
	if(aux_caracol_iz==false){
		aux_caracol_iz=true;
		aux_caracol_dr=true;
		punto=punto+1;
		$.caracol_iz.backgroundColor="#80FF0000";
		$.caracol_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.caracol_dr.addEventListener('click',function(e){
	if(aux_caracol_dr==false){
		aux_caracol_iz=true;
		aux_caracol_dr=true;
		punto=punto+1;
		$.caracol_iz.backgroundColor="#80FF0000";
		$.caracol_dr.backgroundColor="#80FF0000";
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
	if(punto==6||Ti.App.Properties.getBool("TF_diferencias8")==true){
		var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
		diferencias_nivel_9.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==6||Ti.App.Properties.getBool("TF_diferencias8")==true){
		var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
		diferencias_nivel_9.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
