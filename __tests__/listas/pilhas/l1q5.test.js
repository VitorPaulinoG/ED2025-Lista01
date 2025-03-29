import bemFormado from "../../../src/listas/pilhas/l1q5";



test("A entrada '[()[()]]()' deve ser considerada bem-formada", () => {
  expect(bemFormado('[()[()]]()')).toBe(true);
})

test("A entrada '(()]' deve ser considerada mal-formada", () => {
  expect(bemFormado('(()]')).toBe(false);
})

test("A entrada '[([)]]' deve ser considerada mal-formada", () => {
  expect(bemFormado('[([)]]')).toBe(false);
})

