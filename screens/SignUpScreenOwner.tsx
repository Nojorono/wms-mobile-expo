import React from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";
import SignupForm from "../components/forms/signup/SignupForm";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  LogInScreenOwner: undefined;
};

type LogInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "LogInScreenOwner">;


const SignUpScreenOwner = () => {
  const navigation = useNavigation<LogInScreenNavigationProp>();
  const handleSignupSuccess = () => {
    ToastAndroid.show('User successfully register!', ToastAndroid.SHORT);
    navigation.navigate('LogInScreenOwner');
  };

  return (
    <View style={styles.signUpScreenOwner}>
      <Text style={[styles.signUp, styles.iconPosition]}>Sign Up</Text>
      <SignupForm onSignupSuccess={handleSignupSuccess} />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpScreenOwner: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
  signUp: {
    marginLeft: -40.5,
    top: 44,
    fontSize: FontSize.ptMedium1_size,
    fontWeight: '500',
    fontFamily: FontFamily.ptMedium,
    color: Color.colorIndigo_100,
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
  },
  iconPosition: {
    position: 'absolute',
    left: '50%',
  }
});

export default SignUpScreenOwner;
