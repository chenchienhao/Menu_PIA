var aux_ropa=false;
var aux_bigote=false;
var aux_sol=false;
var aux_corro=false;
var aux_zapato=false;
var aux_nariz=false;
var punto=0;
function estrella (punto) {
	if(punto==6){
		var diferencias_felicidad=Alloy.createController('diferencias_felicidad').getView();
		diferencias_felicidad.open();
		var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			message: '¡Bien! ¡Ya terminó todos los niveles!',
			cancel: 1,
    		buttonNames: ['OK', 'Cacelar']
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
				var index=Alloy.createController('index').getView();
				index.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var index=Alloy.createController('index').getView();
			index.open();
			clearInterval(change_view);
		},5000);
	}
}

$.ropa.addEventListener('click',function(e){
	if(aux_ropa==false){
		aux_ropa=true;
		punto=punto+1;
		$.ropa.backgroundColor="#80FF0000";
		$.image_ropa.visible=false;
	}
	estrella(punto);
});
$.bigote.addEventListener('click',function(e){
	if(aux_bigote==false){
		aux_bigote=true;
		punto=punto+1;
		$.bigote.backgroundColor="#80FF0000";
		$.image_bigote.visible=false;
	}
	estrella(punto);
});
$.sol.addEventListener('click',function(e){
	if(aux_sol==false){
		aux_sol=true;
		punto=punto+1;
		$.sol.backgroundColor="#80FF0000";
		$.image_sol.visible=false;
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
$.zapato.addEventListener('click',function(e){
	if(aux_zapato==false){
		aux_zapato=true;
		punto=punto+1;
		$.zapato.backgroundColor="#80FF0000";
		$.image_zapato.visible=false;
	}
	estrella(punto);
});
$.nariz.addEventListener('click',function(e){
	if(aux_nariz==false){
		aux_nariz=true;
		punto=punto+1;
		$.nariz.backgroundColor="#80FF0000";
		$.image_nariz.visible=false;
	}
	estrella(punto);
});
$.label_AT.addEventListener('click',function(e){
	$.objetos_nivel_5.close();
});
$.anterior.addEventListener('click',function(e){
	$.objetos_nivel_5.close();
});
$.label_SG.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==6||Ti.App.Properties.getBool("TF_objetos4")==true){
		var diferencias_felicidad=Alloy.createController('diferencias_felicidad').getView();
		diferencias_felicidad.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.addEventListener('click',function(e){
	//El caso desbloqueado
	if(punto==6||Ti.App.Properties.getBool("TF_objetos4")==true){
		var index=Alloy.createController('index').getView();
		index.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.objetos_nivel_5.open();