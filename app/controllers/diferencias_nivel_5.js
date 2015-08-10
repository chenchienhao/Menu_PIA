
var aux_pelo_iz=false;
var aux_pelo_dr=false;
var aux_nariz_iz=false;
var aux_nariz_dr=false;
var aux_ropaarriba_iz=false;
var aux_ropaarriba_dr=false;
var aux_ropaabajo_iz=false;
var aux_ropaabajo_dr=false;
var aux_dedo_iz=false;
var aux_dedo_dr=false;
var aux_cinta_iz=false;
var aux_cinta_dr=false;

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
		
		Ti.App.Properties.removeProperty("TF_diferencias5");
		Ti.App.Properties.setBool("TF_diferencias5",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
				diferencias_nivel_6.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
			diferencias_nivel_6.open();
			clearInterval(change_view);
		},5000);
	}
}
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
$.ropaarriba_iz.addEventListener('click',function(e){
	if(aux_ropaarriba_iz==false){
		aux_ropaarriba_iz=true;
		aux_ropaarriba_dr=true;
		punto=punto+1;
		$.ropaarriba_iz.backgroundColor="#80FF0000";
		$.ropaarriba_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ropaarriba_dr.addEventListener('click',function(e){
	if(aux_ropaarriba_dr==false){
		aux_ropaarriba_iz=true;
		aux_ropaarriba_dr=true;
		punto=punto+1;
		$.ropaarriba_iz.backgroundColor="#80FF0000";
		$.ropaarriba_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ropaabajo_iz.addEventListener('click',function(e){
	if(aux_ropaabajo_iz==false){
		aux_ropaabajo_iz=true;
		aux_ropaabajo_dr=true;
		punto=punto+1;
		$.ropaabajo_iz.backgroundColor="#80FF0000";
		$.ropaabajo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ropaabajo_dr.addEventListener('click',function(e){
	if(aux_ropaabajo_dr==false){
		aux_ropaabajo_iz=true;
		aux_ropaabajo_dr=true;
		punto=punto+1;
		$.ropaabajo_iz.backgroundColor="#80FF0000";
		$.ropaabajo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});

//
$.dedo_iz.addEventListener('click',function(e){
	if(aux_dedo_iz==false){
		aux_dedo_iz=true;
		aux_dedo_dr=true;
		punto=punto+1;
		$.dedo_iz.backgroundColor="#80FF0000";
		$.dedo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.dedo_dr.addEventListener('click',function(e){
	if(aux_dedo_dr==false){
		aux_dedo_iz=true;
		aux_dedo_dr=true;
		punto=punto+1;
		$.dedo_iz.backgroundColor="#80FF0000";
		$.dedo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
//
$.cinta_iz.addEventListener('click',function(e){
	if(aux_cinta_iz==false){
		aux_cinta_iz=true;
		aux_cinta_dr=true;
		punto=punto+1;
		$.cinta_iz.backgroundColor="#80FF0000";
		$.cinta_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.cinta_dr.addEventListener('click',function(e){
	if(aux_cinta_dr==false){
		aux_cinta_iz=true;
		aux_cinta_dr=true;
		punto=punto+1;
		$.cinta_iz.backgroundColor="#80FF0000";
		$.cinta_dr.backgroundColor="#80FF0000";
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
	if(punto==6||Ti.App.Properties.getBool("TF_diferencias5")==true){
		var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
		diferencias_nivel_6.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==6||Ti.App.Properties.getBool("TF_diferencias5")==true){
		var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
		diferencias_nivel_6.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});

