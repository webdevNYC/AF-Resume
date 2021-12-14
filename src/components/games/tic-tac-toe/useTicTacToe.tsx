/* eslint-disable no-console */

import { useState } from 'react';

import checkWinner from './checkWinner';

interface TicTacToeProps {
  board: string[];
  status: string;
  disabled?: boolean;
  winnerPlayer: string;
  nextPlayer: boolean;
  handleClick: (event: any) => void;
  handleStart: () => void;
  handleReset:  () => void;
}

const useTicTacToe = (): TicTacToeProps => {
  const [status, setStatus] = useState('new-game');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(false);
  const [winnerPlayer, setWinnerPlayer] = useState('');

  const handleStart = () => {
    setBoard(Array(9).fill(null))
    setStatus('game-on');
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null))
  };
  const handleClick = (event: any) => {
    const currentBoard = [...board];
    const currentPlayer = nextPlayer ? '0' : 'X';
    currentBoard[event.currentTarget.name] = currentPlayer;
    setNextPlayer(!nextPlayer);
    setBoard(currentBoard);
    const winner = checkWinner(currentBoard, currentPlayer);
    const isDraw = currentBoard.every(function(v) { return v !== null; });
    
    if (isDraw) {
      setStatus('game-draw');
    }
    if (winner) {
      setStatus('game-over');
      setWinnerPlayer(currentPlayer);
    }
  };
  return { board, status, winnerPlayer, nextPlayer, handleStart, handleClick, handleReset };
};

export default useTicTacToe;
