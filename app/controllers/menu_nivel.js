// -----------------------   HEADER   ---------------------------

function go_back(e) {
	if(Alloy.Globals.setting_on){
		$.win.close();
	}
	else{
		var index=Alloy.createController('index').getView();
		index.open();	
	}
}

$.title_label.text=Alloy.Globals.aux_categoria+" - "+Alloy.Globals.aux_juego;

function go_sound(e) {
	alert("Instrucciones en Sonido...");
}

// -----------------------   BODY   ---------------------------
//Colores de administración
if(Alloy.Globals.setting_on){//si administrando
	$.main_body.backgroundImage="/images/icon/warning.png";
    $.main_body.backgroundRepeat="true";
}else{
	$.main_body.backgroundImage="";
	$.main_body.backgroundColor="#FFF";
}


var gris="#A4A4A4";
var verde="#81F79F";

if(Alloy.Globals.aux_categoria=="Habilidades Sociales"){
	
    /*##################################################################################################################
       COLOREA
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Colorea"){
    	var button=[];
        for (var i=0;i<4;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("HS_colorea"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
		button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea0")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea0")==true){//si desbloqueado
                        /*#########################################################
                          ###   COLOREA 0
                          #########################################################*/
                        animacionRabia = Alloy.createController('animacionRabia');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea1")==true){//si desbloqueado
                        /*#########################################################
                          ###   COLOREA 1
                          #########################################################*/
                        animacionPena = Alloy.createController('animacionPena');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea2")==true){//si desbloqueado
                        /*#########################################################
                          ###   COLOREA 2
                          #########################################################*/
                        animacionMiedo = Alloy.createController('animacionMiedo');
                    }
            }
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea3")==true){//si desbloqueado{
                        /*#########################################################
                          ###   COLOREA 3
                          #########################################################*/
                        animacionAlegria = Alloy.createController('animacionAlegria');
                    }
            }
        });
    }

    
    /*##################################################################################################################
       SELECCIONA
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Selecciona"){
        var button=[];
        for (var i=0;i<11;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("HS_selecciona"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona0")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona0")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 0
                          #########################################################*/
                        selecciona_nivel_1=Alloy.createController('selecciona_nivel_1');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona1")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 1
                          #########################################################*/
                        selecciona_nivel_2=Alloy.createController('selecciona_nivel_2');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona2")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 2
                          #########################################################*/
                        selecciona_nivel_3=Alloy.createController('selecciona_nivel_3');
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona3")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 3
                          #########################################################*/
                        selecciona_nivel_4=Alloy.createController('selecciona_nivel_4');
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona4")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 4
                          #########################################################*/
                        selecciona_nivel_5=Alloy.createController('selecciona_nivel_5');
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona5")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona5")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 5
                          #########################################################*/
                        selecciona_nivel_6=Alloy.createController('selecciona_nivel_6');
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona6")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona6")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 6
                          #########################################################*/
                        selecciona_nivel_7=Alloy.createController('selecciona_nivel_7');
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona7")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona7")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 7
                          #########################################################*/
                        selecciona_nivel_8=Alloy.createController('selecciona_nivel_8');
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona8")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona8")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 8
                          #########################################################*/
                        selecciona_nivel_9=Alloy.createController('selecciona_nivel_9');
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona9")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona9")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 9
                          #########################################################*/
                        selecciona_nivel_10=Alloy.createController('selecciona_nivel_10');
                    }
            } 
        });
        button[10].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona10")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona10",true);//desbloquea
                        button[10].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona10",false);//bloquea
                        button[10].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona10")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 10
                          #########################################################*/
                        selecciona_nivel_11=Alloy.createController('selecciona_nivel_11');
                    }
            } 
        });
    }
    

	/*##################################################################################################################
       ACCIONES
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Acciones"){
        var button=[];
        for (var i=0;i<10;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("HS_acciones"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones0")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones0")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 0
                          #########################################################*/
                        acciones_nivel_1=Alloy.createController('acciones_nivel_1');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones1")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 1
                          #########################################################*/
                        acciones_nivel_2=Alloy.createController('acciones_nivel_2');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones2")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 2
                          #########################################################*/
                        acciones_nivel_3=Alloy.createController('acciones_nivel_3');
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones3")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 3
                          #########################################################*/
                        acciones_nivel_4=Alloy.createController('acciones_nivel_4');
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones4")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 4
                          #########################################################*/
                        acciones_nivel_5=Alloy.createController('acciones_nivel_5');
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones5")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones5")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 5
                          #########################################################*/
                        acciones_nivel_6=Alloy.createController('acciones_nivel_6');
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones6")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones6")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 6
                          #########################################################*/
                        acciones_nivel_7=Alloy.createController('acciones_nivel_7');
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones7")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones7")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 7
                          #########################################################*/
                        acciones_nivel_8=Alloy.createController('acciones_nivel_8');
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones8")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones8")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 8
                          #########################################################*/
                        acciones_nivel_9=Alloy.createController('acciones_nivel_9');
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones9")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones9")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 9
                          #########################################################*/
                        acciones_nivel_10=Alloy.createController('acciones_nivel_10');
                    }
            } 
        });
    }
    

	/*##################################################################################################################
       GESTOS
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Gestos"){
        var button=[];
        for (var i=0;i<15;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("HS_gestos"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos0")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos0")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 0
                          #########################################################*/
                        gestos_nivel_1=Alloy.createController('gestos_nivel_1');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos1")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 1
                          #########################################################*/
                        gestos_nivel_2=Alloy.createController('gestos_nivel_2');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos2")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 2
                          #########################################################*/
                        gestos_nivel_3=Alloy.createController('gestos_nivel_3');
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos3")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 3
                          #########################################################*/
                        gestos_nivel_4=Alloy.createController('gestos_nivel_4');
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos4")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 4
                          #########################################################*/
                        gestos_nivel_5=Alloy.createController('gestos_nivel_5');
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos5")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos5")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 5
                          #########################################################*/
                        gestos_nivel_6=Alloy.createController('gestos_nivel_6');
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos6")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos6")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 6
                          #########################################################*/
                        gestos_nivel_7=Alloy.createController('gestos_nivel_7');
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos7")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos7")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 7
                          #########################################################*/
                        gestos_nivel_8=Alloy.createController('gestos_nivel_8');
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos8")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos8")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 8
                          #########################################################*/
                        gestos_nivel_9=Alloy.createController('gestos_nivel_9');
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos9")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos9")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 9
                          #########################################################*/
                        gestos_nivel_10=Alloy.createController('gestos_nivel_10');
                    }
            } 
        });
        button[10].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos10")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos10",true);//desbloquea
                        button[10].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos10",false);//bloquea
                        button[10].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos10")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 10
                          #########################################################*/
                        gestos_nivel_11=Alloy.createController('gestos_nivel_11');
                    }
            } 
        });
        button[11].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos11")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos11",true);//desbloquea
                        button[11].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos11",false);//bloquea
                        button[11].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos11")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 11
                          #########################################################*/
                        gestos_nivel_12=Alloy.createController('gestos_nivel_12');
                    }
            } 
        });
        button[12].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos12")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos12",true);//desbloquea
                        button[12].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos12",false);//bloquea
                        button[12].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos12")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 12
                          #########################################################*/
                        gestos_nivel_13=Alloy.createController('gestos_nivel_13');
                    }
            } 
        });
        button[13].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos13")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos13",true);//desbloquea
                        button[13].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos13",false);//bloquea
                        button[13].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos13")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 13
                          #########################################################*/
                        gestos_nivel_14=Alloy.createController('gestos_nivel_14');
                    }
            } 
        });
        button[14].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos14")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos14",true);//desbloquea
                        button[14].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos14",false);//bloquea
                        button[14].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos14")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 14
                          #########################################################*/
                        gestos_nivel_15=Alloy.createController('gestos_nivel_15');
                    }
            } 
        });
    }
}

