function contarPalabras(valor) {
  // Eliminamos los espacios en blanco al inicio y final del valor
  valor = valor.trim();
  
  // Si el valor está vacío, retornamos 0 palabras
  if (valor === '') {
    return 0;
  }
  
  // Dividimos el valor en palabras utilizando los espacios en blanco como separadores
  var palabras = valor.split(/\s+/);
  
  // Retornamos el número de palabras
  return palabras.length;
}

var texto1 = 'Hola, ¿cómo estás?';
var texto2 = 'Esta es una prueba de conteo de palabras.';

console.log(contarPalabras(texto1)); // Imprime: 3
console.log(contarPalabras(texto2)); // Imprime: 7
