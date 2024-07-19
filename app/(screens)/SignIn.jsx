import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const SignIn = () => {
  return (
    <View className="bg-white h-screen flex-1 items-center justify-center ">
      <View className="items-center ">
        <Text className="text-2xl mb-2 font-extrabold">Sign In</Text>
        <Text className="font-extralight text-gray-500 mb-8 text-center">
          Hi! Welcome Back. You have been missed
        </Text>
      </View>
      <View className="w-80 mb-48">
        <Text className="mb-2">Email</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-4 p-2 rounded-lg"
          placeholder="abc@gmail.com"
          placeholderTextColor="#7B7B8B"
        />
        <Text className="mb-2">Password</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-8 p-2 rounded-lg"
          placeholder="Enter your password"
          placeholderTextColor="#7B7B8B"
          secureTextEntry
        />
        <Text className="ml-48 text-blue-600 font-medium">
          Forgot Password?
        </Text>
        <TouchableOpacity className="bg-blue-500 w-80 h-10 items-center justify-center  mt-4 rounded-xl">
          <Text className="text-white text-lg">SignIn</Text>
        </TouchableOpacity>
      </View>

      <View className=" items-center justify-center">
        <Text className="mt-[-250px]"> -----Or sign in with----</Text>
      </View>
      <View className="flex-row mt-[-50]">
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          ```` <Icon name="apple" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="google" size={30} color="#db4437" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
