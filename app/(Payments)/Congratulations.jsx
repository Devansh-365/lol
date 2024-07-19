import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconArrow from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Congratulations = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-screen">
      <TouchableOpacity className="ml-3" onPress={() => navigation.goBack()}>
        <IconArrow name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View className="justify-center items-center mt-[50px]">
        <Icon name="check" className="items-center" size={150} color="blue" />
        <Text className="font-bold text-2xl">Congratulations</Text>
        <Text className="mt-5">
          You have successfully enrolled in the class course
        </Text>
      </View>
      <View className="absolute bottom-10 left-0 right-0 items-center">
        <TouchableOpacity
          className="bg-blue-500 py-3 px-5 rounded-full mb-3"
          onPress={() => console.log("View E-Receipt Pressed")}
        >
          <Text className="text-white">View E-Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3 px-5"
          onPress={() => console.log("Go to Course Pressed")}
        >
          <Text className="text-blue-500">Go to Course</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Congratulations;
