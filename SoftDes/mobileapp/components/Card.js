import React from "react";
import { View } from "react-native";

export default function Card({ children }) {
  return <View style={{ padding: 10, borderWidth: 1 }}>{children}</View>;
}