import './App.css';
import './components/style.css';
import React, { PureComponent } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculate from './components/Calculator';
import Home from './components/home';
import Quote from './components/quote';

class App extends PureComponent {
  render() {
    return (
      <>
        <nav>
          <ul id="UL">
            <li className="Li"><Link to="/">Home</Link></li>
            <li className="Li" id="CalcLi"><Link to="/Calculate">Calculator</Link></li>
            <li className="Li"><Link to="/Quote">Quote</Link></li>
          </ul>
          <h1 id="MMh1">Math Magicians</h1>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculate" element={<Calculate />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
