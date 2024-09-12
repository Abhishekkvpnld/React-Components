import { useState } from 'react'


const initialBoard = Array(9).fill(null);

const UseTicTacToe = () => {

    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);

    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleClick = (index) => {
        const winner = calculateWinner(board);

        if (winner || board[index]) return;

        const newBoard = [...board]
        newBoard[index] = isXNext ? "X" : "0";
        setBoard(newBoard);
        setIsXNext(!isXNext)
    }

    const resetGame = () => {
        setBoard(initialBoard)
    }

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winningPattern.length; i++) {
            const [a, b, c] = winningPattern[i];
            if (currentBoard[a]
                && currentBoard[a] === currentBoard[b]
                && currentBoard[a] === currentBoard[c]) {

                return currentBoard[a]
            }
            return null;
        }
    }

    const getStatusMessage = () => { }

    return { handleClick, resetGame, calculateWinner, getStatusMessage, board }
}

export default UseTicTacToe;