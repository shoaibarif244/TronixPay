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
    txtName: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.regular,
      color: COLORS.WHITE,
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
      marginTop: h(2),
    },
    cardView: {
      alignItems: "flex-start",
      marginTop: h(2),
      borderBottomColor: COLORS.GREY,
      paddingBottom: h(2),
    },
    date: {
      fontFamily: FONTS.medium,
      fontSize: FONT_SIZES.small,
      color: COLORS.BLACK,
      backgroundColor: "rgba(1, 144, 220, 0.2)",
      paddingHorizontal: w(5),
      paddingVertical: h(1),
      borderRadius: 20,
    },
  });
