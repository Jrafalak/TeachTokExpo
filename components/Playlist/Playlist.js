import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PlaylistIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Playlist = ({ text }) => {
  return (
    <View style={styles.container}>
      <PlaylistIcon name="play-box-multiple" size={20} color="white" />
      <Text style={styles.text}>{text}</Text>
      <Icon name="arrow-forward-ios" size={20} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#161616",
  },
  text: {
    flex: 1,
    marginLeft: 10,
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Playlist;
