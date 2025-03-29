import Pilha from "./../Pilha";

const converteDecimalParaBinario = (n) => {
  if(n === 1) return '1';

  let p = new Pilha(Math.ceil(Math.log2(n)));
  let resultado = n;
  let resto;
  let binario = "";
  while(resultado != 1) {
    let quociente = Math.floor(resultado / 2);
    resto = resultado % 2;
    p.push(resto);
    resultado = quociente;
  }
  p.push(resultado);

  while(!p.isEmpty()) {
    binario += p.pop();
  }

  return binario;
}


export default converteDecimalParaBinario;