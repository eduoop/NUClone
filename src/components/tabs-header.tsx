import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const TabsHeader = () => {
  const [showValues, setShowValues] = useState(false);
  const handleShowValues = () => setShowValues(!showValues);

  return (
    <View className="bg-purple-800 pt-16 px-6 pb-6 border-b border-b-gray-500">
      {/* Header Top */}
      <View className="flex-row justify-between items-center">
        {/* Avatar */}
        <View>
          <View className="w-[16px] h-[16px] rounded-full -mb-4 z-20 ml-[35px] bg-purple-800 items-center justify-center">
            <View className="w-[12px] h-[12px] rounded-full bg-white" />
          </View>
          <Avatar className="w-14 h-14">
            <AvatarImage
              source={{
                uri: "https://observatoriodegames.uol.com.br/wp-content/uploads/2021/12/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec-e1638978246762-1024x1020.jpg",
              }}
            />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>
        </View>

        {/* Functions */}
        <View className="flex-row gap-6 items-center">
          {showValues ? (
            <Pressable onPress={handleShowValues}>
              <Octicons name="eye" size={22} color="white" />
            </Pressable>
          ) : (
            <Pressable onPress={handleShowValues}>
              <Octicons name="eye-closed" size={22} color="white" />
            </Pressable>
          )}

          <Pressable>
            <Ionicons name="help-circle-outline" size={26} color="white" />
          </Pressable>

          <Pressable>
            <Feather name="send" size={21} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Hello text */}
      <View className="">
        <Text className="text-white font-semibold text-[18px] mt-7">
          Olá, Eduardo
        </Text>
      </View>
    </View>
  );
};

export default TabsHeader;
