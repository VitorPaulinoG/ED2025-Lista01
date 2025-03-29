import PilhaTwoWay from "../../../src/listas/pilhas/l1q2";

const SIZE = 8;
let p;
beforeEach(() => {
  p = new PilhaTwoWay(SIZE);
})

test("As pilhas A e B devez iniciar vazias", () => {
  expect(p.isEmptyA()).toBe(true);
  expect(p.isEmptyB()).toBe(true);
  expect(p.lengthA()).toBe(0);
  expect(p.lengthB()).toBe(0);
})

test("As pilhas A e B devem inserir elementos no topo com pushA e pushB", () => {
  p.pushA(2);
  p.pushB(0);
  p.pushB(7);

  expect(p.lengthA()).toBe(1);
  expect(p.lengthB()).toBe(2);
  expect(p.isEmptyA()).toBe(false);
  expect(p.isEmptyB()).toBe(false);
  expect(p.peekA()).toBe(2);
  expect(p.peekB()).toBe(7);
})

test("As pilhas A e B devem remover elementos do topo com popA e popB", () => {
  p.pushA(2);
  p.pushB(0);
  p.pushB(7);

  p.popA();
  p.popB();

  expect(p.lengthA()).toBe(0);
  expect(p.lengthB()).toBe(1);
  expect(p.isEmptyA()).toBe(true);
  expect(p.isEmptyB()).toBe(false);
  expect(() => p.peekA()).toThrow("Stack Underflow");
  expect(p.peekB()).toBe(0);
});

test("Um push em na pilha A ou B quando cheias devem gerar Stack Overflow", () => {
  for (let i = 1; i <= SIZE/2; i++) {
    p.pushA(i * 2);
    p.pushB(i * 3);
  }
  expect(p.lengthA()).toBe(4);
  expect(p.lengthB()).toBe(4);
  expect(p.isFullA()).toBe(true);
  expect(p.isFullB()).toBe(true);
  expect(() => p.pushA()).toThrow("Stack Overflow");
  expect(() => p.pushB()).toThrow("Stack Overflow");
})

test("Um clear numa pilha cheia deve se tornar vazia", () => {
  for (let i = 1; i <= SIZE/2; i++) {
    p.pushA(i * 2);
    p.pushB(i * 3);
  }
  p.clearA();
  p.clearB();
  expect(p.lengthA()).toBe(0);
  expect(p.lengthB()).toBe(0);
  expect(p.isEmptyA()).toBe(true);
  expect(p.isEmptyB()).toBe(true);
  expect(() => p.peekA()).toThrow("Stack Underflow");
  expect(() => p.peekB()).toThrow("Stack Underflow");
})



