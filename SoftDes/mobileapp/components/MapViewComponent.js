import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function MapViewComponent() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 14.5995,
        longitude: 120.9842,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
    >
      <Marker coordinate={{ latitude: 14.5995, longitude: 120.9842 }} />
    </MapView>
  );
}