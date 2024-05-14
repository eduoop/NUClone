import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Card } from "./Card";

interface DiscoveryItemProps {
  item: {
    title: string;
    description: string;
    actionLabel: string;
    imgUrl: string;
  };
}

const DiscoveryItem = ({ item }: DiscoveryItemProps) => {
  return (
    <Card className="py-0 rounded-[10px] w-[250px]">
      <Image
        source={{
          uri: `${item.imgUrl}`,
        }}
        className="w-full h-[120px] rounded-t-[10px]"
      />
      <View className="p-4 pb-2">
        <Text className="text-white font-semibold">
          {item.title}
        </Text>
        <Text className="text-gray-500 leading-6 my-2">
          {item.description}
        </Text>
        <Pressable className="bg-purple-800 py-3 px-3 w-fit justify-center rounded-full mt-1 mb-1">
          <Text className="text-white font-semibold text-[16px] text-center">
            {item.actionLabel}
          </Text>
        </Pressable>
      </View>
    </Card>
  );
};

export default DiscoveryItem;
