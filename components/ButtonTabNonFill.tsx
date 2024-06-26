import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ButtonTabNonFillType = {
  /** Style props */
  buttonTabNonFillPosition?: string;
  buttonTabNonFillMarginLeft?: number | string;
  buttonTabNonFillTop?: number | string;
  buttonTabNonFillLeft?: number | string;
  buttonTabNonFillHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonTabNonFill = ({
  buttonTabNonFillPosition,
  buttonTabNonFillMarginLeft,
  buttonTabNonFillTop,
  buttonTabNonFillLeft,
  buttonTabNonFillHeight,
}: ButtonTabNonFillType) => {
  const buttonTabNonFillStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonTabNonFillPosition),
      ...getStyleValue("marginLeft", buttonTabNonFillMarginLeft),
      ...getStyleValue("top", buttonTabNonFillTop),
      ...getStyleValue("left", buttonTabNonFillLeft),
      ...getStyleValue("height", buttonTabNonFillHeight),
    };
  }, [
    buttonTabNonFillPosition,
    buttonTabNonFillMarginLeft,
    buttonTabNonFillTop,
    buttonTabNonFillLeft,
    buttonTabNonFillHeight,
  ]);

  return (
    <View style={[styles.buttonTabNonFill, buttonTabNonFillStyle]}>
      <View style={[styles.buttonTabNonFillChild, styles.whatsappPosition]} />
      <View style={styles.whatsappWrapper}>
        <Text style={[styles.whatsapp, styles.whatsappPosition]}>WhatsApp</Text>
      </View>
      <Image
        style={styles.whatsappIcon}
        contentFit="cover"
        source={require("../assets/whatsapp.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whatsappPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  buttonTabNonFillChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGray,
  },
  whatsapp: {
    fontSize: FontSize.ptReguler_size,
    fontWeight: "400",
    fontFamily: FontFamily.ptMedium,
    color: Color.navy,
    textAlign: "left",
  },
  whatsappWrapper: {
    height: "38.89%",
    width: "39.6%",
    top: "30.56%",
    right: "30.2%",
    bottom: "30.56%",
    left: "30.2%",
    position: "absolute",
  },
  whatsappIcon: {
    height: "66.67%",
    width: "16.11%",
    top: "16.67%",
    right: "77.18%",
    bottom: "16.67%",
    left: "6.71%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  buttonTabNonFill: {
    width: 149,
    height: 36,
  },
});

export default ButtonTabNonFill;
