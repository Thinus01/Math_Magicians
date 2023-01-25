import React from 'react';

class Calculate extends React.PureComponent {
  render() {
    return (
      <section>
        <div className="Container">
          <p className="Result" type="text">0</p>
          <div className="CalcBtns">
            <button className="Button Norm" type="submit">AC</button>
            <button className="Button Norm" type="submit">+/-</button>
            <button className="Button Norm" type="submit">%</button>
            <button className="Button BoxColor" type="submit">÷</button>
            <button className="Button Norm" type="submit">7</button>
            <button className="Button Norm" type="submit">8</button>
            <button className="Button Norm" type="submit">9</button>
            <button className="Button BoxColor" type="submit">x</button>
            <button className="Button Norm" type="submit">4</button>
            <button className="Button Norm" type="submit">5</button>
            <button className="Button Norm" type="submit">6</button>
            <button className="Button BoxColor" type="submit">-</button>
            <button className="Button Norm" type="submit">1</button>
            <button className="Button Norm" type="submit">2</button>
            <button className="Button Norm" type="submit">3</button>
            <button className="Button BoxColor" type="submit">+</button>
            <button className="Zero" type="submit">0</button>
            <button className="Button Norm" type="submit">.</button>
            <button className="Button BoxColor" type="submit">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculate;
