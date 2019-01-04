import React from 'react'

import './Square.css'

import {getSymbol} from "./common"







const Square = ({col, row, color, pieceType, hasPiece, conflict, id, onClick }) => (
  <div className={`square ${color} ${conflict?"red":""}`} onClick={() => onClick(id)}>
    <span>
      {hasPiece ? getSymbol(pieceType) : ""}
    </span>
  </div>
)

export default Square
