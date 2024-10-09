import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ButtonFill from "../components/ButtonFill";
import ButtonNonFill from "../components/ButtonNonFill";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  HelloScreen: undefined;
  LogInScreen: undefined;
  SignUpScreenOwner: undefined;
};

type HelloScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "HelloScreen">;

const HelloScreen = () => {
  const navigation = useNavigation<HelloScreenNavigationProp>();

  const handlePressLogin = () => {
    navigation.navigate("LogInScreen");
  };
  const handlePressSignUp = () => {
    navigation.navigate("SignUpScreenOwner");
  }

  return (
    <View style={styles.helloScreen}>
      <View style={[styles.artixposWrapper, styles.artixposPosition]}>
        {/*<Text style={[styles.artixpos, styles.artixposTypo]}>ArtixPOS.</Text>*/}
      </View>
      <Image
        style={[styles.helloScreenChild, styles.helloScreenChildPosition]}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Text style={[styles.easyManagementFor, styles.helloScreenChildPosition]}>
        Exceed Internal Application SIO
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <ButtonFill
        continue1="Login"
        buttonFillPosition="absolute"
        buttonFillMarginLeft={-163.5}
        buttonFillBottom={127}
        buttonFillLeft="50%"
        buttonFillTop="unset"
        button1BackgroundColor="#441480"
        continueLeft="44%"
        continueTextAlign="left"
        onPress={handlePressLogin}
      />
      {/*<ButtonNonFill*/}
      {/*  buttonNonFillPosition="absolute"*/}
      {/*  buttonNonFillMarginLeft={-163.5}*/}
      {/*  buttonNonFillBottom={50}*/}
      {/*  buttonNonFillLeft="50%"*/}
      {/*  buttonNonFillWidth={327}*/}
      {/*  buttonNonFillHeight={57}*/}
      {/*  button1BorderColor="#441480"*/}
      {/*  continueColor="#441480"*/}
      {/*  onPress={handlePressLogin}*/}
      {/*/>*/}
      <Image
        style={[styles.logoSegitiga1Icon, styles.artixposPosition]}
        contentFit="cover"
        source={require("../assets/logosegitiga-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  artixposPosition: {
    left: "40%",
  },
  artixposTypo: {
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
  },
  helloScreenChildPosition: {
    top: "50%",
    left: "20%",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorSilver,
    width: 18,
    borderRadius: Border.br_11xs,
    marginTop: -2.5,
    height: 5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  artixpos: {
    marginLeft: -56,
    top: 0,
    fontSize: FontSize.ptMedium_size,
    color: "#441481",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  artixposWrapper: {
    top: 64,
    width: 112,
    height: 28,
  },
  helloScreenChild: {
    marginTop: -209,
    // marginLeft: -128.5,
    width: 256,
    height: 284,
  },
  easyManagementFor: {
    marginTop: 115,
    marginLeft: 25,
    fontSize: FontSize.ptReg_size,
    color: Color.navy,
    textAlign: "center",
    fontFamily: FontFamily.ptMedium,
    fontWeight: "500",
  },
  groupChild: {
    marginLeft: -34.7,
    backgroundColor: Color.colorIndigo_100,
    width: 18,
    borderRadius: Border.br_11xs,
    marginTop: -2.5,
    height: 5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginLeft: -8.9,
  },
  groupInner: {
    marginLeft: 16.9,
  },
  rectangleParent: {
    marginTop: 154,
    marginLeft: -34.5,
    width: 69,
    height: 5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  logoSegitiga1Icon: {
    top: 46,
    width: 90,
    height: 90,
  },
  helloScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HelloScreen;
