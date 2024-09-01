import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WeatherInfo = ({weather}) => {
  const { city, temperature, condition, high, low } = weather;
  const {top} = useSafeAreaInsets();
  const weatherInfoMargin = top+51;
  return (
    <View style={[styles.container,{marginTop:weatherInfoMargin}]}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperatureText}>{temperature}</Text>
      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.minMaxText}>{high}</Text>
      <Text style={styles.minMaxText}>{low}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,position:'absolute',alignItems:'center'},
  cityText:{},
  temperatureText:{},
  conditionText:{},
  minMaxText:{}
});

export default WeatherInfo;