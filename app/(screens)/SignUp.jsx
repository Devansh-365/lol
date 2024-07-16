import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import CheckBox from "react-native-check-box";

const SignUp = () => {
  const [isSelected, setSelection] = useState(false);

  const handleClick = () => {
    setSelection(!isSelected);
  };
  return (
    <View className="bg-white h-screen flex-1 items-center justify-center ">
      <View className="items-center ">
        <Text className="text-2xl mb-2 font-extrabold">Create Account</Text>
        <Text className="font-extralight text-gray-500 mb-8 text-center">
          Welcome lorem ipsum generator
        </Text>
      </View>
      <View className="w-80 mb-60">
        <Text className="mb-2">Name</Text>
        <TextInput
          className="bg-gray-100 w-full h-10 mb-4 p-2 rounded-lg"
          placeholder="aniamdoo kmwdqd"
          placeholderTextColor="#7B7B8B"
        />
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
        {/* <CheckBox value={isSelected} onValueChange={setSelection} /> */}

        <View>
          <CheckBox
            isChecked={isSelected}
            onClick={handleClick}
            className="flex-row flex-wrap   absolute"
          />

          <Text className=" w-full ml-7  text-blue-600 font-medium">
            Agree with Terms and conditions
          </Text>
        </View>
        <TouchableOpacity className="bg-blue-500 w-80 h-10 items-center justify-center  mt-11 rounded-xl">
          <Text className="text-white text-lg">SignUp</Text>
        </TouchableOpacity>
      </View>

      <View className=" items-center justify-center">
        <Text className="mt-[-330px]"> -----Or sign in with----</Text>
      </View>
      <View className="flex-row mt-[-120]">
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="apple" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="google" size={30} color="#db4437" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="mt-[30px]"> Already have an Account ? SignIn</Text>
      </View>
    </View>
  );
};

export default SignUp;
