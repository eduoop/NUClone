import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CreditInvoice = () => {
  return (
    <View className="px-6">
      <View className="flex-row items-center gap-2 pt-7">
        <Text className="text-white font-semibold text-xl">
          Cartão de crédito
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          className="mt-[3px]"
          size={12}
          color="white"
        />
      </View>

      <View className="mt-2 gap-1">
        <Text className="text-white font-[400] text-[16px]">Fatura atual</Text>
        <Text className="text-white font-semibold text-xl">R$ 384,03</Text>
      </View>

      <View className="mt-3 pr-10 gap-1">
        <Text className="text-gray-500 font-[400] text-[14px]">
          Limite disponível de 524,99
        </Text>
        <Text className="text-gray-500 font-[400] text-[14px] leading-6">
          Limite adicional para Pix e boletos:{" "}
          <Text className="text-[#BE88FA] font-[400]">R$ 783,92</Text>
        </Text>
      </View>
    </View>
  );
};

export default CreditInvoice;
