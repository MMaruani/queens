import React from "react"

import {getSymbol} from "./common"


const PieceChoiceButton = ({pieceType, selectType, status}) => (
    <button
        className={`game_button ${status}`}
        onClick={() => selectType(pieceType)}>
        {getSymbol(pieceType)}
    </button>
)

export default PieceChoiceButton