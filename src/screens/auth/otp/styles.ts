import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, FONTS, h, SHADOW, w } from "../../../constants";

export const getStyles = (darkMode = false) =>
  StyleSheet.create({
    forgotImgView: { alignItems: "center", marginBottom: h(4) },
    imgOtp: {
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
    textInputContainer: {
      marginBottom: h(2),
      shadowColor: COLORS.PRIMARY_I,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 4,
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 4,
      backgroundColor: COLORS.WHITE,
    },
    txtResend: {
      fontFamily: FONTS.bold,
      fontSize: FONT_SIZES.small,
    },
  });
