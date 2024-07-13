import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useColorScheme } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabBar = ({ state, descriptors, navigation }) => {
  //   const isDark = useColorScheme() === "dark";

  return (
    <View style={[styles.tab, { borderColor: "slategray" }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const bgColor =
          label !== "Top Gainers"
            ? "rgba(255, 0, 0, 0.2)"
            : "rgba(0, 255, 0, 0.2)";
        const textColor = label !== "Top Gainers" ? "#ef4444" : "#22c55e";
        const tabColor = "#f3f4f6";
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            <View
              style={[
                styles.tabItem,
                {
                  backgroundColor: isFocused ? bgColor : tabColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isFocused ? textColor : "#64748b",
                  },
                ]}
              >
                {label}
              </Text>
              {label === "Top Gainers" ? (
                <AntDesign name="caretup" size={20} color="#22c55e" />
              ) : (
                <AntDesign name="caretdown" size={20} color="#ef4444" />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 16,
    paddingVertical: 8,
    width: "90%",
    borderRadius: 50,
    borderWidth: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  tabText: {
    fontWeight: "bold",
  },
});

export default TabBar;
