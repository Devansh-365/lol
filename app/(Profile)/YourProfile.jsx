import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import IconArrow from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
const YourProfile = () => {
  const navigation = useNavigation();

  return (
    <View className="h-screen bg-white">
      <TouchableOpacity
        className="absolute top-5 left-3"
        onPress={() => navigation.goBack()}
      ></TouchableOpacity>
      <View className="bg-gray-500 w-24 h-24 mx-auto mt-10 rounded-full items-center justify-center"></View>
      <View className="items-center justify-center mt-3">
        <Text className="text-lg font-bold">Jacob Jones</Text>
      </View>
      <View className="w-80 mt-5">
        <Text className=" ml-4">Name</Text>
        <View>
          <TextInput
            className=" ml-4 w-full rounded-lg h-10 bg-gray-100"
            placeholder=" Enter your name"
          />
        </View>
        <Text className="mt-4  ml-4">Phone Number</Text>
        <View>
          <TextInput
            className=" ml-4 w-full rounded-lg h-10 bg-gray-100"
            placeholder=" 89429843292"
          />
        </View>
        <Text className="mt-4  ml-4">Email</Text>
        <View>
          <TextInput
            className=" ml-4 w-full rounded-lg h-10 bg-gray-100"
            placeholder=" Enter your Email"
          />
        </View>
        <Text className="mt-4  ml-4">DOB</Text>
        <View>
          <TextInput
            className=" ml-4 w-full rounded-lg h-10 bg-gray-100"
            placeholder=" Enter your DOB"
          />
        </View>
        <Text className="mt-4  ml-4">Gender</Text>
        <View>
          <TextInput
            className=" ml-4 w-full rounded-lg h-10 bg-gray-100"
            placeholder=" Enter your Email"
          />
        </View>
      </View>
      <View className="justify-content items-center mt-10">
        <TouchableOpacity className="w-[250px] h-10 bg-blue-600 rounded-2xl">
          <Text className="text-white items-center justify-center ml-[60px] mt-2">
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourProfile;
