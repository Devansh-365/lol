import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

const AddCard = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-screen">
      <TouchableOpacity
        className="ml-3 mt-4"
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View className="justify-center items-center mt-8 ml-10 w-[300px] h-[150px] bg-gray-200 rounded-xl"></View>
      <View className="ml-8 mt-5">
        <View className="w-80    ">
          <Text className="mb-2 "> Card Holder Name</Text>
          <TextInput
            className="bg-gray-100 w-full h-12 mb-4 p-2 rounded-lg"
            placeholder="lorem ipsum"
            placeholderTextColor="#7B7B8B"
          />
        </View>
        <View className="w-80 ">
          <Text className="mb-2"> Card Number</Text>
          <TextInput
            className="bg-gray-100 w-full h-12 mb-4 p-2 rounded-lg"
            placeholder="5766879797637"
            placeholderTextColor="#7B7B8B"
          />
        </View>
      </View>
      <View className="flex-row space-x-8 ml-4">
        <View className="w-40 ">
          <Text className="mb-2"> Expiry Date</Text>
          <TextInput
            className="bg-gray-100  h-10 mb-4 p-2 rounded-lg"
            placeholder="5766879797637"
            placeholderTextColor="#7B7B8B"
          />
        </View>
        <View className="w-40 ">
          <Text className="mb-2"> CVV</Text>
          <TextInput
            className="bg-gray-100  h-10 mb-4 p-2 rounded-lg"
            placeholder="5766879797637"
            placeholderTextColor="#7B7B8B"
          />
        </View>
      </View>
      <TouchableOpacity className="bg-blue-500 ml-6 w-80 h-10 items-center justify-center  mt-4 rounded-xl">
        <Text className="text-white text-lg">Add Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;
