import { StatusBar } from "expo-status-bar";
import {  StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeBackground from "./components/HomeBackground";
import WeatherTabBar from "./components/tabbar/WeatherTabBar";
import TabbarItems from "./components/tabbar/elements/TabbarItems";
import WeatherInfo from "./components/sections/WeatherInfo";
import { currentWeather } from "./data/CurrentWeather";
// import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeBackground />
      <WeatherInfo weather={currentWeather}/>
      <WeatherTabBar />
      <StatusBar style="light"/>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
