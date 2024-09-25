import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { Card, CustomImage, EdgeMarker, Header } from "../../components";
import { COLORS, IMAGES, h, w } from "../../constants";
import { getStyles } from "./styles";
import { ImageSlider } from "react-native-image-slider-banner";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const HomeScreen: React.FC = () => {
  const styles = getStyles();
  const TRANSFER_DATA = [
    {
      id: 1,
      icon: IMAGES.qrIcon,
      title: "Scan\n& Pay",
    },
    {
      id: 2,
      icon: IMAGES.walletIcon,
      title: "To\nWallet",
    },
    {
      id: 3,
      icon: IMAGES.bankIcon,
      title: "Payout\nMoney",
    },
    {
      id: 4,
      icon: IMAGES.historyIcon,
      title: "Payout\nhistory",
    },
  ];
  const DATA_I = [
    {
      id: 1,
      icon: IMAGES.gift,
      title: "Gift &\nVouchar",
    },
    {
      id: 2,
      icon: IMAGES.wallet,
      title: "tronixpay\nWallet",
    },
    {
      id: 3,
      icon: IMAGES.refer,
      title: "Refer &\nGet Rewards",
    },
  ];
  const RECHARGE_DATA = [
    {
      id: 1,
      icon: IMAGES.mobileIcon,
      title: "Mobile",
      off: 10,
    },
    {
      id: 2,
      icon: IMAGES.dthIcon,
      title: "DTH",
    },
    {
      id: 3,
      icon: IMAGES.barrierIcon,
      title: "FASTag",
    },
    {
      id: 4,
      icon: IMAGES.electricityIcon,
      title: "Electricity",
    },
  ];
  const BBPS_DATA = [
    {
      id: 1,
      icon: IMAGES.mobileIcon,
      title: "Postpaid",
      off: 10,
    },
    {
      id: 2,
      icon: IMAGES.dataCardIcon,
      title: "Datacard",
    },
    {
      id: 3,
      icon: IMAGES.landlineIcon,
      title: "Landline",
    },
    {
      id: 4,
      icon: IMAGES.electricityIcon,
      title: "Electricity",
    },
    {
      id: 4,
      icon: IMAGES.gasIcon,
      title: "Gas",
    },
    {
      id: 4,
      icon: IMAGES.insuranceIcon,
      title: "Insurance",
    },
    {
      id: 4,
      icon: IMAGES.dropIcon,
      title: "Water",
      off: 5,
    },
    {
      id: 4,
      icon: IMAGES.loanIcon,
      title: "Loan EMI",
    },
    {
      id: 4,
      icon: IMAGES.muncipleIcon,
      title: "Municipal\nTax",
    },
    {
      id: 4,
      icon: IMAGES.housingIcon,
      title: "Housing\nSociety",
    },
    {
      id: 4,
      icon: IMAGES.cableIcon,
      title: "Cable\nTV",
    },
    {
      id: 4,
      icon: IMAGES.hospitalIcon,
      title: "Hospital\n",
      off: 5,
    },
    {
      id: 4,
      icon: IMAGES.educationIcon,
      title: "Education\n",
      off: 20,
    },
    {
      id: 4,
      icon: IMAGES.subscriptionIcon,
      title: "Subscription",
    },
    {
      id: 4,
      icon: IMAGES.clubIcon,
      title: "Club &\nAssociation",
    },
  ];
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
      id: 4,
      icon: IMAGES.movieMusicIcon,
      title: "Movies & Music",
    },
    {
      id: 4,
      icon: IMAGES.costumeIcon,
      title: "Costume & Style",
    },
    {
      id: 4,
      icon: IMAGES.jewellaryIcon,
      title: "Jewellary & Collections",
      off: 5,
    },
    {
      id: 4,
      icon: IMAGES.ecommIcon,
      title: "Ecommerce Online",
    },
    {
      id: 4,
      icon: IMAGES.movieIcon,
      title: "Entertainment & Show",
    },
    {
      id: 4,
      icon: IMAGES.travelIcon,
      title: "Travel & Transport",
    },
    {
      id: 4,
      icon: IMAGES.electronicsIcon,
      title: "Electronics & Shopping",
    },
    {
      id: 4,
      icon: IMAGES.moreIcon,
      title: "More\n",
      off: 5,
    },
  ];
  const CASHBACK_DATA = [
    {
      id: 1,
      icon: IMAGES.cashbackIcon,
      title: "Recharge & Cashback",
      off: 10,
    },
    {
      id: 2,
      icon: IMAGES.spIcon,
      title: "S&P Cashback & Report",
    },
    {
      id: 3,
      icon: IMAGES.tdsIcon,
      title: "TDS Deduction & Report",
    },
    {
      id: 4,
      icon: IMAGES.vendorIcon,
      title: "Vendor Cashback Report",
    },
    {
      id: 4,
      icon: IMAGES.giftIcon,
      title: "Gift Vouchar\n",
    },
  ];
  return (
    <Screen keyboard>
      <Header homeScreen showBalance />
      <View style={styles.container}>
        <View>
          <ImageSlider
            localImg
            autoPlay
            timer={2000}
            preview={false}
            closeIconColor={COLORS.WHITE}
            caroselImageStyle={styles.caroselImageStyle}
            activeIndicatorStyle={styles.activeIndicatorStyle}
            // onItemChanged={(item) => console.log("item", item)}
            inActiveIndicatorStyle={styles.inActiveIndicatorStyle}
            indicatorContainerStyle={styles.indicatorContainerStyle}
            caroselImageContainerStyle={styles.caroselImageContainerStyle}
            data={Array.from({ length: 6 }).map((item, index) => {
              return { img: IMAGES.dummyBanner };
            })}
          />

          {/* Transfer Money */}
          <Card style={{ marginTop: h(5) }}>
            <EdgeMarker direction="left" />
            <Text style={styles.txtLabel}>Transfer Money</Text>
            <View style={styles.rowCntrBtw}>
              {TRANSFER_DATA.map((item, index) => (
                <TouchableOpacity style={styles.transferIconContainer}>
                  <View style={styles.transferIcon}>
                    <CustomImage
                      source={item.icon}
                      style={styles.imgTransfer}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.txtLabel_I}>{item?.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Card>

          {/* Cards with BG */}
          <View style={[styles.rowCntrBtw, { marginTop: h(2) }]}>
            {DATA_I.map((item, index) => (
              <TouchableOpacity style={styles.imgCardBgContainer}>
                <ImageBackground
                  source={IMAGES.cardBg}
                  style={styles.imgCardBg}
                  resizeMode="cover"
                  borderRadius={10}
                >
                  <View style={{ alignItems: "center" }}>
                    <CustomImage
                      source={item.icon}
                      style={styles.imgCard}
                      resizeMode="contain"
                    />
                    <Text style={[styles.txtLabel_I, { color: COLORS.WHITE }]}>
                      {item?.title}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>

          {/* Recharge */}
          <Card style={{}}>
            <EdgeMarker direction="left" />
            <Text style={styles.txtLabel}>Recharge</Text>
            <View style={styles.rowCntrBtw}>
              {RECHARGE_DATA.map((item, index) => (
                <TouchableOpacity style={styles.transferIconContainer}>
                  {item?.off && (
                    <ImageBackground
                      source={IMAGES.offBg}
                      style={{
                        width: "100%",
                        height: h(4),
                        alignItems: "center",
                        marginBottom: -h(1.5),
                      }}
                      resizeMode="contain"
                    >
                      <Text style={styles.txtOff}>{item?.off}% off</Text>
                    </ImageBackground>
                  )}
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
                  <Text style={styles.txtLabel_I}>{item?.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Card>

          {/* Banner */}
          <CustomImage
            source={IMAGES.dummyBanner}
            style={[styles.caroselImageStyle, { marginTop: h(2) }]}
            resizeMode="contain"
          />

          {/* BBPS */}
          <Card style={{}}>
            <EdgeMarker direction="left" />
            <Text style={styles.txtLabel}>BBPS</Text>
            <View
              style={[
                styles.rowCntrBtw,
                { flexWrap: "wrap", justifyContent: "flex-start" },
              ]}
            >
              {BBPS_DATA.map((item, index) => (
                <TouchableOpacity style={styles.transferIconContainer}>
                  {item?.off && (
                    <ImageBackground
                      source={IMAGES.offBg}
                      style={{
                        width: "100%",
                        height: h(4),
                        alignItems: "center",
                        marginBottom: -h(1.5),
                      }}
                      resizeMode="contain"
                    >
                      <Text style={styles.txtOff}>{item?.off}% off</Text>
                    </ImageBackground>
                  )}
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

          {/* Vendors Category */}
          <Card style={{}}>
            <EdgeMarker direction="left" />
            <Text style={styles.txtLabel}>Vendors Category</Text>
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

          {/* Banner */}
          <CustomImage
            source={IMAGES.dummyBanner_I}
            style={[styles.caroselImageStyle, { marginTop: h(2) }]}
            resizeMode="contain"
          />

          {/* Cashback Report */}
          <Card style={{ marginBottom: h(5) }}>
            <EdgeMarker direction="left" />
            <Text style={styles.txtLabel}>Cashback Report</Text>
            <View
              style={[
                styles.rowCntrBtw,
                { flexWrap: "wrap", justifyContent: "flex-start" },
              ]}
            >
              {CASHBACK_DATA.map((item, index) => (
                <TouchableOpacity
                  style={[styles.transferIconContainer, { width: "33.33%" }]}
                >
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
