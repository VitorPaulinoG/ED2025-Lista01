import Pilha from "../Pilha";

class PilhaDePratos {
  constructor (size = 5) {
    this.pilhas = [new Pilha(size)];
    this.size = size;
    this.top = 0;
  }

  push(elemento) {
    if(this.pilhas[this.top].isFull()) {
      this.pilhas.push(new Pilha(this.size));
      this.top++;      
    }
    this.pilhas[this.top].push(elemento);    
  }
  
  pop() {
    if(this.pilhas[this.top].isEmpty()) {
      this.top--;
    }
    return this.pilhas[this.top].pop();
  }

  peek() {
    return this.pilhas[this.top].peek();
  }
  
  length() {
    return this.pilhas.map(p => p.length()).reduce((a, b) => a + b);
  }

  clear() {
    this.top = 0;
    this.pilhas[this.top].clear();
  }

}

export default PilhaDePratos;