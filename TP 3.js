function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

var peso = 70; // en kilogramos
var altura = 1.75; // en metros

var resultado = imc(peso, altura);
console.log(resultado); // Imprime: 22.86