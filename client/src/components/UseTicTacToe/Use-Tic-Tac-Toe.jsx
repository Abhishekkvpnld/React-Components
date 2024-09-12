import { useState } from 'react';

const initialBoard = Array(9).fill(null);

const UseTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);
    let wonPattern;

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

    const pattern = (i) => {
        wonPattern = winningPattern[i];
    };

    const handleClick = (index) => {
        const winner = calculateWinner(board);

        if (winner || board[index]) return; // Prevent further clicks after a win or when cell is filled

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext); // Toggle player turns
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setIsXNext(true);
    };

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winningPattern.length; i++) {
            const [a, b, c] = winningPattern[i];
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                pattern(i);
                return currentBoard[a]; // Return the winner ("X" or "O")
            }
        }
        return null; // No winner after checking all patterns
    };

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) return `Player ${winner} wins 🎉🎉`;
        if (!board.includes(null)) return `It's a draw 🤦‍♂️`;
        return `Player ${isXNext ? "X" : "O"}'s turn`; // Show the next player's turn
    };

    return { handleClick, resetGame, calculateWinner, getStatusMessage, board, wonPattern };
};

export default UseTicTacToe;
