var sonido = Ti.Media.createSound({url:"/images/encabezados/objetos_ocultos.m4a"});

var encabezado = Ti.UI.createImageView({
 	image: '/images/encabezados/objetos_ocultos.png',
 	top: '2%', 
 	left: '15%',
	width: '70%',
	height: '50%'
});

$.view_header.add(encabezado);

var mensaje = 0;
encabezado.addEventListener('click',function(e) 
{
	if(mensaje<2){
		sonido.play();
		mensaje=mensaje+1;
	}
});
var aux_cangilon=false;
var aux_paleta=false;
var aux_corro=false;
var aux_pala=false;
var punto=0;
function estrella (punto) {
	if(punto==4){
		if(Ti.App.Properties.getBool("TF_objetos2")==true){
			var objetos_nivel_3=Alloy.createController('objetos_nivel_3').getView();
				objetos_nivel_3.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		}
		animacionGlobos = Alloy.createController('animacionGlobos');
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