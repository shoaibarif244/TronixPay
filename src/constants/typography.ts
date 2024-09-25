import { RFPercentage } from "react-native-responsive-fontsize";

const FONTS = {
  thin: "Roboto-Thin",
  light: "Roboto-Light",
  regular: "Roboto-Regular",
  regular_italic: "Roboto-Italic",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
  extrabold: "Roboto-Black",
  interBold: "Inter-Bold",
  interExtraBold: "Inter-ExtraBold",
  interLight: "Inter-Light",
  interMedium: "Inter-Medium",
  interRegular: "Inter-Regular",
  interSemiBold: "Inter-SemiBold",
  interThin: "Inter-Thin",
  poppinsBold: "Poppins-Bold",
  poppinsExtraBold: "Poppins-ExtraBold",
  poppinsLight: "Poppins-Light",
  poppinsMedium: "Poppins-Medium",
  poppinsRegular: "Poppins-Regular",
  poppinsSemiBold: "Poppins-SemiBold",
  poppinsThin: "Poppins-Thin",
};

const FONT_SIZES = {
  tiny: RFPercentage(1.3),
  small: RFPercentage(1.6),
  regular: RFPercentage(1.9),
  medium: RFPercentage(2.4),
  large: RFPercentage(2.8),
  extraLarge: RFPercentage(3.6),
};

export { FONTS, FONT_SIZES };
