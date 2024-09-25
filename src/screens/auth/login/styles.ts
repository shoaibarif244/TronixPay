import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    rowCntrBtw: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    btnLoginWith: {
      width: "55%",
      alignItems: "center",
    },
    divider: {
      borderWidth: 1,
      borderColor: COLORS.UnSelected,
      height: "100%",
    },
    txtLoginWith: {
      fontSize: FONT_SIZES.regular,
      fontFamily: FONTS.bold,
      color: COLORS.WHITE,
    },
    borderLoginWith: {
      backgroundColor: COLORS.TRANSPARENT,
      height: h(0.7),
      width: w(16),
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignSelf: "center",
      marginTop: h(1),
    },
    btnForgot: {
      alignSelf: "flex-end",
      marginTop: h(1),
    },
    txtForgot: {
      fontSize: FONT_SIZES.regular,
      fontFamily: FONTS.bold,
      color: COLORS.placeholderColor,
    },
    signupView: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      marginTop: h(2),
    },
    txtAcc: {
      fontFamily: FONTS.extrabold,
      fontSize: FONT_SIZES.regular,
      color: COLORS.WHITE,
    },
    borderBottom: {
      backgroundColor: COLORS.SECONDARY,
      height: h(0.4),
      width: w(20),
      borderRadius: 20,
      alignSelf: "center",
      marginTop: h(2),
    },
  });
