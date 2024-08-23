import { StatusBar } from "expo-status-bar";
import {  StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeBackground from "./components/HomeBackground";
// import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <HomeBackground />
    </>
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
