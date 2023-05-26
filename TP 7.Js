function contieneABC(valor) {
  return valor.includes('abc');
}

var valor1 = 'defabcghi';
var valor2 = 'xyz123';

console.log(contieneABC(valor1)); // Imprime: true
console.log(contieneABC(valor2)); // Imprime: false
