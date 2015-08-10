
var aux_pelo_iz=false;
var aux_pelo_dr=false;
var aux_ojo_iz=false;
var aux_ojo_dr=false;
var aux_nariz_iz=false;
var aux_nariz_dr=false;
var aux_sombra_iz=false;
var aux_sombra_dr=false;
var aux_guata_iz=false;
var aux_guata_dr=false;

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
		var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			message: '¡Bien! ¡Vamos a siguiente nivel!',
			cancel: 1,
    		buttonNames: ['Vamos', 'Cacelar']
		});
		dialog.show();
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_diferencias9");
		Ti.App.Properties.setBool("TF_diferencias9",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
				diferencias_nivel_10.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
			diferencias_nivel_10.open();
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
$.ojo_iz.addEventListener('click',function(e){
	if(aux_ojo_iz==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="#80FF0000";
		$.ojo_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.ojo_dr.addEventListener('click',function(e){
	if(aux_ojo_dr==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="#80FF0000";
		$.ojo_dr.backgroundColor="#80FF0000";
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
$.guata_iz.addEventListener('click',function(e){
	if(aux_guata_iz==false){
		aux_guata_iz=true;
		aux_guata_dr=true;
		punto=punto+1;
		$.guata_iz.backgroundColor="#80FF0000";
		$.guata_dr.backgroundColor="#80FF0000";
		estrella (punto);
	}
});
$.guata_dr.addEventListener('click',function(e){
	if(aux_guata_dr==false){
		aux_guata_iz=true;
		aux_guata_dr=true;
		punto=punto+1;
		$.guata_iz.backgroundColor="#80FF0000";
		$.guata_dr.backgroundColor="#80FF0000";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias9")==true){
		var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
		diferencias_nivel_10.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias9")==true){
		var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
		diferencias_nivel_10.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
