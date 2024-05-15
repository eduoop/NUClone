import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import TabsHeader from "@/components/tabs-header";
import { MaterialIcons } from "@expo/vector-icons";
import { UserValueSettingContext } from "@/contexts/userValueSetting";
import Feather from "@expo/vector-icons/Feather";
import { cn } from "@/lib/utils";
import ListMyInvestments from "@/components/ListMyInvestments";
import InsuranceItem from "@/components/InsuranceItem";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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

      <View className="mt-8 border-b-2 border-b-gray-800 pb-6">
        <ListMyInvestments />
      </View>

      <View className="border-b-2 border-b-gray-800 pb-6">
        <View className="px-6 pr-10">
          <TouchableOpacity
            style={{ width: 30, height: 30 }}
            className="mt-7 bg-gray-800 justify-center items-center rounded-full"
          >
            <Image
              source={require("@/assets/logo.png")}
              className="w-[25px] h-[25px]"
            />
          </TouchableOpacity>
          <View className="flex-row items-center gap-2 pt-4">
            <Text className="text-white font-semibold text-xl">
              Total em criptos
            </Text>
            <MaterialIcons
              name="arrow-forward-ios"
              className="mt-[3px]"
              size={12}
              color="white"
            />
          </View>
          <Text className="font-[500] text-white">R$ 120,00</Text>
        </View>
      </View>

      <View className="px-6 mt-6 mb-36">
        <Text className="text-white font-semibold text-xl mb-4">Seguros</Text>
        <View className="gap-3">
          <InsuranceItem
            label="Conhecer"
            content={
              <View className="flex-row items-center gap-4">
                <Feather name="heart" size={20} color="white" />
                <Text className="text-white font-semibold text-base">
                  Seguro de vida
                </Text>
              </View>
            }
          />
          <InsuranceItem
            label="Conhecer"
            content={
              <View className="flex-row items-center gap-4">
                <Feather name="smartphone" size={20} color="white" />
                <Text className="text-white font-semibold text-base">
                  Seguro Celular
                </Text>
              </View>
            }
          />
          <InsuranceItem
            label="R$ 57,00 / mês."
            content={
              <View className="flex-row items-center gap-4">
                <FontAwesome5 name="car" size={20} color="white" />
                <Text className="text-white font-semibold text-base">
                  Seguro Auto
                </Text>
              </View>
            }
          />
          <InsuranceItem
            label="Conhecer"
            content={
              <View className="flex-row items-center gap-4">
                <Feather name="home" size={20} color="white" />
                <Text className="text-white font-semibold text-base">
                  Seguro de vida
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Investments;
