import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  Canvas,
  Line,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import useApplicationDimensions from "../hooks/useApplicationDimensions";

let dimensions;

const HomeBackground = () => {
  const { width, height } = useApplicationDimensions();
  const myStyles = styles({ width });
  const smokeHeight= height*0.6;
  const smokeOffsetY= height*0.4;

  return (
    <View style={{}}>
      <Canvas style={styles.canvaContainer}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require("../assets/home/Background.png")}
        resizeMode='cover'
        style={{ height: "100%" }}>

        <Canvas style={{ height: smokeHeight, top: smokeOffsetY}}>
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
          {/* <Line
            p1={vec(width / 2, 0)}
            p2={vec(width / 2, smokeHeight)}
            strokeWidth={10}
            color={"red"}
          /> */}
        </Canvas>

        <Image
          source={require("../assets/home/House.png")}
          style={myStyles.houseImage}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeBackground;

const styles = ({ width }) =>
  StyleSheet.create({
    canvaContainer: {
      flex: 1,
    },
    houseImage: {
      width: width,
      height: width,
      position: "absolute",
      top: "36%",
    },
  });
