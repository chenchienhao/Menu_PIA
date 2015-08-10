
var aux_libros=false;
var aux_lapiz=false;
var aux_pez=false;
var punto=0;
function estrella (punto) {
	if(punto==3){
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_objetos1");
		Ti.App.Properties.setBool("TF_objetos1",true);
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
				var objetos_nivel_2=Alloy.createController('objetos_nivel_2').getView();
				objetos_nivel_2.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var objetos_nivel_2=Alloy.createController('objetos_nivel_2').getView();
			objetos_nivel_2.open();
			clearInterval(change_view);
		},5000);
	}
}

$.libros.addEventListener('click',function(e){
	if(aux_libros==false){
		aux_libros=true;
		punto=punto+1;
		$.libros.backgroundColor="rgba(255,0,0,0.5)";
		$.image_libros.visible=false;
	}
	estrella(punto);
});
$.lapiz.addEventListener('click',function(e){
	if(aux_lapiz==false){
		aux_lapiz=true;
		punto=punto+1;
		$.lapiz.backgroundColor="rgba(255,0,0,0.5)";
		$.image_lapiz.visible=false;
	}
	estrella(punto);
});
$.pez.addEventListener('click',function(e){
	if(aux_pez==false){
		aux_pez=true;
		punto=punto+1;
		$.pez.backgroundColor="rgba(255,0,0,0.5)";
		$.image_pez.visible=false;
	}
	estrella(punto);
});
$.label_AT.addEventListener('click',function(e){
	$.objetos_nivel_1.close();
});
$.anterior.addEventListener('click',function(e){
	$.objetos_nivel_1.close();
});
$.label_SG.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==3||Ti.App.Properties.getBool("TF_objetos1")==true){
		var objetos_nivel_2=Alloy.createController('objetos_nivel_2').getView();
		objetos_nivel_2.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==3||Ti.App.Properties.getBool("TF_objetos1")==true){
		var objetos_nivel_2=Alloy.createController('objetos_nivel_2').getView();
		objetos_nivel_2.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.objetos_nivel_1.open();