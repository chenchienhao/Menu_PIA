//if is necesary to remove all property variable 
/*
 if(Ti.App.Properties.hasProperty("HS_colorea0")){
	var props = Ti.App.Properties.listProperties();
	for (var i=0, ilen=props.length; i<ilen; i++){
	    var value = Ti.App.Properties.getString(props[i]);
	    Ti.API.info(props[i] + ' = ' + value+" removed");
	    Ti.App.Properties.removeProperty(props[i]);
	}
}*/
//variable que denota que se están configurrando los niveles
Alloy.Globals.setting_on=false;

//Se crea todas las banderas bloqueadas
if (!Ti.App.Properties.hasProperty("HS_colorea1")){
	alert("Bienvenido por primera vez");
    for (var i=0; i < 4 ;  i++) Ti.App.Properties.setBool("HS_colorea"+i,false);
    for (var i=0; i < 11; i++) Ti.App.Properties.setBool("HS_selecciona"+i,false);
    for (var i=0; i < 10; i++) Ti.App.Properties.setBool("HS_acciones"+i,false);
    for (var i=0; i < 15; i++) Ti.App.Properties.setBool("HS_gestos"+i,false);
    for (var i=0; i < 10; i++) Ti.App.Properties.setBool("TF_siluetas"+i,false);
    for (var i=0; i < 10; i++) Ti.App.Properties.setBool("TF_encuentralos"+i,false);
    for (var i=0; i < 5; i++) Ti.App.Properties.setBool("TF_objetos"+i,false);
    for (var i=0; i < 10; i++) Ti.App.Properties.setBool("TF_diferencias"+i,false);
    for (var i=0; i < 1; i++) Ti.App.Properties.setBool("TF_memorice"+i,false);
}

if(Ti.Platform.osname=="android"){
		var textfield = Ti.UI.createTextField();
 
		var dialog = Ti.UI.createAlertDialog({
		    title: 'Ingrese clave',
		    androidView: textfield,
		    buttonNames: ['OK', 'cancel']
		});
}
else{
		var dialog = Ti.UI.createAlertDialog({
	    	title: 'Ingrese clave',
		    style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
		    buttonNames: ['OK', 'cancel']
		});
}

//funciones de los botones
function menu_HS(e) {
    var menu_hs=Alloy.createController('menu_hs').getView();
	menu_hs.open();
}
function menu_TF(e) {
    var menu_tf=Alloy.createController('menu_tf').getView();
	menu_tf.open();
}
function menu_setting(e) {
    dialog.show();
}

dialog.addEventListener('click',function(e){
	if(Ti.Platform.osname=="android"){
		var pass=textfield.value;
	}
	else{
		var pass=e.text;
	}
    if(pass=="1234"){
    	Alloy.Globals.setting_on=true;
    	$.done_view.visible="true";
    	
    	$.main_body.backgroundImage="/images/icon/warning.png";
    	$.main_body.backgroundRepeat="true";
    	
    	pass=0;
    }else{
    	Alloy.Globals.setting_on=false;
    	$.done_view.visible="false";
    	
    	$.main_body.backgroundImage="";
    	$.main_body.backgroundColor="#FFF";
    }
});


function done(e){
    Alloy.Globals.setting_on=false;
    $.done_view.visible="false";
    
    $.main_body.backgroundImage="";
    $.main_body.backgroundColor="#FFF";
}



$.index.open();