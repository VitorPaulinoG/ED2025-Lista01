import Pilha from "../Pilha";

const PRECEDENCIA= { '+': 1, '-': 1, '/': 2, '*': 2, '^': 3};

const eUmOperador = (char) => Object.keys(PRECEDENCIA).includes(char);

const notacaoPolonesaReversa = (expressao) => {
  let operadores = new Pilha(expressao.length);

  let resultado = [];
  for (let i = 0; i < expressao.length; i++) {
    let char = expressao[i];

    if (eUmOperador(char)) {
      while (!operadores.isEmpty() && eUmOperador(operadores.peek()) && 
        PRECEDENCIA[operadores.peek()] >= PRECEDENCIA[char]) {
        resultado.push(operadores.pop());
      }
      operadores.push(char);
    } else if(char === '(') {
      operadores.push(char);
    } else if (char === ')') {
      while (!operadores.isEmpty() && operadores.peek()!= '(') {
        resultado.push(operadores.pop());
      }
      operadores.pop();
    } else {
      resultado.push(char);
    }
  }

  while (!operadores.isEmpty()) {
    resultado.push(operadores.pop());
  }
  
  return resultado.join('');
}

export default notacaoPolonesaReversa;