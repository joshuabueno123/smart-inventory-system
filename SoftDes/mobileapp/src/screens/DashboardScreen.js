import React from "react";
import { View, Button } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View>
      <Button title="Inventory" onPress={() => navigation.navigate("Inventory")} />
      <Button title="Delivery" onPress={() => navigation.navigate("Delivery")} />
    </View>
  );
}