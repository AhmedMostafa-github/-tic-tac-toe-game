import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({});
