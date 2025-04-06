import Pilha from "../Pilha";


const removerDuplicados = (elementos) => {
  let pilha = new Pilha(elementos.length)
  let size = elementos.length
  let aux = new Pilha(size)
  let items = new Pilha(size)
  let item
  for(let i = elementos.length - 1; i >= 0; i--) {
    pilha.push(elementos[i])
  }
  while(!pilha.isEmpty()) {
    items.push(pilha.pop())
    while(!pilha.isEmpty()) {
      if(pilha.peek() === items.peek()) {
        pilha.pop()
        continue
      } 
      aux.push(pilha.pop())
    }
    while(!aux.isEmpty()) {
      pilha.push(aux.pop())
    }
  }
  while(!items.isEmpty()) {
    pilha.push(items.pop())
  }

  return pilha.toString()
}

export default removerDuplicados;