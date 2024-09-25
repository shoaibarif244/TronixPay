import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ModalProps,
  SafeAreaView,
} from "react-native";
import { BarIndicator, WaveIndicator } from "react-native-indicators";

import { CustomImage, Button } from "./index";
import { COLORS, FONTS, FONT_SIZES, h, IMAGES, w } from "../constants";

interface Props extends ModalProps {
  loaderIndicator?: boolean;
  blockerModal?: boolean;
  congratsModal?: boolean;
  handleLoginNow?: () => void;
  title?: string;
  description?: string;
}

const Modals: React.FC<Props> = ({
  loaderIndicator,
  blockerModal,
  congratsModal,
  description,
  title,
  visible = false,
  handleLoginNow,
}) => {
  return (
    <>
      {loaderIndicator === true ? (
        <Modal visible={visible} transparent>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.modalWrap}>
              <View style={{ height: h("12%") }}>
                {/* <WaveIndicator size={h("12%")} color={COLORS.PRIMARY} /> */}
                <BarIndicator count={6} color={COLORS.PRIMARY} size={h("5%")} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      ) : blockerModal === true ? (
        <Modal visible={visible} transparent>
          <View style={styles.blockerModal} />
        </Modal>
      ) : congratsModal ? (
        <Modal visible={visible} transparent>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.centeredView}>
              <View style={[styles.congratsModalView]}>
                <View style={{ marginTop: h(2) }}>
                  <CustomImage
                    source={IMAGES.congrats}
                    style={styles.imgCongrats}
                    resizeMode="contain"
                  />
                  <Text style={styles.txtTitle}>Congratulations !</Text>
                  <Text style={styles.txtDesc}>
                    Your password has been send successfully to your registered
                    mobile number
                  </Text>
                </View>
                <Button
                  regularBtn
                  loading={false}
                  title={"Login Now"}
                  onPress={handleLoginNow}
                />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      ) : null}
    </>
  );
};

export { Modals };

const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.57)",
  },
  blockerModal: { flex: 1, backgroundColor: "rgba(0,0,0,0)" },
  modalView: {
    backgroundColor: "white",
    // borderRadius: 10,
    borderRadius: 20,
    width: w("85%"),
    height: h("55%"),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_I,
  },
  congratsModalView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    width: w("92%"),
    height: h("55%"),
    padding: h(2),
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_I,
  },
  imgCongrats: {
    width: w(50),
    height: w(45),
    alignSelf: "center",
  },
  txtTitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.BLACK,
    fontFamily: FONTS.bold,
    textAlign: "center",
    marginTop: h(2),
  },
  txtDesc: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.BLACK,
    fontFamily: FONTS.regular,
    textAlign: "center",
    marginHorizontal: w("5%"),
    marginBottom: h(3),
  },
});
