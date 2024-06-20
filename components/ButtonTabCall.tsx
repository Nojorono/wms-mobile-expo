import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ButtonTabCallType = {
  phone?: ImageSourcePropType;

  /** Style props */
  buttonTabCallPosition?: string;
  buttonTabCallMarginLeft?: number | string;
  buttonTabCallTop?: number | string;
  buttonTabCallLeft?: number | string;
  buttonTabCallHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonTabCall = ({
  phone,
  buttonTabCallPosition,
  buttonTabCallMarginLeft,
  buttonTabCallTop,
  buttonTabCallLeft,
  buttonTabCallHeight,
}: ButtonTabCallType) => {
  const buttonTabCallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonTabCallPosition),
      ...getStyleValue("marginLeft", buttonTabCallMarginLeft),
      ...getStyleValue("top", buttonTabCallTop),
      ...getStyleValue("left", buttonTabCallLeft),
      ...getStyleValue("height", buttonTabCallHeight),
    };
  }, [
    buttonTabCallPosition,
    buttonTabCallMarginLeft,
    buttonTabCallTop,
    buttonTabCallLeft,
    buttonTabCallHeight,
  ]);

  return (
    <View style={[styles.buttonTabCall, buttonTabCallStyle]}>
      <View style={[styles.buttonTabCallChild, styles.callPosition]} />
      <View style={styles.missedCallWrapper}>
        <Text style={[styles.missedCall, styles.callPosition]}>
          Missed Call
        </Text>
      </View>
      <Image style={styles.phoneIcon} contentFit="cover" source={phone} />
    </View>
  );
};

const styles = StyleSheet.create({
  callPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  buttonTabCallChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGray,
  },
  missedCall: {
    fontSize: FontSize.ptReguler_size,
    fontWeight: "500",
    fontFamily: FontFamily.ptMedium,
    color: Color.navy,
    textAlign: "left",
  },
  missedCallWrapper: {
    height: "38.89%",
    width: "41.94%",
    top: "30.56%",
    right: "29.03%",
    bottom: "30.56%",
    left: "29.03%",
    position: "absolute",
  },
  phoneIcon: {
    height: "66.67%",
    width: "15.48%",
    top: "16.67%",
    right: "78.06%",
    bottom: "16.67%",
    left: "6.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  buttonTabCall: {
    width: 155,
    height: 36,
  },
});

export default ButtonTabCall;
