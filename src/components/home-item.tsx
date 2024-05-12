import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface HomeItemProps {
  children: React.ReactNode;
  title: string;
}

const HomeItem = ({ children, title }: HomeItemProps) => {
  return (
    <TouchableOpacity className="w-20 items-center" activeOpacity={0.8}>
      <View className="rounded-full h-20 w-full bg-gray-800 justify-center items-center">
        {children}
      </View>

      <Text className="text-white text-md font-semibold mt-3 text-center flex-wrap">{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeItem;
