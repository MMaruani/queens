import React from "react"



const SolutionButton = ({getRandomSolution}) => (
    <button
        className="game_button"
        onClick={getRandomSolution}>
        s
    </button>
)

export default SolutionButton