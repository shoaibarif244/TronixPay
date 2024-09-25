import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getStyles } from "./styles";
import { AuthLayout } from "../../../layouts";
import { TextInput, Button } from "../../../components";
import { COLORS, SCREEN_NAME, w } from "../../../constants";
import { navigationRef } from "../../../navigation/navigationUtilities";

type LoginMethod = "password" | "otp";

export const LoginScreen: React.FC = () => {
  const styles = getStyles();
  const [selectedLoginMethod, setSelectedLoginMethod] =
    useState<LoginMethod>("password");

  const handlePressLoginMethod = (method: LoginMethod) => {
    setSelectedLoginMethod(method);
  };

  return (
    <AuthLayout
      title="Welcome to Login"
      description="Please fill out the below details to login to your account."
      darkMode={false}
    >
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <View style={styles.rowCntrBtw}>
            <TouchableOpacity
              onPress={() => handlePressLoginMethod("password")}
              style={styles.btnLoginWith}
              activeOpacity={0.8}
            >
              <Text style={styles.txtLoginWith}>Login with Password</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity
              onPress={() => handlePressLoginMethod("otp")}
              style={[styles.btnLoginWith, { width: "45%" }]}
              activeOpacity={0.8}
            >
              <Text style={styles.txtLoginWith}>Login with OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowCntrBtw}>
            <View style={{ width: "55%" }}>
              <View
                style={[
                  styles.borderLoginWith,
                  selectedLoginMethod === "password" && {
                    backgroundColor: COLORS.SECONDARY,
                  },
                ]}
              />
            </View>
            <View style={{ width: "45%" }}>
              <View
                style={[
                  styles.borderLoginWith,
                  selectedLoginMethod === "otp" && {
                    backgroundColor: COLORS.SECONDARY,
                  },
                ]}
              />
            </View>
          </View>
          {selectedLoginMethod === "password" ? (
            <>
              <TextInput
                simpleInput
                label="Username"
                placeholder="Enter username or mobile number"
              />
              <TextInput
                passwordInput
                label="Password"
                placeholder="● ● ● ● ● ● ● ●"
              />
              <TouchableOpacity
                style={styles.btnForgot}
                onPress={() => navigationRef.navigate(SCREEN_NAME.FORGOT)}
              >
                <Text style={styles.txtForgot}>Forget password?</Text>
              </TouchableOpacity>
              <TextInput
                simpleInput
                label="Security Code"
                placeholder="Enter given security code"
              />
            </>
          ) : (
            <>
              <TextInput
                simpleInput
                label="Mobile number"
                placeholder="Enter mobile number"
              />
            </>
          )}
          <Button
            loading={false}
            title={
              selectedLoginMethod === "password" ? "Login" : "Generate OTP"
            }
            regularBtn
            onPress={() =>
              selectedLoginMethod === "password"
                ? navigationRef.navigate(SCREEN_NAME.BOTTOM_TAB)
                : navigationRef.navigate(SCREEN_NAME.OTP, { for: "verify" })
            }
          />

          <View style={styles.signupView}>
            <Text style={styles.txtAcc}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigationRef.navigate(SCREEN_NAME.REGISTER)}
            >
              <Text
                style={[
                  styles.txtAcc,
                  { marginLeft: w(2), color: COLORS.SECONDARY },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderBottom} />
        </View>
      </KeyboardAwareScrollView>
    </AuthLayout>
  );
};
