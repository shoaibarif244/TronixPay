import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { Button, CustomImage, Header, TextInput } from "../../components";
import {
  COLORS,
  FONTS,
  FONT_SIZES,
  Feather,
  IMAGES,
  Ionicons,
  SCREEN_NAME,
  SHADOW,
  h,
  w,
  Entypo,
  MaterialCommunityIcons,
} from "../../constants";
import { getStyles } from "./styles";
import { navigationRef } from "../../navigation/navigationUtilities";
import Modal from "react-native-modal";

export const HistoryScreen: React.FC = () => {
  const [showfilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState("months");
  const [filters, setFilters] = useState({
    selectedMonth: "",
    selectedCategorie: "",
    selectedPayment: "",
  });

  const Months = [
    "Dec 2023",
    "Nov 2023",
    "Oct 2023",
    "Sep 2023",
    "Aug 2023",
    "Jul 2023",
    "Jun 2023",
    "May 2023",
    "Apr2023",
    "Mar2023",
    "Feb 2023",
    "Jan 2023",
  ];
  const Categories = [
    "Merchant Payment",
    "Money Received",
    "Recharge & BBPS payments",
    "Money Sent",
  ];
  const Status = ["Failed", "Successful"];

  const styles = getStyles();

  const isSelected = (item: any) => {
    let result = false;
    if (filterType == "months" && filters.selectedMonth == item) {
      result = true;
    }
    if (filterType == "category" && filters.selectedCategorie == item) {
      result = true;
    }
    if (filterType == "payment" && filters.selectedPayment == item) {
      result = true;
    }
    return result;
  };

  const onSelect = (item: any) => {
    if (filterType == "months") {
      if (filters.selectedMonth == item) {
        setFilters({ ...filters, selectedMonth: "" });
      } else {
        setFilters({ ...filters, selectedMonth: item });
      }
    }
    if (filterType == "category") {
      if (filters.selectedCategorie == item) {
        setFilters({ ...filters, selectedCategorie: "" });
      } else {
        setFilters({ ...filters, selectedCategorie: item });
      }
    }
    if (filterType == "payment") {
      if (filters.selectedPayment == item) {
        setFilters({ ...filters, selectedPayment: "" });
      } else {
        setFilters({ ...filters, selectedPayment: item });
      }
    }
  };

  return (
    <Screen keyboard>
      <Header homeScreen />
      <View style={styles.container}>
        <View style={[styles.inputContainer, SHADOW[6]]}>
          <Ionicons name="search-outline" color={COLORS.GREY} size={20} />
          <TextInput
            simpleInput
            placeholder="Search by name or number"
            style={{ fontFamily: FONTS.regular, width: w(67) }}
          />
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => setShowFilter(true)}
          >
            <Feather
              name="sliders"
              color={COLORS.WHITE}
              size={25}
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <FlatList
            data={Array.from({ length: 7 })}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  style={[
                    styles.rowBasic,
                    styles.cardView,
                    { borderBottomWidth: index < 6 ? 0.5 : 0 },
                  ]}
                  onPress={() =>
                    navigationRef.navigate(SCREEN_NAME.TransactionDetail)
                  }
                >
                  <CustomImage
                    source={IMAGES.send}
                    style={{ height: h(4), width: w(8), marginTop: 5 }}
                    resizeMode="contain"
                  />
                  <View style={{ marginLeft: w(4) }}>
                    <View style={{ ...styles.row, width: "94%" }}>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: FONT_SIZES.small,
                          color: COLORS.BLACK,
                        }}
                      >
                        Received from
                      </Text>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: FONT_SIZES.small,
                          color: COLORS.SUCCESS,
                        }}
                      >
                        + 2500
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: FONT_SIZES.small,
                        paddingVertical: 5,
                        color: COLORS.GREY,
                      }}
                    >
                      Mr Deshmukh
                    </Text>
                    <View style={{ ...styles.row, width: "94%" }}>
                      <Text style={styles.date}>3 hours ago</Text>
                      <View style={styles.rowBasic}>
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            fontSize: FONT_SIZES.small,
                            color: COLORS.BLACK,
                          }}
                        >
                          Credited to
                        </Text>
                        <CustomImage
                          source={IMAGES.userIcon}
                          resizeMode="contain"
                          style={{
                            height: h(4),
                            width: w(8),
                            marginLeft: w(2),
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      <Modal
        isVisible={showfilter}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        onBackButtonPress={() => setShowFilter(false)}
        onSwipeComplete={() => setShowFilter(false)}
        onBackdropPress={() => setShowFilter(false)}
        backdropColor="transparent"
        statusBarTranslucent
        style={{
          flex: 1,
          marginHorizontal: 0,
          marginVertical: 0,
        }}
      >
        <View style={{ ...styles.categoryCardContainer, height: h(95) }}>
          <View style={[styles.row, styles.modalHeader]}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowFilter(false)}
            >
              <Entypo name="cross" size={20} color={COLORS.WHITE} />
            </TouchableOpacity>
            <Text style={styles.modalHeading}>Filter Plans</Text>
            <Button
              regularBtn
              title="Clear All"
              textStyle={{ fontFamily: FONTS.medium }}
              extraStyle={styles.clearBtn}
              onPress={() => {
                setFilters({
                  selectedMonth: "",
                  selectedCategorie: "",
                  selectedPayment: "",
                });
              }}
            />
          </View>
          <View
            style={{
              ...styles.row,
              paddingHorizontal: w(2),
              alignItems: "flex-start",
            }}
          >
            <View>
              <Button
                regularBtn
                title="Months"
                extraStyle={{
                  ...styles.modalBtn,
                  backgroundColor:
                    filterType == "months"
                      ? COLORS.PRIMARY_I
                      : "rgba(234, 234, 234, 1)",
                }}
                textStyle={{
                  fontFamily: FONTS.medium,
                  fontSize: FONT_SIZES.small,
                  color: filterType == "months" ? COLORS.WHITE : COLORS.BLACK,
                }}
                onPress={() => setFilterType("months")}
              />
              <Button
                regularBtn
                title="Categories"
                extraStyle={{
                  ...styles.modalBtn,
                  backgroundColor:
                    filterType == "category"
                      ? COLORS.PRIMARY_I
                      : "rgba(234, 234, 234, 1)",
                }}
                textStyle={{
                  fontFamily: FONTS.medium,
                  fontSize: FONT_SIZES.small,
                  color: filterType == "category" ? COLORS.WHITE : COLORS.BLACK,
                }}
                onPress={() => setFilterType("category")}
              />
              <Button
                regularBtn
                title="Payment Status"
                extraStyle={{
                  ...styles.modalBtn,
                  backgroundColor:
                    filterType == "payment"
                      ? COLORS.PRIMARY_I
                      : "rgba(234, 234, 234, 1)",
                }}
                textStyle={{
                  fontFamily: FONTS.medium,
                  fontSize: FONT_SIZES.small,
                  color: filterType == "payment" ? COLORS.WHITE : COLORS.BLACK,
                }}
                onPress={() => setFilterType("payment")}
              />
            </View>
            <FlatList
              data={
                filterType == "payment"
                  ? Status
                  : filterType == "category"
                    ? Categories
                    : Months
              }
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={[styles.row, styles.listView]}>
                    <Text style={styles.listTxt}>{item}</Text>
                    <MaterialCommunityIcons
                      name={
                        isSelected(item)
                          ? "checkbox-marked"
                          : "checkbox-blank-outline"
                      }
                      size={25}
                      color={COLORS.PRIMARY_I}
                      onPress={() => onSelect(item)}
                    />
                  </View>
                );
              }}
              ListFooterComponent={<View style={{ marginVertical: h(10) }} />}
            />
          </View>
          <View style={styles.modalBottomView}>
            <Button
              regularBtn
              title="Apply"
              textStyle={{ fontFamily: FONTS.medium }}
              extraStyle={styles.applyBtn}
              onPress={() => setShowFilter(false)}
            />
          </View>
        </View>
      </Modal>
    </Screen>
  );
};
