import trocaTopoPorBase from "../../../src/listas/pilhas/l1q3";
import Pilha from "../../../src/Pilha";

const SIZE = 5;
let p;

beforeEach(() => {
  p = new Pilha(SIZE);
  p.push(1);
  p.push(2);
  p.push(3);
  p.push(4);
  p.push(5);
})

test("trocaTopoPorBase deve trocar o topo pela base, sem alterar a ordem dos elementos intermediários", () => {
  trocaTopoPorBase(p);
  expect(p.toString()).toBe("5,2,3,4,1");
  expect(p.pop()).toBe(1);
  expect(p.pop()).toBe(4);
  expect(p.pop()).toBe(3);
  expect(p.pop()).toBe(2);
  expect(p.pop()).toBe(5);
})