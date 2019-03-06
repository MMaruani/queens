import React, { Component }  from 'react';
import { hot } from 'react-hot-loader'

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

export default hot(module)(App)