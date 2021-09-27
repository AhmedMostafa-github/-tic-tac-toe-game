import React, { useState } from "react";
//this object to know one playing
const player = new Object();
// array that contain the board
export var OriginalBoard = ["", "", "", "", "", "", "", "", ""];
// array that contain the available id's but duplicated
var id = [];
// same but not duplicated
var freeId = [];

const createBoard = () => OriginalBoard.fill(null);
function currentPlayer() {
  player.man = "X";
  player.computer = "O";
}
//this all possible things that make player win
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
//this for checking the winner
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
// this function using minimax algorithm and comparing the priority of each movie could make an ai win
export const minimax = (originalBoard = OriginalBoard, PLAYER) => {
  if (winner(originalBoard, player.computer)) return { evaluation: +10 };
  if (winner(originalBoard, player.man)) return { evaluation: -10 };
  if (isTie(originalBoard)) return { evaluation: 0 };

  for (let i = 0; i < freeId.length; i++) {
    // get id of available spaces
    let id = freeId[i];

    let backup = originalBoard[id];

    // make the to anther player
    originalBoard[id] = PLAYER;

    // save the move with id
    let move = {};
    move.id = id;
    // evaluating the moves
    if (PLAYER == player.computer) {
      move.evaluation = minimax(originalBoard, player.man).evaluation;
    } else {
      move.evaluation = minimax(originalBoard, player.computer).evaluation;
    }

    // check for anther free spaces
    originalBoard[id] = backup;

    // saving the movies with array
    moves.push(move);
  }
  let bestMove;
  // comparing with MAXIMIZER and MINIMIZER
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
  //this state hold aSteps and all move's
  const [gameState, setGameState] = useState({
    history: [createBoard()],
    step: 0,
  });
  // this for if a game end tie
  const tie = gameState.step + 1;
  // to know current position
  const current = gameState.history[gameState.step];
  // this to see who is the next
  const isNext = gameState.step % 2 === 0;
  // to call winner function
  const winnerGame = winner(current);
  // for restart the game

  const newGame = () => {
    setGameState({
      history: [createBoard()],
      step: 0,
    });
  };
  // this for handling all the game
  const handleGame = (card) => {
    const now = gameState.history[gameState.step];
    const history = gameState.history.slice(0, gameState.step + 1);
    const board = history[history.length - 1];
    if (winner(board) || board[card]) {
      return;
    }
    // this for filtering the
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
