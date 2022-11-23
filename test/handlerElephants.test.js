const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se count retorna o número 4', () => {
    expect(handlerElephants('count')).toStrictEqual(4);
  });
  it('Verifica se names retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica se location retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toStrictEqual('NW');
  });
  it('Verifica se popularity retorna a popularidade correta dos elefantes', () => {
    expect(handlerElephants('popularity')).toStrictEqual(5);
  });
  it('Verifica se availability retorna um array que não contém Monday', () => {
    expect(handlerElephants('availability')).toContain('Friday', 'Saturday', 'Sunday', 'Tuesday');
  });
  it('Verifica se a função retorna undefined quando não recebe parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se a função retorna uma mensagem informando que o parâmetro é inválido caso ele não seja uma string', () => {
    expect(handlerElephants(21)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se a função retorna nulo', () => {
    expect(handlerElephants('a')).toBeNull();
  });
});
