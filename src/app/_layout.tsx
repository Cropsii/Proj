import { Text, View } from "react-native";
import React, { Component } from "react";
import { Slot, Stack } from "expo-router";
import "../../global.css";

export default class _layout extends Component {
  render() {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Meditation" }}
        ></Stack.Screen>
        <Stack.Screen
          name="meditation/[id]"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    );
  }
}
