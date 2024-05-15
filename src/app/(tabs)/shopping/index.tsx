import { View, Text, ScrollView } from "react-native";
import React from "react";
import TabsHeader from "@/components/tabs-header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCashbacks from "@/components/ListCashbacks";
import ListBanners from "@/components/ListBanners";

const Shopping = () => {
  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      <TabsHeader />

      <View className="px-6 pt-7">
        <View className="flex-row bg-gray-800 px-3 py-3 rounded-full items-center gap-4">
          <AntDesign name="search1" size={20} color="#9ca3af" />
          <Text className="text-gray-400 font-semibold text-[18px]">
            Busque no Shopping
          </Text>
        </View>
      </View>

      <View className="pt-4 px-6 flex-row gap-2 items-center">
        <View className="flex-row bg-gray-800 px-3 py-[13px] rounded-full items-center gap-4 w-1/2 overflow-hidden">
          <Ionicons name="gift-outline" size={20} color="#e5e7eb" />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-gray-200 font-semibold text-[16px]"
          >
            Meus Cashbacks
          </Text>
        </View>
        <View className="flex-row bg-gray-800 px-3 py-[13px] rounded-full items-center gap-4 w-1/2 overflow-hidden">
          <Ionicons name="gift-outline" size={20} color="#e5e7eb" />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-gray-200 font-semibold text-[16px]"
          >
            R$ 145,36
          </Text>
        </View>
      </View>

      <Text className="font-semibold text-white pl-6 pr-14 text-xl mt-6 mb-4">
        Melhores cashbacks da semana 💜
      </Text>

      <View className="mb-3">
        <ListCashbacks />
      </View>

      <View className="mb-3">
        <ListBanners />
      </View>
    </ScrollView>
  );
};

export default Shopping;
