import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Loan = () => {
  return (
    <View className="px-6">
      <View className="flex-row items-center gap-2 pt-7">
        <Text className="text-white font-semibold text-xl">
          Empréstimo
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          className="mt-[3px]"
          size={12}
          color="white"
        />
      </View>

      <View className="mt-2 gap-1">
        <Text className="text-white font-[400] text-[16px]">Valor disponível de até</Text>
        <Text className="text-white font-semibold text-xl">R$ 10.000,00</Text>
      </View>
    </View>
  );
};

export default Loan;
