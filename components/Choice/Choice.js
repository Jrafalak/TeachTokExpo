import React from "react";
import {
  Alert,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Choice = ({ text, isCorrect, isSelected, onPress }) => {
  const icon = isCorrect ? "thumbs-up" : "thumbs-down";

  var touchProps = {
    activeOpacity: 0.5,
    underlayColor: isCorrect ? "green" : "red",
    style: styles.container,
    // TODO: replace onPress with animation trigger
    onPress: () => Alert.alert(isCorrect ? "Correct!" : "Incorrect!"),
  };

  return (
    <TouchableHighlight {...touchProps}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, { width: "80%" }]}>{text}</Text>
        <Icon name={icon} size={24} color={"white"} />
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
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  correct: {
    backgroundColor: "green",
  },
  incorrect: {
    backgroundColor: "red",
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    color: "white",
  },
});

export default Choice;
