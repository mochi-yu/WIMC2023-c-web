"use client";

import { Button, Stack, TextField } from "@mui/material";
import { icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { PostWithLogin } from "@/lib/axios";
import { Loading } from "@/components/ui/loading";

export const AddPlace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lat, setLat] = useState(36.11128719095136);
  const [lon, setLon] = useState(137.95052602342327);
  const [placeName, setPlaceName] = useState("");
  const router = useRouter();

  const placeNameChangeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e,
  ) => {
    setPlaceName(e.target.value);
  };

  const handleSave = async () => {
    setIsLoading(true);
    const data = {
      placeName: placeName,
      lat: lat,
      lon: lon,
    };
    await PostWithLogin("/places", data);
    setIsLoading(false);

    router.push("/admin");
  };

  const ICON = icon({
    iconUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon.png",
    iconSize: [25, 41],
  });

  return (
    <Stack spacing={2} sx={{ m: "30px" }}>
      <MapContainer
        center={[lat || 0, lon || 0]}
        zoom={10}
        scrollWheelZoom={true}
        style={{
          margin: "auto",
          marginBottom: 10,
          marginTop: 10,
          padding: 10,
          height: "300px",
          width: "90%",
          borderRadius: "6px",
          zIndex: 0,
        }}
      >
        <GetCenter setLat={setLat} setLon={setLon} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker icon={ICON} position={[lat || 0, lon || 0]}>
          <Popup>{placeName}</Popup>
        </Marker>
      </MapContainer>
      <TextField label='地点名' value={placeName} onChange={placeNameChangeHandler} />
      <Stack alignItems='end'>
        <Button variant='contained' sx={{ width: "40px", textAlign: "right" }} onClick={handleSave}>
          保存
        </Button>
      </Stack>
      <Loading open={isLoading} />
    </Stack>
  );
};

interface Props {
  setLat: Dispatch<SetStateAction<number>>;
  setLon: Dispatch<SetStateAction<number>>;
}

const GetCenter = ({ setLat, setLon }: Props) => {
  const map = useMapEvents({
    moveend: () => {
      setLat(map.getCenter().lat);
      setLon(map.getCenter().lng);
    },
  });

  return null;
};
