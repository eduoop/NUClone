import { View, ScrollView, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HomeItem from "@/components/home-item";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ListHomeShortcuts = () => {
  return (
    <ScrollView
      horizontal={true}
      className="mt-7 flex-initial"
      showsHorizontalScrollIndicator={false}
    >
      <View className="px-6 flex-row gap-3 h-fit">
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
        <HomeItem title="Economizar">
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
        <HomeItem title="Transferir Intenac.">
          <Feather name="globe" size={24} color="white" />
        </HomeItem>
      </View>
    </ScrollView>
  );
};

export default ListHomeShortcuts;
