import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { COLORS, SHADOW, h } from "../constants";

interface CardProps extends ViewProps {
  variant?: "card" | "defaults";
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = "defaults",
  ...rest
}) => {
  const variantStyles = styles[variant];
  return (
    <View style={[variantStyles, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    ...SHADOW[8],
  },
  defaults: {
    backgroundColor: COLORS.WHITE,
    padding: h(2),
    marginTop: h(2),
    borderRadius: 10,
    ...SHADOW[8],
  },
});

export { Card };
