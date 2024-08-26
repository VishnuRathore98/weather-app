import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArcComponent from "./elements/ArcComponent";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import TabbarItems from "./elements/TabbarItems";

const WeatherTabBar = () => {
  const TabbarHeight = 88;
  const { height, width } = useApplicationDimensions();
  return (
    <View
      style={{
        height: TabbarHeight,
        position: "absolute",
        top: height - TabbarHeight,
        width:width
      }}>
      <ArcComponent height={TabbarHeight} width={width} />
      <TabbarItems />
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
