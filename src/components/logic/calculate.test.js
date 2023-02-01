import calculate from './calculate';

const obj = { total: null, next: null, operation: null };

test('Clear All when AC button is clicked', () => {
  expect(calculate(obj, 'AC')).toEqual(obj);
});

test('When there is an operation, update next', () => {
  const operationObj = { ...obj, next: '5', operation: '-' };
  expect(calculate(operationObj, '7')).toEqual({ ...operationObj, next: `${operationObj.next}7` });
});

test('When there is no operation, update next and clear value', () => {
  expect(calculate(obj, '5')).toEqual({ next: '5', total: null });
});

test('Do nothing when next or operation is null', () => {
  const operationObj = {
    ...obj, next: null, operation: '+', total: '8',
  };
  expect(calculate(operationObj, '=')).toEqual({});
});

test('When the button clicked is =', () => {
  const operationObj = {
    ...obj, next: '2', total: '7', operation: '-',
  };
  const returnObj = {
    ...operationObj, next: null, total: '5', operation: null,
  };
  expect(calculate(operationObj, '=')).toEqual(returnObj);
});

test('When zero button is clicked and next value is zero, return an object with null or zero values.', () => {
  expect(calculate(obj, '0')).toEqual({ next: '0', total: null });
});

test('When the button clicked is a dot', () => {
  expect(calculate(obj, '.')).toEqual({ next: '0.', operation: null, total: null });
});

test("When a user press an operation after pressing '='", () => {
  const operationObj = { ...obj, total: '25' };
  expect(calculate(operationObj, '-')).toEqual({ ...obj, operation: '-', total: '25' });
});
