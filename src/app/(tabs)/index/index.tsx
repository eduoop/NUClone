import { View, Text, ScrollView } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ListHomeShortcuts from "@/components/ListHomeShortcuts";
import { Card } from "@/components/Card";
import Octicons from "@expo/vector-icons/Octicons";
import TabsHeader from "@/components/tabs-header";
import CreditInvoice from "@/components/CreditInvoice";
import Loan from "@/components/Loan";
import Reminder from "@/components/Reminder";
import ListDiscoveries from "@/components/ListDiscoveries";

const Index = () => {
  return (
    <ScrollView className="flex-1 bg-black" showsVerticalScrollIndicator={false}>
      <TabsHeader />

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

      <ListHomeShortcuts />

      <View className="px-6 mt-5">
        <Card className="flex-row w-full p-4 rounded-[17px] gap-5">
          <Octicons name="credit-card" size={24} color="white" />
          <Text className="text-white font-semibold text-[15px]">
            Meus Cartões
          </Text>
        </Card>
      </View>

      <View className="border border-border border-b-2 border-b-gray-800 pb-6">
        <View className="px-6 mt-5">
          <Card className="flex-row w-full p-4 rounded-[17px] gap-5">
            <Text className="text-white font-[400] text-[15px] leading-6">
              Conta PJ: organize o dinheiro do seu negócio.{" "}
              <Text className="text-[#BE88FA] font-[400]">Abir conta PJ!</Text>
            </Text>
          </Card>
        </View>
      </View>

      <View className="border-b-2 border-b-gray-800 pb-6">
        <CreditInvoice />
      </View>

      <View className="border-b-2 border-b-gray-800 pb-6">
        <Loan />
      </View>

      <View className="border-b-2 border-b-gray-800 pb-6">
        <Reminder />
      </View>

      <View className="pt-4 pb-32">
        <ListDiscoveries />
      </View>
    </ScrollView>
  );
};

export default Index;
