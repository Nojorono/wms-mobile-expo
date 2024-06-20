import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

export type ArrowBackButtonType = {
  /** Style props */
  arrowBackButtonPosition?: string;
  arrowBackButtonMarginLeft?: number | string;
  arrowBackButtonTop?: number | string;
  arrowBackButtonLeft?: number | string;
  rectangleViewBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ArrowBackButton = ({
  arrowBackButtonPosition,
  arrowBackButtonMarginLeft,
  arrowBackButtonTop,
  arrowBackButtonLeft,
  rectangleViewBackgroundColor,
}: ArrowBackButtonType) => {
  const arrowBackButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", arrowBackButtonPosition),
      ...getStyleValue("marginLeft", arrowBackButtonMarginLeft),
      ...getStyleValue("top", arrowBackButtonTop),
      ...getStyleValue("left", arrowBackButtonLeft),
    };
  }, [
    arrowBackButtonPosition,
    arrowBackButtonMarginLeft,
    arrowBackButtonTop,
    arrowBackButtonLeft,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  return (
    <View style={[styles.arrowBackButton, arrowBackButtonStyle]}>
      <View style={[styles.arrowBackButtonChild, rectangleViewStyle]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowBackButtonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorRoyalblue_100,
    position: "absolute",
  },
  lineIcon: {
    height: "35.29%",
    width: "17.65%",
    top: "32.35%",
    right: "41.18%",
    bottom: "32.35%",
    left: "41.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  arrowBackButton: {
    width: 34,
    height: 34,
  },
});

export default ArrowBackButton;
