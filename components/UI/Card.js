import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

//props children to accept anything that will be inside the card
const Card = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.card, props.style]}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: "25%",
    height: 120,
    borderColor: Colors.primary,
    borderWidth: 2.5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
  },
});
