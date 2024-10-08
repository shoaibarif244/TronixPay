import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: h(2),
    },
    headerView_HS: {
      backgroundColor: COLORS.PRIMARY,
      justifyContent: "space-between",
      shadowColor: COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 10,
    },
    headerView_HS_1: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: h(2),
      paddingTop: h(1),
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rowBasic: {
      flexDirection: "row",
      alignItems: "center",
    },
    profile: {
      height: 35,
      width: 35,
      borderRadius: 35 / 2,
      resizeMode: "contain",
    },
    userName: {
      color: COLORS.WHITE,
      fontSize: FONT_SIZES.small,
      fontFamily: FONTS.medium,
    },
    btn: {
      width: w(15),
      borderRadius: 20,
      height: h(2.5),
      marginTop: 0,
      backgroundColor: COLORS.PRIMARY_I,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: w(2),
    },
    detail: {
      color: COLORS.WHITE,
      fontSize: FONT_SIZES.tiny,
    },
    tabBar: {
      backgroundColor: COLORS.BLACK,
      width: w(100),
    },
    tabBarTxt: {
      color: COLORS.WHITE,
      fontFamily: FONTS.medium,
      fontSize: FONT_SIZES.regular,
      paddingTop: h(2),
      paddingHorizontal: w(3),
    },
    borderTabBarLine: {
      backgroundColor: COLORS.TRANSPARENT,
      height: h(0.7),
      width: "100%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignSelf: "center",
      marginTop: h(1),
    },
    categoryBtn: {
      backgroundColor: COLORS.PRIMARY_I,
      height: "100%",
      paddingHorizontal: w(2),
      alignItems: "center",
    },
    inputContainer: {
      backgroundColor: COLORS.WHITE,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: w(5),
      borderRadius: 10,
      width: "87%",
    },
    filterBtn: {
      backgroundColor: COLORS.SECONDARY,
      height: h(4.5),
      width: w(9),
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "center",
    },
    card: {
      ...SHADOW[6],
      backgroundColor: COLORS.WHITE,
      paddingVertical: h(1.5),
      flexDirection: "row",
      alignItems: "center",
      marginTop: h(2),
      borderRadius: 10,
      marginHorizontal: w(5),
      paddingRight: w(2),
    },
    cardLine: {
      backgroundColor: COLORS.SECONDARY,
      height: "100%",
      width: w(2),
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      alignSelf: "center",
    },
    divider: {
      width: 1,
      backgroundColor: COLORS.GREY,
      height: "100%",
    },
    cardSmallBtn: {
      width: w(17),
      borderRadius: 8,
      height: h(2.5),
      marginTop: 0,
      backgroundColor: COLORS.PRIMARY_I,
      alignItems: "center",
      justifyContent: "center",
    },
    cardMainTxt: {
      color: COLORS.BLACK,
      fontSize: FONT_SIZES.regular,
      fontFamily: FONTS.medium,
      marginTop: h(1),
    },
    cardTxt: {
      color: COLORS.GREY,
      fontSize: 12,
      fontFamily: FONTS.medium,
    },
    cardBtn: {
      width: w(60),
      borderRadius: 12,
      height: h(4),
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      padding: 0,
      marginTop: h(1.5),
    },
    categoryCardContainer: {
      backgroundColor: COLORS.WHITE,
      height: h(95),
      width: w(100),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      position: "absolute",
      bottom: 0,
    },
    modalHeader: {
      backgroundColor: "rgba(67, 73, 81, 1)",
      paddingHorizontal: w(2),
      paddingVertical: h(1.5),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    modalHeading: {
      color: COLORS.WHITE,
      fontSize: FONT_SIZES.medium,
      fontFamily: FONTS.medium,
    },
    closeBtn: {
      backgroundColor: COLORS.SECONDARY,
      height: 25,
      width: 25,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    categoriesBtn: {
      paddingVertical: h(2),
      paddingHorizontal: w(2),
      borderBottomWidth: 0.5,
      borderBottomColor: COLORS.GREY,
    },
    categoriesTxt: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.medium,
    },
    filterView: {
      backgroundColor: COLORS.SECONDARY,
      height: h(2.5),
      width: w(5),
      alignItems: "center",
      borderRadius: 5,
      justifyContent: "center",
    },
    btnList: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
    },
    borderBtn: {
      borderWidth: 1,
      backgroundColor: "",
      padding: 0,
      paddingHorizontal: w(4),
      width: "auto",
      paddingVertical: h(1),
      borderRadius: 20,
      shadowColor: "transparent",
      marginRight: w(3),
      marginTop: h(2),
    },
    borderBtnTxt: {
      fontSize: FONT_SIZES.tiny,
      fontFamily: FONTS.regular,
      color: COLORS.GREY,
    },
    modalBtn: {
      backgroundColor: COLORS.PRIMARY,
      borderWidth: 1,
      borderColor: COLORS.BLACK,
      width: w(35),
      shadowColor: "transparent",
    },
  });
