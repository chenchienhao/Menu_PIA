
var aux_turipan=false;
var aux_flor=false;
var aux_unihue=false;
var punto=0;
function estrella (punto) {
	if(punto==3){
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_objetos3");
		Ti.App.Properties.setBool("TF_objetos3",true);
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
				var objetos_nivel_4=Alloy.createController('objetos_nivel_4').getView();
				objetos_nivel_4.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var objetos_nivel_4=Alloy.createController('objetos_nivel_4').getView();
			objetos_nivel_4.open();
			clearInterval(change_view);
		},5000);
	}
}

$.turipan.addEventListener('click',function(e){
	if(aux_turipan==false){
		aux_turipan=true;
		punto=punto+1;
		$.turipan.backgroundColor="rgba(255,0,0,0.5)";
		$.image_turipan.visible=false;
	}
	estrella(punto);
});
$.flor.addEventListener('click',function(e){
	if(aux_flor==false){
		aux_flor=true;
		punto=punto+1;
		$.flor.backgroundColor="rgba(255,0,0,0.5)";
		$.image_flor.visible=false;
	}
	estrella(punto);
});
$.unihue.addEventListener('click',function(e){
	if(aux_unihue==false){
		aux_unihue=true;
		punto=punto+1;
		$.unihue.backgroundColor="rgba(255,0,0,0.5)";
		$.image_unihue.visible=false;
	}
	estrella(punto);
});
$.label_AT.addEventListener('click',function(e){
	$.objetos_nivel_3.close();
});
$.anterior.addEventListener('click',function(e){
	$.objetos_nivel_3.close();
});
$.label_SG.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==3||Ti.App.Properties.getBool("TF_objetos3")==true){
		var objetos_nivel_4=Alloy.createController('objetos_nivel_4').getView();
		objetos_nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==3||Ti.App.Properties.getBool("TF_objetos3")==true){
		var objetos_nivel_4=Alloy.createController('objetos_nivel_4').getView();
		objetos_nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.objetos_nivel_3.open();