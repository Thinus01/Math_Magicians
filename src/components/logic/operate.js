import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const numone = Big(numberOne);
  const numtwo = Big(numberTwo);

  if (operation === '%') {
    try {
      return numone.mod(numtwo).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }

  if (operation === '÷') {
    try {
      return numone.div(numtwo).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }

  if (operation === 'x') {
    return numone.times(numtwo).toString();
  }

  if (operation === '-') {
    return numone.minus(numtwo).toString();
  }

  if (operation === '+') {
    return numone.plus(numtwo).toString();
  }

  throw Error(`Unknown operation '${operation}'`);
}
