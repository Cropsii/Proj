import { View, Text, Pressable } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import React from "react";
import { Link } from "expo-router";
export function MeditationListItem(props: { meditation: any }) {
  const meditation = props.meditation;
  return (
    <Link href={`meditation/${meditation.id}`} asChild>
      <Pressable className="flex-row items-center gap-5">


        {/* A rounded green check mark icon is shown if the meditation is free. */}
        <View className="bg-green-600 rounded-full p-1">
          <FontAwesome name="check" size={18} color="white" />
        </View>

        {/* A card with a title, duration, and a clock icon. */}
        <View className="border p-5 py-8 rounded-2xl flex-1 border-gray-300">
          <Text className="font-bold text-xl">{meditation.title}</Text>

          {/* A row with a clock icon and the duration of the meditation. */}
          <View className="flex-row items-center gap-1">
            <FontAwesome6 name="clock" size={16} color="dimgray" />
            <Text className="">{meditation.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
