function dibuja(long1,alt1,tip,long2,alt2){
    lapiz.moveTo(long1,alt1);
    if (tip===1) {
    lapiz.lineTo(long2,alt2); 
} else {
    lapiz.arc(long2,alt2,25,0,2*Math.PI);   
}
lapiz.stroke();
return;
}

function keyDownHandler(e) {
    
    tecla = e.which || e.keyCode;
    console.log(tecla);
    
    coincidenciaok = false;
    var pasadelargo=false;
    contador=0;
    coincidencia=[];
    if (terminoeljuego===0) {
    for (let yy of letrasusadas) {
        if (yy===tecla) {pasadelargo=true;
            window.alert("La letra " + String.fromCodePoint(tecla) +" ya fue utilizada!");};
        };

if (pasadelargo===false){
    
    if ((tecla > 64) && (tecla < 91)) {
        letrasusadas.push(tecla);
        for (let letraindividual of pasapalabras) {
          contador=contador+1;
          if (letraindividual.charCodeAt(0)===tecla) {coincidencia.push(contador-1);
           console.log(contador);
           coincidenciaok = true;
                  
        };   
       }; 

       console.log(coincidencia);
       if (coincidenciaok) {
        for (let xx of coincidencia) {
        contadorcoincidencias = contadorcoincidencias + 1;
        var x1 = 23*xx + espaciorayitas*xx +50;
        lapiz.fillText(pasapalabras[xx],longitud+x1,altitud-10);
        lapiz.stroke();
        if (elegidaalazar.length===contadorcoincidencias)  {terminoeljuego = 1;
            lapiz.fillText("Ganaste, Felicidades!", 500, 350);
        lapiz.stroke();
        comenzarahorcado.disabled = false;
        pasapalabras=[];
        espaciorayitas = 0;
        contadorahorcado = 0;
        letrasusadas = [];
        contadorcoincidencias = 0;
        elegidaalazar = "";
        
        
        
            //window.alert("Felicitaciones, Ud. ganó!");
        };
        };
    

    }
    else {
        contadorahorcado = contadorahorcado + 1;
        let accionar = datosahorcado[contadorahorcado-1];
        dibuja(altitud+accionar.lo,longitud+accionar.al,accionar.tipo,altitud+accionar.diblo,longitud+accionar.dibal);
        lapiz.fillText(String.fromCodePoint(tecla),100+((contadorahorcado)*31),450);
        lapiz.stroke();
        if (contadorahorcado===10) {terminoeljuego = 2;
            lapiz.fillText("Fin del juego", 500, 350);
            lapiz.stroke();
        var img = new Image();
        img.src = "ahorcado.png";
        
        img.onload = function(){
            lapiz.drawImage(img, 500, 65);
         }
         comenzarahorcado.disabled = false;        
        pasapalabras=[];
        espaciorayitas = 0;
        contadorahorcado = 0;
        letrasusadas = [];
        contadorcoincidencias = 0;
        elegidaalazar = "";
        
            //window.alert("Qué desastre!, Ud Perdió!.");
        };

    }
    }
    
    
}
    }

    

}

//definiendo el canvas
//<canvas id="ahorcado" height="800px" width="1200px"></canvas>
var miLienzo = document.getElementById("ahorcado");
var lapiz = miLienzo.getContext("2d");
lapiz.font="bold italic 30px arial";
var altitud = 400;
var longitud = 400;
var tecla = 0;
var pasapalabras=[];
var espaciorayitas = 0;
var contadorahorcado = 0;
var letrasusadas = [];
var contadorcoincidencias = 0;
let elegidaalazar = "";
var terminoeljuego = 0; // 0 no inicio, 1 gano, 2 perdio, 3 en juego.
var datosahorcado = [{lo:-200,al:0,tipo:1,diblo:0,dibal:0},{lo:-100,al:0,tipo:1,diblo:-100,dibal:-350},
    {lo:-100,al:-350,tipo:1,diblo:150,dibal:-350},{lo:150,al:-350,tipo:1,diblo:150,dibal:-300},
    {lo:175,al:-275,tipo:2,diblo:150,dibal:-275},{lo:150,al:-250,tipo:1,diblo:150,dibal:-175},
    {lo:150,al:-175,tipo:1,diblo:100,dibal:-100},{lo:150,al:-175,tipo:1,diblo:200,dibal:-100},
    {lo:150,al:-250,tipo:1,diblo:100,dibal:-175},{lo:150,al:-250,tipo:1,diblo:200,dibal:-175}];


var comenzarahorcado = document.querySelector("#iniciar-juego");
comenzarahorcado.addEventListener("click",function(){
    window.location.href='#ahorcado';
    lapiz.clearRect(0, 0, 1200, 800);
    comenzarahorcado.disabled = true;
    botonagregar.disabled = true;
    var textoaagregar = document.querySelector("#input-nueva-palabra");
    textoaagregar.disabled = true;
    elegidaalazar = palabras[Math.trunc(Math.random()*palabras.length)];
    console.log(elegidaalazar);
//let elegidaalazar= palabras[Math.trunc(Math.random()*palabras.length)];
//function dibujarahorcado(elegidaalazar2){
let largopalabra = elegidaalazar.length;
espaciorayitas = (600-(elegidaalazar.length*23))/(largopalabra-1);
let ubicacionesrayitas=[];
pasapalabras = [];
letrasusadas = [];
terminoeljuego = 0;
contadorcoincidencias = 0;

lapiz.beginPath();
lapiz.lineWidth = 5;

let x = 0;
for (a=0;a<largopalabra;a++){
    x = 23*a + espaciorayitas*a +50;
    dibuja(longitud+x,altitud,1,longitud+x+23,altitud);
    ubicacionesrayitas.push({lon1:longitud+x,alt1:altitud,letra:""});
    pasapalabras.push(elegidaalazar.slice(a,a+1));
 //   lapiz.fillText(elegidaalazar.slice(a,a+1),longitud+x,altitud-10);
//for (let accionar of datosahorcado) {

juegoiniciado = true;

document.addEventListener("keydown", keyDownHandler,false);
 


 

//};

       
} 

return;
});
//lapiz.moveTo(longitud - 200,altitud);
//lapiz.lineTo(longitud,altitud);o 
//lapiz.moveTo(longitud-100,altitud);
//lapiz.lineTo(longitud-100,altitud-350);o
//lapiz.moveTo(longitud-100,altitud-350);
//lapiz.lineTo(longitud+150,altitud-350);o
//lapiz.moveTo(longitud+150,altitud-350);
//lapiz.lineTo(longitud+150,altitud-300);o
//lapiz.moveTo(longitud+175,altitud-275);
//lapiz.arc(longitud+150,altitud-275,25, 0, 2*Math.PI);o
//lapiz.moveTo(longitud+150,altitud-250);
//lapiz.lineTo(longitud+150,altitud-175);o
//lapiz.moveTo(longitud+150,altitud-175);
//lapiz.lineTo(longitud+100,altitud-100);0
//lapiz.moveTo(longitud+150,altitud-175);
//lapiz.lineTo(longitud+200,altitud-100);0
//lapiz.moveTo(longitud+150,altitud-250);
//lapiz.lineTo(longitud+100,altitud-175);
//lapiz.moveTo(longitud+150,altitud-250);
//lapiz.lineTo(longitud+200,altitud-175);
