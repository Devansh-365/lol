import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ReviewSummary = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-screen p-4">
      <TouchableOpacity className="mb-4" onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View className="bg-gray-200 rounded-xl p-4 mb-4">
        <Image
          source={{ uri: "https://www.example.com/path-to-image.jpg" }}
          className="w-full h-40 rounded-xl"
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold">Introduction of Figma</Text>
        <Text className="text-yellow-500">4.5 ★</Text>
        <Text className="text-blue-500 text-lg font-semibold">$180.00</Text>
        <Text className="text-gray-500">Best seller</Text>
      </View>

      <View className="mb-4 ">
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Language:</Text>
          <Text className="text-gray-600 font-semibold">English</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Lessons:</Text>
          <Text className="text-gray-600 font-semibold">32</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Levels:</Text>
          <Text className="text-gray-600 font-semibold">Beginners</Text>
        </View>
      </View>

      <View className="mb-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Amount:</Text>
          <Text className="text-gray-600 font-semibold">$180.00</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-semibold">Tax:</Text>
          <Text className="text-gray-600 font-semibold">$5.00</Text>
        </View>
        <View className="flex-row space-x-6 justify-between">
          <Text className="text-lg font-semibold">Total:</Text>
          <Text className="text-lg font-semibold">$185.00</Text>
        </View>
      </View>

      <View className="mb-4">
        <Text className="text-gray-600">Payment Method:</Text>
        <Text className="text-gray-600">Paypal</Text>
      </View>

      <TouchableOpacity className="bg-blue-500 w-full h-12 items-center justify-center rounded-xl">
        <Text className="text-white text-lg">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewSummary;
