import React, { ReactNode } from "react";
import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import { COLORS } from "../constants";

interface ScreenProps extends KeyboardAwareScrollViewProps {
  children: ReactNode;
  keyboard?: boolean;
}

export const Screen = ({ children, keyboard, ...rest }: ScreenProps) => {
  const content = keyboard ? (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
      {...rest}
    >
      <View style={styles.screen}>{children}</View>
    </KeyboardAwareScrollView>
  ) : (
    <View style={styles.screen}>{children}</View>
  );

  if (Platform.OS === "ios") {
    return <SafeAreaView style={styles.screen}>{content}</SafeAreaView>;
  } else {
    return <View style={styles.screen}>{content}</View>;
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.WHITE_I,
  },
});
