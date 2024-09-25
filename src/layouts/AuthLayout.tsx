import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { COLORS, FONTS, FONT_SIZES, IMAGES, h } from "../constants";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  darkMode?: boolean;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  description,
  children,
  darkMode = false,
}) => {
  const styles = getStyles(darkMode);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.authBG}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.titleView}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtDesc}>{description}</Text>
        </View>
        <View style={styles.formContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
};

const getStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY,
    },
    imageBackground: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      flex: 1,
    },
    titleView: {
      marginTop: h(8),
      alignItems: "center",
    },
    txtTitle: {
      fontSize: FONT_SIZES.large,
      fontFamily: FONTS.bold,
      color: COLORS.WHITE,
    },
    txtDesc: {
      fontSize: FONT_SIZES.regular,
      fontFamily: FONTS.medium,
      color: COLORS.WHITE,
      textAlign: "center",
    },
    formContainer: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY,
      margin: h(2),
      borderRadius: 20,
      padding: h(2),
      marginTop: h(3),
      shadowColor: COLORS.BLACK,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 11,
    },
  });
