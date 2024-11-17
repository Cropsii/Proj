import React from "react";
import { View, FlatList } from "react-native";
import { MeditationListItem } from "../components/MeditationListItem";
import { meditations } from "../data";
export default function index() {
  return (
    <View>
      <FlatList
        contentContainerClassName="gap-5 m-4"
        data={meditations}
        renderItem={({ item }) => <MeditationListItem meditation={item} />}
      />
    </View>
  );
}
