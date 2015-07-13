Alloy.Globals.aux_categoria="Tolerancia a la Frustración";
function menu_siluetas(e) {
	Alloy.Globals.aux_juego="Siluetas";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_encuentralos(e) {
	Alloy.Globals.aux_juego="Encúentralos";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_objetos(e) {
	Alloy.Globals.aux_juego="Objetos";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_diferencias(e) {
	Alloy.Globals.aux_juego="Diferencias";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_memorice(e) {
	Alloy.Globals.aux_juego="Memorice";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
$.home_icon.addEventListener('click', function(e) {
	$.menu_tf.close();
});
$.menu_tf.open();
