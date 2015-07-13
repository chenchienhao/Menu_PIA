
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
		Ti.App.Properties.removeProperty("TF_diferencias2");
		Ti.App.Properties.setBool("TF_diferencias2",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
				diferencias_nivel_3.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
			diferencias_nivel_3.open();
			clearInterval(change_view);
		},5000);
	}
}
$.cara_iz.add.addEventListener('click',function(e){
	if(aux_cara_iz==false){
		aux_cara_iz=true;
		aux_cara_dr=true;
		punto=punto+1;
		$.cara_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cara_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cara_dr.add.addEventListener('click',function(e){
	if(aux_cara_dr==false){
		aux_cara_iz=true;
		aux_cara_dr=true;
		punto=punto+1;
		$.cara_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cara_dr.backgroundColor="rgba(255,0,0,0.5)";
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
$.diario_iz_1.add.addEventListener('click',function(e){
	if(aux_diario_iz_1==false){
		aux_diario_iz_1=true;
		aux_diario_dr_1=true;
		punto=punto+1;
		$.diario_iz_1.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_1.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.diario_dr_1.add.addEventListener('click',function(e){
	if(aux_diario_dr_1==false){
		aux_diario_iz_1=true;
		aux_diario_dr_1=true;
		punto=punto+1;
		$.diario_iz_1.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_1.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.diario_iz_2.add.addEventListener('click',function(e){
	if(aux_diario_iz_2==false){
		aux_diario_iz_2=true;
		aux_diario_dr_2=true;
		punto=punto+1;
		$.diario_iz_2.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_2.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.diario_dr_2.add.addEventListener('click',function(e){
	if(aux_diario_dr_2==false){
		aux_diario_iz_2=true;
		aux_diario_dr_2=true;
		punto=punto+1;
		$.diario_iz_2.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_2.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.brazo_iz.add.addEventListener('click',function(e){
	if(aux_brazo_iz==false){
		aux_brazo_iz=true;
		aux_brazo_dr=true;
		punto=punto+1;
		$.brazo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.brazo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.brazo_dr.add.addEventListener('click',function(e){
	if(aux_brazo_dr==false){
		aux_brazo_iz=true;
		aux_brazo_dr=true;
		punto=punto+1;
		$.brazo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.brazo_dr.backgroundColor="rgba(255,0,0,0.5)";
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
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias2")==true){
		var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
		diferencias_nivel_3.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	Ti.API.info("valor :"+Ti.App.Properties.getBool("TF_diferencias2"));
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias2")==true){
		var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
		diferencias_nivel_3.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
