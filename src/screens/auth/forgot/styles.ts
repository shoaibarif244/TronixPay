import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    forgotImgView: { alignItems: "center", marginBottom: h(1) },
    imgForgotPassword: {
      width: h(10),
      height: h(10),
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
