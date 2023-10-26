import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

import Icon from "react-native-vector-icons/FontAwesome";

import TimerIcon from "react-native-vector-icons/MaterialIcons";

const Header = (props) => {
  const { counter } = props;

  return (
    <View style={styles.header}>
      <View style={styles.timer}>
        <TimerIcon name="timer" size={20} color="#b6b5b0" />
        <Text style={styles.timerText}>{moment(counter).format("mm:ss")}</Text>
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
    top: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
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
