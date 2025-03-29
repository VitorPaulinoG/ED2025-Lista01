import inverte from "../../src/questions/l1q1";

test("O método inverte deve inverter o texto", () => {
  let result = inverte("INVERTER");
  expect(result).toBe("RETREVNI");
})