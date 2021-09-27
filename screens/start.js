import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

import images from "../constants/images";

const start = ({ navigation }) => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.imageCont}>
        <Image source={images.logo} style={styles.image} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Game")}
        style={styles.botCont}
      >
        <Text style={styles.text}>START THE GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default start;

const styles = StyleSheet.create({
  mainCont: {
    height: "100%",
    backgroundColor: Colors.accent,
    width: "100%",
  },
  imageCont: {
    alignItems: "center",
    paddingTop: "25%",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  botCont: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: "54%",
    alignSelf: "center",
    top: "20%",
    borderRadius: 25,
    padding: 20,
    overflow: "hidden",
  },
  text: {
    fontWeight: "bold",
    fontSize: 19,
  },
});
