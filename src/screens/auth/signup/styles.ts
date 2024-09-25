import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    registerIconView: {
      backgroundColor: COLORS.WHITE,
      alignSelf: "center",
      borderRadius: 200,
      alignItems: "center",
      justifyContent: "center",
      height: h(7.5),
      width: h(7.5),
      marginTop: -h(4),
    },
    rowCntrBtw: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    termsView: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: h(2),
      // width: w("80%"),
      flexWrap: "wrap",
    },
    txtTerms: {
      marginLeft: w(2),
      fontFamily: FONTS.medium,
      fontSize: FONT_SIZES.regular,
      color: COLORS.WHITE,
    },
    btnLoginWith: {
      width: "55%",
      alignItems: "center",
    },
    innerIconStyle: {
      borderColor: COLORS.PRIMARY_I,
      borderRadius: 5,
      borderWidth: 2,
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
