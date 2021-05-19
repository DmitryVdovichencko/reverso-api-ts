import Reverso, { UserReversoParams } from '../src/index';

test('Reverso should be defined', () => {
  expect(Reverso).toBeDefined();
});

test('Test Reverso check params should return true', () => {
  const params: UserReversoParams = {
    from: 'en',
    to: 'ru',
    text: 'hello',
  };
  const reverso = new Reverso(params);
  expect(reverso.checkParams()).toEqual(true);
});

test('Test Reverso check params should return false', () => {
  const params: UserReversoParams = {
    from: 'fr',
    to: 'ru',
    text: 'hello',
  };
  const reverso = new Reverso(params);
  expect(reverso.checkParams()).toEqual(false);
});
