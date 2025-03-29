import Pilha from "./../Pilha";

export default function trocaTopoPorBase(p) {
  let topoIndice = p.length();
  let aux = new Pilha(p.length());
  let topo = p.pop();
  let base;
  for(let i = 0; i < topoIndice - 2; i++) { 
    aux.push(p.pop());
  }
  base = p.pop();
  p.push(topo);
  for(let i = 0; i < topoIndice - 2; i++) { 
    p.push(aux.pop());
  }
  p.push(base);
}