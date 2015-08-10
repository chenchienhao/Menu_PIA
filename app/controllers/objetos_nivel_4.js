
var aux_muleta=false;
var aux_pelota=false;
var aux_munique=false;
var aux_llorar=false;
var punto=0;
function estrella (punto) {
	if(punto==4){
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_objetos4");
		Ti.App.Properties.setBool("TF_objetos4",true);
		var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			message: '¡Bien! ¡Vamos a siguiente nivel!',
			cancel: 1,
    		buttonNames: ['Vamos', 'Cacelar']
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
				var objetos_nivel_5=Alloy.createController('objetos_nivel_5').getView();
				objetos_nivel_5.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var objetos_nivel_5=Alloy.createController('objetos_nivel_5').getView();
			objetos_nivel_5.open();
			clearInterval(change_view);
		},5000);
	}
}

$.muleta.addEventListener('click',function(e){
	if(aux_muleta==false){
		aux_muleta=true;
		punto=punto+1;
		$.muleta.backgroundColor="rgba(255,0,0,0.5)";
		$.image_muleta.visible=false;
	}
	estrella(punto);
});
$.pelota.addEventListener('click',function(e){
	if(aux_pelota==false){
		aux_pelota=true;
		punto=punto+1;
		$.pelota.backgroundColor="rgba(255,0,0,0.5)";
		$.image_pelota.visible=false;
	}
	estrella(punto);
});
$.munique.addEventListener('click',function(e){
	if(aux_munique==false){
		aux_munique=true;
		punto=punto+1;
		$.munique.backgroundColor="rgba(255,0,0,0.5)";
		$.image_munique.visible=false;
	}
	estrella(punto);
});
$.llorar.addEventListener('click',function(e){
	if(aux_llorar==false){
		aux_llorar=true;
		punto=punto+1;
		$.llorar.backgroundColor="rgba(255,0,0,0.5)";
		$.image_llorar.visible=false;
	}
	estrella(punto);
});
$.label_AT.addEventListener('click',function(e){
	$.objetos_nivel_4.close();
});
$.anterior.addEventListener('click',function(e){
	$.objetos_nivel_4.close();
});
$.label_SG.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==4||Ti.App.Properties.getBool("TF_objetos4")==true){
		var objetos_nivel_5=Alloy.createController('objetos_nivel_5').getView();
		objetos_nivel_5.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==4||Ti.App.Properties.getBool("TF_objetos4")==true){
		var objetos_nivel_5=Alloy.createController('objetos_nivel_5').getView();
		objetos_nivel_5.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.objetos_nivel_4.open();