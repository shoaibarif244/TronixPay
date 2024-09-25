import {
  FlatList,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../layouts";
import { CustomImage } from "../../components";
import {
  COLORS,
  FONTS,
  FONT_SIZES,
  IMAGES,
  SCREEN_NAME,
  h,
  w,
  AntDesign,
} from "../../constants";
import { getStyles } from "./styles";
import { navigationRef } from "../../navigation/navigationUtilities";

export const TransactionHistoryScreen: React.FC = () => {
  const styles = getStyles();

  return (
    <Screen keyboard>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <View style={styles.headerView_HS}>
        <View style={styles.headerView_HS_1}>
          <View style={styles.rowBasic}>
            <TouchableOpacity onPress={() => navigationRef.goBack()}>
              <AntDesign name="arrowleft" color={COLORS.WHITE} size={25} />
            </TouchableOpacity>
            <View style={{ marginLeft: w(5) }}>
              <Text style={{ ...styles.txtName }}>Transaction History</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <FlatList
          data={Array.from({ length: 4 })}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={[
                  styles.rowBasic,
                  styles.cardView,
                  { borderBottomWidth: index < 3 ? 0.5 : 0 },
                ]}
              >
                <CustomImage
                  source={IMAGES.send}
                  style={{
                    height: h(4),
                    width: w(8),
                    marginTop: 5,
                    transform: [{ rotate: "180deg" }],
                  }}
                  resizeMode="contain"
                />
                <View style={{ marginLeft: w(4) }}>
                  <View style={{ ...styles.row, width: "94%" }}>
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: FONT_SIZES.small,
                        color: COLORS.BLACK,
                      }}
                    >
                      Paid to
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.bold,
                        fontSize: FONT_SIZES.small,
                        color: COLORS.error,
                      }}
                    >
                      - 2500
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: FONT_SIZES.small,
                      paddingVertical: 5,
                      color: COLORS.GREY,
                    }}
                  >
                    Mr Deshmukh
                  </Text>
                  <View style={{ ...styles.row, width: "94%" }}>
                    <Text style={styles.date}>3 hours ago</Text>
                    <View style={styles.rowBasic}>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: FONT_SIZES.small,
                          color: COLORS.BLACK,
                        }}
                      >
                        Debited from
                      </Text>
                      <CustomImage
                        source={IMAGES.userIcon}
                        resizeMode="contain"
                        style={{
                          height: h(4),
                          width: w(8),
                          marginLeft: w(2),
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </Screen>
  );
};
