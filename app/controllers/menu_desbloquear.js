var data = [Ti.UI.createPickerRow({title:'Habilidades Sociales'}),Ti.UI.createPickerRow({title:'Tolerancia a la Frustración'})];
var data_HS =[Ti.UI.createPickerRow({title:'Colorea'}),Ti.UI.createPickerRow({title:'Selecciona'}),
			  Ti.UI.createPickerRow({title:'Acciones'}),Ti.UI.createPickerRow({title:'Gestos'})];
var data_TF =[Ti.UI.createPickerRow({title:'Siluetas'}),Ti.UI.createPickerRow({title:'Encúentralos'}),
			  Ti.UI.createPickerRow({title:'Objetos'}),Ti.UI.createPickerRow({title:'Diferencias'}),
			  Ti.UI.createPickerRow({title:'Memorice'})];
var picker=Ti.UI.createPicker({
	backgroundColor: 'red'
});
picker.add(data);
var aux_cg="";
var aux_jg="";
var aux=false;
picker.addEventListener('change',function(e){
	if(aux_cg!=""){
		aux_jg=picker.getSelectedRow(0).title;
		Ti.API.info("jg: " + picker.getSelectedRow(0).title);
		aux=true;
	}
	else{
		aux_cg=picker.getSelectedRow(0).title;
		var _col = picker.columns[0];
	    var len = _col.rowCount;
	    for(var x = len-1; x >= 0; x-- ){
	        var _row = _col.rows[x];
	        _col.removeRow(_row);
	    }
	    if(aux==false){
			if(aux_cg=="Habilidades Sociales"){
		 		picker.add(data_HS);
			}
			if(aux_cg=="Tolerancia a la Frustración"){
				picker.add(data_TF);
			}
		}
	}
	Ti.API.info("cg: " + aux_cg + "; jg: " + aux_jg);
});
function Button_CL(e) {
	aux=false;
	aux_jg="";
	aux_cg="";
	var _col = picker.columns[0];
    var len = _col.rowCount;
    for(var x = len-1; x >= 0; x-- ){
        var _row = _col.rows[x];
        _col.removeRow(_row);
    }
    picker.add(data);
}
function Button_SG(e) {
    if(aux==true){
    	Alloy.Globals.aux_categoria = aux_cg;
    	Alloy.Globals.aux_juego =aux_jg;
    	var menu_desbloquear_nivel=Alloy.createController('menu_desbloquear_nivel').getView();
    	menu_desbloquear_nivel.open();
    }	
    if(aux_cg==""){
    	alert("Elige una categoría de juego.");
    }
    else{
    	if(aux_jg==""){
	    	alert("Elige un juego.");
	    }	
    }	
}
$.home_icon.addEventListener('click', function(e) {
	$.menu_desbloquear.close();
});
$.view_picker.add(picker);
$.menu_desbloquear.open();