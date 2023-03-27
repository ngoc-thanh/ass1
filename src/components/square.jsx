import React from "react"
const Square = ({value,onClick,classNames}) => {
    return( 
    <div className={`game-square ${classNames}`}
    onClick={onClick}>
        {value}
    </div>
    )
}

export default Square