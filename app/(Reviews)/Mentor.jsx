import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconArrow from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Mentor = () => {
  return (
    <View className="bg-white h-screen">
      <TouchableOpacity
        className="absolute top-5 left-3"
        onPress={() => navigation.goBack()}
      >
        <IconArrow name="arrow-back" size={40} color="#000" />
      </TouchableOpacity>
      <View className="w-screen h-[175px] relative bg-gray-300 rounded-lg"></View>
      <View className="rounded-lg bg-white -mt-10 mx-2 p-4 ">
        <View className=" items-center justify-center mt-4"></View>
        <View className="flex-row items-center justify-between ml-2 mr-2 mt-2"></View>
        <View className="justify-center items-center ">
          <View className="w-[150px] -mt-20  h-[150px] rounded-full bg-gray-500 "></View>
          <Text className=" font-bold text-black mt-2 text-lg ">john Doe</Text>
          <Text className=" font-semibold text-gray-500 mt-2 ">
            Design Mentor
          </Text>
        </View>
        <View className="items-center justify-between mt-11">
          <Text className=" font-bold text-gray-500">
            Your overall Rating for this course
          </Text>
        </View>
        <View className="flex-row mt-4 items-center justify-center ">
          {[...Array(5)].map((_, index) => (
            <Icon key={index} name="star" size={44} color="gold" />
          ))}
        </View>
        <Text className="mt-5 ml-5 font-semibold">Add detailed review</Text>
        <TextInput
          placeholder="Enter here"
          className="border border-gray-300 rounded-lg p-2 mt-2 mx-4 h-24 text-gray-800"
          multiline
        />
        <TouchableOpacity className="mt-5 bg-blue-500  mx -4 py-3 px-5 rounded-full">
          <Text className="text-white text-center">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mentor;
