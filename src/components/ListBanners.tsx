import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import BannerItem from "./BannerItem";
import { BANNERS } from "@/utils/banners";

const ListBanners = () => {
  return (
    <ScrollView
      horizontal
      className="w-full"
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row px-6 gap-3">
        {BANNERS.map((banner) => (
          <BannerItem bannerUrl={banner} key={banner} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListBanners;
