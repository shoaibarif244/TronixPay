import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { getStyles } from "./styles";
import {
  Entypo,
  COLORS,
  IMAGES,
  w,
  FONT_SIZES,
  FONTS,
  h,
  Ionicons,
  SHADOW,
} from "../../constants";
import { Button, CustomImage, TextInput } from "../../components";
import { navigationRef } from "../../navigation/navigationUtilities";
import Modal from "react-native-modal";

export const PrepaidPlansScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Popular Plans");
  const [showCategories, setShowCategories] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const styles = getStyles();
  const Categories = [
    "Popular Plans",
    "Data Booster",
    "TopUp",
    "Roaming",
    "Entertainment Plans",
    "Annual Plans",
    "Data Packs",
    "No Daily Limit",
    "5G Upgrade",
  ];
  return (
    <Screen keyboard>
      {/* Header */}
      <View style={styles.headerView_HS}>
        <View style={styles.headerView_HS_1}>
          <View style={styles.rowBasic}>
            <TouchableOpacity onPress={() => navigationRef.goBack()}>
              <Entypo name={"chevron-left"} size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
            <View style={{ ...styles.rowBasic, marginLeft: w(3) }}>
              <CustomImage source={IMAGES.userIcon} style={styles.profile} />
              <View style={{ marginLeft: w(2) }}>
                <Text style={styles.userName}>User name</Text>
                <Text style={{ ...styles.detail, paddingTop: 2 }}>
                  09483474734
                </Text>
                <View style={styles.rowBasic}>
                  <Text style={styles.detail}>Prepaid - Madhya Pradesh,CG</Text>
                  <Button
                    title="Change"
                    style={styles.btn}
                    textStyle={{
                      fontSize: FONT_SIZES.tiny,
                      fontFamily: FONTS.regular,
                    }}
                    regularBtn
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Tab Bar */}
      <View style={[styles.rowBasic, styles.tabBar]}>
        <FlatList
          horizontal
          data={Categories}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => setSelectedTab(item)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.tabBarTxt}>{item}</Text>
                  <View
                    style={[
                      styles.borderTabBarLine,
                      selectedTab === item && {
                        backgroundColor: COLORS.SECONDARY,
                      },
                    ]}
                  />
                </TouchableOpacity>
              </>
            );
          }}
        />
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setShowCategories(true)}
        >
          <Ionicons
            name="grid"
            color={COLORS.WHITE}
            size={20}
            style={{ marginTop: h(2) }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.row, marginHorizontal: w(5), marginTop: h(2) }}>
        <View style={[styles.inputContainer, SHADOW[6]]}>
          <Ionicons name="search-outline" color={COLORS.GREY} size={20} />
          <TextInput
            simpleInput
            placeholder="Search a plan eg 239 or 28 days"
            style={{ fontFamily: FONTS.regular }}
            multiline={false}
          />
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setShowFilters(true)}
        >
          <Ionicons name="options-outline" color={COLORS.WHITE} size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Array.from({ length: 10 })}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardLine} />
              <View style={{ paddingHorizontal: w(3) }}>
                <View
                  style={{
                    ...styles.row,
                    width: "100%",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Button
                      title={"Best Seller"}
                      disabled
                      style={styles.cardSmallBtn}
                      textStyle={{
                        fontSize: FONT_SIZES.tiny,
                        fontFamily: FONTS.regular,
                      }}
                      regularBtn
                    />
                    <Text style={styles.cardMainTxt}>239</Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.cardTxt}>Data</Text>
                    <Text style={styles.cardMainTxt}>2 GB/Day</Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.cardTxt}>Validity</Text>
                    <Text style={styles.cardMainTxt}>28 Days</Text>
                  </View>
                </View>
                <Text
                  style={{
                    ...styles.cardTxt,
                    textAlign: "center",
                    marginTop: h(2),
                  }}
                >
                  Voice: Unlimited Calls | SMS : 100 SMS/day
                </Text>
                <Text style={{ ...styles.cardTxt, textAlign: "center" }}>
                  JioTV, JioCinema, JioSecurity, JioCloud app subscriptions
                </Text>
                <Button
                  title="Recharge"
                  isGradient
                  extraStyle={styles.cardBtn}
                  textStyle={{
                    fontSize: FONT_SIZES.regular,
                  }}
                />
              </View>
            </View>
          );
        }}
        ListFooterComponent={<View style={{ marginTop: h(10) }} />}
      />
      <Modal
        isVisible={showCategories}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        onBackButtonPress={() => setShowCategories(false)}
        onSwipeComplete={() => setShowCategories(false)}
        onBackdropPress={() => setShowCategories(false)}
        backdropColor="rgba(0,0,0,0.9)"
        swipeDirection={"down"}
        statusBarTranslucent
        style={{
          flex: 1,
          marginHorizontal: 0,
          marginVertical: 0,
        }}
      >
        <View style={styles.categoryCardContainer}>
          <View style={[styles.row, styles.modalHeader]}>
            <Ionicons name="grid" color={COLORS.WHITE} size={20} />
            <Text style={styles.modalHeading}>Plans Categories</Text>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowCategories(false)}
            >
              <Entypo name="cross" size={20} color={COLORS.WHITE} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <FlatList
              data={Categories}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.categoriesBtn}
                    onPress={() => {
                      setSelectedTab(item);
                      setShowCategories(false);
                    }}
                  >
                    <Text style={styles.categoriesTxt}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={showFilters}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        onBackButtonPress={() => setShowFilters(false)}
        onSwipeComplete={() => setShowFilters(false)}
        onBackdropPress={() => setShowFilters(false)}
        backdropColor="rgba(0,0,0,0.9)"
        swipeDirection={"down"}
        statusBarTranslucent
        style={{
          flex: 1,
          marginHorizontal: 0,
          marginVertical: 0,
        }}
      >
        <View style={{ ...styles.categoryCardContainer, height: h(55) }}>
          <View style={[styles.row, styles.modalHeader]}>
            <View style={styles.filterView}>
              <Ionicons name="options-outline" color={COLORS.WHITE} size={18} />
            </View>
            <Text style={styles.modalHeading}>Filter Plans</Text>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowFilters(false)}
            >
              <Entypo name="cross" size={20} color={COLORS.WHITE} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={{ ...styles.cardMainTxt, marginVertical: h(1) }}>
              Data
            </Text>
            <View style={styles.btnList}>
              <Button
                title="1 GB"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="1.5 GB/Day"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="2 GB/Day"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="2.5 GB/Day"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="3 GB"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
            </View>
            <Text style={{ ...styles.cardMainTxt, marginVertical: h(1) }}>
              Validity
            </Text>
            <View style={styles.btnList}>
              <Button
                title="28 Days"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="30 Days"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="1 Day"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="56 Days"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
              <Button
                title="84 Days"
                textStyle={styles.borderBtnTxt}
                extraStyle={styles.borderBtn}
                regularBtn
              />
            </View>
            <View
              style={{
                ...styles.row,
                alignSelf: "center",
                width: w(80),
                marginTop: h(3),
              }}
            >
              <Button regularBtn title={"Apply"} extraStyle={styles.modalBtn} />
              <Button
                regularBtn
                title={"Clear All"}
                extraStyle={{
                  ...styles.modalBtn,
                  backgroundColor: "rgba(211, 54, 54, 0.7)",
                }}
                // gradiantColor={[
                //   "rgba(255, 102, 111, 1)",
                //   "rgba(211, 54, 54, 1)",
                // ]}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
};
