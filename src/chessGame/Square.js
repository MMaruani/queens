import React from 'react'

import './Square.css'

import {getSymbol} from "./common"







const Square = ({col, row, color, pieceType, hasPiece, conflict, valid, id, onClick }) => (
  <div className={`square ${color} ${conflict?"red":""}`} onClick={() => onClick(id)}>
    <span>
      
      {valid ? (hasPiece ? getSymbol(pieceType) : "") : "x"}
    </span>
  </div>
)

export default Square
