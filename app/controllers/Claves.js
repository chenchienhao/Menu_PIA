var  View = Titanium.UI.createView({
	 backgroundColor: 'white',
	 width: Ti.UI.SIZE,
	 height: "30%",
	 borderRadius:10,
	 opacity:0.9,
	 layout: "vertical",
	 borderColor:'gray',
	 borderWidth: 5
});

var title=Titanium.UI.createLabel({
	 top: "15%",
	 color:'black',
	 font:{
	 	fontSize: 20,
	 	fontWeight: "bold"
	 },
     text: "Ingrese contraseña"
});
var text=Titanium.UI.createLabel({
	 top: "5%",
	 color:'black',
	 height: "10%", 
     text: "Desbloquear los niveles de juegos.",
});
var clave=Titanium.UI.createTextField({
	top: "5%",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: 'black',
	width: "50%",
	height: "10%",
	passwordMask: true
});
var buttonOK=Titanium.UI.createButton({
	top: "5%",
	title: 'OK',
	color: '#2E9AFE',
	backgroundColor: 'white',
	width: "80%",
   	height: "10%"
});
buttonOK.addEventListener('click',function(e)
{
   if(clave.getValue()=="123"){
		var menu_desbloquear=Alloy.createController('menu_desbloquear').getView();
		menu_desbloquear.open();
	}
	else{
		alert("Contraseña incorrecta.");
	}
	
});

View.add(title);
View.add(text);
View.add(clave);
View.add(buttonOK);
$.win.add(View);