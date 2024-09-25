import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: h(2),
    },
    sliderContainer: {
      // height: h("24%"),
      // width: w("100%"),
    },
    caroselImageContainerStyle: {
      borderRadius: 20,
      // overflow: "hidden",
      width: w(100),
      marginRight: 10,
    },
    caroselImageStyle: {
      width: w(91),
      height: h(15),
      resizeMode: "contain",
      borderRadius: 10,
    },
    inActiveIndicatorStyle: {
      backgroundColor: COLORS.inputIconColor,
      height: h(1.5),
      width: h(1.5),
    },
    activeIndicatorStyle: {
      backgroundColor: COLORS.PRIMARY_I,
      height: h(1),
      width: h(3),
    },
    indicatorContainerStyle: { top: h(4) },
    txtLabel: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.regular,
      color: COLORS.BLACK,
    },
    rowCntrBtw: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    transferIconContainer: {
      alignItems: "center",
      marginTop: h(2),
      width: "25%",
      paddingHorizontal: 2,
    },
    transferIcon: {
      backgroundColor: COLORS.PRIMARY,
      padding: h(1.8),
      borderRadius: 100,
    },
    txtLabel_I: {
      fontFamily: FONTS.poppinsMedium,
      fontSize: FONT_SIZES.small,
      color: COLORS.BLACK,
      marginTop: h(0.6),
      textAlign: "center",
    },
    imgTransfer: {
      height: h(3.2),
      width: h(3.2),
    },
    imgCardBgContainer: {
      width: "31%",
      shadowColor: COLORS.PRIMARY,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    imgCardBg: {
      height: h(12),
      width: "100%",
      justifyContent: "center",
    },
    imgCard: {
      height: h(4),
      width: h(4),
    },
    txtOff: {
      fontFamily: FONTS.poppinsBold,
      fontSize: FONT_SIZES.small,
      color: COLORS.BLACK,
      marginTop: h(0.6),
      textAlign: "center",
    },
  });
