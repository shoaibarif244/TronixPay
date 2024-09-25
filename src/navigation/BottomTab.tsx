import React, { useEffect, useRef } from "react";
import { View, Text, Platform, StyleSheet, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  COLORS,
  FONTS,
  FONT_SIZES,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  h,
} from "../constants";

import {
  HomeScreen,
  PrepaidScreen,
  HistoryScreen,
  StoresScreen,
  RechargeCashback,
} from "../screens";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  const AnimatedIcon = ({ focused, children }: any) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const pulseValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      // Background color animation
      Animated.timing(animatedValue, {
        toValue: focused ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();

      // Pulse effect
      if (focused) {
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseValue, {
              toValue: 1.3,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(pulseValue, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ]),
        ).start();
      } else {
        pulseValue.setValue(1); // Reset to original size when not focused
      }
    }, [focused]);

    const backgroundColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.TRANSPARENT, COLORS.WHITE],
    });

    return (
      <Animated.View
        style={[
          styles.iconContainer,
          {
            // backgroundColor: backgroundColor,
            transform: [{ scale: pulseValue }],
          },
        ]}
      >
        {children}
      </Animated.View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY_I,
        tabBarInactiveTintColor: COLORS.inputIconColor,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabel: ({ focused }) => (
          <Text
            style={[
              styles.txtLabel,
              { color: focused ? COLORS.PRIMARY_I : COLORS.placeholderColor },
            ]}
          >
            {route.name}
          </Text>
        ),
        lazy: true,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <MaterialCommunityIcons name="home" color={color} size={26} />
            </AnimatedIcon>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Stores"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <SimpleLineIcons name="handbag" color={color} size={26} />
            </AnimatedIcon>
          ),
        }}
        component={StoresScreen}
      />
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabBarCenterBtn}>
              <AnimatedIcon focused={focused}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  color={color}
                  size={34}
                />
              </AnimatedIcon>
            </View>
          ),
        }}
        component={RechargeCashback}
      />
      <Tab.Screen
        name="Recharge"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <MaterialCommunityIcons
                name="currency-inr"
                color={color}
                size={26}
              />
            </AnimatedIcon>
          ),
        }}
        component={PrepaidScreen}
      />
      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <Octicons name="arrow-switch" color={color} size={26} />
            </AnimatedIcon>
          ),
        }}
        component={HistoryScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    ...Platform.select({
      android: { height: h(8) },
      ios: { height: h(7) },
    }),
    justifyContent: "center",
  },
  tabBarCenterBtn: {
    position: "absolute",
    ...Platform.select({
      android: { bottom: h(2.5) },
      ios: { bottom: h(1.5) },
    }),
    height: h(8.5),
    width: h(8.5),
    borderRadius: h(8.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 6,
    borderColor: COLORS.WHITE,
    shadowColor: COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  iconContainer: {
    borderRadius: 200,
    padding: h(0.6),
  },
  txtLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.bold,
    marginBottom: h(0.5),
  },
});
