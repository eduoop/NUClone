import { View, Text, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

interface ProductItemProps {
  productItemProp: {
    id: number;
    oldPrice: number;
    currentPrice: number;
    imageUrl: string;
    cashback: number;
    discount: number;
    title: string;
  };
}

const ProductItem = ({ productItemProp }: ProductItemProps) => {
  return (
    <View className="w-[140px]">
      <View className="w-full p-[10px] bg-zinc-900/50 rounded-[10px]">
        <Image
          source={{
            uri: `${productItemProp.imageUrl}`,
          }}
          className="w-full aspect-square rounded-[10px] bg-white"
        />
      </View>

      <View className="mt-2">
        {/* OLD PRICE WITH DISCOUNT BADGE */}
        <View className="flex-row items-center gap-2">
          <Text className="text-gray-300/70 text-[14px] line-through">
            R$ {productItemProp.oldPrice}
          </Text>
          <View className="py-[2px] px-[3px] flex-row items-center bg-zinc-800 rounded-[4px] gap-1">
            <Feather name="arrow-down" size={11} color="#d1d5db" />
            <Text className="text-gray-300 text-[10px] font-semibold">
              {productItemProp.discount}%
            </Text>
          </View>
        </View>
        {/* CURRENT PRICE */}
        <Text className="text-white font-bold text-[18px] mt-3">
          R$ {productItemProp.currentPrice}
        </Text>
        {/* ADDITIONAL INFOS */}
        <Text className="text-gray-300/70 text-[14px]">Em até 24x</Text>
        <View className="w-full px-[1px] py-[2px] rounded-[2px] bg-purple-700/65 mb-2 mt-[5px]">
          <Text className="text-purple-600 text-[11px] font-semibold  text-center ">
            R$ {productItemProp.cashback} de cashback
          </Text>
        </View>
        <Text className="text-gray-300/70 text-[11px]">
          {productItemProp.title}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
