import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { getInventory } from "../services/api";

export default function InventoryScreen() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await getInventory();
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <View>
      <Text>Inventory</Text>
      {items.map((item, i) => (
        <Text key={i}>{item.name} - {item.quantity}</Text>
      ))}
      <Button title="Refresh" onPress={fetchItems} />
    </View>
  );
}