import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Platform, KeyboardAvoidingView } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import { Image } from "expo-image";
import ButtonFill from "../../ButtonFill";
import { signin } from "../../../utils/api/auth/signin";
import { observer } from "mobx-react";
import authStore from "../../../stores/authStore";


// Get screen width and height for dynamic styling
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

interface SigninFormProps {
  onSigninSuccess: () => void;
}

const SigninForm: React.FC<SigninFormProps> = ({ onSigninSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  let isValid: boolean | ((prevState: boolean) => boolean);
  const validateEmail = (input: string) => {
    isValid = !!input && input.includes("@");
    setEmailValid(isValid);
  };

  const validatePassword = (input: string) => {
    isValid = !!input && input.length >= 5;
    setPasswordValid(isValid);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validatePassword(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async () => {
    validateEmail(email)
    validatePassword(password)
    authStore.setLoading(true);
    if (emailValid && passwordValid && isValid) {
      try {
        // const response = await signin({ email, password });
        // if (response.statusCode === 200) {
        //   authStore.setUserData(response.data);
        //   onSigninSuccess();
        // }

        //bypass
        authStore.setUserData({ email, password });
        onSigninSuccess();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to sign in. Please try again.";
        console.error("Error signing in:", errorMessage);
      } finally {
        authStore.setLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
    >
      {/* Email Field */}
      <Image
        style={styles.mainImage}
        contentFit="cover"
        source={require("../../../assets/logo-nojorono.png")}
      />
      <View style={styles.fieldContainer}>
        <Text style={[styles.label, styles.text]}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.text]}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {!emailValid && (
          <Text style={styles.errorText}>
            Please enter a valid email address
          </Text>
        )}
      </View>

      {/* Password Field */}
      <View style={styles.fieldContainer}>
        <Text style={[styles.label, styles.text]}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.text]}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../../../assets/eye-closed.png")}
            />
          </TouchableOpacity>
        </View>
        {!passwordValid && (
          <Text style={styles.errorText}>
            Password must be at least 8 characters long
          </Text>
        )}
      </View>

      {/* Submit Button */}
      <ButtonFill
        continue1="Login"
        buttonFillPosition="relative"
        button1BackgroundColor="#0c4ca3"
        continueTextAlign="center"
        continueLeft="44%"
        onPress={handleSubmit}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    // justifyContent: "center",
    padding: 30,
    backgroundColor: Color.colorWhite,
  },
  text: {
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.ptReguler,
  },
  fieldContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: FontSize.ptReg_size * (SCREEN_WIDTH / 375),
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_base,
    height: Platform.OS === "android" ? 50 : 56,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: FontSize.ptReg_size * (SCREEN_WIDTH / 375),
  },
  errorText: {
    marginTop: 5,
    color: "red",
    fontSize: FontSize.ptSmall_size * (SCREEN_WIDTH / 375),
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  forgotPasswordText: {
    fontSize: FontSize.ptReguler_size * (SCREEN_WIDTH / 375),
    marginTop: 20,
  },
  mainImage: {
    width: 180, // 60% of screen width
    height: SCREEN_HEIGHT * 0.11, // 35% of screen height
    marginBottom: SCREEN_HEIGHT * 0.02, // 10% of screen height
  },
});

export default observer(SigninForm);
