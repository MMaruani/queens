import React from "react"

import PieceChoiceButton from "./PieceChoiceButton"



const ButtonList = ({pieceTypes, selectType, selectedType}) => (
    <ul className="chess_button_list">
        {pieceTypes.map((type, index) => (
            <li key={index}>
                <PieceChoiceButton
                    pieceType={type}
                    selectType={selectType}
                    status={type === selectedType ? "active" : ""}
                />
            </li>
        ))}
    </ul>
)

export default ButtonList