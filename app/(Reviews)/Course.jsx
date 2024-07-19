import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconArrow from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Adjust the icon set as needed

const Course = () => {
  const navigation = useNavigation();

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
        <View className="flex-row justify-between mr-4">
          <Text className="text-yellow-400 shadow-md font-bold ml-3  mt-3 text-lg">
            Best Seller
          </Text>
          <Text className="font-semibold text-gray-500 mt-3   ">
            4.5(360 Reviews)
          </Text>
        </View>
        <View className=" items-center justify-center mt-4">
          <Text className="text-lg font-bold">
            Design Thinking Fundamentals
          </Text>
        </View>
        <View className="flex-row items-center justify-between ml-2 mr-2 mt-2">
          <View className="flex-row items-center">
            <Icon name="account" size={16} color="grey" className="mr-2" />

            <Text className="text-gray-400">Robert green</Text>
          </View>
          <View className="flex-row items-center">
            <Icon
              name="playlist-play"
              size={16}
              color="grey"
              className="mr-2"
            />
            <Text className="text-gray-400">Lessons</Text>
          </View>
          <View className="flex-row items-center">
            <Icon name="certificate" size={16} color="grey" className="mr-2" />

            <Text className="text-gray-400">certificate</Text>
          </View>
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

export default Course;
