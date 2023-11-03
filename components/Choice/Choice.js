import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from "react-native";
import LottieView from "lottie-react-native";

const Choice = ({
  text,
  optionId,
  isCorrect,
  completed,
  selectedChoice,
  onPress,
}) => {
  const animation = useRef(null);

  const btnBackground = completed
    ? isCorrect
      ? "rgba(104, 195, 163, 0.6)"
      : "rgba(210, 77, 87, 0.6);"
    : "rgba(255, 255, 255, 0.5)";

  var touchProps = {
    activeOpacity: 0.5,
    underlayColor: btnBackground,
    style: {
      ...styles.container,
      backgroundColor: btnBackground,
    },

    onPress: () => {
      onPress();
    },
  };

  return (
    <TouchableHighlight testID="choice" {...touchProps}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, { width: "80%" }]}>{text}</Text>
        <View style={!isCorrect && { transform: [{ rotateX: "180deg" }] }}>
          {selectedChoice === optionId && (
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 40,
                height: 40,
                backgroundColor: "transparent",
              }}
              source={require("../../assets/Animation.json")}
            />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    minHeight: 60,
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Choice;
