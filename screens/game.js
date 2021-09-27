import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Board from "../components/UI/Board";
import { useGameState } from "../components/App/gameLogic";
import Colors from "../constants/Colors";

const game = () => {
  const { gameState, current, isNext, winnerGame, handleGame, newGame, tie } =
    useGameState();

  return (
    <View style={styles.mainCont}>
      <TouchableOpacity onPress={() => newGame()} style={styles.new}>
        <Text style={styles.text}>New Game</Text>
      </TouchableOpacity>
      <Text style={styles.textWinner}>
        {winnerGame
          ? `Winner is: ${winnerGame}`
          : `Next Player: ${isNext ? "X" : "O"}`}
        {!winnerGame && tie == 10 && alert("Ops No Winner, Tie")}
      </Text>

      <Board board={current} onPress={handleGame} />
    </View>
  );
};

export default game;

const styles = StyleSheet.create({
  textWinner: {
    top: "14%",
    zIndex: 50,
    fontWeight: "bold",
    fontSize: 18,
  },
  mainCont: {
    alignItems: "center",
    backgroundColor: Colors.accent,
    paddingBottom: "35%",
  },
  new: {
    top: "10%",
    zIndex: 50,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    overflow: "hidden",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    marginVertical: 15,
  },
});
