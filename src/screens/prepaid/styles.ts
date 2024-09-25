import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: h(2),
    },
    banner: {
      height: h(15),
      width: w(98),
      borderRadius: 10,
      marginTop: h(2),
      alignSelf: "center",
    },
    inputContainer: {
      backgroundColor: COLORS.WHITE,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: w(5),
      borderRadius: 10,
    },
    card: {
      backgroundColor: COLORS.WHITE,
      paddingHorizontal: w(5),
      borderRadius: 10,
      paddingVertical: h(2),
      marginTop: h(2),
    },
    cardTitle: {
      color: COLORS.BLACK,
      fontSize: FONT_SIZES.medium,
      fontFamily: FONTS.medium,
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
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      marginTop: h(0.5),
    },
    innerView: {
      alignItems: "flex-start",
      marginLeft: w(5),
      marginTop: h(2),
      flexDirection: "row",
    },
    userName: {
      color: COLORS.BLACK,
      fontSize: FONT_SIZES.small,
      fontFamily: FONTS.medium,
    },
    btn: {
      width: w(25),
      borderRadius: 10,
      height: h(3),
      marginTop: 0,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    detail: {
      color: COLORS.GREY,
      fontSize: FONT_SIZES.tiny,
    },
    contactView: {
      marginLeft: w(2),
      paddingHorizontal: w(3),
      borderBottomWidth: 0.5,
      borderBlockColor: COLORS.GREY,
      width: "95%",
      paddingBottom:5
    },
  });
