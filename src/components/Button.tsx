import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { BarIndicator } from "react-native-indicators";
import { COLORS, FONTS, FONT_SIZES, h } from "../constants";
import LinearGradient from "react-native-linear-gradient";

interface Props extends TouchableHighlightProps {
  title?: string;
  regularBtn?: boolean;
  loading?: boolean;
  extraStyle?: ViewStyle;
  isGradient?: boolean;
  textStyle?: TextStyle;
  gradiantColor?: (string | number)[];
}

const Button: React.FC<Props> = ({
  title,
  regularBtn,
  loading,
  extraStyle,
  isGradient,
  textStyle,
  gradiantColor,
  ...rest
}) => {
  return (
    <>
      {regularBtn ? (
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={COLORS.PRIMARY}
          style={[styles.btnView, extraStyle]}
          disabled={loading}
          {...rest}
        >
          <View style={styles.row}>
            {loading ? (
              <BarIndicator
                count={6}
                color={COLORS.WHITE}
                size={FONT_SIZES.large}
              />
            ) : (
              <Text style={[styles.txtSignIn, textStyle]}>{title}</Text>
            )}
          </View>
        </TouchableHighlight>
      ) : isGradient ? (
        <TouchableHighlight activeOpacity={1} disabled={loading} {...rest}>
          <LinearGradient
            colors={
              gradiantColor ?? ["rgba(0, 31, 85, 1)", "rgba(1, 144, 220, 1)"]
            }
            start={{ x: 0, y: 1 }}
            style={[styles.btnView, extraStyle]}
          >
            <View style={styles.row}>
              {loading ? (
                <BarIndicator
                  count={6}
                  color={COLORS.WHITE}
                  size={FONT_SIZES.large}
                />
              ) : (
                <Text style={[styles.txtSignIn, textStyle]}>{title}</Text>
              )}
            </View>
          </LinearGradient>
        </TouchableHighlight>
      ) : null}
    </>
  );
};

export { Button };

const styles = StyleSheet.create({
  btnView: {
    width: "70%",
    marginTop: h(3),
    borderRadius: 10,
    padding: h("1.6%"),
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_I,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  txtSignIn: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.regular,
    color: COLORS.WHITE,
  },
  row: {
    flexDirection: "row",
  },
});
