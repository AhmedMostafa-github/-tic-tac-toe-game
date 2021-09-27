import React, { useState } from "react";

const player = new Object();
export var OriginalBoard = ["", "", "", "", "", "", "", "", ""];
var id = [];
var freeId = [];

const createBoard = () => OriginalBoard.fill(null);
function currentPlayer() {
  player.man = "X";
  player.computer = "O";
}

const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const winner = (originalBoard = OriginalBoard) => {
  for (let i = 0; i < winCombo.length; i++) {
    const [a, b, c] = winCombo[i];

    if (
      originalBoard[a] &&
      originalBoard[a] === originalBoard[b] &&
      originalBoard[a] === originalBoard[c]
    ) {
      return originalBoard[a];
    }
  }
  return null;
};

export const minimax = (originalBoard = OriginalBoard, PLAYER) => {
  if (winner(originalBoard, player.computer)) return { evaluation: +10 };
  if (winner(originalBoard, player.man)) return { evaluation: -10 };
  if (isTie(originalBoard)) return { evaluation: 0 };

  for (let i = 0; i < freeId.length; i++) {
    // GET THE ID OF THE EMPTY SPACE
    let id = freeId[i];

    // BACK UP THE SPACE
    let backup = originalBoard[id];

    // MAKE THE MOVE FOR THE PLAYER
    originalBoard[id] = PLAYER;

    // SAVE THE MOVE'S ID AND EVALUATION
    let move = {};
    move.id = id;
    // THE MOVE EVALUATION
    if (PLAYER == player.computer) {
      move.evaluation = minimax(originalBoard, player.man).evaluation;
    } else {
      move.evaluation = minimax(originalBoard, player.computer).evaluation;
    }

    // RESTORE SPACE
    originalBoard[id] = backup;

    // SAVE MOVE TO MOVES ARRAY
    moves.push(move);
  }
  let bestMove;

  if (PLAYER == player.computer) {
    // MAXIMIZER
    let bestEvaluation = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].evaluation > bestEvaluation) {
        bestEvaluation = moves[i].evaluation;
        bestMove = moves[i];
      }
    }
  } else {
    // MINIMIZER
    let bestEvaluation = +Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].evaluation < bestEvaluation) {
        bestEvaluation = moves[i].evaluation;
        bestMove = moves[i];
      }
    }
  }

  return bestMove;
};

export const useGameState = () => {
  const [gameState, setGameState] = useState({
    history: [createBoard()],
    step: 0,
  });
  const tie = gameState.step + 1;
  const current = gameState.history[gameState.step];
  const isNext = gameState.step % 2 === 0;
  const winnerGame = winner(current);

  const newGame = () => {
    setGameState({
      history: [createBoard()],
      step: 0,
    });
  };

  const handleGame = (card) => {
    const now = gameState.history[gameState.step];
    const history = gameState.history.slice(0, gameState.step + 1);
    const board = history[history.length - 1];
    if (winner(board) || board[card]) {
      return;
    }
    for (i = 0; i < now.length; i++) {
      if (now[i] === null) {
        id.push(i);
        freeId = [...new Set(id)];
      }
    }
    const newBoard = board.slice();
    newBoard[card] = gameState.step % 2 === 0 ? "X" : "O";
    history.push(newBoard);
    setGameState({
      history: history,
      step: history.length - 1,
    });
  };

  return {
    gameState,
    current,
    isNext,
    winnerGame,
    handleGame,
    newGame,
    tie,
  };
};
