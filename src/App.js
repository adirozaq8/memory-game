import React, {Component} from 'react';
import './App.css';

import Navbar from './Navbar';
import SquareList from './SquareList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <SquareList />
      </div>
    );
  }
}

export default App;
