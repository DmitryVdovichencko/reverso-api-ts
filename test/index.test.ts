import Reverso from '../src/index';

test('Reverso should be defined', () => {
  expect(Reverso).toBeDefined();
});

test('Test Reverso get translation HTML', () => {
  const reverso = new Reverso();
  expect(reverso.getHtml()).toEqual('html');
});
