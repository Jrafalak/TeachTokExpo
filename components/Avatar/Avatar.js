import React from "react";
import { Alert, View, ImageBackground, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

const Avatar = ({ imageUrl }) => {
  return (
    <View testID="avatar-container" style={styles.container}>
      <ImageBackground
        testID="avatar-image"
        source={{ uri: imageUrl.imageUrl }}
        resizeMode="cover"
        style={styles.image}
      />
      <View testID="avatar-plus-icon" style={styles.plus}>
        <Icon name="pluscircle" size={20} color="#29b18f" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 15,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: 46,
    height: 46,
  },
  plus: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "white",
    position: "absolute",
    bottom: -10,
    left: 14,
    elevation: 5,
    zIndex: 5,
  },
});

export default Avatar;
