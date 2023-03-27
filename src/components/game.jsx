import React, { useState } from 'react'
import { caculateWinner } from "./winner"
import Board from './board'
import "./game.css"
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [canUndo, setCanUndo] = useState(false)
    const [isWinner, setIsWinner] = useState(false)
    const winner = caculateWinner(board)

    const handleClick = (index) => {
        const newHistory = history.slice(0, stepNumber + 1)
        const current = newHistory[newHistory.length - 1]
        const boardCopy = [...current]
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
        setHistory([...newHistory, boardCopy])
        setStepNumber(newHistory.length)
        setCanUndo(true)
        setIsWinner(caculateWinner(boardCopy))
    }

    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setCanUndo(false)
        setIsWinner(false)
    };

    const handleUndo = () => {
        if (stepNumber > 0 && canUndo && !isWinner) {
            setStepNumber(stepNumber - 1)
            setBoard(history[stepNumber - 1])
            setXIsNext((stepNumber - 1) % 2 === 0)
            setCanUndo(false)
            setIsWinner(false)
        }
    }
    let winnerLine = null
    if (winner) {
        winnerLine = winner
    }
    const current = history[stepNumber]
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=''>
                <Board squares={current} onClick={handleClick} winner={winner}></Board>
                {winner && <div className="p-4 font-bold text-[#f62682] animate-bounce ">
                    Winner is {board[winner[0]]}
                </div>}
                <div className='flex justify-between '>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-effect " onClick={handleResetGame}>Reset game</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded button-effect" onClick={handleUndo}>Undo</button>
                </div>
            </div>
        </div>
    )
}

export default Game