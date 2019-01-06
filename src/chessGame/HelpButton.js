import React from "react"



const HelpButton = ({help,status}) => (
    <button
        className={`game_button reset_button ${status}`}
        onClick={help}>
        ⦠
    </button>
)

export default HelpButton