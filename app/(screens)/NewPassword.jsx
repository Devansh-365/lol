import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React from "react";

const NewPassword = () => {
  return (
    <View className="bg-white h-screen flex-1 items-center justify-center ">
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
        />
        <Text className="mb-2"> Confirm Password</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-8 p-2 rounded-lg"
          placeholder="Enter your password"
          placeholderTextColor="#7B7B8B"
          secureTextEntry
        />
      </View>
      {/* BUTTON */}
      {/* <TouchableOpacity
        onPress={() => router.push("/home")}
        style={{
          backgroundColor: "#0000FF	",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: "center",
          marginBottom: 16, // Adjust this value to move the button up or down
          width: 120, // Increased width
        }}
      >
        <Text style={{ fontSize: 20, color: "#FFF" }}>Login</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default NewPassword;
