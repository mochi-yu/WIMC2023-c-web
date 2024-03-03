"use client";

import { Button, Divider, Stack, TextField } from "@mui/material";
import { LatLngExpression, icon } from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ChangeEventHandler, Dispatch, SetStateAction, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { PostWithLogin } from "@/lib/axios";
import { Loading } from "@/components/ui/loading";
import { AuthContext } from "@/components/contexts/auth";
import { RawRecordData } from "@/model/record";

export const AddRecord = () => {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [lat, setLat] = useState(36.11128719095136);
  const [lon, setLon] = useState(137.95052602342327);
  const [speed, setSpeed] = useState(10);
  const [records, setRecords] = useState<RawRecordData[]>([]);
  const [userId, setUserId] = useState(currentUser?.uid || "");
  const router = useRouter();

  const userIdChangeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setUserId(e.target.value);
  };

  const speedChangeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setSpeed(e.target.value as unknown as number);
  };

  const handleSave = async () => {
    setIsLoading(true);
    const data = {
      rawRecords: records,
      userId: userId,
    };
    await PostWithLogin("/records", data);
    setIsLoading(false);

    router.push("/admin");
  };

  const handleAddPoint = () => {
    const newRecord: RawRecordData = {
      time: Date.now(),
      lat: lat,
      lon: lon,
      speed: speed,
    };
    setRecords([...records, newRecord]);
  };

  const points: LatLngExpression[] = [];
  records.forEach((elm) => {
    points.push([elm.lat, elm.lon] as LatLngExpression);
  });

  const ICON = icon({
    iconUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon.png",
    iconSize: [25, 41],
  });

  return (
    <Stack spacing={2}>
      <MapContainer
        center={[lat || 0, lon || 0]}
        zoom={18}
        scrollWheelZoom={true}
        style={{
          margin: "auto",
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
          <Popup>{userId}</Popup>
        </Marker>
        <Polyline positions={points} />
      </MapContainer>
      <TextField label='スピード' value={speed} onChange={speedChangeHandler} />
      <Stack alignItems='end'>
        <Button
          variant='contained'
          sx={{ width: "auto", textAlign: "right" }}
          onClick={handleAddPoint}
        >
          ポイントを追加
        </Button>
      </Stack>

      <TextField label='ユーザID' value={userId} onChange={userIdChangeHandler} />
      <Stack alignItems='end'>
        <Button variant='contained' sx={{ width: "40px", textAlign: "right" }} onClick={handleSave}>
          保存
        </Button>
      </Stack>
      <Loading open={isLoading} />
      <Divider sx={{ height: "5px" }} />
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
