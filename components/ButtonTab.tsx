import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ButtonTabType = {
  /** Style props */
  buttonTabPosition?: string;
  buttonTabMarginLeft?: number | string;
  buttonTabTop?: number | string;
  buttonTabLeft?: number | string;
  rectangleViewBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonTab = ({
  buttonTabPosition,
  buttonTabMarginLeft,
  buttonTabTop,
  buttonTabLeft,
  rectangleViewBackgroundColor,
}: ButtonTabType) => {
  const buttonTabStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonTabPosition),
      ...getStyleValue("marginLeft", buttonTabMarginLeft),
      ...getStyleValue("top", buttonTabTop),
      ...getStyleValue("left", buttonTabLeft),
    };
  }, [buttonTabPosition, buttonTabMarginLeft, buttonTabTop, buttonTabLeft]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  return (
    <View style={[styles.buttonTab, buttonTabStyle]}>
      <View
        style={[
          styles.buttonTabChild,
          styles.emailPosition,
          rectangleView1Style,
        ]}
      />
      <View style={styles.emailWrapper}>
        <Text style={[styles.email, styles.emailPosition]}>Email</Text>
      </View>
      <View style={styles.email1} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  buttonTabChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorRoyalblue_100,
  },
  email: {
    fontSize: FontSize.ptReguler_size,
    fontWeight: "300",
    fontFamily: FontFamily.ptMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  emailWrapper: {
    height: "38.89%",
    width: "26.23%",
    top: "30.56%",
    right: "36.89%",
    bottom: "30.56%",
    left: "36.89%",
    position: "absolute",
  },
  email1: {
    height: "66.67%",
    width: "19.67%",
    top: "16.67%",
    right: "72.13%",
    bottom: "16.67%",
    left: "8.2%",
    position: "absolute",
  },
  groupIcon: {
    height: "35%",
    width: "13.11%",
    top: "33.33%",
    right: "75.41%",
    bottom: "31.67%",
    left: "11.48%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  buttonTab: {
    width: 122,
    height: 36,
  },
});

export default ButtonTab;
