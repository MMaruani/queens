import React, { Component } from 'react';

import Square from './Square'



class ChessBoard extends Component {


  render() {
    return (
      <div className="chessboard">
       {this.props.squares.map(({row, col, color, hasPiece, conflict, id}) => (
          <Square
            row = {row}
            col = {col}
            color = {color}
            conflict = {conflict}
            pieceType = {this.props.pieceType}
            hasPiece = {hasPiece}
            id = {id}
            key = {id}
            onClick = {this.props.handleSquareClick}
          />
        ))}
      </div>
    )
  }
}

export default ChessBoard