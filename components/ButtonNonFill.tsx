import React, { useMemo } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ButtonNonFillType = {
  /** Style props */
  buttonNonFillPosition?: string;
  buttonNonFillMarginLeft?: number | string;
  buttonNonFillBottom?: number | string;
  buttonNonFillLeft?: number | string;
  buttonNonFillWidth?: number | string;
  buttonNonFillHeight?: number | string;
  button1BorderColor?: string;
  continueColor?: string;
  onPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonNonFill = ({
  buttonNonFillPosition,
  buttonNonFillMarginLeft,
  buttonNonFillBottom,
  buttonNonFillLeft,
  buttonNonFillWidth,
  buttonNonFillHeight,
  button1BorderColor,
  continueColor,
  onPress
}: ButtonNonFillType) => {
  const buttonNonFillStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonNonFillPosition),
      ...getStyleValue("marginLeft", buttonNonFillMarginLeft),
      ...getStyleValue("bottom", buttonNonFillBottom),
      ...getStyleValue("left", buttonNonFillLeft),
      ...getStyleValue("width", buttonNonFillWidth),
      ...getStyleValue("height", buttonNonFillHeight),
    };
  }, [
    buttonNonFillPosition,
    buttonNonFillMarginLeft,
    buttonNonFillBottom,
    buttonNonFillLeft,
    buttonNonFillWidth,
    buttonNonFillHeight,
  ]);

  const button11Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", button1BorderColor),
    };
  }, [button1BorderColor]);

  const continue1Style = useMemo(() => {
    return {
      ...getStyleValue("color", continueColor),
    };
  }, [continueColor]);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonNonFill, buttonNonFillStyle]}>
      <View style={[styles.button1, button11Style]} />
      <Text style={[styles.continue, continue1Style]}>Log in</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button1: {
    height: "101.4%",
    width: "100.24%",
    top: "-0.7%",
    right: "-0.12%",
    bottom: "-0.7%",
    left: "-0.12%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 0.8,
    position: "absolute",
  },
  continue: {
    top: "33.33%",
    left: "42.81%",
    fontSize: FontSize.ptReg_size,
    fontWeight: "500",
    fontFamily: FontFamily.ptMedium,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    position: "absolute",
  },
  buttonNonFill: {
    width: 327,
    height: 57,
  },
});

export default ButtonNonFill;
