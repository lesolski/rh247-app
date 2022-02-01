// ./components/Card.js

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Card = (props) => {
  return (
    <TouchableOpacity style={{ ...styles.card, ...props.style }}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Card;
