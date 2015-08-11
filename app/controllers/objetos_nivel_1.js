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
var aux_libros=false;
var aux_lapiz=false;
var aux_pez=false;
var punto=0;
function estrella (punto) {
	if(punto==3){
		if(Ti.App.Properties.getBool("TF_objetos1")==true){
			var objetos_nivel_2=Alloy.createController('objetos_nivel_2').getView();
				objetos_nivel_2.open();
		}
		else{
		 	var menu_nivel = Alloy.createController('menu_nivel').getView();
			menu_nivel.open();
		}
		animacionGlobos = Alloy.createController('animacionGlobos');
	}
}

$.libros.addEventListener('click',function(e){
	if(aux_libros==false){
		aux_libros=true;
		punto=punto+1;
		$.libros.backgroundColor="#80FF0000";
		$.image_libros.visible=false;
	}
	estrella(punto);
});
$.lapiz.addEventListener('click',function(e){
	if(aux_lapiz==false){
		aux_lapiz=true;
		punto=punto+1;
		$.lapiz.backgroundColor="#80FF0000";
		$.image_lapiz.visible=false;
	}
	estrella(punto);
});
$.pez.addEventListener('click',function(e){
	if(aux_pez==false){
		aux_pez=true;
		punto=punto+1;
		$.pez.backgroundColor="#80FF0000";
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