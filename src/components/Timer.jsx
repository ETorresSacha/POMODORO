import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ time }) => {
  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
};

export default Timer;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
  },
});
