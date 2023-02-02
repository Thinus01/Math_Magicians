import operate from './operate';

test('sum:', () => {
  expect(operate(5, 4, '+')).toEqual('9');
});

test('Subtract:', () => {
  expect(operate(5, 4, '-')).toEqual('1');
});

test('Multiply:', () => {
  expect(operate(5, 4, 'x')).toEqual('20');
});

test('divide:', () => {
  expect(operate(5, 1, '÷')).toEqual('5');
});

test('divide by zero:', () => {
  expect(operate(5, 0, '÷')).toEqual("Can't divide by 0.");
});

test('Modulus:', () => {
  expect(operate(5, 1, '%')).toEqual('0');
});

test('Unknown operator:', () => {
  expect(() => operate(1, 2, 'y')).toThrow("Unknown operation 'y'");
});

test('Unknown operand:', () => {
  expect(() => operate('a', 2, 'x')).toThrow('');
});
