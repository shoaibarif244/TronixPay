import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getStyles } from "./styles";
import { AuthLayout } from "../../../layouts";
import { IMAGES, SCREEN_NAME } from "../../../constants";
import { CustomImage, TextInput, Button } from "../../../components";
import { navigationRef } from "../../../navigation/navigationUtilities";

export const ForgotScreen: React.FC = () => {
  const styles = getStyles();

  return (
    <AuthLayout
      title="Forget Password"
      description="Enter your Member Id or Mobile number"
      darkMode={false}
    >
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <View style={styles.forgotImgView}>
            <CustomImage
              source={IMAGES.forgotPassword}
              style={styles.imgForgotPassword}
              resizeMode="contain"
            />
          </View>
          <TextInput
            simpleInput
            label="Member ID / Mobile No"
            placeholder="Enter member id or mobile number"
          />
          <Button
            loading={false}
            title={"Submit"}
            regularBtn
            onPress={() =>
              navigationRef.navigate(SCREEN_NAME.OTP, { for: "forgot" })
            }
          />
          <View style={styles.borderBottom} />
        </View>
      </KeyboardAwareScrollView>
    </AuthLayout>
  );
};
