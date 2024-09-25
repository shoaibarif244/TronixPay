import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: h(2),
    },
    privacyContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: h(1),
      paddingBottom: h(5),
      marginBottom: h(4),
      borderBottomWidth: 1,
      borderColor: COLORS.inputIconColor,
    },
    txtTitle: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.medium,
      color: COLORS.TEXT,
    },
    txtDescription: {
      fontFamily: FONTS.regular,
      fontSize: FONT_SIZES.regular,
      color: COLORS.TEXT,
      marginTop: h(1),
    },
    rowCntrBtw: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    imgPrivacy: {
      height: h(4.5),
      width: h(4.5),
    },
  });
