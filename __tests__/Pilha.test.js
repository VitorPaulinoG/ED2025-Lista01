import Pilha from "../src/Pilha";
const SIZE = 5;
let p;

beforeEach(() => {
  p = new Pilha(5);
})

test("Deve iniciar vazia", () => {
  expect(p.isEmpty()).toBe(true);
  expect(p.length()).toBe(0);
})

test("Um Push deve inserir um elemento na pilha", () => {
  p.push('A');
  expect(p.isEmpty()).toBe(false);
  expect(p.length()).toBe(1);
  expect(p.peek()).toBe('A');
})

test("Um Pop numa pilha de 2 elementos deve modificar o tamanho para 1", () => {
  p.push('A');
  p.push('B');
  p.pop();
  expect(p.length()).toBe(1);
  expect(p.peek()).toBe('A');
})

test("Um Push numa pilha cheia deve causar Stack Overflow", () => {
  for (let i = 1; i < 6; i++) {
    p.push(i * 2);
  }
  expect(() => p.push(6)).toThrow("Stack Overflow");
  expect(p.length()).toBe(5);
  expect(p.peek()).toBe(10);
})

test("Um Pop numa pilha vazia deve causar Stack Underflow", () => {
  expect(() => p.pop()).toThrow("Stack Underflow");
  expect(p.length()).toBe(0);
})

test("Um clear numa pilha com qualquer elemento deve ficar vazia", () => {
  for (let i = 1; i < 3; i++) {
    p.push(i * 2);
  }
  p.clear();
  expect(p.isEmpty()).toBe(true);
  expect(p.length()).toBe(0);
})

test("Uma pilha de capacidade 5 e com 5 elementos deve ser considerada cheia", () => {
  for (let i = 1; i < 6; i++) {
    p.push(i * 2);
  }
  expect(p.isFull()).toBe(true);
  expect(p.length()).toBe(5);
})