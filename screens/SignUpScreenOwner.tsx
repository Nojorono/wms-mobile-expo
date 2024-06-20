import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonFill from "../components/ButtonFill";
import EmailFiled from "../components/EmailFiled";
import FieldForm from "../components/FieldForm";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SignUpScreenOwner = () => {
  return (
    <View style={styles.signUpScreenOwner}>
      <Text style={[styles.signUp, styles.iconPosition]}>Sign Up</Text>
      <ButtonFill
        continue1="Login"
        buttonFillPosition="absolute"
        buttonFillMarginLeft={-163.5}
        buttonFillBottom="unset"
        buttonFillLeft="50%"
        buttonFillTop={449}
        button1BackgroundColor="#441480"
        continueLeft="43.12%"
        continueTextAlign="center"
      />
      <EmailFiled
        emailOrPhoneNumber="Phone Number"
        emailOrPhoneNumber1="0821452384425"
        propTop={219}
      />
      <FieldForm
        fieldFormPosition="absolute"
        fieldFormMarginLeft={-163.5}
        fieldFormTop={114}
        fieldFormLeft="50%"
        fieldFormWidth={327}
        fieldFormHeight={85}
      />
      <View style={[styles.passwordParent, styles.groupItemPosition]}>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Text style={[styles.atLeast8, styles.passwordTypo]}>
          At least 8 characters
        </Text>
        <Image
          style={[styles.eyeClosedIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/eye-closed.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 34,
    width: 34,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  groupItemPosition: {
    width: 327,
    left: "50%",
    marginLeft: -163.5,
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.ptReguler,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -17,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorIndigo_100,
    top: 0,
  },
  lineIcon: {
    marginLeft: -3,
    top: 11,
    width: 6,
    height: 12,
  },
  rectangleParent: {
    top: 40,
    marginLeft: -163.5,
  },
  signUp: {
    marginLeft: -40.5,
    top: 44,
    fontSize: FontSize.ptMedium1_size,
    fontWeight: "500",
    fontFamily: FontFamily.ptMedium,
    color: Color.colorIndigo_100,
    textAlign: "center",
  },
  password: {
    fontSize: FontSize.ptReg_size,
    display: "flex",
    alignItems: "center",
    width: 309,
    top: 0,
    marginLeft: -163.5,
  },
  groupItem: {
    top: 29,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGray,
    height: 56,
  },
  atLeast8: {
    marginLeft: -139.5,
    top: 50,
    fontSize: FontSize.ptReguler_size,
    opacity: 0.5,
  },
  eyeClosedIcon: {
    marginLeft: 123.5,
    top: 47,
    width: 20,
    height: 20,
  },
  passwordParent: {
    top: 324,
    height: 85,
  },
  signUpScreenOwner: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUpScreenOwner;
