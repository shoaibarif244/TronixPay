import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

import { SCREEN_NAME, COLORS } from "../constants";
import { navigationRef } from "./navigationUtilities";
import {
  LoginScreen,
  OTPScreen,
  ForgotScreen,
  SignupScreen,
  PrepaidPlansScreen,
  TransactionDetailScreen,
  TransactionHistoryScreen,
} from "../screens";
import { RootStackParamList } from "./types";
import BottomTab from "./BottomTab";

export function RootNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      {Platform.OS == "ios" && <SafeAreaView style={styles.topSafeArea} />}
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar backgroundColor={COLORS.PRIMARY} barStyle="light-content" />
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={SCREEN_NAME.LOGIN}
            screenOptions={{ headerShown: false, animation: "fade" }}
          >
            {/* Auth Screens */}
            {/* <Stack.Screen name={SCREEN_NAME.SPLASH} component={Splash} /> */}
            <Stack.Screen name={SCREEN_NAME.LOGIN} component={LoginScreen} />
            <Stack.Screen
              name={SCREEN_NAME.REGISTER}
              component={SignupScreen}
            />
            <Stack.Screen name={SCREEN_NAME.FORGOT} component={ForgotScreen} />
            <Stack.Screen name={SCREEN_NAME.OTP} component={OTPScreen} />
            <Stack.Screen name={SCREEN_NAME.BOTTOM_TAB} component={BottomTab} />
            <Stack.Screen
              name={SCREEN_NAME.PrePaidPlans}
              component={PrepaidPlansScreen}
            />
            <Stack.Screen
              name={SCREEN_NAME.TransactionDetail}
              component={TransactionDetailScreen}
            />
            <Stack.Screen
              name={SCREEN_NAME.TransactionHistory}
              component={TransactionHistoryScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: COLORS.PRIMARY,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});
