function aplicarCambios() {
    // Recogemos los valores seleccionados
    var color = document.getElementsByName('colorElegido')[0];
    var tam = document.getElementsByName('tamFuente')[0];
    var tamElegido = tam[tam.selectedIndex].value;
  
    // Aplicamos el color y el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamElegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.getElementById('mensaje').innerHTML = "APLICADO";
  
    // Guardamos los valores seleccionados en el almacenamiento local
    localStorage.setItem('colorElegido', color.value);
    localStorage.setItem('tamFuenteElegido', tamElegido);
  }
  
  // Función para cargar los valores guardados al cargar la página
  function cargarValoresGuardados() {
    // Obtenemos los valores guardados del almacenamiento local
    var colorElegido = localStorage.getItem('colorElegido');
    var tamFuenteElegido = localStorage.getItem('tamFuenteElegido');
  
    // Si hay valores guardados, los aplicamos a la página
    if (colorElegido && tamFuenteElegido) {
      document.documentElement.style.fontSize = parseFloat(tamFuenteElegido) + "rem";
      document.documentElement.style.setProperty("--colorNormal", colorElegido);
    }
  }
  
  // Llamamos a la función cargarValoresGuardados al cargar la página
  console.log("La página se ha cargado.");
  window.onload = cargarValoresGuardados;