var  View = Titanium.UI.createView({
	 backgroundColor: 'white',
	 width: "70%",
	 height: "40%",
	 borderRadius:10,
	 opacity:0.9,
	 layout: "vertical",
	 borderColor:'gray',
	 borderWidth: 5
});

var title=Titanium.UI.createLabel({
	 top: "15%",
	 font:{
	 	fontSize: 20,
	 	fontWeight: "bold"
	 },
     text: "Ingrese contraseña"
});
var text=Titanium.UI.createLabel({
	 top: "5%",
	 height: "10%", 
     text: "Ingrese la clave para desbloquear los niveles de juegos.",
});
var clave=Titanium.UI.createTextField({
	top: "5%",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: '#336699',
	width: "50%",
	height: "10%",
	passwordMask: true
});
var buttonCL=Titanium.UI.createButton({
	top: "5%",
	title: 'Cancelar',
	width: "80%",
   	height: "10%"
});
var buttonOK=Titanium.UI.createButton({
	top: "5%",
	title: 'OK',
	width: "80%",
   	height: "10%"
});

buttonCL.addEventListener('click',function(e)
{
   $.win.close();
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
View.add(buttonCL);
$.win.add(View);