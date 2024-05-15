import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import TabsHeader from "@/components/tabs-header";
import { MaterialIcons } from "@expo/vector-icons";
import { UserValueSettingContext } from "@/contexts/userValueSetting";
import Feather from "@expo/vector-icons/Feather";
import { cn } from "@/lib/utils";
import ListMyInvestments from "@/components/ListMyInvestments";

const Investments = () => {
  const { showUserValue } = useContext(UserValueSettingContext);
  const [currentFilter, setCurrentFilter] = useState("myOrganization");
  const handleChangeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      <TabsHeader />

      <View className="px-6">
        <View className="flex-row items-center gap-2 pt-7">
          <Text className="text-white font-semibold text-xl">
            Total em investimentos
          </Text>
          <MaterialIcons
            name="arrow-forward-ios"
            className="mt-[4px]"
            size={12}
            color="white"
          />
        </View>
        {showUserValue ? (
          <Text className="text-white font-semibold text-xl">R$ 3.342,33</Text>
        ) : (
          <View className="flex-row items-center gap-[3px] mt-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                className="w-[9px] h-[9px] bg-white rounded-full"
              />
            ))}
          </View>
        )}
      </View>

      <View className="flex-row items-center px-6 mt-7 mb-3 gap-1">
        <Feather name="arrow-up" size={24} color={"#00FF00"} />
        <Text className="text-gray-400 leading-6 text-[15px">
          <Text className="text-green-500">R$ 79,34 </Text>
          de {"\n"} rendimento
        </Text>
      </View>

      <View className="px-6">
        <Pressable className="bg-purple-800 py-3 w-[90px] justify-center rounded-full mt-1 mb-1">
          <Text className="text-white font-semibold text-[16px] text-center">
            Investir
          </Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-12"
      >
        <View className="flex-row px-6 items-center gap-4">
          <Pressable onPress={() => handleChangeFilter("myOrganization")}>
            <Text
              className={cn("text-white font-semibold text-md", {
                "text-[#BE88FA]": currentFilter === "myOrganization",
              })}
            >
              Minha Organização
            </Text>
          </Pressable>

          <View className="h-[21px] w-[1px] bg-white/15" />
          <Pressable onPress={() => handleChangeFilter("analysisDistribution")}>
            <Text
              className={cn("text-white font-semibold text-md", {
                "text-[#BE88FA]": currentFilter === "analysisDistribution",
              })}
            >
              Análise da Distibuição
            </Text>
          </Pressable>
          <View className="h-[21px] w-[1px] bg-white/15" />
          <Pressable
            onPress={() => handleChangeFilter("investmentRecommendations")}
          >
            <Text
              className={cn("text-white font-semibold text-md", {
                "text-[#BE88FA]": currentFilter === "investmentRecommendations",
              })}
            >
              Recomendações de investimento
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <View className="mt-8">
        <ListMyInvestments />
      </View>
    </ScrollView>
  );
};

export default Investments;
