const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    const array = productDetails('Alcool gel', 'Máscara');
    expect(array.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof array[0] === 'object' && typeof array[1] === 'object').toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Lampada', 'Abobrinha')[0] !== productDetails('Lampada', 'Abobrinha')[1]).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
    // referência https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
    const item1 = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const item2 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    const numItem1 = item1.replace(/[^0-9]/g,'');
    const numItem2 = item2.replace(/[^0-9]/g,'');
    expect(parseInt(numItem1) === 123 && parseInt(numItem2) === 123).toBe(true);
    });
});
