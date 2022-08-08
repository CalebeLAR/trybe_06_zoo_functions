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
});
