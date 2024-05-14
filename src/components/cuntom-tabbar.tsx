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
        style={{
          shadowColor: "#fff",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.12,
          shadowRadius: 4.5, // Aumentei a dissipação para 4.5

          elevation: 6,
        }}
        className={cn(
          "flex-row mb-6 items-center justify-center absolute bottom-0 bg-[#040404] gap-2 rounded-full",
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
                <View
                  className={cn(
                    "p-[9px] px-[11px] bg-transparent rounded-full items-center justify-center",
                    {
                      "bg-[#32104C]": focused,
                    }
                  )}
                >
                  <MaterialIcons
                    name={options.tabBarIcon as any}
                    size={38}
                    color={focused ? "#BE88FA" : "#535353"}
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