if(Alloy.Globals.aux_categoria=="Tolerancia a la Frustración"){
    /*##################################################################################################################
       SILUETAS
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Siluetas"){
        var button=[];
        for (var i=0;i<10;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
                    fontSize: 46,
                    color:"#000",
                    fontWeight:"bold",
                    textAlign:"center"
                },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("TF_siluetas"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas0")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas0")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 0
                          #########################################################*/
                        siluetas_nivel_1 = Alloy.createController('siluetas_nivel_1');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas1")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas1")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 1
                          #########################################################*/
                        siluetas_nivel_2 = Alloy.createController('siluetas_nivel_2');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas2")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas2")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 2
                          #########################################################*/
                        siluetas_nivel_3 = Alloy.createController('siluetas_nivel_3');
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas3")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas3")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 3
                          #########################################################*/
                        siluetas_nivel_4 = Alloy.createController('siluetas_nivel_4');
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas4")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas4")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 4
                          #########################################################*/
                        siluetas_nivel_5 = Alloy.createController('siluetas_nivel_5');
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas5")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas5")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 5
                          #########################################################*/
                        siluetas_nivel_6 = Alloy.createController('siluetas_nivel_6');
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas6")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas6")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 6
                          #########################################################*/
                        siluetas_nivel_7 = Alloy.createController('siluetas_nivel_7');
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas7")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas7")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 7
                          #########################################################*/
                        siluetas_nivel_8 = Alloy.createController('siluetas_nivel_8');
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas8")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas8")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 8
                          #########################################################*/
                        siluetas_nivel_9 = Alloy.createController('siluetas_nivel_9');
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_siluetas9")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_siluetas9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_siluetas9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_siluetas9")==true){//si desbloqueado
                        /*#########################################################
                          ###   SILUETAS 9
                          #########################################################*/
                        siluetas_nivel_10 = Alloy.createController('siluetas_nivel_10');
                    }
            } 
        });
        
    }
    /*##################################################################################################################
       ENCUENTRALOS
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Encúentralos"){
        var button=[];
        for (var i=0;i<10;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
                    fontSize: 46,
                    color:"#000",
                    fontWeight:"bold",
                    textAlign:"center"
                },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("TF_encuentralos"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos0")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos0")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 0
                          #########################################################*/
                        encuentralos_nivel_1 = Alloy.createController('encuentralos_nivel_1');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos1")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos1")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 1
                          #########################################################*/
                        encuentralos_nivel_2 = Alloy.createController('encuentralos_nivel_2');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos2")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos2")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 2
                          #########################################################*/
                        encuentralos_nivel_3 = Alloy.createController('encuentralos_nivel_3');
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos3")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos3")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 3
                          #########################################################*/
                        encuentralos_nivel_4 = Alloy.createController('encuentralos_nivel_4');
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos4")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos4")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 4
                          #########################################################*/
                        encuentralos_nivel_5 = Alloy.createController('encuentralos_nivel_5');
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos5")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos5")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 5
                          #########################################################*/
                        encuentralos_nivel_6 = Alloy.createController('encuentralos_nivel_6');
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos6")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos6")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 6
                          #########################################################*/
                        encuentralos_nivel_7 = Alloy.createController('encuentralos_nivel_7');
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos7")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos7")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 7
                          #########################################################*/
                        encuentralos_nivel_8 = Alloy.createController('encuentralos_nivel_8');
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos8")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos8")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 8
                          #########################################################*/
                        encuentralos_nivel_9 = Alloy.createController('encuentralos_nivel_9');
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_encuentralos9")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_encuentralos9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_encuentralos9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_encuentralos9")==true){//si desbloqueado
                        /*#########################################################
                          ###   ENCUENTRALOS 9
                          #########################################################*/
                        encuentralos_nivel_10 = Alloy.createController('encuentralos_nivel_10');
                    }
            } 
        });
    }
    /*##################################################################################################################
       OBJETOS
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Objetos"){
        var button=[];
        for (var i=0;i<5;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
                    fontSize: 46,
                    color:"#000",
                    fontWeight:"bold",
                    textAlign:"center"
                },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("TF_objetos"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_objetos0")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_objetos0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_objetos0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_objetos0")==true){//si desbloqueado
                        /*#########################################################
                          ###   OBJETOS 0
                          #########################################################*/
                        objetos_nivel_1 = Alloy.createController('objetos_nivel_1');
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_objetos1")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_objetos1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_objetos1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_objetos1")==true){//si desbloqueado
                        /*#########################################################
                          ###   OBJETOS 1
                          #########################################################*/
                        objetos_nivel_2 = Alloy.createController('objetos_nivel_2');
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_objetos2")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_objetos2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_objetos2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_objetos2")==true){//si desbloqueado
                        /*#########################################################
                          ###   OBJETOS 2
                          #########################################################*/
                        objetos_nivel_3 = Alloy.createController('objetos_nivel_3');
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_objetos3")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_objetos3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_objetos3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_objetos3")==true){//si desbloqueado
                        /*#########################################################
                          ###   OBJETOS 3
                          #########################################################*/
                        objetos_nivel_4 = Alloy.createController('objetos_nivel_4');
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_objetos4")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_objetos4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_objetos4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_objetos4")==true){//si desbloqueado
                        /*#########################################################
                          ###   OBJETOS 4
                          #########################################################*/
                        objetos_nivel_5 = Alloy.createController('objetos_nivel_5');
                    }
            } 
        });
        
    }
    //
    if(Alloy.Globals.aux_juego=="Diferencias"){
        var button=[];
        for (var i=0;i<10;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
                    fontSize: 46,
                    color:"#000",
                    fontWeight:"bold",
                    textAlign:"center"
                },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("TF_diferencias"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias0")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias0")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 0
                          #########################################################*/
                        var diferencias_nivel_1=Alloy.createController('diferencias_nivel_1').getView();
                        diferencias_nivel_1.open();
                    }
            } 
        });
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias1")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias1")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 1
                          #########################################################*/
                        var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
                        diferencias_nivel_2.open();
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias2")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias2")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 2
                          #########################################################*/
                        var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
                        diferencias_nivel_3.open();
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias3")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias3")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 3
                          #########################################################*/
                        var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
                        diferencias_nivel_4.open();
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias4")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias4")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 4
                          #########################################################*/
                        var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
                        diferencias_nivel_5.open();
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias5")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias5")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 5
                          #########################################################*/
                        var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
                        diferencias_nivel_6.open();
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias6")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias6")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 6
                          #########################################################*/
                        var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
                        diferencias_nivel_7.open();
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias7")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias7")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 7
                          #########################################################*/
                        var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
                        diferencias_nivel_8.open();
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias8")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias8")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 8
                          #########################################################*/
                        var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
                        diferencias_nivel_9.open();
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_diferencias9")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_diferencias9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_diferencias9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_diferencias9")==true){//si desbloqueado
                        /*#########################################################
                          ###   DIFERENCIAS 9
                          #########################################################*/
                        var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
                        diferencias_nivel_10.open();
                    }
            } 
        });
    }
    //
    if(Alloy.Globals.aux_juego=="Memorice"){
        
        var button=[];
        for (var i=0;i<1;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
                    fontSize: 46,
                    color:"#000",
                    fontWeight:"bold",
                    textAlign:"center"
                },
                title: (i+1)
            });
            if(Ti.App.Properties.getBool("TF_memorice"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            $.scrollView.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("TF_memorice0")==false){//si bloqueado
                        Ti.App.Properties.setBool("TF_memorice0",true);//desbloquea
                        button[0].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("TF_memorice0",false);//bloquea
                        button[0].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("TF_memorice0")==true){//si desbloqueado
                        /*#########################################################
                          ###   MEMORICE 0
                          #########################################################*/
                        memorice = Alloy.createController('memorice');
                    }
            } 
        });
    }
}

/*$.scrollView.layout='horizontal';
$.scrollView.showVerticalScrollIndicator="true";
$.scrollView.width= "100%";
$.scrollView.height= "100%";
*/
