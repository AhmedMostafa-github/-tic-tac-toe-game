import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { OriginalBoard } from "../App/gameLogic";
import Card from "../UI/Card";
import Colors from "../../constants/Colors";

const Board = ({ board = OriginalBoard, onPress }) => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.box}>
        <Card style={styles.topLeft} onPress={() => onPress(0)}>
          <Text style={styles.text}>{board[0]}</Text>
        </Card>
        <Card style={styles.topMiddle} onPress={() => onPress(1)}>
          <Text style={styles.text}>{board[1]}</Text>
        </Card>
        <Card style={styles.topRight} onPress={() => onPress(2)}>
          <Text style={styles.text}>{board[2]}</Text>
        </Card>
      </View>
      <View style={styles.box}>
        <Card style={styles.midLeft} onPress={() => onPress(3)}>
          <Text style={styles.text}>{board[3]}</Text>
        </Card>
        <Card onPress={() => onPress(4)}>
          <Text style={styles.text}>{board[4]}</Text>
        </Card>
        <Card style={styles.midRight} onPress={() => onPress(5)}>
          <Text style={styles.text}>{board[5]}</Text>
        </Card>
      </View>
      <View style={styles.box}>
        <Card style={styles.botLeft} onPress={() => onPress(6)}>
          <Text style={styles.text}>{board[6]}</Text>
        </Card>
        <Card style={styles.botMid} onPress={() => onPress(7)}>
          <Text style={styles.text}>{board[7]}</Text>
        </Card>
        <Card style={styles.botRight} onPress={() => onPress(8)}>
          <Text style={styles.text}>{board[8]}</Text>
        </Card>
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: Colors.accent,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topLeft: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
  topMiddle: {
    borderTopWidth: 0,
  },
  topRight: {
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  midLeft: {
    borderLeftWidth: 0,
  },
  midRight: {
    borderRightWidth: 0,
  },
  botLeft: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  botMid: {
    borderBottomWidth: 0,
  },
  botRight: {
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },
  box: {
    flexDirection: "row",
  },
  text: {
    backgroundColor: "white",
    fontSize: 70,
    fontWeight: "bold",
  },
});
