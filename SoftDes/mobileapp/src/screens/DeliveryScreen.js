import React from "react";
import { View, Button } from "react-native";
import { optimizeRoute } from "../services/api";

export default function DeliveryScreen() {

  const runAlgo = async () => {
    const graph = {
      A: { B: 5, C: 2 },
      B: { D: 1 },
      C: { D: 7 },
      D: {}
    };

    const res = await optimizeRoute({ graph, start: "A" });
    console.log(res.data);
  };

  return (
    <View>
      <Button title="Optimize Route" onPress={runAlgo} />
    </View>
  );
}