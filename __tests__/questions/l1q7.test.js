import removerDuplicados from "../../src/questions/l1q7";


test("Deve remover duplicados", () => {
  expect(removerDuplicados([3, 7, 3, 2, 7, 1, 4, 2])).toBe('3 7 2 1 4');
  expect(removerDuplicados([10, 8, 2, 8, 4, 10])).toBe('10 8 2 4');
})