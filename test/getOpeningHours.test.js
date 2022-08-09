const getOpeningHours = require('../src/getOpeningHours');

const expected = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const dayError = 'The day must be valid. Example: Monday';
describe('Testes da função getOpeningHours', () => {
  it('verifica se a função getOpeningHours quando recebe dois parametros vazios retorna o array de hours', () => {
    expect(getOpeningHours(undefined, undefined)).toEqual(expected);
  });

  it('verifica se a função getOpeningHours quando recebe no primeiro parametro um dia que não é de semana, retora um throw error', () => {
    expect(() => (getOpeningHours('string', '00:00-AM'))).toThrow(dayError);
  });

  it('verifica se a função getOpeningHours quando recebe um horario com o numero de horas maior que 12 ou menor que 0, retora um throw error', () => {
    expect(() => (getOpeningHours('Monday', '80:00-AM'))).toThrow('The hour must be between 0 and 12');
  });

  it('verifica se a função getOpeningHours quando recebe uma letra no parametro de horas, retorna um throw error', () => {
    expect(() => (getOpeningHours('Monday', 'CC:CC-AM'))).toThrow('The hour should represent a number');
  });

  it('verifica se a função getOpeningHours quando recebe uma letra no parametro de horas, retorna um throw error', () => {
    expect(() => (getOpeningHours('Monday', '12:00-Ap'))).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('verifica se quando a entrada dos minutos NÃO é valida a função retorna um throw error', () => {
    expect(() => (getOpeningHours('Monday', '10:60-AM'))).toThrow('The minutes must be between 0 and 59');
  });

  it('verifica se quando a entrada dos minutos NÃO é valida a função retorna um throw error', () => {
    expect(() => (getOpeningHours('Monday', '10:60-AM'))).toThrow('The minutes must be between 0 and 59');
  });

  it('verifica se quando a entrada dos valores correspondem a um horário de funcionamento do zoologico, a função retorna The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '10:00-AM')).toBe('The zoo is open');
  });

  it('verifica se quando a entrada dos valores  NÃO correspondem a um horário de funcionamento do zoologico, a função retorna The zoo is closed', () => {
    expect(getOpeningHours('Tuesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
