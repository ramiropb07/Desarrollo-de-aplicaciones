function esPrimo(numero) {
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
    return false;
  }

  // Verificar si el número es divisible por algún número entre 2 y la mitad del número
  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      // El número es divisible, por lo tanto no es primo
      return false;
    }
  }

  // Si no se encontró ningún divisor, el número es primo
  return true;
}

var numero = 17;

var esPrimo = esPrimo(numero);
console.log(esPrimo); // Imprime: true