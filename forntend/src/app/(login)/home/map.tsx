"use client";

import { Box } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

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
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[setLat, setLon]}>
        <Popup>
          {Data.placeName}
        </Popup>
      </Marker>
    </MapContainer>
    </Box>
  );
};

export default Map;