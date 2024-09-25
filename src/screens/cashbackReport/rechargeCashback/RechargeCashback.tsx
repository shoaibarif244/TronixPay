import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../layouts";
import {
  Card,
  CustomImage,
  EdgeMarker,
  Header,
  RadialGradientBackground,
} from "../../../components";
import { getStyles } from "./styles";
import { COLORS, IMAGES, h, w } from "../../../constants";
import { navigationRef } from "../../../navigation/navigationUtilities";

export const RechargeCashback: React.FC = () => {
  const styles = getStyles();

  return (
    <Screen keyboard>
      <Header
        regularHeader
        removeBorderRadius
        title="Recharge Cashback"
        backIcon={IMAGES.backArrowIcon}
        onBackPress={() => navigationRef.goBack()}
      />
      <View style={styles.container}>
        <Card style={{ marginTop: 0 }}>
          <RadialGradientBackground
            colors={["#D4E7F5", "#0190DC46", "#D4E7F5"]}
          >
            <Text>Recharge Report</Text>
          </RadialGradientBackground>
          {/* <View style={styles.header}>
            <Text>Recharge Report</Text>
          </View> */}
        </Card>
      </View>
    </Screen>
  );
};
