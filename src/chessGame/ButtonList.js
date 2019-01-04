import React from "react"

import PieceChoiceButton from "./PieceChoiceButton"



const ButtonList = ({pieceTypes, selectType, selectedType}) => (
    <ul className="chess_button_list">
        {pieceTypes.map((type, index) => (
            <li key={index}
                className={type === selectedType ? "active" : ""}>
                <PieceChoiceButton
                    pieceType={type}
                    selectType={selectType}
                />
            </li>
        ))}
    </ul>
)

export default ButtonList