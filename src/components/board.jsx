import React from 'react'
import Square from "./square"

const Board = (props) => {
    // console.log(props.winner);
    return (<div className="game-board">
        {props.squares.map((item, index) => {
            const light = props.winner && props.winner.includes(index) ? "animate-pulse" : ""
            const squarStyle = item === "X" ? "is-x" : item === "O" ? "is-o" : ""
            return (<Square 
                key={index}
                value={item}
                onClick={
                () => props.onClick(index)
                }classNames = {`${light} ${squarStyle}`}

                >
            </Square>)
})}
    </div>
    )
}

export default Board