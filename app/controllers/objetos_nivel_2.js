
var aux_cangilon=false;
var aux_paleta=false;
var aux_corro=false;
var aux_pala=false;
var punto=0;
function estrella (punto) {
	if(punto==4){
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_objetos2");
		Ti.App.Properties.setBool("TF_objetos2",true);
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
				var objetos_nivel_3=Alloy.createController('objetos_nivel_3').getView();
				objetos_nivel_3.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var objetos_nivel_3=Alloy.createController('objetos_nivel_3').getView();
			objetos_nivel_3.open();
			clearInterval(change_view);
		},5000);
	}
}

$.cangilon.addEventListener('click',function(e){
	if(aux_cangilon==false){
		aux_cangilon=true;
		punto=punto+1;
		$.cangilon.backgroundColor="#80FF0000";
		$.image_cangilon.visible=false;
	}
	estrella(punto);
});
$.paleta.addEventListener('click',function(e){
	if(aux_paleta==false){
		aux_paleta=true;
		punto=punto+1;
		$.paleta.backgroundColor="#80FF0000";
		$.image_paleta.visible=false;
	}
	estrella(punto);
});
$.corro.addEventListener('click',function(e){
	if(aux_corro==false){
		aux_corro=true;
		punto=punto+1;
		$.corro.backgroundColor="#80FF0000";
		$.image_corro.visible=false;
	}
	estrella(punto);
});
$.pala.addEventListener('click',function(e){
	if(aux_pala==false){
		aux_pala=true;
		punto=punto+1;
		$.pala.backgroundColor="#80FF0000";
		$.image_pala.visible=false;
	}
	estrella(punto);
});
$.label_AT.addEventListener('click',function(e){
	$.objetos_nivel_2.close();
});
$.anterior.addEventListener('click',function(e){
	$.objetos_nivel_2.close();
});
$.label_SG.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==4||Ti.App.Properties.getBool("TF_objetos2")==true){
		var objetos_nivel_3=Alloy.createController('objetos_nivel_3').getView();
		objetos_nivel_3.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==4||Ti.App.Properties.getBool("TF_objetos2")==true){
		var objetos_nivel_3=Alloy.createController('objetos_nivel_3').getView();
		objetos_nivel_3.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.objetos_nivel_2.open();