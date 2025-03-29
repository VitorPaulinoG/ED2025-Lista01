class PilhaTwoWay {
  constructor(size = 8) {
    this.dados = []
    this.size = size;
    this.topA = size - 1;
    this.topB = 0;
  }

  pushA(elemento) {
    if(this.isFullA()) throw new Error("Stack Overflow");

    this.dados[this.topA] = elemento;
    this.topA--;
  }

  pushB(elemento) {
    if(this.isFullB()) throw new Error("Stack Overflow");

    this.dados[this.topB] = elemento;
    this.topB++;
  }

  popA() {
    if(this.isEmptyA()) throw new Error("Stack Underflow");

    this.topA++;
  }

  popB() {
    if(this.isEmptyB()) throw new Error("Stack Underflow");

    this.topB--;
  }

  peekA() {
    if(this.isEmptyA()) throw new Error("Stack Underflow");

    return this.dados[this.topA + 1];
  }

  peekB() {
    if(this.isEmptyB()) throw new Error("Stack Underflow");

    return this.dados[this.topB - 1];
  }

  isEmptyA() {
    return this.lengthA() === 0;
  }
  
  isEmptyB() {
    return this.lengthB() === 0;
  }

  isFullA() {
    return this.topA < this.topB;
  }
  
  isFullB() {
    return this.topA < this.topB;
  }

  lengthA() {
    return this.size - this.topA - 1;
  }

  lengthB() {
    return this.topB;
  }

  clearA() {
    this.topA = this.size - 1;
  }

  clearB() {
    this.topB = 0;
  }


}

export default PilhaTwoWay;