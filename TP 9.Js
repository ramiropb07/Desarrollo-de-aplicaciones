Escribe una función llamada esSegura, que reciba una contraseña, y retorne un valor booleanofunction esSegura(contrasena) {
  // Verificar la longitud de la contraseña
  if (contrasena.length < 8) {
    return false;
  }

  // Verificar si la contraseña contiene al menos un número
  var contieneNumero = false;
  for (var i = 0; i < contrasena.length; i++) {
    var caracter = contrasena.charAt(i);
    if (!isNaN(caracter)) {
      contieneNumero = true;
      break;
    }
  }

  return contieneNumero;
}

var contrasena1 = "abc123";
var contrasena2 = "segura";

console.log(esSegura(contrasena1)); // Imprime: true
console.log(esSegura(contrasena2)); // Imprime: false
