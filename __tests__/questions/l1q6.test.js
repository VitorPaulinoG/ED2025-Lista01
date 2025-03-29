import notacaoPolonesaReversa from '../../src/questions/l1q6'



test("Deve transformar a expressão em RPN", () => {
  expect(notacaoPolonesaReversa('(a+(b*c))')).toBe('abc*+');
  expect(notacaoPolonesaReversa('((a+b)*(z+x))')).toBe('ab+zx+*');
  expect(notacaoPolonesaReversa('((a+t)*((b+(a+c))^(c+d)))')).toBe('at+bac++cd+^*');
  expect(notacaoPolonesaReversa('a+b*c-d')).toBe('abc*+d-');
  expect(notacaoPolonesaReversa('(a+b)+c/d')).toBe('ab+cd/+');
  expect(notacaoPolonesaReversa('a*b-(c-d)+e')).toBe('ab*cd--e+');
})


// test("a+b em RPN deve ser ab+", () => {
//   expect(notacaoPolonesaReversa("a+b")).toBe("ab+");
// })

// test("a - b + c em RPN deve ser a b - c +", () => {
//   expect(notacaoPolonesaReversa("a - b + c")).toBe("a b - c +");
// })

// test("(a + b) / c em RPN deve ser a b + c /", () => {
//   expect(notacaoPolonesaReversa("(a + b) / c")).toBe("a b + c /");
// })

// test("((a - b) * c / d) - e em RPN deve ser a b - c * d / e -", () => {
//   expect(notacaoPolonesaReversa("((a - b) * c / d) - e")).toBe("a b - c * d / e -");
// })

// test("a + b / ((c - d) * e / f) em RPN deve ser a b c d - e * f / / +", () => {
//   expect(notacaoPolonesaReversa("a + b / ((c - d) * e / f)")).toBe("a b c d - e * f / / +");
// })

