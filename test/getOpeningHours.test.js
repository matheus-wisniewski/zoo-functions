const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função ao receber Monday retorna a string esperada', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se a função ao receber um horário que o Zoológico esteja aberto retorna a string esperada', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se a função ao receber um horário que o Zoológico esteja aberto retorna a string esperada', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se a função retorna o objeto esperado quando não recebe argumentos', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se a função ao receber um dia inválido retorna a string esperada', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica se a função ao receber uma abreviação de horas inválido lança o erro esperado', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se a função lança o erro esperado se o formato das horas for inválido', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verifica se a função lança o erro esperado se o formato dos minutos for inválido', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Verifica se a função lança o erro esperado se as horas forem números que não estejam entre 0 e 12', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica se a função lança o erro esperado se os minutos forem números que não estejam entre 0 e 59', () => {
    expect(() => getOpeningHours('Sunday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
