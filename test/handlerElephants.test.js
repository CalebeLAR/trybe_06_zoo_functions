const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o retorno da função handlerElephants(count) retorna a quantidade de elefantes.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se o retorno da função handlerElephants(names) retorna ["Ilana", "Orval", "Bea", "Jefferson"].', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se o retorno da função handlerElephants(names) retorna um array que contem o nome Jefferson.', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBe(true);
  });
  it('Verifica se o retorno da função handlerElephants(averageAge) retorna 10.5.', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se o retorno da função handlerElephants(null) retorna null.', () => {
    expect(handlerElephants('string')).toBe(null);
  });
  it('Verifica se o retorno da função handlerElephants(undefined) retorna undefined.', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Verifica se o retorno da função handlerElephants para parâmetros inválidos retorna uma mensagem.', () => {
    expect(handlerElephants(101010)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica handlerElephants return.', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5')
  });
});
