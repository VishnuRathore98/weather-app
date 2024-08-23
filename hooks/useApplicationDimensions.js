import { View, Text, useWindowDimensions, StatusBar } from 'react-native'
import React from 'react'

const useApplicationDimensions = () => {
  const { width, height, scale, fontScale } = useWindowDimensions();
    return (
        {
            width,
            height: height+(StatusBar?.currentHeight+50 || 0),
            scale,
            fontScale
        }
  );
}

export default useApplicationDimensions;