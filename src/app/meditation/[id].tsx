import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { meditations } from "../../data";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Slider from "@react-native-community/slider";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

export default function MeditationDetails() {
  const formatTime = (mils: number) => {
    const minutes = Math.floor(mils / 60000);
    const seconds = Math.floor((mils % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((m) => m.id === Number(id));
  const audio = require("../../../assets/meditations/audio1.mp3");
  const player = useAudioPlayer(audio);
  const statys = useAudioPlayerStatus(player);
  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
      {/* Header */}
      <View className="flex-1">
        <View className="flex-row items-center justify-between p-10 ">
          <Feather name="info" size={24} color="black" />
          <View className="bg-stone-800 rounded-md ">
            <Text className="text-white p-1 font-semibold">
              Today`s Meditation
            </Text>
          </View>
          <AntDesign
            onPress={() => router.back()}
            name="close"
            size={24}
            color="black"
          />
        </View>
        <View className="flex-1  mt-20">
          <Text className="text-3xl m-2 text-center font-semibold">
            {meditation?.title}
          </Text>
        </View>
      </View>
      <View className="flex-1">
        {/* Button */}
        <Pressable
          onPress={() => (player.playing ? player.pause() : player.play())}
          className="self-center bg-stone-800 w-16 aspect-square rounded-full items-center justify-center"
        >
          <FontAwesome6
            name={statys.playing ? "pause" : "play"}
            size={24}
            color="white"
            onpress={() => {}}
          />
        </Pressable>

        {/* Footer */}
        <View className="flex-1 justify-end p-10 gap-5">
          <View className="flex-row justify-between  ">
            <Feather name="airplay" size={24} color="black" />
            <Feather name="settings" size={24} color="black" />
          </View>
          <Slider
            style={{ width: "100%" }}
            value={statys.currentTime / statys.duration}
            onSlidingComplete={(value) =>
              player.seekTo(value * statys.duration)
            }
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#292524"
            maximumTrackTintColor="#29252450"
          />
          <View className="flex-row justify-between font-semibold">
            <Text>{formatTime(statys.currentTime)}</Text>
            <Text>{formatTime(statys.duration)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
