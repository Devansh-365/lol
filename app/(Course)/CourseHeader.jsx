import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const CourseHeader = ({ currentTab, setCurrentTab }) => {
  return (
    <SafeAreaView>
      <View className="bg-gray-300 w-[400px] h-[250px] rounded-lg">
        <Image
          source={{ uri: "https://your-image-url.com/image.jpg" }} // Replace with your image URL
          className="w-full h-full rounded-lg"
        />
      </View>
      <View className="bg-white w-screen rounded-lg p-4">
        <View className="flex-row justify-between mb-2">
          <Text>Best seller</Text>
          <Text>4.5 (356 Reviews)</Text>
        </View>
        <View className="justify-center items-center mb-2">
          <Text className="text-lg font-bold">
            Design Thinking Fundamentals
          </Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text>Robert Green</Text>
          <Text>32 Lessons</Text>
          <Text>Certificate</Text>
        </View>
        <View className="flex-row justify-between">
          <TabButton
            label="About"
            onPress={() => setCurrentTab("About")}
            isSelected={currentTab === "About"}
          />
          <TabButton
            label="Lessons"
            onPress={() => setCurrentTab("Lessons")}
            isSelected={currentTab === "Lessons"}
          />
          <TabButton
            label="Reviews"
            onPress={() => setCurrentTab("Reviews")}
            isSelected={currentTab === "Reviews"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourseHeader;

// Tab button component
const TabButton = ({ label, onPress, isSelected }) => (
  <TouchableOpacity onPress={onPress}>
    <Text className={`text-lg ${isSelected ? "font-bold" : "font-normal"}`}>
      {label}
    </Text>
  </TouchableOpacity>
);
