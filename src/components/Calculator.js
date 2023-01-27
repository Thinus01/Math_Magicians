import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';

function Result({ total, operation, next }) {
  return (
    <div>
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

Result.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

function Calculate() {
  const [state, setter] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;
  const handleClick = (event, state, setter) => {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setter(result);
  };
  return (
    <section>
      <div className="Container">
        <div className="Result">
          <Result
            operation={operation}
            total={total}
            next={next}
          />
        </div>
        <div className="CalcBtns">
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>AC</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>+/-</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>%</button>
          <button className="Button BoxColor" type="submit" onClick={(event) => handleClick(event, state, setter)}>÷</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>7</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>8</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>9</button>
          <button className="Button BoxColor" type="submit" onClick={(event) => handleClick(event, state, setter)}>x</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>4</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>5</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>6</button>
          <button className="Button BoxColor" type="submit" onClick={(event) => handleClick(event, state, setter)}>-</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>1</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>2</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>3</button>
          <button className="Button BoxColor" type="submit" onClick={(event) => handleClick(event, state, setter)}>+</button>
          <button className="Zero" type="submit" onClick={(event) => handleClick(event, state, setter)}>0</button>
          <button className="Button Norm" type="submit" onClick={(event) => handleClick(event, state, setter)}>.</button>
          <button className="Button BoxColor" type="submit" onClick={(event) => handleClick(event, state, setter)}>=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculate;
