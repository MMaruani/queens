import React from "react"



const ResetButton = ({resetChessBoard}) => (
    <button
        className="game_button reset_button"
        onClick={resetChessBoard}>
        ∅
    </button>
)

export default ResetButton