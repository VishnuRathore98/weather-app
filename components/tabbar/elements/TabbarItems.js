import { View, Text, Pressable } from "react-native";
import React from "react";
import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import TrapezoidBackground from "./TrapezoidBackground";
import useApplicationDimensions from "../../../hooks/useApplicationDimensions";
import CircleButton from "./CircleButton";

const TabbarItems = () => {
    const {height, width} = useApplicationDimensions();
    const trapezoidWidth = width * 0.68;
    const trapezoidHeight = height * 0.12;
    const circleRadius = (trapezoidHeight*0.60)/2;
    const buttonCenterX = (width/2 -circleRadius) - 8;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position:'absolute',
        paddingHorizontal: 32,
      }}>
      <MapIcon />
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight}/>
      <Pressable style={{position:'absolute', left:buttonCenterX, top:12,}}>
        {({pressed})=>(<CircleButton radius={circleRadius} pressed={pressed}/>)}
      </Pressable>
      <ListIcon />
    </View>
  );
};

export default TabbarItems;
