import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Reminder = () => {
  return (
    <View className="px-6 pr-10">
      <TouchableOpacity
        style={{ width: 30, height: 30 }}
        className="mt-7 bg-gray-800 justify-center items-center rounded-full"
      >
        <Ionicons name="notifications-outline" size={17} color="white" />
      </TouchableOpacity>
      <View className="flex-row items-center gap-2 pt-4">
        <Text className="text-white font-semibold text-xl">
          Próximos 7 dias
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          className="mt-[3px]"
          size={12}
          color="white"
        />
      </View>

      <Text className="text-white font-[400] text-[16px] mt-2">
        <Text className="font-[500]">R$ 120,00</Text>a pagar em Joaquim Souza
      </Text>
    </View>
  );
};

export default Reminder;
