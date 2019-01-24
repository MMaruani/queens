import React from "react"

import {scrollToTop} from "../utils/scroll.js"

import gameImg from "./img/chessboard_icon.png"


const PieceChoiceButton = () => (
    <button
        className= "game_button"
        onClick={scrollToTop}>
        <img src={gameImg} alt="sroll to top" style={{width:"50px"}}/>
    </button>
)

export default PieceChoiceButton