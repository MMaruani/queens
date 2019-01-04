import React, { Component }  from 'react';
//import logo from './logo.svg';

//import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import ChessBoardGame from './chessGame/ChessBoardGame'


class App extends Component {

  render() {
    return (
      <ChessBoardGame/>
    )
  }
}

export default App