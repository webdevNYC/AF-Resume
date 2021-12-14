import React from "react";

import BoardGame from "./BoardGame";
import useTicTacToe from "./useTicTacToe";

const StartGame = (props: any) => {
  const { board, onClick } = props;
  return (
    <>
      <BoardGame board={board} disabled />
      <button
        type="button"
        defaultValue={0}
        className="w-32 p-3 bg-green-300 hover:bg-green-100"
        onClick={onClick}
      >
        {" "}
        Start Game
      </button>
    </>
  );
};
export default function TicTacToeGame() {
  const {
    board,
    status,
    winnerPlayer,
    nextPlayer,
    handleStart,
    handleClick,
    handleReset,
  } = useTicTacToe();

  return (
    <div className="p-12">
      <h1 className="text-xl pb-3">Tic Tac Toe with Hooks</h1>
      {status === "new-game" && (
        <StartGame board={board} onClick={handleStart} />
      )}
      {status === "game-on" && (
        <div>
          Next Player: {nextPlayer ? "0" : "X"}
          <BoardGame board={board} onClick={handleClick} />
        </div>
      )}
      {status === "game-over" && (
        <div>
          <h1>Congratulations {winnerPlayer} you won! </h1>
          <BoardGame board={board} />
        </div>
      )}
      {status !== "new-game" && (
        <button
          type="button"
          defaultValue={0}
          className="w-32 p-3 ml-3 bg-yellow-300 hover:bg-yellow-100"
          onClick={handleReset}
        >
          {" "}
          Reset Game
        </button>
      )}
    </div>
  );
}
