import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  Text,
  View,
  Image,
} from "react-native";
import { COLORS, FONTS, FONT_SIZES, h, w, IMAGES, Entypo } from "../constants";
import { CustomImage, EdgeMarker } from "./index";

interface Props extends ViewProps {
  title?: string;
  withBackBtn?: boolean;
  onlyTitle?: boolean;
  homeScreen?: boolean;
  showBalance?: boolean;
  regularHeader?: boolean;
  removeBorderRadius?: boolean;
  thirdElement?: React.ComponentElement<any, any>;
  onBackPress?: () => void;
  backIcon?: any;
}

const Header: React.FC<Props> = ({
  title,
  withBackBtn = true,
  showBalance,
  onlyTitle,
  homeScreen,
  thirdElement,
  onBackPress,
  regularHeader,
  removeBorderRadius,
  backIcon,
  ...rest
}) => {
  return (
    <>
      {homeScreen ? (
        <View style={styles.headerView_HS}>
          <View style={styles.headerView_HS_1}>
            <View style={[styles.rowCntrBtw]}>
              <CustomImage
                source={IMAGES.userIcon}
                style={styles.imgProfile}
                resizeMode="cover"
              />
              <View style={{ marginLeft: w(3) }}>
                <Text style={styles.txtName}>tronixPay</Text>
                <View style={[styles.rowCntrBtw, { marginTop: h(0.5) }]}>
                  <Text
                    style={[
                      styles.txtName,
                      {
                        fontSize: FONT_SIZES.small,
                        // fontFamily: FONTS.interBold,
                      },
                    ]}
                  >
                    Smriti Nagar
                  </Text>
                  <TouchableOpacity style={styles.locationIcon}>
                    <CustomImage
                      source={IMAGES.locationIcon}
                      style={styles.imgLocation}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.rowCntrBtw, { width: "40%" }]}>
              <TouchableOpacity style={styles.imgIcon}>
                <CustomImage
                  source={IMAGES.searchIcon}
                  style={styles.img100}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imgIcon}>
                <CustomImage
                  source={IMAGES.ticketsIcon}
                  style={styles.img100}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imgIcon}>
                <CustomImage
                  source={IMAGES.notificationIcon}
                  style={styles.img100}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          {showBalance && (
            <View style={styles.headerView_HS_2}>
              <EdgeMarker direction="left" />
              <Text style={styles.txtBalance}>Wallet Balance</Text>
              <Text style={styles.txtAmount}>₹ 2500.00</Text>
              <EdgeMarker direction="right" />
            </View>
          )}
        </View>
      ) : regularHeader ? (
        <View
          style={[
            styles.headerView_HS,
            removeBorderRadius && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          ]}
        >
          <View style={styles.regularHeaderContainer}>
            <View style={styles.rowCntrBtw}>
              <TouchableOpacity onPress={onBackPress}>
                <Image
                  source={backIcon ? backIcon : IMAGES.backIcon}
                  style={styles.imgBackIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={[styles.txtTitle, { marginLeft: w(4) }]}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.headerView_HS}>
          <View style={styles.headerView_HS_1}>
            <View style={[styles.rowCntrBtw, { width: "25%" }]}>
              <TouchableOpacity>
                <Entypo name={"chevron-left"} size={30} color={COLORS.WHITE} />
              </TouchableOpacity>
              <Text style={[styles.txtName, { fontSize: FONT_SIZES.regular }]}>
                {title}
              </Text>
            </View>
            <View style={[styles.rowCntrBtw, { width: "25%" }]}>
              <TouchableOpacity style={styles.imgIcon}>
                <CustomImage
                  source={IMAGES.ticketsIcon}
                  style={styles.img100}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imgIcon}>
                <CustomImage
                  source={IMAGES.notificationIcon}
                  style={styles.img100}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export { Header };

const styles = StyleSheet.create({
  headerView_HS: {
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "space-between",
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },
  headerView_HS_1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: h(2),
    paddingTop: h(1),
  },
  headerView_HS_2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: h(2),
    paddingHorizontal: h(3),
    backgroundColor: COLORS.BLACK,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: COLORS.PRIMARY_I,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  rowCntrBtw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgProfile: {
    height: h(5.5),
    width: h(5.5),
  },
  txtName: {
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: FONT_SIZES.regular,
    color: COLORS.WHITE,
  },
  txtBalance: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.inputIconColor,
  },
  txtAmount: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.large,
    color: COLORS.WHITE,
  },
  locationIcon: {
    marginLeft: w(2),
    shadowColor: COLORS.PRIMARY_I,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  imgLocation: {
    height: h(3),
    width: h(3),
  },
  img100: {
    height: "100%",
    width: "100%",
  },
  imgIcon: {
    height: h(4.5),
    width: w(9),
    shadowColor: COLORS.PRIMARY_I,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  onlyTitle: {
    justifyContent: "center",
    alignItems: "center",
    height: h("7%"),
    backgroundColor: COLORS.SECONDARY,
    paddingHorizontal: w("2%"),
  },

  regularHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: h(2),
    paddingTop: h(1),
  },
  imgBackIcon: {
    height: h(2.2),
    width: h(2.2),
    tintColor: COLORS.WHITE,
  },
  txtTitle: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.medium,
    color: COLORS.WHITE,
  },
});
