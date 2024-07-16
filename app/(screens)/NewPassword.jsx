import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-screen flex-1 items-center justify-center ">
      <View className="absolute top-6 left-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View className="items-center ">
        <Text className="text-2xl mb-2 font-extrabold">New Password</Text>
        <Text className="font-extralight w-[280px] text-gray-500 mb-8 text-center">
          Your new Password must be new and different from previously used
          passwords
        </Text>
      </View>
      <View className="w-80 mb-48">
        <Text className="mb-2">Password</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-4 p-2 rounded-lg"
          placeholder="*****"
          placeholderTextColor="#7B7B8B"
          secureTextEntry={true}
        />

        <Text className="mb-2"> Confirm Password</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-8 p-2 rounded-lg"
          placeholder="Enter your password"
          placeholderTextColor="#7B7B8B"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity className="bg-blue-500 w-80 h-10 items-center justify-center rounded-xl">
        <Text className="text-white text-lg">Set Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPassword;
