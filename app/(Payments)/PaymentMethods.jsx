import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Iconcard from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const PaymentMethods = () => {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState(0);

  const radio_props = [{ label: "", value: 0 }];

  return (
    <View className="bg-white h-screen">
      <TouchableOpacity
        className="ml-3 mt-4"
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View className="justify-center items-center">
        <Text className="font-bold text-xl">Payment Methods</Text>
      </View>
      <View>
        <Text className="font-semibold text-lg mt-7 ml-2">
          Credit & Debit Card
        </Text>
      </View>
      <View className="flex-row items-center p-2 bg-white rounded-lg border w-[370px] mt-2 space-x-2 ml-2 border-gray-300 shadow">
        <TouchableOpacity className="flex-row items-center">
          <Iconcard
            name="credit-card"
            size={30}
            color="#000"
            className="ml-4"
          />
          <Text className="text-base text-black ml-4">Add New Card</Text>
        </TouchableOpacity>
        <RadioForm
          radio_props={radio_props}
          initial={selectedMethod === 0 ? 0 : -1}
          buttonColor={"#50C900"}
          onPress={(value) => setSelectedMethod(value)}
          className="ml-2"
        />
      </View>
      <View>
        <Text className="font-semibold text-lg mt-7 ml-2">
          More Payment Options
        </Text>
      </View>
      <View className="flex-row items-center p-2 bg-white rounded-lg border w-[370px] mt-2 space-x-2 ml-2 border-gray-300 shadow">
        <TouchableOpacity className="flex-row items-center">
          <Iconcard name="paypal" size={30} color="#000" className="ml-4" />
          <Text className="text-base text-black ml-4">PayPal</Text>
        </TouchableOpacity>
        <RadioForm
          radio_props={radio_props}
          initial={selectedMethod === 1 ? 0 : -1}
          buttonColor={"#50C900"}
          onPress={(value) => setSelectedMethod(1)}
          className="ml-2"
        />
      </View>
      <View className="flex-row items-center p-2 bg-white rounded-lg border w-[370px] mt-2 space-x-2 ml-2 border-gray-300 shadow">
        <TouchableOpacity className="flex-row items-center">
          <Iconcard name="apple" size={30} color="#000" className="ml-4" />
          <Text className="text-base text-black ml-4">Apple Pay</Text>
        </TouchableOpacity>
        <RadioForm
          // radio_props={radio_props}
          // initial={selectedMethod === 2 ? 0 : -1}
          buttonColor={"#50C900"}
          onPress={(value) => setSelectedMethod(2)}
          className="ml-2"
        />
      </View>
    </View>
  );
};

export default PaymentMethods;
