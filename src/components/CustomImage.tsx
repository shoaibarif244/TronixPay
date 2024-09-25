import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageStyle,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import FastImage, { FastImageProps, ResizeMode } from "react-native-fast-image";
import { COLORS } from "../constants";

interface CustomImageProps extends FastImageProps {}

export const CustomImage: React.FC<CustomImageProps> = ({
  style,
  source,
  resizeMode = "cover",

  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <FastImage
        source={source}
        style={style}
        onLoad={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
        resizeMode={resizeMode}
        onError={() => console.log("Error", "error in image loading")}
        {...rest}
      />
      {isLoading && (
        <View style={[StyleSheet.absoluteFill, { justifyContent: "center" }]}>
          <ActivityIndicator color={COLORS.PRIMARY} size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // Define the default styles for mainContainer if needed
  },
});
