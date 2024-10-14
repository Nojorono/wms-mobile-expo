import * as React from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import SigninForm from "../components/forms/signin/SigninForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width, height } = Dimensions.get("window");

type RootStackParamList = {
    MainTabNavigator: undefined;
    LogInScreen: undefined;
    DashboardScreen: undefined;
};

type LogInScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "MainTabNavigator"
>;

const LogInScreen = () => {
    const navigation = useNavigation<LogInScreenNavigationProp>();

    const handleSigninSuccess = () => {
        Toast.show({
            type: "success",
            text1: "User successfully Signin! 👋",
        });
        navigation.navigate("MainTabNavigator");
    };
    return (
        <SafeAreaView style={styles.container}>
            <SigninForm onSigninSuccess={handleSigninSuccess} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.0, // Responsive padding
        paddingVertical: height * 0.05,
    },
    title: {
        fontSize: height * 0.04, // Responsive font size
        fontWeight: "500",
        textAlign: "center",
        color: "#441480",
        marginVertical: height * 0.02,
    },
    inputContainer: {
        marginVertical: height * 0.01,
    },
    label: {
        fontSize: height * 0.02,
        color: "#1A72DD",
    },
    inputField: {
        height: height * 0.07,
        width: "100%",
        backgroundColor: "#E0E0E0",
        borderRadius: 10,
        marginTop: height * 0.01,
    },
    helperText: {
        fontSize: height * 0.015,
        color: "#1A72DD",
        opacity: 0.5,
        textAlign: "center",
        marginVertical: height * 0.01,
    },
    infoContainer: {
        marginTop: height * 0.1,
        padding: 10,
        backgroundColor: "rgba(26, 114, 221, 0.1)",
        borderRadius: 10,
        alignItems: "center",
    },
    infoText: {
        color: "#1A72DD",
        textAlign: "center",
    },
    linkText: {
        fontWeight: "bold",
    },
});

export default LogInScreen;
