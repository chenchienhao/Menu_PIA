var data_HS =[Ti.UI.createPickerRow({title:'Colorea'}),Ti.UI.createPickerRow({title:'Selecciona'}),
			  Ti.UI.createPickerRow({title:'Acciones'}),Ti.UI.createPickerRow({title:'Gestos'})];
var data_TF =[Ti.UI.createPickerRow({title:'Siluetas'}),Ti.UI.createPickerRow({title:'Encúentralos'}),
			  Ti.UI.createPickerRow({title:'Objetos'}),Ti.UI.createPickerRow({title:'Diferencias'}),
			  Ti.UI.createPickerRow({title:'Memorice'})];
var aux=false;
$.Picker_CG.add.addEventListener('change',function(e){
	$.Picker_JG.visible="true";
	if($.Picker_JG.columns[0]) {
    	var _col = $.Picker_JG.columns[0];
        var len = _col.rowCount;
        for(var x = len-1; x >= 0; x-- ){
                var _row = _col.rows[x];
                _col.removeRow(_row);
        }
	}
 	if(e.row.title=="Habilidades Sociales"){
 		$.Picker_JG.add(data_HS);
	}
	if(e.row.title=="Tolerancia a la Frustración"){
		$.Picker_JG.add(data_TF);
	}
	aux=true;
});
function Button_CL(e) {
	$.menu_desbloquear.close();
}
function Button_SG(e) {
    if(aux==true){
    	Alloy.Globals.aux_categoria = $.Picker_CG.getSelectedRow(0).title;
    	Alloy.Globals.aux_juego = $.Picker_JG.getSelectedRow(0).title;
    	var menu_desbloquear_nivel=Alloy.createController('menu_desbloquear_nivel').getView();
    	menu_desbloquear_nivel.open();
    }	
    else{
    	alert("Elige una categoría de juego.");
    }	
}
$.menu_desbloquear.open();