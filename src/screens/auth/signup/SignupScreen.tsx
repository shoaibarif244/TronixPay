import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { getStyles } from "./styles";
import { AuthLayout } from "../../../layouts";
import { TextInput, Button, Modals } from "../../../components";
import { navigationRef } from "../../../navigation/navigationUtilities";
import {
  COLORS,
  FONT_SIZES,
  FontAwesome5,
  SCREEN_NAME,
  w,
} from "../../../constants";

export const SignupScreen: React.FC = () => {
  const styles = getStyles();
  const [isCongratsModal, setIsCongratsModal] = useState(false);
  const [isTerms, setIsTerms] = useState(false);

  const handleLoginNow = () => {
    console.log("first");
    setIsCongratsModal(false);
    navigationRef.reset({
      index: 0,
      routes: [{ name: SCREEN_NAME.LOGIN }],
    });
  };
  return (
    <AuthLayout
      title="Registration"
      description="Please fill out the below details to register your account."
      darkMode={false}
    >
      <Modals
        congratsModal
        visible={isCongratsModal}
        handleLoginNow={handleLoginNow}
      />

      <View style={styles.registerIconView}>
        <FontAwesome5
          name="user-edit"
          size={FONT_SIZES.extraLarge}
          color={COLORS.PRIMARY_I}
        />
      </View>
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <TextInput
            simpleInput
            label="Full Name"
            placeholder="Enter Full name"
          />

          <View style={styles.rowCntrBtw}>
            <View style={{ width: "49%" }}>
              <TextInput
                simpleInput
                // label="Full Name"
                placeholder="Member Type"
              />
            </View>
            <View style={{ width: "49%" }}>
              <TextInput simpleInput label="Referral ID" placeholder="100000" />
            </View>
          </View>

          <View style={styles.rowCntrBtw}>
            <View style={{ width: "49%" }}>
              <TextInput
                simpleInput
                label="Mobile number"
                placeholder="Enter mobile number"
              />
            </View>
            <View style={{ width: "49%" }}>
              <TextInput
                simpleInput
                label="Location"
                placeholder="Enter location"
              />
            </View>
          </View>

          <TextInput
            simpleInput
            label="Email ID"
            placeholder="Enter email ID"
          />
          <View style={styles.termsView}>
            <BouncyCheckbox
              disableText
              // @ts-ignore
              disableBuiltInState
              isChecked={isTerms}
              size={FONT_SIZES.medium}
              unfillColor={COLORS.error}
              fillColor={COLORS.PRIMARY_I}
              iconStyle={styles.innerIconStyle}
              onPress={(isChecked: boolean) => setIsTerms(!isTerms)}
              innerIconStyle={[
                styles.innerIconStyle,
                {
                  backgroundColor: isTerms ? COLORS.PRIMARY_I : COLORS.WHITE,
                },
              ]}
            />
            <Text style={styles.txtTerms}>I agree with Terms & Conditions</Text>
          </View>
          <Button
            loading={false}
            title={"Submit"}
            regularBtn
            onPress={() => setIsCongratsModal(true)}
          />

          <View style={styles.signupView}>
            <Text style={styles.txtAcc}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigationRef.goBack()}>
              <Text
                style={[
                  styles.txtAcc,
                  { marginLeft: w(2), color: COLORS.SECONDARY },
                ]}
              >
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderBottom} />
        </View>
      </KeyboardAwareScrollView>
    </AuthLayout>
  );
};
