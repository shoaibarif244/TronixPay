import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { h } from "../constants";

interface RadialGradientBackgroundProps {
  colors: string[];
  children?: ReactNode;
  style?: ViewStyle;
}

const RadialGradientBackground: React.FC<RadialGradientBackgroundProps> = ({
  colors,
  children,
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.gradient, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: h(1),
  },
});

export { RadialGradientBackground };
