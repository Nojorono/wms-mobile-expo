import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonFill from "../components/ButtonFill";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import Toast from "react-native-toast-message";

const showToast = () => {
    Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'This is some something 👋'
    });
}

const LogInScreen = () => {
    return (
        <View style={styles.logInScreenEmployee}>

            <Text style={[styles.logInAs, styles.logInAsTypo]}>

            </Text>
            <Text style={[styles.emailUsernameField, styles.passwordTypo]}>
                Email / Username
            </Text>
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
            <ButtonFill
                continue1="Login"
                buttonFillPosition="absolute"
                buttonFillMarginLeft={-163.5}
                buttonFillBottom="unset"
                buttonFillLeft="50%"
                buttonFillTop={344}
                button1BackgroundColor="#441480"
                continueLeft="43.12%"
                continueTextAlign="center"
                onPress={showToast}
            />
            <View style={[styles.logInScreenEmployeeChild, styles.logLayout]} />
            <View style={[styles.logInScreenEmployeeItem, styles.logLayout]} />
            <Text style={[styles.abc23654, styles.abc23654Typo]}>ABC23654</Text>
            <Text style={[styles.atLeast8, styles.abc23654Typo]}>
                At least 8 characters
            </Text>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={styles.useTheCashierContainer}>
                    <Text style={styles.useTheCashierContainer1}>
                        <Text
                            style={styles.useTheCashier}
                        >{`Use the cashier code that can be created by the Owner in `}</Text>
                        <Text
                            style={styles.logInAsTypo}
                        >{`Manage Store -> Cashier Code`}</Text>
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logInAsPosition: {
        left: "50%",
        position: "absolute",
    },
    artixposPosition: {
        width: "100%",
        height: 200,
    },
    logoSegitiga1Icon: {
        top: 46,
        width: 90,
        height: 90,
    },
    logInAsTypo: {
        fontFamily: FontFamily.ptMedium,
        fontWeight: "500",
    },
    passwordTypo: {
        width: 309,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        color: Color.navy,
        fontFamily: FontFamily.ptReguler,
        fontSize: FontSize.ptReg_size,
        position: "absolute",
    },
    logLayout: {
        height: 56,
        width: 327,
        backgroundColor: Color.colorGray,
        borderRadius: Border.br_base,
        left: "50%",
        marginLeft: -163.5,
        position: "absolute",
    },
    abc23654Typo: {
        opacity: 0.5,
        fontSize: FontSize.ptReguler_size,
        marginLeft: -139.5,
        textAlign: "left",
        color: Color.navy,
        fontFamily: FontFamily.ptReguler,
        left: "50%",
        position: "absolute",
    },
    groupPosition: {
        height: 93,
        width: 327,
        left: "50%",
        marginLeft: -163.5,
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
    },
    rectangleParent: {
        top: 40,
        height: 34,
        width: 34,
        left: "50%",
        marginLeft: -163.5,
        position: "absolute",
    },
    logInAs: {
        marginLeft: -100.5,
        top: 44,
        fontSize: FontSize.ptMedium1_size,
        color: Color.colorIndigo_100,
        textAlign: "center",
        left: "50%",
        position: "absolute",
    },
    emailUsernameField: {
        top: 114,
        left: "51%",
        marginLeft: -163.5,
        width: 309,
    },
    password: {
        top: 219,
        left: 45,
    },
    logInScreenEmployeeChild: {
        top: 143,
    },
    logInScreenEmployeeItem: {
        top: 248,
    },
    abc23654: {
        top: 164,
    },
    atLeast8: {
        top: 269,
    },
    groupItem: {
        backgroundColor: "rgba(26, 114, 221, 0.1)",
        borderRadius: Border.br_base,
        height: 93,
        top: 0,
    },
    useTheCashier: {
        fontFamily: FontFamily.ptReguler,
    },
    useTheCashierContainer1: {
        width: "100%",
    },
    useTheCashierContainer: {
        marginLeft: -131.5,
        top: 18,
        width: 263,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        color: Color.navy,
        fontSize: FontSize.ptReg_size,
        left: "50%",
        position: "absolute",
    },
    rectangleGroup: {
        top: 441,
    },
    logInScreenEmployee: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        height: 812,
        overflow: "hidden",
        width: "100%",
    },
});

export default LogInScreen;

