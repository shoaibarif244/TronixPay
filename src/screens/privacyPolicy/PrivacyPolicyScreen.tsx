import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { Card, CustomImage, EdgeMarker, Header } from "../../components";
import { COLORS, IMAGES, h, w } from "../../constants";
import { getStyles } from "./styles";
import { navigationRef } from "../../navigation/navigationUtilities";

export const PrivacyPolicyScreen: React.FC = () => {
  const styles = getStyles();

  return (
    <Screen keyboard>
      <Header
        regularHeader
        title="Privacy & Policy"
        onBackPress={() => navigationRef.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.privacyContainer}>
          <CustomImage
            source={IMAGES.privacyIcon}
            style={styles.imgPrivacy}
            resizeMode="contain"
          />
          <View style={{ marginLeft: w(4) }}>
            <Text style={styles.txtTitle}>Privacy & Policy</Text>
            <Text style={styles.txtDescription}>Last updated on 9/12/2023</Text>
          </View>
        </View>
        <View>
          <Text style={styles.txtTitle}>1. Clause 1</Text>
          <Text style={styles.txtDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.
          </Text>
        </View>
        <View style={{ marginTop: h(4) }}>
          <Text style={styles.txtTitle}>2. Clause 2</Text>
          <Text style={styles.txtDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.{"\n\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.{"\n\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.{"\n\n"}
          </Text>
        </View>
      </View>
    </Screen>
  );
};
