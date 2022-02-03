function validarmayusculas(texto2){
    let textoaprocesar2 = texto2;
    let okmayusculas = true;
    
    for (i = 0; i < textoaprocesar2.length ; i++) {
  paravalidar =  textoaprocesar2.charCodeAt(i);
          if ((paravalidar > 64) && (paravalidar < 91)) {
     ;   
    } else{
            okmayusculas = false;
            error_minuscula.classList.remove("invisible");
            error_minuscula.classList.add("visibleerror");
        // accion cuando no coincide
}
}
    return okmayusculas;
}

function validarrepite(texto2){
    let textoaprocesar2 = texto2;
    let oknorepite = true;
    
    for (let palabraindividual of palabras) {
          
        if (palabraindividual==textoaprocesar2) {
            error_repite.classList.remove("invisible2");
            error_repite.classList.add("visibleerror");
            return oknorepite;   
    } else{
        oknorepite = false;
            
        // accion cuando no coincide
}
}
    return oknorepite;
}

var palabras = ["PERRO","ANIMALES","ORACLE","TENEBROSO","CAMPANA","MANOS","ESTACION","LENGUAJE","HOSPEDAJE","ELECTROENCEFALOGRAFISTA","ESTABLO","PRIMATE","PEREGRINACION"];
var botonagregar = document.querySelector("#nueva-palabra");

botonagregar.addEventListener("click",function(event){
    event.preventDefault();
    var textoaagregar = document.querySelector("#input-nueva-palabra");
    error_minuscula.classList.remove("visibleerror");
    error_minuscula.classList.add("invisible");
    error_repite.classList.remove("visibleerror");
    error_repite.classList.add("invisible2");
    
    textoaprocesar = textoaagregar.value;
    var todoenmayusculas = validarmayusculas(textoaprocesar);
    console.log(todoenmayusculas);
    var norepite = validarrepite(textoaprocesar);
    console.log(norepite);

    if  ((todoenmayusculas) && (!norepite)) {
    palabras.push(textoaprocesar);
    document.getElementById("input-nueva-palabra").value = "";
    console.log(palabras);
    }
return;})
console.log(palabras);


var comenzarahorcado = document.querySelector("#iniciar-juego");
comenzarahorcado.addEventListener("click",function(){
    let elegidaalazar = palabras[Math.trunc(Math.random()*palabras.length)];
    console.log(elegidaalazar);
return;
});