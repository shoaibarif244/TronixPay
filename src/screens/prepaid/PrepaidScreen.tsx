import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { Button, CustomImage, Header, TextInput } from "../../components";
import {
  COLORS,
  FONTS,
  FONT_SIZES,
  IMAGES,
  Ionicons,
  SCREEN_NAME,
  SHADOW,
  h,
  w,
} from "../../constants";
import { getStyles } from "./styles";
import { navigationRef } from "../../navigation/navigationUtilities";

export const PrepaidScreen: React.FC = () => {
  const styles = getStyles();

  return (
    <Screen keyboard>
      <Header title="Prepaid" />
      <ScrollView style={{ flex: 1 }}>
        <CustomImage source={IMAGES.dummyBanner} style={styles.banner} />
        <View style={styles.container}>
          <View style={[styles.inputContainer, SHADOW[6]]}>
            <Ionicons name="search-outline" color={COLORS.GREY} size={20} />
            <TextInput
              simpleInput
              placeholder="Search by name or number"
              style={{ fontFamily: FONTS.regular }}
            />
          </View>
          <View style={[styles.card, SHADOW[6]]}>
            <Text style={styles.cardTitle}>Recents</Text>
            {Array.from({ length: 2 }).map((item, index) => {
              return (
                <View style={styles.innerView}>
                  <CustomImage
                    source={IMAGES.userIcon}
                    style={styles.profile}
                  />
                  <View style={{ marginLeft: w(5) }}>
                    <View
                      style={{
                        ...styles.row,
                        width: "97%",
                        alignItems: "flex-start",
                      }}
                    >
                      <Text style={styles.userName}>My number</Text>
                      <Button
                        isGradient
                        title="Recharge"
                        extraStyle={styles.btn}
                        textStyle={{ fontSize: FONT_SIZES.small }}
                      />
                    </View>
                    <Text style={styles.detail}>09483474734</Text>
                    <Text style={styles.detail}>
                      Last Recharge Rs 400 on 10 Apr 2023
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={[styles.card, SHADOW[6]]}>
            <Text style={styles.cardTitle}>All Contacts</Text>
            {Array.from({ length: 7 }).map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigationRef.navigate(SCREEN_NAME.PrePaidPlans)
                  }
                >
                  <View style={{ ...styles.innerView, marginLeft: w(0) }}>
                    <CustomImage
                      source={IMAGES.userIcon}
                      style={styles.profile}
                    />
                    <View style={styles.contactView}>
                      <Text style={styles.userName}>User name</Text>
                      <Text style={styles.detail}>09483474734</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};
