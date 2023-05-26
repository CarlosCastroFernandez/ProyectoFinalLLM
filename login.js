// Obtener referencia al formulario y al elemento div
const formUsuario = document.getElementById('formUsuario');
const nombreUsuarioDiv = document.getElementById('nombreusuario');

// Comprobar si hay un nombre guardado en la memoria de sesión
const nombreGuardado = sessionStorage.getItem('nombreUsuario');
if (nombreGuardado) {
  // Mostrar el nombre guardado en el div
  nombreUsuarioDiv.textContent = nombreGuardado;
} else {
  // Mostrar "Sin identificar" si no hay nombre guardado
  nombreUsuarioDiv.textContent = 'Sin identificar';
}


// Agregar un evento de escucha al formulario cuando se envíe
formUsuario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener el valor del nombre introducido por el usuario
  const nombreUsuario = document.getElementById('nombreInput').value;

  // Guardar el nombre en la memoria de sesión
  sessionStorage.setItem('nombreUsuario', nombreUsuario);

  // Mostrar el nombre en el div
  nombreUsuarioDiv.textContent = nombreUsuario;

  console.log(nombreUsuario);

  // Reiniciar el formulario
  formUsuario.reset();
});