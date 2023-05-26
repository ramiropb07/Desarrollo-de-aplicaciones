function esMultiplo(numero) {
  if (numero % 3 === 0 && numero % 15 === 0) {
    return true;
  } else {
    return false;
  }
}

var numero = 30;

var esMultiploDe3Y15 = esMultiplo(numero);
console.log(esMultiploDe3Y15); // Imprime: true