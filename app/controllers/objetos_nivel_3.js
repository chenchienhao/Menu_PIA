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
var aux_turipan=false;
var aux_flor=false;
var aux_unihue=false;
var punto=0;
function estrella (punto) {
	if(punto==3){
		if(Ti.App.Properties.getBool("TF_objetos3")==true){
			var objetos_nivel_4=Alloy.createController('objetos_nivel_4').getView();
				objetos_nivel_4.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		}
		animacionGlobos = Alloy.createController('animacionGlobos');
	}
}

$.turipan.addEventListener('click',function(e){
	if(aux_turipan==false){
		aux_turipan=true;
		punto=punto+1;
		$.turipan.backgroundColor="#80FF0000";
		$.image_turipan.visible=false;
	}
	estrella(punto);
});
$.flor.addEventListener('click',function(e){
	if(aux_flor==false){
		aux_flor=true;
		punto=punto+1;
		$.flor.backgroundColor="#80FF0000";
		$.image_flor.visible=false;
	}
	estrella(punto);
});
$.unihue.addEventListener('click',function(e){
	if(aux_unihue==false){
		aux_unihue=true;
		punto=punto+1;
		$.unihue.backgroundColor="#80FF0000";
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