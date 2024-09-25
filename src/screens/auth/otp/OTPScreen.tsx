import React, { useEffect, useState } from "react";
import OTPTextView from "react-native-otp-textinput";
import { Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getStyles } from "./styles";
import { AuthLayout } from "../../../layouts";
import { COLORS, IMAGES, h } from "../../../constants";
import { CustomImage, Button } from "../../../components";
import { RootStackParamList } from "../../../navigation/types";
import { navigationRef } from "../../../navigation/navigationUtilities";

type OTPRouteProp = RouteProp<RootStackParamList, "OTP">;

export const OTPScreen: React.FC = () => {
  const styles = getStyles();

  const {
    params: { for: otpType },
  } = useRoute<OTPRouteProp>();

  const [otpInput, setOtpInput] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(60);

  const handlePressResend = () => {
    setIsDisabled(true);
    setRemainingSeconds(60);
    setTimeout(() => {
      setIsDisabled(false);
      setRemainingSeconds(0);
    }, 60000); // 60 seconds
  };
  useEffect(() => {
    let intervalId: any;
    if (remainingSeconds > 0) {
      intervalId = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }
    return () => clearInterval(intervalId);
  }, [remainingSeconds]);
  const formatSeconds = (seconds: number) => {
    return seconds < 10 ? `0${seconds}` : seconds;
  };
  return (
    <AuthLayout
      title={otpType == "verify" ? "Verify Mobile Number" : "Verify"}
      description={
        otpType == "verify"
          ? "We have sent an OTP to your mobile number"
          : "Please enter the code we sent you to your mobile number"
      }
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
              source={IMAGES.otp}
              style={styles.imgOtp}
              resizeMode="contain"
            />
          </View>
          <OTPTextView
            autoFocus
            inputCount={4}
            inputCellLength={1}
            tintColor={COLORS.PRIMARY_I}
            offTintColor={COLORS.TRANSPARENT}
            textInputStyle={styles.roundedTextInput}
            containerStyle={styles.textInputContainer}
          />
          <TouchableOpacity
            style={{ marginTop: h("4%"), alignSelf: "center" }}
            disabled={isDisabled}
            onPress={handlePressResend}
          >
            <Text
              style={[
                styles.txtResend,
                {
                  color: isDisabled ? COLORS.placeholderColor : COLORS.WHITE,
                },
              ]}
            >
              Resend{" "}
              {remainingSeconds > 0
                ? `in : 00:${formatSeconds(remainingSeconds)}`
                : ""}
            </Text>
          </TouchableOpacity>
          <Button
            loading={false}
            title={otpType == "verify" ? "Verify" : "Submit"}
            regularBtn
            onPress={() => navigationRef.goBack()}
          />
          <View style={styles.borderBottom} />
        </View>
      </KeyboardAwareScrollView>
    </AuthLayout>
  );
};
