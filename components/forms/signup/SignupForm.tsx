import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import ButtonFill from "../../ButtonFill";
import { signup } from "../../../utils/api/auth/signup";

interface SignupFormProps {
    onSignupSuccess: () => void;
  }

  const SignupForm: React.FC<SignupFormProps> = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
        if (emailValid && passwordValid) {
            setLoading(true);
            try {
              const response = await signup({ email, phone, password });
              console.log("Signup successful:", response);
              if (response.statusCode === 200) {
                onSignupSuccess();
              }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Failed to sign up. Please try again.";
                console.error("Error signing up:", errorMessage);
            } finally {
              setLoading(false);
            }
        }
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

      {/* Phone Number Field */}
      <View style={[styles.fieldContainer, styles.marginTop]}>
        <Text style={[styles.label, styles.text]}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.text]}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
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
        </View>
        {!passwordValid && (
          <Text style={styles.errorText}>
            Password must be at least 8 characters long
          </Text>
        )}
      </View>

      {/* Submit Button */}
      <ButtonFill
        continue1="SignUp"
        buttonFillPosition="absolute"
        buttonFillMarginLeft={-163.5}
        buttonFillBottom="unset"
        buttonFillLeft="50%"
        buttonFillTop={350}
        button1BackgroundColor="#441480"
        continueLeft="43.12%"
        continueTextAlign="center"
        onPress={handleSubmit}
      />
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
});

export default SignupForm;

