import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type FieldFormType = {
  /** Style props */
  fieldFormPosition?: string;
  fieldFormMarginLeft?: number | string;
  fieldFormTop?: number | string;
  fieldFormLeft?: number | string;
  fieldFormWidth?: number | string;
  fieldFormHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FieldForm = ({
  fieldFormPosition,
  fieldFormMarginLeft,
  fieldFormTop,
  fieldFormLeft,
  fieldFormWidth,
  fieldFormHeight,
}: FieldFormType) => {
  const fieldFormStyle = useMemo(() => {
    return {
      ...getStyleValue("position", fieldFormPosition),
      ...getStyleValue("marginLeft", fieldFormMarginLeft),
      ...getStyleValue("top", fieldFormTop),
      ...getStyleValue("left", fieldFormLeft),
      ...getStyleValue("width", fieldFormWidth),
      ...getStyleValue("height", fieldFormHeight),
    };
  }, [
    fieldFormPosition,
    fieldFormMarginLeft,
    fieldFormTop,
    fieldFormLeft,
    fieldFormWidth,
    fieldFormHeight,
  ]);

  return (
    <View style={[styles.fieldForm, fieldFormStyle]}>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={styles.fieldFormChild} />
      <Text style={[styles.emailOrPhone, styles.emailTypo]}>
        Email or Phone Number
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.ptReguler,
    position: "absolute",
  },
  email: {
    width: "94.5%",
    top: "0%",
    fontSize: FontSize.ptReg_size,
    display: "flex",
    alignItems: "center",
    left: "0%",
  },
  fieldFormChild: {
    height: "65.88%",
    width: "100%",
    top: "34.12%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGray,
    left: "0%",
    position: "absolute",
  },
  emailOrPhone: {
    top: "58.82%",
    left: "7.34%",
    fontSize: FontSize.ptReguler_size,
    opacity: 0.5,
  },
  fieldForm: {
    width: 327,
    height: 85,
  },
});

export default FieldForm;
