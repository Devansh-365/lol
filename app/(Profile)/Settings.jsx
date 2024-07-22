import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import IconArrow from "react-native-vector-icons/Ionicons";
import IconRightArrow from "react-native-vector-icons/Ionicons";
import IconUser from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";
const YourProfile = () => {
  const navigation = useNavigation();
};
const Settings = () => {
  return (
    <View className="bg-white h-screen">
      <View className="absolute top-6 left-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconArrow name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View className="mt-11">
        <TouchableOpacity className="flex-row items-center  justify-between px-4 py-2 border-b border-gray-300">
          <View className="flex-row items-center">
            <IconUser name="user" size={24} color="blue" />
            <Text className="ml-4 text-lg">Your profile</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center  justify-between px-4 py-2 border-b border-gray-300">
          <View className="flex-row items-center">
            <IconUser name="user" size={24} color="blue" />
            <Text className="ml-4 text-lg">Password Manager</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center  justify-between px-4 py-2 border-b border-gray-300">
          <View className="flex-row items-center">
            <IconUser name="user" size={24} color="blue" />
            <Text className="ml-4 text-lg">Delete Account</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
