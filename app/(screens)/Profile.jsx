import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const Profile = () => {
  const [selectedGender, setSelectedGender] = useState();
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View className=" items-center justify-center bg-white h-screen pt-10">
      <View className="mr-[340px] mt-10">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View className=" items-center justify-center mb-4">
        <Text className="text-2xl  font-bold mb-4 ">Complete your Profile</Text>
        <Text className="font-extralight w-[280px] text-gray-500 mb-8 text-center">
          Do not worry only you can see your public data.No one else will be
          able to see it
        </Text>
      </View>
      <View className="items-center justify-center mb-5">
        <Icon name="person-circle" size={100} color="#000" />
      </View>
      <View className="w-80 mb-60">
        <Text className="mb-2">Name</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-4 p-2 rounded-lg"
          placeholder="name"
          placeholderTextColor="#7B7B8B"
        />
        <Text className="mb-2">Phone Number</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-8 p-2 rounded-lg"
          placeholder="Enter your phone number"
          placeholderTextColor="#7B7B8B"
          secureTextEntry
        />
        <View className=" flex-row items-center   rounded-lg bg-gray-100">
          <Text className="">Gender</Text>
          <TouchableOpacity
            className=" ml-[240px]"
            onPress={() => setShowPicker(showPicker)}
          >
            <Icon name="chevron-down-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TextInput
            className="bg-gray-100 w-[8px] h-10   rounded-lg"
            placeholderTextColor="#7B7B8B"
            value={selectedGender}
            onFocus={() => setShowPicker(true)}
            editable={false}
          />
        </View>

        {showPicker && (
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedGender(itemValue);
              setShowPicker(false); //
            }}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        )}
      </View>
      <View>
        <TouchableOpacity className="bg-blue-500 w-80 h-12 items-center justify-center rounded-lg mb-4">
          <Text className="text-white text-lg">Complete Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
