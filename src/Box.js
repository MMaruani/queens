import React from 'react'

import './Box.css'

const WHITE_QUEEN_SYMBOL = '♕'
//const BLACK_QUEEN_SYMBOL = '♛'

const Box = ({col, row, color, queen, error, id, onClick }) => (
  <div className={`box ${color} ${error}`} onClick={() => onClick(col, row, id)}>
    <span className="queen">
      {queen === true ? WHITE_QUEEN_SYMBOL : ""}
    </span>
  </div>
)

export default Box
