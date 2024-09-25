import {
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Screen } from "../../layouts";
import { Button, CustomImage } from "../../components";
import {
  AntDesign,
  COLORS,
  FONTS,
  FONT_SIZES,
  Fontisto,
  IMAGES,
  Ionicons,
  MaterialCommunityIcons,
  SCREEN_NAME,
  h,
  w,
} from "../../constants";
import { getStyles } from "./styles";
import { navigationRef } from "../../navigation/navigationUtilities";

export const TransactionDetailScreen: React.FC = () => {
  const styles = getStyles();
  const transactionStatus = "failed";

  return (
    <Screen keyboard>
      <StatusBar
        backgroundColor={
          transactionStatus == "failed"
            ? "rgba(189, 65, 57, 1)"
            : "rgba(27, 135, 77, 1)"
        }
      />
      <View
        style={{
          ...styles.headerView_HS,
          backgroundColor:
            transactionStatus == "failed"
              ? "rgba(213, 75, 64, 1)"
              : "rgba(32, 162, 92, 1)",
        }}
      >
        <View style={styles.headerView_HS_1}>
          <View style={styles.rowBasic}>
            <TouchableOpacity onPress={() => navigationRef.goBack()}>
              <AntDesign name="arrowleft" color={COLORS.WHITE} size={25} />
            </TouchableOpacity>
            <View style={{ marginLeft: w(5) }}>
              <Text style={{ ...styles.txtName }}>
                {transactionStatus == "failed"
                  ? "Transaction Failed"
                  : `Transaction Successful`}
              </Text>
              <Text
                style={{
                  ...styles.txtName,
                  fontSize: FONT_SIZES.small,
                  fontFamily: FONTS.regular,
                  marginTop: h(1),
                }}
              >
                0:06 pm on 02 Dec 2023
              </Text>
            </View>
          </View>
          <Fontisto name="share" color={COLORS.WHITE} size={20} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.noteCard}>
          <View style={styles.cardLine} />
          <View style={{ alignSelf: "center", alignItems: "center" }}>
            <Text
              style={{
                ...styles.cardTxt,
                textAlign: "center",
                paddingHorizontal: w(5),
                fontSize: FONT_SIZES.small,
              }}
            >{`There's atechnical issue at your bank. Please try after sometime.`}</Text>
            <Text
              style={{
                ...styles.cardTxt,
                textAlign: "center",
                paddingHorizontal: w(5),
                fontSize: FONT_SIZES.small,
                color: COLORS.SECONDARY,
                paddingTop: h(1),
                fontFamily: FONTS.medium,
              }}
            >
              Note:{" "}
              <Text style={{ color: COLORS.BLACK, fontFamily: FONTS.regular }}>
                No money has left your account for this payment.
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              ...styles.txtName,
              color: COLORS.BLACK,
              marginBottom: h(2),
            }}
          >
            Paid to
          </Text>
          <View style={{ ...styles.row, alignItems: "flex-start" }}>
            <CustomImage
              source={IMAGES.userIcon}
              style={{ height: h(6), width: w(12) }}
            />
            <View style={{ width: w(43) }}>
              <Text
                style={{
                  ...styles.txtName,
                  fontFamily: FONTS.medium,
                  color: COLORS.BLACK,
                }}
              >
                PATANJALI STORE
              </Text>
              <Text
                style={{
                  ...styles.txtName,
                  fontFamily: FONTS.regular,
                  fontSize: FONT_SIZES.small,
                  color: COLORS.GREY,
                  paddingTop: 5,
                }}
              >
                877834o3@abl
              </Text>
            </View>
            <Text style={styles.txtBtnView}>70</Text>
          </View>
          <View style={{ ...styles.row, marginTop: h(2) }}>
            <Text style={styles.cardTxt}>Transaction ID</Text>
            <Pressable style={styles.IDBtn}>
              <Text style={styles.IDBtnTxt}>T73827b8973487438</Text>
              <CustomImage
                source={IMAGES.pages}
                style={{ height: h(2.5), width: w(5), marginLeft: w(5) }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <Text style={styles.cardTxt}>Debited from</Text>
            <Button
              title="Check Balance"
              regularBtn
              textStyle={{
                fontSize: FONT_SIZES.small,
                fontFamily: FONTS.medium,
              }}
              extraStyle={styles.balanceBtn}
            />
          </View>
          <View style={{ ...styles.rowBasic, paddingHorizontal: w(5) }}>
            <CustomImage
              source={IMAGES.sbiLogo}
              resizeMode="contain"
              style={{ height: h(4), width: w(8) }}
            />
            <Text style={{ ...styles.cardTxt, marginLeft: w(5) }}>
              ********1094
            </Text>
          </View>
          <Pressable style={{ ...styles.IDBtn, alignSelf: "center" }}>
            <Text style={styles.IDBtnTxt}>UTR: b8973487438</Text>
            <CustomImage
              source={IMAGES.pages}
              style={{ height: h(2.5), width: w(10), marginLeft: w(5) }}
              resizeMode="contain"
            />
          </Pressable>
          <View style={styles.line} />
          <View style={{ ...styles.row, width: w(40), alignSelf: "center" }}>
            <Pressable style={{ alignItems: "center" }}>
              <CustomImage
                source={IMAGES.send}
                style={{
                  height: h(3.5),
                  width: w(7),
                  transform: [{ rotate: "180deg" }],
                }}
                resizeMode="contain"
              />
              <Text style={styles.sendTxt}>Send Again</Text>
            </Pressable>
            <Pressable
              style={{ alignItems: "center" }}
              onPress={() =>
                navigationRef.navigate(SCREEN_NAME.TransactionHistory)
              }
            >
              <View style={styles.historyBtn}>
                <MaterialCommunityIcons
                  name="arrow-expand"
                  color={COLORS.PRIMARY_I}
                  size={15}
                  style={{ transform: [{ rotate: "45deg" }] }}
                />
              </View>
              <Text style={styles.sendTxt}>View history</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ ...styles.card, marginTop: h(2) }}>
          <View style={styles.row}>
            <View style={styles.rowBasic}>
              <CustomImage
                source={IMAGES.customerSupport}
                style={{ height: h(3), width: w(6) }}
                resizeMode="contain"
              />
              <Text
                style={{
                  ...styles.txtName,
                  color: COLORS.BLACK,
                  fontSize: FONT_SIZES.regular,
                  fontFamily: FONTS.medium,
                  marginLeft: w(3),
                }}
              >
                Contact tronixpay support
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-sharp"
              size={20}
              color={COLORS.BLACK}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
