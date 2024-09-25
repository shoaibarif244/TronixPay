import React from "react";
import { View, StyleSheet } from "react-native";

import { COLORS, h, w } from "../constants";

interface PositionedMarkerProps {
  direction: "left" | "right";
}

const EdgeMarker = ({ direction }: PositionedMarkerProps) => {
  const getMarkerStyle = () => {
    if (direction === "left") {
      return {
        left: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      };
    } else if (direction === "right") {
      return {
        right: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      };
    }
  };

  return <View style={[styles.marker, getMarkerStyle()]} />;
};

const styles = StyleSheet.create({
  marker: {
    position: "absolute",
    top: h(1.5),
    backgroundColor: COLORS.SECONDARY,
    width: w(1.5),
    height: h(3),
  },
});

export { EdgeMarker };
