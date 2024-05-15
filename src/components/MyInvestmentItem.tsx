import { View, Text, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface MyInvestmentItemProps {
  investmentItem: {
    id: number;
    title: string;
    imageUrl: string;
    value: string;
    isPositive: boolean;
  };
}

const MyInvestmentItem = ({ investmentItem }: MyInvestmentItemProps) => {
  return (
    <View className="w-[100px] rounded-[10px]">
      <Image
        source={{
          uri: `${investmentItem.imageUrl}`,
        }}
        className="w-full h-[100px] rounded-[10px]"
      />
      <Text className="text-white font-semibold mt-3">
        {investmentItem.title}
      </Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-white">{investmentItem.value}</Text>
        {investmentItem.isPositive ? (
          <FontAwesome name="arrow-up" size={10} color="#00FF00" />
        ) : (
          <FontAwesome name="arrow-down" size={10} color="#FF0000" />
        )}
      </View>
    </View>
  );
};

export default MyInvestmentItem;
