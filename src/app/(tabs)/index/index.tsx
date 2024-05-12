import { View, Text, ScrollView } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HomeItem from "@/components/home-item";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Index = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="px-6">
        <View className="flex-row items-center gap-2 pt-7">
          <Text className="text-white font-semibold text-xl">Conta</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            className="mt-[4px]"
            size={12}
            color="white"
          />
        </View>
        <Text className="text-white font-semibold text-xl">R$ 0,25</Text>
      </View>

      <ScrollView
        horizontal={true}
        className="mt-7"
        showsHorizontalScrollIndicator={false}
      >
        <View className="px-5 flex-row gap-3">
          <HomeItem title="Area Pix">
            <FontAwesome6 name="pix" size={23} color="white" />
          </HomeItem>
          <HomeItem title="Pagar">
            <Ionicons name="barcode-sharp" size={27} color="white" />
          </HomeItem>
          <HomeItem title="Adquirir">
            <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
          </HomeItem>
          <HomeItem title="Transferir">
            <FontAwesome6 name="money-bill-transfer" size={22} color="white" />
          </HomeItem>
          <HomeItem title="Recarga">
            <Feather name="smartphone" size={25} color="white" />
          </HomeItem>
          <HomeItem title="Cobrar">
            <MaterialCommunityIcons
              name="message-badge-outline"
              size={24}
              color="white"
            />
          </HomeItem>
          <HomeItem title="Cobrar">
            <MaterialCommunityIcons
              name="safe-square-outline"
              size={24}
              color="white"
            />
          </HomeItem>
          <HomeItem title="Depositar">
            <FontAwesome6 name="sack-dollar" size={24} color="white" />
          </HomeItem>
          <HomeItem title="Investir">
            <MaterialIcons name="signal-cellular-alt" size={26} color="white" />
          </HomeItem>
          <HomeItem title="Globalização">
            <Feather name="globe" size={24} color="white" />
          </HomeItem>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
