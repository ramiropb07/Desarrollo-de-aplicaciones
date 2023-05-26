const esPrimoYMayorQue10 = numero => {
  if (numero <= 1 || numero <= 10) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
};

const numero = 17;

const esPrimoMayorQue10 = esPrimoYMayorQue10(numero);
console.log(esPrimoMayorQue10); // Imprime: true