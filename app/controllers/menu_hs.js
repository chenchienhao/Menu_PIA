//Colores de administración
if(Alloy.Globals.setting_on){//si administrando
	$.view_body.backgroundImage="/images/icon/warning.png";
    $.view_body.backgroundRepeat="true";
}else{
	$.view_body.backgroundColor="#FFF";
}

Alloy.Globals.aux_categoria="Habilidades Sociales";
function menu_colorea(e) {
	Alloy.Globals.aux_juego="Colorea";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_selecciona(e) {
	Alloy.Globals.aux_juego="Selecciona";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_acciones(e) {
	Alloy.Globals.aux_juego="Acciones";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_gestos(e) {
	Alloy.Globals.aux_juego="Gestos";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
$.back_icon.addEventListener('click', function(e) {
	$.menu_hs.close();
});
$.menu_hs.open();
