import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconArrow from "react-native-vector-icons/Ionicons";
import IconUser from "react-native-vector-icons/FontAwesome";
import IconCreditCard from "react-native-vector-icons/FontAwesome";
import IconSettings from "react-native-vector-icons/Feather";
import IconHelpCircle from "react-native-vector-icons/Feather";
import IconShield from "react-native-vector-icons/FontAwesome";
import IconLogout from "react-native-vector-icons/MaterialCommunityIcons";
import IconRightArrow from "react-native-vector-icons/Ionicons";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        className="absolute top-5 left-3"
        onPress={() => navigation.goBack()}
      >
        <IconArrow name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <View className="items-center mt-20">
        <Text className="font-bold text-lg">Profile</Text>
      </View>
      <View className="bg-gray-500 w-24 h-24 mx-auto mt-10 rounded-full items-center justify-center"></View>
      <View className="items-center justify-center mt-3">
        <Text className="text-lg font-bold">Jacob Jones</Text>
      </View>
      <View className="mt-8">
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center">
            <IconUser name="user" size={24} color="blue" />
            <Text className="ml-4 text-lg">Your profile</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center">
            <IconCreditCard name="credit-card" size={24} color="blue" />
            <Text className="ml-4 text-lg">Payment Methods</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center">
            <IconSettings name="settings" size={24} color="blue" />
            <Text className="ml-4 text-lg">Settings</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center">
            <IconHelpCircle name="help-circle" size={24} color="blue" />
            <Text className="ml-4 text-lg">Help Center</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center">
            <IconShield name="shield" size={24} color="blue" />
            <Text className="ml-4 text-lg">Privacy Policy</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center">
            <IconLogout name="logout" size={24} color="blue" />
            <Text className="ml-4 text-lg">Log out</Text>
          </View>
          <IconRightArrow name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
