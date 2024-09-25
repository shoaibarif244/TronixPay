import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: h(2),
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
    card: {
      backgroundColor: COLORS.WHITE,
      paddingHorizontal: w(5),
      borderRadius: 10,
      paddingVertical: h(2),
      ...SHADOW[6],
    },
    txtBtnView: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.regular,
      color: COLORS.BLACK,
      backgroundColor: "rgba(1, 144, 220, 0.2)",
      paddingHorizontal: w(7),
      paddingVertical: h(0.5),
      borderRadius: 20,
    },
    headerView_HS: {
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
    txtName: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.regular,
      color: COLORS.WHITE,
    },
    cardTxt: {
      color: COLORS.BLACK,
      fontFamily: FONTS.regular,
      fontSize: FONT_SIZES.regular,
    },
    IDBtnTxt: {
      fontFamily: FONTS.regular,
      fontSize: FONT_SIZES.small,
      color: COLORS.BLACK,
    },
    IDBtn: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(186, 186, 186, 0.2)",
      paddingVertical: h(0.5),
      paddingLeft: w(5),
      paddingRight: w(2),
      borderRadius: 20,
    },
    line: {
      height: 0.5,
      backgroundColor: COLORS.GREY,
      marginVertical: h(2),
    },
    balanceBtn: {
      marginTop: 0,
      padding: 0,
      width: w(28),
      paddingVertical: h(0.5),
      borderRadius: 20,
    },
    historyBtn: {
      height: h(3.5),
      width: w(7),
      backgroundColor: COLORS.PRIMARY,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    sendTxt: {
      color: COLORS.PRIMARY,
      fontSize: FONT_SIZES.small,
      fontFamily: FONTS.bold,
      paddingTop: h(1),
    },
    noteCard: {
      backgroundColor: COLORS.WHITE,
      paddingRight: w(5),
      borderRadius: 10,
      marginBottom: h(2),
      paddingVertical: h(2),
      flexDirection: "row",
      alignItems: "center",
      ...SHADOW[6],
    },
    cardLine: {
      backgroundColor: COLORS.SECONDARY,
      height: "100%",
      width: w(1.2),
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      alignSelf: "center",
    },
  });
