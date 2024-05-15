import { View, Text, Image } from "react-native";
import React from "react";


const BannerItem = ({bannerUrl}: {bannerUrl: string}) => {
  return (
    <View>
      <Image
        source={{
          uri: `${bannerUrl}`,
        }}
        className="w-[90vw] rounded-[10px]"
        style={{ resizeMode: "cover", height: 130 }}
      />
    </View>
  );
};

export default BannerItem;
