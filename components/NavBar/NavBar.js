import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import TimerIcon from "@expo/vector-icons/MaterialCommunityIcons";

const NavBar = () => {
  return (
    <View testID="navbar-container" style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="home-sharp" size={24} color="#fff" />
        {/* a complete app would obviously conditionally set one button to active, hard-coding is just for example */}
        <Text style={{ ...styles.label, ...styles.active }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="compass" size={24} color="#666" />
        <Text style={styles.label}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <TimerIcon name="timer" size={24} color="#666" />
        <Text style={styles.label}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="bookmark" size={24} color="#666" />
        <Text style={styles.label}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="person-circle" size={24} color="#666" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#000",
    color: "#666",
    elevation: 3,
    width: "100%",
  },
  button: {
    padding: 10,
    alignItems: "center",
  },
  label: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  active: {
    color: "white",
  },
});

export default NavBar;
