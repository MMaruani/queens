import React from "react"

import {getSymbol} from "./common"


const PieceChoiceButton = ({pieceType, selectType}) => (
    <button 
        className="piece_choice_button"
        onClick={() => selectType(pieceType)}>
        {getSymbol(pieceType)}
    </button>
)

export default PieceChoiceButton