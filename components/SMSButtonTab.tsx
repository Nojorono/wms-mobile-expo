import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type SMSButtonTabType = {
  /** Style props */
  sMSButtonTabPosition?: string;
  sMSButtonTabMarginLeft?: number | string;
  sMSButtonTabTop?: number | string;
  sMSButtonTabLeft?: number | string;
  sMSButtonTabHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SMSButtonTab = ({
  sMSButtonTabPosition,
  sMSButtonTabMarginLeft,
  sMSButtonTabTop,
  sMSButtonTabLeft,
  sMSButtonTabHeight,
}: SMSButtonTabType) => {
  const sMSButtonTabStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sMSButtonTabPosition),
      ...getStyleValue("marginLeft", sMSButtonTabMarginLeft),
      ...getStyleValue("top", sMSButtonTabTop),
      ...getStyleValue("left", sMSButtonTabLeft),
      ...getStyleValue("height", sMSButtonTabHeight),
    };
  }, [
    sMSButtonTabPosition,
    sMSButtonTabMarginLeft,
    sMSButtonTabTop,
    sMSButtonTabLeft,
    sMSButtonTabHeight,
  ]);

  return (
    <View style={[styles.smsButtonTab, sMSButtonTabStyle]}>
      <View style={[styles.smsButtonTabChild, styles.smsPosition]} />
      <View style={styles.smsWrapper}>
        <Text style={[styles.sms, styles.smsPosition]}>SMS</Text>
      </View>
      <Image
        style={styles.commentFilledIcon}
        contentFit="cover"
        source={require("../assets/comment-filled.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smsPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  smsButtonTabChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGray,
  },
  sms: {
    fontSize: FontSize.ptReguler_size,
    fontWeight: "500",
    fontFamily: FontFamily.ptMedium,
    color: Color.navy,
    textAlign: "left",
  },
  smsWrapper: {
    height: "38.89%",
    width: "22.41%",
    top: "30.56%",
    right: "38.79%",
    bottom: "30.56%",
    left: "38.79%",
    position: "absolute",
  },
  commentFilledIcon: {
    height: "66.67%",
    width: "20.69%",
    top: "16.67%",
    right: "70.69%",
    bottom: "16.67%",
    left: "8.62%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  smsButtonTab: {
    width: 116,
    height: 36,
  },
});

export default SMSButtonTab;
