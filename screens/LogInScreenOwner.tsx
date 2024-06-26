import * as React from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";
import SigninForm from "../components/forms/signin/SigninForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  LogInScreenOwner: undefined;
};

type LogInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "LogInScreenOwner">;


const LogInScreenOwner = () => {
  const navigation = useNavigation<LogInScreenNavigationProp>();

  const handleSigninSuccess = () => {
    ToastAndroid.show('User successfully Signin!', ToastAndroid.SHORT);
    // navigation.navigate('LogInScreenOwner');
  };

  return (
    <View style={styles.logInScreenOwner}>
      <Text style={styles.logInAs}>Log in as Owner</Text>
      <SigninForm onSigninSuccess={handleSigninSuccess}/>
    </View>
  );
};

const styles = StyleSheet.create({
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
  logInScreenOwner: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LogInScreenOwner;
