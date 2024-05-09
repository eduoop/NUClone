import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomBar from "@/components/cuntom-tabbar";
import Feather from '@expo/vector-icons/Feather';

const TabsLayout = () => {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
        tabBar={(props) => CustomBar({ tabBarProps: props })}
      >
        <Tabs.Screen
          name="index/index"
          options={{
            tabBarIcon: "compare-arrows" as any,
          }}
        />
        <Tabs.Screen
          name="investments/index"
          options={{
            tabBarIcon: "attach-money" as any,
          }}
        />
        <Tabs.Screen
          name="shopping/index"
          options={{
            tabBarIcon: "storefront" as any,
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
