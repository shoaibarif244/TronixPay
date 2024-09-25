import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput as RN_TextInput,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  COLORS,
  FONTS,
  FONT_SIZES,
  h,
  w,
  MaterialCommunityIcons,
} from "../constants";

interface Props extends TextInputProps {
  simpleInput?: boolean;
  passwordInput?: boolean;
  textAreaInput?: boolean;
  label?: string;
}

const TextInput: React.FC<Props> = ({
  simpleInput,
  passwordInput,
  textAreaInput,
  style,
  onChangeText,
  editable,
  value,
  multiline,
  label,
  ...rest
}: Props) => {
  const [isPassVisible, setIsPassVisible] = useState(true);

  return (
    <>
      {simpleInput ? (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <RN_TextInput
            style={[styles.input, style]}
            placeholderTextColor={COLORS.placeholderColor}
            onChangeText={onChangeText}
            value={value}
            editable={editable}
            multiline={multiline}
            cursorColor={COLORS.PRIMARY}
            {...rest}
          />
        </View>
      ) : passwordInput ? (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <View style={[styles.inputPassword, style]}>
            <RN_TextInput
              style={[styles.input, style, { flex: 1 }]}
              placeholderTextColor={COLORS.placeholderColor}
              onChangeText={onChangeText}
              value={value}
              editable={editable}
              secureTextEntry={isPassVisible}
              cursorColor={COLORS.PRIMARY}
              {...rest}
            />
            <TouchableOpacity onPress={() => setIsPassVisible(!isPassVisible)}>
              <MaterialCommunityIcons
                name={isPassVisible ? "eye-off" : "eye"}
                color={COLORS.BLACK}
                size={FONT_SIZES.large}
                style={{ marginRight: w("3%") }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : textAreaInput ? (
        <RN_TextInput
          style={[
            styles.textArea,
            styles.input,
            { fontFamily: FONTS.regular },
            style,
          ]}
          underlineColorAndroid="transparent"
          placeholder={"Type here..."}
          placeholderTextColor={COLORS.placeholderColor}
          multiline
          numberOfLines={4}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          cursorColor={COLORS.PRIMARY}
          {...rest}
        />
      ) : null}
    </>
  );
};

export { TextInput };

const styles = StyleSheet.create({
  label: {
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.medium,
    color: COLORS.WHITE,
    marginTop: h(1.5),
    marginBottom: h(1),
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    color: COLORS.BLACK,
    fontWeight: "400",
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    textAlignVertical: "center",
    padding: h("1.7%"),
  },
  inputPassword: {
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textArea: {
    height: h("10%"),
    backgroundColor: COLORS.WHITE,
    textAlignVertical: "top",
    // borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 10,
    padding: h("1.7%"),
  },
});
