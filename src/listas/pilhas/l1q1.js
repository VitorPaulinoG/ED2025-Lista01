import Pilha from "../../Pilha"

const inverte = (texto) => {
  let p = new Pilha(texto.length);
  let invertido = "";
  
  for (let char of texto) {
    p.push(char);
  }

  while(!p.isEmpty()) {
    invertido += p.pop();
  }

  return invertido;
}
export default inverte;