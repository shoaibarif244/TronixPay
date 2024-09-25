import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { Card, CustomImage, EdgeMarker, Header } from "../../components";
import { COLORS, IMAGES, h, w } from "../../constants";
import { getStyles } from "./styles";

export const StoresScreen: React.FC = () => {
  const styles = getStyles();

  const VENDOR_DATA = [
    {
      id: 1,
      icon: IMAGES.restaurantIcon,
      title: "Resturants & Others",
      off: 10,
    },
    {
      id: 2,
      icon: IMAGES.foodIcon,
      title: "Food & Beverages",
    },
    {
      id: 3,
      icon: IMAGES.groceryIcon,
      title: "Grocery & Essentials",
    },
    {
      id: 4,
      icon: IMAGES.fashionIcon,
      title: "Fashion & Lifestyle",
    },
    {
      id: 5,
      icon: IMAGES.movieMusicIcon,
      title: "Movies & Music",
    },
    {
      id: 6,
      icon: IMAGES.costumeIcon,
      title: "Costume & Style",
    },
    {
      id: 7,
      icon: IMAGES.jewellaryIcon,
      title: "Jewellary & Collections",
      off: 5,
    },
    {
      id: 8,
      icon: IMAGES.ecommIcon,
      title: "Ecommerce Online",
    },
    {
      id: 9,
      icon: IMAGES.movieIcon,
      title: "Entertainment & Show",
    },
    {
      id: 10,
      icon: IMAGES.travelIcon,
      title: "Travel & Transport",
    },
    {
      id: 11,
      icon: IMAGES.electronicsIcon,
      title: "Electronics & Shopping",
    },
    {
      id: 12,
      icon: IMAGES.moreIcon,
      title: "More\n",
      off: 5,
    },
  ];
  return (
    <Screen keyboard>
      <Header homeScreen />
      <View style={styles.container}>
        <View>
          {/* Banner */}
          <CustomImage
            source={IMAGES.dummyBanner_II}
            style={[styles.caroselImageStyle]}
            resizeMode="contain"
          />

          {/* All Vendors Category */}
          <Card style={{ marginBottom: h(5) }}>
            <EdgeMarker direction="left" />
            <Text style={styles.txtLabel}>All Vendors Category</Text>
            <View style={[styles.rowCntrBtw, { flexWrap: "wrap" }]}>
              {VENDOR_DATA.map((item, index) => (
                <TouchableOpacity style={styles.transferIconContainer}>
                  <View
                    style={[
                      styles.transferIcon,
                      { backgroundColor: COLORS.TRANSPARENT },
                    ]}
                  >
                    <CustomImage
                      source={item.icon}
                      style={styles.imgTransfer}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.txtLabel_I} numberOfLines={2}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Card>
        </View>
      </View>
    </Screen>
  );
};
