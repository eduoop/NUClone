import { View, Text, StatusBar } from "react-native";
import React from "react";
import "@/styles/global.css";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import UserValueSettingProvider from "@/contexts/userValueSetting";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <UserValueSettingProvider>
      <View className="dark" style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {fontsLoaded && <Slot />}
      </View>
    </UserValueSettingProvider>
  );
};

export default Layout;
