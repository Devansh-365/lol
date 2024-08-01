import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView>
      <View className="bg-white h-screen flex-1 ">
        <View className="bg-blue-400  w-screen h-[220px] items-start justify-center  rounded-xl">
          <Text className="text-white  ml-8 font-semibold mt-[30px] text-2xl items-center justify-center">
            Hi, John
          </Text>
          <Text className="text-white ml-8 mt-1  text-lg">
            Let's start Learning !
          </Text>
          <TextInput
            className="bg-white mt-2 items-center justify-center ml-4 w-[250px] h-10  p-2 rounded-lg"
            placeholder="Search"
          />
        </View>
        <View>
          <Text className="text-black text-xl font-bold mt-3"> Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex-row ml-3 mt-3 space-x-4">
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text className="text-black text-xl font-bold mt-3">
            Popular Courses
          </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex-row ml-3 mt-3 space-x-4">
              <TouchableOpacity>
                <View className="bg-gray-200 w-[200px] h-[120px] rounded-2xl"></View>
                <View className="flex-row">
                  <Icon
                    name="person-circle"
                    className="mt-8"
                    size={40}
                    color="#000"
                  />
                  <Text className="mt-4"> Robert green </Text>
                </View>
                <View>
                  <Text className="text-blue-500  text-lg font-bold ml-4 mt-2">
                    $500
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[200px] h-[120px] rounded-2xl"></View>
                <View className="flex-row">
                  <Icon
                    name="person-circle"
                    className="mt-8"
                    size={40}
                    color="#000"
                  />
                  <Text className="mt-4"> Robert green </Text>
                </View>
                <View>
                  <Text className="text-blue-500  text-lg font-bold ml-4 mt-2">
                    $500
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[200px] h-[120px] rounded-2xl"></View>
                <View className="flex-row">
                  <Icon
                    name="person-circle"
                    className="mt-8"
                    size={40}
                    color="#000"
                  />
                  <Text className="mt-4"> Robert green </Text>
                </View>
                <View>
                  <Text className="text-blue-500  text-lg font-bold ml-4 mt-2">
                    $500
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[200px] h-[120px] rounded-2xl"></View>
                <View className="flex-row">
                  <Icon
                    name="person-circle"
                    className="mt-8"
                    size={40}
                    color="#000"
                  />
                  <Text className="mt-4"> Robert green </Text>
                </View>
                <View>
                  <Text className="text-blue-500  text-lg font-bold ml-4 mt-2">
                    $500
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[200px] h-[120px] rounded-2xl"></View>
                <View className="flex-row">
                  <Icon
                    name="person-circle"
                    className="mt-8"
                    size={40}
                    color="#000"
                  />
                  <Text className="mt-4"> Robert green </Text>
                </View>
                <View>
                  <Text className="text-blue-500  text-lg font-bold ml-4 mt-2">
                    $500
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text className="text-black text-xl font-bold mt-3">
            {" "}
            Top Mentors
          </Text>
          <ScrollView horizontal={true}>
            <View className="flex-row ml-3 mt-3 space-x-4">
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
                <View className="flex-row">
                  <Text className="font-bold ">Robert</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
                <View className="flex-row">
                  <Text className="font-bold ">Robert</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
                <View className="flex-row">
                  <Text className="font-bold ">Robert</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
                <View className="flex-row">
                  <Text className="font-bold ">Robert</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="bg-gray-200 w-[70px] h-[70px] rounded-full"></View>
                <View className="flex-row">
                  <Text className="font-bold ">Robert</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
