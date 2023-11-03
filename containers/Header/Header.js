import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import Icon from "@expo/vector-icons/FontAwesome";
import TimerIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { milliToMinuteSecond } from "../../utils";

const Header = ({ counter }) => {
  return (
    <View testID="header" style={styles.header}>
      <View style={styles.timer}>
        <TimerIcon name="timer" size={20} color="#b6b5b0" />
        <Text testID="timer-text" style={styles.timerText}>
          {counter > 0 ? milliToMinuteSecond(counter) : "0 m"}
        </Text>
      </View>
      <View style={styles.forYouView}>
        <Text style={{ ...styles.headerText, ...styles.forYouText }}>
          For You
        </Text>
        <View style={styles.forYouLine}></View>
      </View>
      <View style={styles.searchView}>
        <Icon name="search" size={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 40,
    height: 70,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "33%",
  },
  timerText: {
    color: "#b6b5b0",
    marginLeft: 5,
  },
  forYouView: {
    flexDirection: "column",
    alignItems: "center",
    width: "33%",
  },
  forYouText: {
    marginBottom: 5,
  },
  searchView: {
    width: "33%",
    alignItems: "flex-end",
  },
  forYouLine: {
    width: 28,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
});

export default Header;
