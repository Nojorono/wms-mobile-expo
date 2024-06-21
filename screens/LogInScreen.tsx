import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ButtonFill from "../components/ButtonFill";
import ArrowBackButton from "../components/ArrowBackButton";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import LogInScreenEmployee from "./LogInScreenEmployee";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  HelloScreen: undefined;
  LogInScreen: undefined;
  LogInScreenOwner: undefined;
  LogInScreenEmployee: undefined;
  SignUpScreenOwner: undefined;
};

type LogInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "LogInScreen">;

const LogInScreen = () => {
  const navigation = useNavigation<LogInScreenNavigationProp>();

  const handleLoginOwner = () => {
    navigation.navigate("LogInScreenOwner");
  };
  const handleLoginEmployee = () => {
    navigation.navigate("LogInScreenEmployee");
  }
  return (
    <View style={styles.logInScreen}>
      <Text style={styles.logIn}>Log in</Text>
      <Text style={styles.welcomeToArtixpos}>Welcome to ArtixPOS!</Text>
      <Text style={[styles.selectLoginAs, styles.orTypo]}>
        Select login as the owner or employee first to continue.
      </Text>
      <View style={[styles.dontHaveAnAccountParent, styles.logPosition]}>
        <Text style={[styles.dontHaveAn, styles.orPosition]}>
          Don't have an account?
        </Text>
        <Text style={[styles.signUp, styles.orPosition]}>Sign Up</Text>
      </View>
      <Image
        style={[styles.logInScreenChild, styles.logPosition]}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <ButtonFill
        continue1="Log in as Owner"
        buttonFillPosition="absolute"
        buttonFillMarginLeft={-163.5}
        buttonFillBottom="unset"
        buttonFillLeft="50%"
        buttonFillTop={475}
        button1BackgroundColor="#441480"
        continueLeft="31.19%"
        continueTextAlign="center"
        onPress={handleLoginOwner}
      />
      <ButtonFill
        continue1="Log in as Employee"
        buttonFillPosition="absolute"
        buttonFillMarginLeft={-163.5}
        buttonFillBottom="unset"
        buttonFillLeft="50%"
        buttonFillTop={570}
        button1BackgroundColor="#441480"
        continueLeft="27.52%"
        continueTextAlign="center"
        onPress={handleLoginEmployee}
      />
      <Text style={[styles.or, styles.orPosition]}>Or</Text>
      <Image
        style={[styles.logInScreenItem, styles.logPosition]}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orTypo: {
    fontFamily: FontFamily.ptReguler,
    color: Color.navy,
  },
  logPosition: {
    left: "50%",
    position: "absolute",
  },
  orPosition: {
    fontSize: FontSize.ptReguler_size,
    left: "50%",
    position: "absolute",
  },
  logIn: {
    marginLeft: -31.5,
    top: 44,
    fontSize: FontSize.ptMedium1_size,
    textAlign: "left",
    color: Color.colorIndigo_100,
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  welcomeToArtixpos: {
    top: 114,
    fontSize: FontSize.ptMedium_size,
    color: Color.navy,
    marginLeft: -163.5,
    textAlign: "left",
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  selectLoginAs: {
    top: 150,
    fontSize: FontSize.ptReg_size,
    display: "flex",
    alignItems: "center",
    width: 309,
    marginLeft: -163.5,
    fontFamily: FontFamily.ptReguler,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  dontHaveAn: {
    top: 0,
    fontSize: FontSize.ptReguler_size,
    textAlign: "left",
    marginLeft: -90.5,
    fontFamily: FontFamily.ptReguler,
    color: Color.navy,
  },
  signUp: {
    marginLeft: 45.5,
    top: 0,
    fontSize: FontSize.ptReguler_size,
    textAlign: "left",
    color: Color.colorIndigo_100,
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
  },
  dontHaveAnAccountParent: {
    top: 639,
    width: 181,
    height: 14,
    marginLeft: -90.5,
  },
  logInScreenChild: {
    marginLeft: -80.5,
    top: 238,
    width: 162,
    height: 187,
  },
  or: {
    marginLeft: -6.5,
    top: 544,
    textAlign: "center",
    fontFamily: FontFamily.ptReguler,
    color: Color.navy,
  },
  logInScreenItem: {
    marginLeft: -141.5,
    top: 492,
    height: 22,
    width: 21,
  },
  unionIcon: {
    height: 21,
    width: 21,
  },
  logInScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LogInScreen;
