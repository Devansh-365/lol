import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const OtpVerification = () => {
  return (
    <View>
      <View className="items-center ">
        <Text className="text-2xl mb-2 font-semibold mt-[70px]">
          Verify Code
        </Text>
        <Text className="font-extralight text-gray-500 mb-8 text-center">
          Please Enter the code we just sent to your email
        </Text>
        <TouchableOpacity className="flex flex-row  flex-wrap space-x-4">
          <TextInput
            className="bg-gray-200 w-10 h-10 mb-8 p-2 rounded-lg "
            placeholder=" _"
            placeholderTextColor="#7B7B8B"
            secureTextEntry
          />
          <TextInput
            className="bg-gray-200 w-10 h-10 mb-8 p-2 rounded-lg "
            placeholder="  _"
            placeholderTextColor="#7B7B8B"
            secureTextEntry
          />
          <TextInput
            className="bg-gray-200 w-10 h-10 mb-8 p-2 rounded-lg "
            placeholder="  _"
            placeholderTextColor="#7B7B8B"
            secureTextEntry
          />
          <TextInput
            className="bg-gray-200 w-10 h-10 mb-8 p-2 rounded-lg "
            placeholder="  _"
            placeholderTextColor="#7B7B8B"
            secureTextEntry
          />
        </TouchableOpacity>
        <View>
          <Text className="">Didn't Receive the OTP</Text>
          <Text className="font-bold  mt-3 ml-8">Resend Code</Text>
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;
