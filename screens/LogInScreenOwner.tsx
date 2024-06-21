import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonFill from "../components/ButtonFill";
import EmailFiled from "../components/EmailFiled";
import ButtonTab from "../components/ButtonTab";
import ButtonTabNonFill from "../components/ButtonTabNonFill";
import SMSButtonTab from "../components/SMSButtonTab";
import ButtonTabCall from "../components/ButtonTabCall";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const LogInScreenOwner = () => {
  return (
    <View style={styles.logInScreenOwner}>
      <Text style={styles.logInAs}>Log in as Owner</Text>
      <ButtonFill
        continue1="Login"
        buttonFillPosition="absolute"
        buttonFillMarginLeft={-163.5}
        buttonFillBottom="unset"
        buttonFillLeft="50%"
        buttonFillTop={471}
        button1BackgroundColor="#441480"
        continueLeft="43.12%"
        continueTextAlign="center"
      />
      <EmailFiled
        emailOrPhoneNumber="Email or Phone Number"
        emailOrPhoneNumber1="Email or Phone Number"
      />
      <EmailFiled
        emailOrPhoneNumber="Password"
        emailOrPhoneNumber1="At least 8 characters"
        propTop={219}
      />
      <View style={[styles.forgotPasswordWrapper, styles.wrapperPosition]}>
        <Text style={[styles.forgotPassword, styles.sendOtpTypo]}>
          Forgot Password?
        </Text>
      </View>
      <View style={[styles.sendOtpWrapper, styles.wrapperPosition]}>
        <Text style={[styles.sendOtp, styles.sendOtpTypo]}>Send OTP:</Text>
      </View>
      <ButtonTab
        buttonTabPosition="absolute"
        buttonTabMarginLeft={-163.5}
        buttonTabTop={349}
        buttonTabLeft="50%"
        rectangleViewBackgroundColor="#441480"
      />
      <ButtonTabNonFill
        buttonTabNonFillPosition="absolute"
        buttonTabNonFillMarginLeft={-31.5}
        buttonTabNonFillTop={349}
        buttonTabNonFillLeft="50%"
        buttonTabNonFillHeight={36}
      />
      <SMSButtonTab
        sMSButtonTabPosition="absolute"
        sMSButtonTabMarginLeft={-163.5}
        sMSButtonTabTop={395}
        sMSButtonTabLeft="50%"
        sMSButtonTabHeight={36}
      />
      <ButtonTabCall
        phone={require("../assets/phone.png")}
        buttonTabCallPosition="absolute"
        buttonTabCallMarginLeft={-37.5}
        buttonTabCallTop={395}
        buttonTabCallLeft="50%"
        buttonTabCallHeight={36}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    height: 14,
    left: "50%",
    position: "absolute",
  },
  sendOtpTypo: {
    fontSize: FontSize.ptReguler_size,
    textAlign: "left",
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -17,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorIndigo_100,
    top: 0,
    height: 34,
    width: 34,
    left: "50%",
    position: "absolute",
  },
  lineIcon: {
    marginLeft: -3,
    top: 11,
    width: 6,
    height: 12,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -163.5,
    top: 40,
    height: 34,
    width: 34,
    left: "50%",
    position: "absolute",
  },
  logInAs: {
    marginLeft: -83.5,
    top: 44,
    fontSize: FontSize.ptMedium1_size,
    textAlign: "left",
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
    color: Color.colorIndigo_100,
    left: "50%",
    position: "absolute",
  },
  forgotPassword: {
    marginLeft: -52.5,
    color: Color.colorIndigo_100,
    fontSize: FontSize.ptReguler_size,
  },
  forgotPasswordWrapper: {
    marginLeft: -48.5,
    top: 540,
    width: 105,
  },
  sendOtp: {
    marginLeft: -29.5,
    color: Color.navy,
  },
  sendOtpWrapper: {
    marginLeft: -159.5,
    top: 325,
    width: 59,
  },
  logInScreenOwner: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LogInScreenOwner;
