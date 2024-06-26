import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import ButtonFill from "../../ButtonFill";
import { signin } from "../../../utils/api/auth/signin";
import { observer } from "mobx-react"; 
import authStore from "../../../stores/authStore";

interface SigninFormProps {
    onSigninSuccess: () => void;
  }

const SigninForm: React.FC<SigninFormProps> = ({onSigninSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const validateEmail = (input: string) => {
    const isValid = input.includes("@");
    setEmailValid(isValid);
  };

  const validatePassword = (input: string) => {
    const isValid = input.length >= 8;
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
    if (emailValid && passwordValid) {
        authStore.setLoading(true);
        try {
            const response = await signin({ email, password });
            console.log("Signin successful:", response);
            if (response.statusCode === 200) {
                authStore.setUserData(response.data);
                onSigninSuccess();
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to sign in. Please try again.";
            console.error("Error signing in:", errorMessage);
        }
        finally {
            authStore.setLoading(false);
        }
    }
  };

  const renderUserData = () => {
    if (authStore.user) {
        console.log("Data log : ",authStore.user.user.email);
    } else {
      return (
        <Text style={styles.noUserDataText}>User not logged in</Text>
      );
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Email Field */}
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
      <View style={[styles.fieldContainer, styles.marginTop]}>
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
              resizeMode="cover"
              source={require("../../../assets/eye-closed.png")}
            />
          </TouchableOpacity>
          {renderUserData()}
        </View>
        {!passwordValid && (
          <Text style={styles.errorText}>
            Password must be at least 8 characters long
          </Text>
        )}
        <ButtonFill
            continue1="Login"
            buttonFillPosition="absolute"
            buttonFillMarginLeft={-163.5}
            buttonFillBottom="unset"
            buttonFillLeft="50%"
            buttonFillTop={120}
            button1BackgroundColor="#441480"
            continueLeft="43.12%"
            continueTextAlign="center"
            onPress={handleSubmit}
        />
        <View style={[styles.forgotPasswordWrapper, styles.wrapperPosition]}>
            <Text style={[styles.forgotPassword, styles.sendOtpTypo]}>
            Forgot Password?
            </Text>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 120,
  },
  text: {
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.ptReguler,
  },
  forgotPasswordWrapper: {
    marginLeft: -48.5,
    top: 200,
    width: 105,
  },
  forgotPassword: {
    marginLeft: -52.5,
    color: Color.colorIndigo_100,
    fontSize: FontSize.ptReguler_size,
  },
  fieldContainer: {
    width: "80%",
    marginBottom: 5,
  },
  label: {
    fontSize: FontSize.ptReg_size,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_base,
    height: 56,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: FontSize.ptReguler_size,
  },
  errorText: {
    marginTop: 5,
    color: "red",
    fontSize: FontSize.ptSmall_size,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  marginTop: {
    marginTop: 20,
  },
  sendOtpWrapper: {
    marginLeft: -159.5,
    top: 100,
    width: 59,
  },
  wrapperPosition: {
    height: 14,
    left: "50%",
    position: "absolute",
  },
  sendOtp: {
    marginLeft: -29.5,
    color: Color.navy,
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
  userDataContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  userDataText: {
    fontSize: 16,
  },
  noUserDataText: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
  },
});

export default observer(SigninForm);
