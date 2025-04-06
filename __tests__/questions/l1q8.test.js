import PilhaDePratos from "../../src/questions/l1q8";

let p;

beforeEach(() => {
  p = new PilhaDePratos(3)
})

test("Deve criar nova ao invés de lançar Stack Overflow", () => {
  p.push(5);
  p.push(10);
  p.push(15);
  expect(() => p.push(20)).not.toThrow("Stack Overflow");
  expect(p.pilhas.length).toBe(2);
  expect(p.length()).toBe(4);
  expect(p.pop()).toBe(20);
  expect(p.pop()).toBe(15);
  
})