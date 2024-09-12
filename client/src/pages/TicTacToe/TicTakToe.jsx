import { useState } from "react";
import "./ticTacToe.css";
import UseTicTacToe from "../../components/UseTicTacToe/Use-Tic-Tac-Toe";


const TicTakToe = () => {

  const { board, handleClick, resetGame, getStatusMessage, calculateWinner } = UseTicTacToe()

  return (
    <div className="tic-tac-toe-page">

      <div className="tic-tac-toe-title">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset Game</button>
      </div>

      <span>{getStatusMessage}</span>

      <div className="game-section">
        {
          board.map((b, index) => {
            return <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          })
        }
      </div>

      {/* <div className="results">

      </div> */}

    </div>
  )
}

export default TicTakToe;