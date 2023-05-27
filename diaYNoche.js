var modo = leerModoActual();

if(modo == "dia"){
    ponerModoDia();
} else {
    ponerModoNoche();
}

function leerModoActual(){
    let modo = window.localStorage.getItem("modoGuardado");
    if(!modo){
        return "dia";
    } 

    return modo;
}

function ponerModoDia() {
    let todo = document.getElementById("bodyR");
    window.localStorage.setItem("modoGuardado", "dia");
    // Ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";

    // Mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";

    // Cambiar color de todos los elementos h1 a negro
    let elementosH1 = document.querySelectorAll('h1');
    elementosH1.forEach(function(h1) {
        h1.style.color = "#cccc73";
    });
    let elementosP = document.querySelectorAll('p');
    elementosP.forEach(function(p) {
        p.style.color = "white";
    });
    var elementoBackground = document.body;

    // Establecer el color de fondo
    elementoBackground.style.backgroundColor = "rgba(10, 10, 10, 0.92)";

   
}

function ponerModoNoche() {
    let todo = document.getElementById("bodyR");
    window.localStorage.setItem("modoGuardado", "noche");
    // Mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";

    // Ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";

    // Cambiar color de todos los elementos h1 a rojo
    let elementosH1 = document.querySelectorAll('h1');
    elementosH1.forEach(function(h1) {
        h1.style.color = "red";
    });

    let elementosP = document.querySelectorAll('p');
    elementosP.forEach(function(p) {
        p.style.color = "black";
    });

    var elementoBackground = document.body;

    // Establecer el color de fondo
    elementoBackground.style.backgroundColor = "white";

    let elementoBuy = document.getElementById('buy-button');
    elementoBuy.style.color = "#f7b10a";
}
