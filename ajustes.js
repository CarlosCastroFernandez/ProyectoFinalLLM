

function colorEnPaginas(){
    
    var modo=window.localStorage.getItem('--modoGuardado');
    if(!modo[modo=document.documentElement.style.getPropertyValue('--modoGuardado')]){
       
    }
    return modo;
}

function color(){
    var color=document.getElementsByName('colorElegido')[0];
    var colorElegido=color.value;
    localStorage.setItem('colorElegido',colorElegido);
    document.documentElement.style.setProperty('--colorNormal',colorElegido);

}


function aplicarCambios() {
    
   
    //console.log('color elegido ' + color.value);
    var colorElegido=localStorage.getItem('colorElegido');
    document.documentElement.style.setProperty('--colorNormal',colorElegido);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;


    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.getElementById('mensaje').innerHTML = "APLICADO";


}

aplicarCambios();