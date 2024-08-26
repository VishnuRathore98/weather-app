import { StatusBar } from "expo-status-bar";
import {  StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeBackground from "./components/HomeBackground";
import WeatherTabBar from "./components/tabbar/WeatherTabBar";
import TabbarItems from "./components/tabbar/elements/TabbarItems";
// import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <HomeBackground />
      <WeatherTabBar />
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
