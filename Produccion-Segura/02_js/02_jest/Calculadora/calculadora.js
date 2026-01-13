function inicio(op1, op2) {
  const num1 = parseFloat(op1);
  const num2 = parseFloat(op2);
  return { num1, num2 };
}

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    throw new Error("División por cero no permitida");
  }
  return num1 / num2;
}

function calcular(op1, op, op2) {
  const { num1, num2 } = inicio(op1, op2);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Ambos argumentos deben ser números válidos");
  }

  switch (op) {
    case "+":
      return suma(num1, num2);
    case "-":
      return resta(num1, num2);
    case "*":
    case "x":
    case "X":
      return multiplicar(num1, num2);
    case "/":
      return dividir(num1, num2);
    default:
      throw new Error("Operación no válida");
  }
}

function main() {
  const args = process.argv;
  if (args.length !== 5) {
    console.log("Uso: node calculadora.js <número1> <operación> <número2>");
    process.exit(1);
  }

  const [, , op1, op, op2] = args;

  try {
    const resultado = calcular(op1, op, op2);
    console.log("El resultado es:", resultado);
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
}

// Ejecutar main solo si el archivo se ejecuta directamente (no cuando se importa)
if (require.main === module) {
  main();
}

module.exports = {
  inicio,
  suma,
  resta,
  multiplicar,
  dividir,
  calcular,
  main,
};
