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
    for (var i=1; i < 4; i++){
    	Ti.App.Properties.setBool("HS_colorea"+i,false);
    }
    for (var i=1; i < 11; i++){
    	Ti.App.Properties.setBool("HS_selecciona"+i,false);
    }
    for (var i=1; i < 10; i++){
    	Ti.App.Properties.setBool("HS_acciones"+i,false);
    }
    for (var i=1; i < 15; i++){
    	Ti.App.Properties.setBool("HS_gestos"+i,false);
    }
    for (var i=1; i < 10; i++){
    	Ti.App.Properties.setBool("TF_siluetas"+i,false);
    }
    for (var i=1; i < 10; i++){
    	Ti.App.Properties.setBool("TF_encuentralos"+i,false);
    }
    for (var i=1; i < 5; i++){
    	Ti.App.Properties.setBool("TF_objetos"+i,false);
    }
    for (var i=1; i < 10; i++){
    	Ti.App.Properties.setBool("TF_diferencias"+i,false);
    }
    Ti.App.Properties.setBool("HS_colorea0",true);
    Ti.App.Properties.setBool("HS_selecciona0",true);
    Ti.App.Properties.setBool("HS_acciones0",true);
    Ti.App.Properties.setBool("HS_gestos0",true);
    Ti.App.Properties.setBool("TF_siluetas0",true);
    Ti.App.Properties.setBool("TF_encuentralos0",true);
    Ti.App.Properties.setBool("TF_objetos0",true);
    Ti.App.Properties.setBool("TF_diferencias0",true);
    Ti.App.Properties.setBool("TF_memorice0",true);
}
function menu_HS(e) {
    var menu_hs=Alloy.createController('menu_hs').getView();
	menu_hs.open();
}
function menu_TF(e) {
    var menu_tf=Alloy.createController('menu_tf').getView();
	menu_tf.open();
}
function menu_setting(e) {
	var claves=Alloy.createController('Claves').getView();
	claves.open();
}
$.index.open();