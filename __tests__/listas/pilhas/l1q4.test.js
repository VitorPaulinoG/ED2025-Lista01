import converteDecimalParaBinario from "../../../src/listas/pilhas/l1q4";


test("O valor 300 deve retornar 100101100", () => {
  let decimalNumber = 300;
  expect(converteDecimalParaBinario(decimalNumber)).toBe("100101100");
})

test("O valor 891 deve retornar 1101111011", () => {
  let decimalNumber = 891;
  expect(converteDecimalParaBinario(decimalNumber)).toBe("1101111011");
})

test("O valor 1 deve retornar 1", () => {
  let decimalNumber = 1;
  expect(converteDecimalParaBinario(decimalNumber)).toBe("1");
})