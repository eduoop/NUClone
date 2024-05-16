import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import TabsHeader from "@/components/tabs-header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCashbacks from "@/components/ListCashbacks";
import ListBanners from "@/components/ListBanners";
import ListProducts from "@/components/ListProducts";

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

      <Text className="font-semibold text-white pl-6 pr-14 text-xl mt-4">
        Shopping do NU indica
      </Text>
      <Text className="pl-6 pr-14 text-base mt-[3px] mb-3 text-gray-300/70">
        Os maiores cashbacks por tempo limitado
      </Text>
      <View className="w-full flex-row items-center px-6 mb-[17px]">
        <Image
          className="w-full h-[100px] rounded-[10px]"
          source={{
            uri: "https://r1.community.samsung.com/isuuy43828/attachments/isuuy43828/br-community-other/330809/1/SSG_SmartThings%20-%20Promo%20-%20Banner%20Home%20(1080x564).jpg",
          }}
        />
      </View>

      <View className="mb-36">
        <ListProducts />
      </View>
    </ScrollView>
  );
};

export default Shopping;
