import { View, Text, Image } from "react-native";
import React from "react";

interface CashbackItemProps {
  cashbackItem: {
    id: number;
    title: string;
    percent: number;
    imageUrl: string;
  };
}

const CashbackItem = ({ cashbackItem }: CashbackItemProps) => {
  return (
    <View className="w-[65px] items-center">
      <Image
        source={{ uri: `${cashbackItem.imageUrl}` }}
        className="w-[55px] h-[55px] rounded-full border-2 border-gray-800"
      />
      <Text className="text-white text-center text-sm mt-2">
        {cashbackItem.title}
      </Text>
      <Text className="text-white font-semibold">{cashbackItem.percent}%</Text>
    </View>
  );
};

export default CashbackItem;
