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
var aux_muleta=false;
var aux_pelota=false;
var aux_munique=false;
var aux_llorar=false;
var punto=0;
function estrella (punto) {
	if(punto==4){
		if(Ti.App.Properties.getBool("TF_objetos4")==true){
			var objetos_nivel_5=Alloy.createController('objetos_nivel_5').getView();
				objetos_nivel_5.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		}
		animacionGlobos = Alloy.createController('animacionGlobos');
	}
}

$.muleta.addEventListener('click',function(e){
	if(aux_muleta==false){
		aux_muleta=true;
		punto=punto+1;
		$.muleta.backgroundColor="#80FF0000";
		$.image_muleta.visible=false;
	}
	estrella(punto);
});
$.pelota.addEventListener('click',function(e){
	if(aux_pelota==false){
		aux_pelota=true;
		punto=punto+1;
		$.pelota.backgroundColor="#80FF0000";
		$.image_pelota.visible=false;
	}
	estrella(punto);
});
$.munique.addEventListener('click',function(e){
	if(aux_munique==false){
		aux_munique=true;
		punto=punto+1;
		$.munique.backgroundColor="#80FF0000";
		$.image_munique.visible=false;
	}
	estrella(punto);
});
$.llorar.addEventListener('click',function(e){
	if(aux_llorar==false){
		aux_llorar=true;
		punto=punto+1;
		$.llorar.backgroundColor="#80FF0000";
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