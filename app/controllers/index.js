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

if (!Ti.App.Properties.hasProperty("HS_colorea0")){
    for (var i=0; i < 4; i++){
    	Ti.App.Properties.setBool("HS_colorea"+i,false);
    }
    for (var i=0; i < 16; i++){
    	Ti.App.Properties.setBool("HS_selecciona"+i,false);
    }
    for (var i=0; i < 18; i++){
    	Ti.App.Properties.setBool("HS_acciones"+i,false);
    }
    for (var i=0; i < 15; i++){
    	Ti.App.Properties.setBool("HS_gestos"+i,false);
    }
    for (var i=0; i < 10; i++){
    	Ti.App.Properties.setBool("TF_siluetas"+i,false);
    }
    for (var i=0; i < 10; i++){
    	Ti.App.Properties.setBool("TF_encuentralos"+i,false);
    }
    for (var i=0; i < 11; i++){
    	Ti.App.Properties.setBool("TF_objetos"+i,false);
    }
    for (var i=0; i < 10; i++){
    	Ti.App.Properties.setBool("TF_diferencias"+i,false);
    }
    for (var i=0; i < 1; i++){
    	Ti.App.Properties.setBool("TF_memorice"+i,false);
    }
}
function menu_HS(e) {
    alert("Hab. Sociales"+" HS_colorea0: "+Ti.App.Properties.getString("HS_colorea0"));
    
    var props = Ti.App.Properties.listProperties();
	for (var i=0, ilen=props.length; i<ilen; i++){
	    var value = Ti.App.Properties.getString(props[i]);
	    Ti.API.info(props[i] + ' = ' + value);
	}
}
function menu_TF(e) {
    alert("Frustración");
}
function menu_setting(e) {
    $.dialog.show();
}
$.dialog.addEventListener('click', function(e) {
	if(e.text=="123"&&e.index != e.source.cancel){
		var menu_desbloquear=Alloy.createController('menu_desbloquear').getView();
		menu_desbloquear.open();
	}
});
$.index.open();