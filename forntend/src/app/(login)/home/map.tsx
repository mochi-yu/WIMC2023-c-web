"use client";

import { Box } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon.png",
  iconSize: [25, 41],
})

const Data = {
  placeId: 0,
  placeName: "白馬五竜",
};

const Map = () => {
  const setLat = 36.66324682492006;  //緯度
  const setLon = 137.83681420357394; //経度
  
  return (
    <Box sx={{
      backgroundColor: "#b2cbe4", 
      m:"30px", 
      borderRadius: "6px",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
    }}>
    <MapContainer
      center={[setLat, setLon]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ 
        margin: "auto", 
        marginBottom: 10,
        marginTop: 10,
        padding:10,
        height: "300px", 
        width: "300px", 
        borderRadius: "6px",
        zIndex: 0
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={[setLat, setLon]}>
        <Popup>
          {Data.placeName}
        </Popup>
      </Marker>
    </MapContainer>
    </Box>
  );
};

export default Map;