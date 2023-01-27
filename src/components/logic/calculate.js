import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, btn) {
  if (isNumber(btn)) {
    if (btn === '0' && obj.next === '0') {
      return {};
    }

    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + btn };
      }
      return { ...obj, next: btn };
    }

    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + btn,
        total: null,
      };
    }
    return {
      next: btn,
      total: null,
    };
  }

  if (btn === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (btn === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (btn === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (btn === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: btn };
  }

  if (!obj.next) {
    return { operation: btn };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: btn };
    }

    if (!obj.total) {
      return { total: 0, operation: btn };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: btn,
    };
  }

  return {
    total: obj.next,
    next: null,
    operation: btn,
  };
}
