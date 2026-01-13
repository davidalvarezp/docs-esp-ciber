const {
  inicio,
  suma,
  resta,
  multiplicar,
  dividir,
  calcular,
  main,
} = require("./calculadora");

describe("Primeros pasos con Jest", () => {
  test("suma un número positivo y uno negativo", () => {
    expect(suma(10, -3)).toBe(7);
  });
  test("restamos un número positivo con uno negativo y el resultado da un número negativo", () => {
    expect(resta(5, 10)).toBe(-5);
  });
});
