import Pilha from "./../Pilha";


export default function bemFormado(expressao) {
  let p = new Pilha(expressao.length);
  let ultimoChar = '';
  for (let char of expressao) {
    p.push(char);
    if((ultimoChar === '(' && char === ')') || (ultimoChar === '[' && char === ']')) {
      p.pop();
      p.pop();
    }
    ultimoChar = p.isEmpty()? '' : p.peek();
  }
  return p.isEmpty();
}