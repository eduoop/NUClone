import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

interface CustomBarProps {
  tabBarProps: BottomTabBarProps;
}

const CustomBar = ({ tabBarProps }: CustomBarProps) => {
  return (
    <View className="justify-center items-center">
      <View
        className={cn(
          "flex-row mb-6 items-center justify-center absolute bottom-0 bg-[rgba(255,255,255,0.9)] gap-2 shadow-md rounded-full",
          {
            "mb-9": Platform.OS === "ios",
          }
        )}
      >
        {tabBarProps.state.routes.map((route, index) => {
          const { options } = tabBarProps.descriptors[route.key];

          const focused = tabBarProps.state.index === index;

          const onPress = () => {
            const event = tabBarProps.navigation.emit({
              type: "tabPress",
              canPreventDefault: true,
              target: route.key,
            });

            if (!focused && !event.defaultPrevented) {
              tabBarProps.navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              className="items-center justify-center"
            >
              <View className="items-center p-[4px]">
                <View className={cn("p-2 bg-transparent rounded-full", {
                    "bg-[#f8e2fd]": focused
                })}>
                  <MaterialIcons
                    name={options.tabBarIcon as any}
                    size={38}
                    color={focused ? "#8f2abd" : "#535353"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomBar;
