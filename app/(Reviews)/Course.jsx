import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconArrow from "react-native-vector-icons/Ionicons";

const Course = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-screen">
      <TouchableOpacity
        className=" absolute left-3 top-3"
        onPress={() => navigation.goBack()}
      >
        <IconArrow name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View className="w-screen h-[215px] relative bg-gray-300 rounded-lg"></View>
      <View className="rounded-lg bg-white -mt-20"></View>
    </View>
  );
};

export default Course;
