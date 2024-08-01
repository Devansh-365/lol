import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = ({ currentTab, setCurrentTab }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-white h-full p-4">
          <View className="w-full h-[200px] rounded-lg overflow-hidden">
            <Image
              //   source={require('/mnt/data/Screenshot 2024-08-01 110003.png')}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <View className="bg-white w-full rounded-lg mt-4">
            <View className="flex-row justify-between mx-2 mt-2 items-center">
              <Text className="bg-yellow-300 px-2 py-1 rounded-md">
                Best Seller
              </Text>
              <Text className="text-yellow-500">4.5 (365 reviews)</Text>
            </View>
            <View className="justify-center items-center mt-2">
              <Text className="text-xl font-bold">
                Design Thinking Fundamental
              </Text>
            </View>
            <View className="flex-row justify-center mt-2 space-x-4">
              <Text>Robert Green</Text>
              <Text>32 Lessons</Text>
              <Text>Certificate</Text>
            </View>
            <View className="flex-row justify-between mx-2 mt-3">
              <TouchableOpacity onPress={() => setCurrentTab("About")}>
                <Text
                  className={`text-lg ${
                    currentTab === "About" ? "font-bold" : "font-normal"
                  }`}
                >
                  About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentTab("Lessons")}>
                <Text
                  className={`text-lg ${
                    currentTab === "Lessons" ? "font-bold" : "font-normal"
                  }`}
                >
                  Lessons
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentTab("Reviews")}>
                <Text
                  className={`text-lg ${
                    currentTab === "Reviews" ? "font-bold" : "font-normal"
                  }`}
                >
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-3 mx-2">
              <Text className="text-lg font-semibold">About Course</Text>
              <Text className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
            <View className="mt-4 mx-2">
              <Text className="font-bold text-lg">Tutor</Text>
            </View>
            <View className="flex-row items-center mx-2 mt-2">
              <View className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-600 mr-2">
                <Image
                  //   source={require('/path-to-tutor-image/tutor-image.png')}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <Text className="text-lg font-bold">Robert Green</Text>
            </View>
            <View className="mx-2 mt-4">
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Students</Text>
                <Text>156,213</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Language</Text>
                <Text>English</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Last update</Text>
                <Text>Feb 2, 2023</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Subtitle</Text>
                <Text>English and 5 more</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Level</Text>
                <Text>Beginner</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Access</Text>
                <Text>Mobile, Desktop</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Total Price</Text>
                <Text>$180.00</Text>
              </View>
            </View>
            <TouchableOpacity className="mx-2 mt-4 bg-blue-500 rounded-full p-3">
              <Text className="text-center text-white font-bold">
                Enroll Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
