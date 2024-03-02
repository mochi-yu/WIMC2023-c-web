"use client";

import { Box } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useEffect, useState } from "react";
import { PlaceData } from "@/model/place";
import { GetWithLogin } from "@/lib/axios";
import Link from "next/link";

const ICON = icon({
  iconUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

const Map = () => {
  const initLat = 36.11128719095136;
  const initLon = 137.95052602342327;
  const [places, setPlaces] = useState<PlaceData[]>([]);

  useEffect(() => {
    getPlaceList();
  }, []);

  const getPlaceList = async () => {
    const places = (await GetWithLogin("/places"))["places"];
    setPlaces(places);
    return;
  };

  const placeMarker = places.map((elm) => {
    return (
      <Marker icon={ICON} position={[elm.lat, elm.lon]} key={elm.placeId}>
        <Popup>
          <Link href={"/places?placeId=" + elm.placeId}>{elm.placeName}</Link>
        </Popup>
      </Marker>
    );
  });

  return (
    <Box
      sx={{
        backgroundColor: "#b2cbe4",
        m: "30px",
        borderRadius: "6px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      }}
    >
      <MapContainer
        center={[initLat, initLon]}
        zoom={8}
        scrollWheelZoom={true}
        style={{
          margin: "auto",
          marginBottom: 10,
          marginTop: 10,
          padding: 10,
          height: "300px",
          width: "300px",
          borderRadius: "6px",
          zIndex: 0,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {placeMarker}
      </MapContainer>
    </Box>
  );
};

export default Map;
