import './App.css';
import './components/style.css';
import React, { PureComponent } from 'react';
import Calculate from './components/Calculator';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Calculate />
      </div>
    );
  }
}

export default App;
