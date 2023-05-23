'use strict';

var clicks=0;
var matriz = [ ["","",""], ["","",""], ["","",""] ];


function entrada(identificador){
  let selector="div"+identificador;
  let color="#8DBAD4";
  let cuadro=document.getElementById(selector);
  cuadro.style.backgroundColor=color;
  
}
function salida(identificador){
  let selector="div"+identificador;
  let cuadro=document.getElementById(selector);
  cuadro.style.backgroundColor="white";
}

function ganador() {
  // Comprobar filas
  for (let i = 0; i < 3; i++) {
    if (matriz[i][0] !== "" && matriz[i][0] === matriz[i][1] && matriz[i][0] === matriz[i][2]) {
      return true;
    }
  }
  
  // Comprobar columnas
  for (let j = 0; j < 3; j++) {
    if (matriz[0][j] !== "" && matriz[0][j] === matriz[1][j] && matriz[0][j] === matriz[2][j]) {
      return true;
    }
  }
  
  // Comprobar diagonales
  if (matriz[0][0] !== "" && matriz[0][0] === matriz[1][1] && matriz[0][0] === matriz[2][2]) {
    return true;
  }
  
  if (matriz[0][2] !== "" && matriz[0][2] === matriz[1][1] && matriz[0][2] === matriz[2][0]) {
    return true;
  }
  
  return false;
}

function dibujo(identificador) {
  clicks++;
  

  let selector = "div" + identificador;
  let color = "green";
  let cuadro = document.getElementById(selector);
  
  if (clicks % 2 === 0) {
    cuadro.innerHTML = "O";
    matriz[(identificador-1)%3][Math.floor((identificador-1)/3)] = "O";
  } else {
    cuadro.innerHTML = "X";
    matriz[(identificador-1)%3][Math.floor((identificador-1)/3)] = "X";
  }
  
  cuadro.style.color = color;

  if (ganador()) {
    alert("Has ganado");
    reset();
    
  }
  
  if (clicks >= 9 && !ganador()) {
    alert("Empate");
    reset();
  }
}
function reset() {
  clicks = 0;
  matriz = [ ["","",""], ["","",""], ["","",""] ];
  
  for (let i = 1; i <= 9; i++) {
    let selector = "div" + i;
    let cuadro = document.getElementById(selector);
    cuadro.innerHTML = "";
    cuadro.style.color = "black";
  }
}




