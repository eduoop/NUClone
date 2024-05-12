import { View, Text, Image, Pressable, Platform, Alert } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "@/theme";
import { Switch } from "@/components/Switch";
import { cn } from "@/lib/utils";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";

const Index = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = async () => {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isBiometricEnrolled) {
      return Alert.alert(
        "login",
        "Nenhuma biometria encontrada.Por favor, cadastre no dispositivo!"
      );
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Por favor, autentique-se.",
      fallbackLabel: "Biometria não reconhecida.",
    });

    if (auth.success) {
      router.replace("/(tabs)");
    }

    setIsAuthenticated(auth.success);
  };

  return (
    <View className="flex-1 bg-black">
      <View className="pl-9 pt-14 flex-1">
        <Image
          source={require("@/assets/logo.png")}
          className="w-20 h-20 -ml-3"
          resizeMode="contain"
        />
        <Text className="text-white text-3xl font-semibold pr-10 mt-5">
          Queremos deixar seu roxinho ainda mais protegido. Por isso, vamos
          pedir uma senha para acessar o aplicativo.
        </Text>

        <View className="flex-row items-center gap-5 my-8">
          <Text className="text-gray-400">
            Saiba mais sobre essa iniciativa
          </Text>
          <Feather
            name="arrow-up-right"
            size={20}
            color={theme.colors.purple[600]}
            className="mt-1"
          />
        </View>

        <View className="pr-9 w-full">
          <Pressable
            onPress={handleAuthentication}
            className="bg-purple-800 py-4 justify-center rounded-full hover:opacity-50"
          >
            <Text className="text-white font-semibold text-[19px] text-center">
              Usar senha do celular
            </Text>
          </Pressable>

          <Text className="text-gray-500 mt-5 text-[13px] text-center">
            Essa senha é a mesma forma de validação {"\n"} que você usa para
            desbloquear seu {"\n"} dispositivo.
          </Text>
        </View>
      </View>

      <View>
        <View className="h-[120px] bg-gray-800 flex-row px-8 items-center justify-between">
          <Text className="text-white text-lg">
            Pular esta explicação da {"\n"}proxima vez que eu abrir o {"\n"}
            aplicativo do Nubank.
          </Text>

          <Switch
            onValueChange={setIsEnabled}
            value={isEnabled}
            className="scale-x-100 scale-y-100"
          />
        </View>
        <View
          className={cn("h-[25px] w-full bg-black hidden", {
            flex: Platform.OS === "ios",
          })}
        />
      </View>
    </View>
  );
};

export default Index;
