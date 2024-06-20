import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type EmailFiledType = {
  emailOrPhoneNumber?: string;
  emailOrPhoneNumber1?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailFiled = ({
  emailOrPhoneNumber,
  emailOrPhoneNumber1,
  propTop,
}: EmailFiledType) => {
  const emasilNumberFiledStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[
        styles.emasilNumberFiled,
        styles.emasilPosition,
        emasilNumberFiledStyle,
      ]}
    >
      <Text style={[styles.emailOrPhone, styles.emailTypo]}>
        {emailOrPhoneNumber}
      </Text>
      <View style={[styles.emasilNumberFiledChild, styles.emasilPosition]} />
      <Text style={[styles.emailOrPhone1, styles.emailTypo]}>
        {emailOrPhoneNumber1}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emasilPosition: {
    width: 327,
    left: "50%",
    position: "absolute",
    marginLeft: -163.5,
  },
  emailTypo: {
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.ptReguler,
    left: "50%",
    position: "absolute",
  },
  emailOrPhone: {
    top: 0,
    fontSize: FontSize.ptReg_size,
    display: "flex",
    alignItems: "center",
    width: 309,
    marginLeft: -163.5,
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.ptReguler,
  },
  emasilNumberFiledChild: {
    top: 29,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGray,
    height: 56,
  },
  emailOrPhone1: {
    marginLeft: -139.5,
    top: 50,
    fontSize: FontSize.ptReguler_size,
    opacity: 0.5,
  },
  emasilNumberFiled: {
    top: 114,
    height: 85,
  },
});

export default EmailFiled;
