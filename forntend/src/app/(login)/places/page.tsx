"use client";

import { GetWithLogin } from "@/lib/axios";
import { PlaceData } from "@/model/place";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PlacePage() {
  const searchParams = useSearchParams();
  const placeId = searchParams.get("placeId");
  const [place, setPlace] = useState<PlaceData>();

  useEffect(() => {
    getPlace();
  }, []);

  const getPlace = async () => {
    const places = (await GetWithLogin("/places"))["places"] as PlaceData[];
    let targetPlace: PlaceData | undefined = undefined;
    for (let i = 0; i < places.length; i++) {
      if (places[i].placeId == placeId) {
        targetPlace = places[i];
        break;
      }
    }
    setPlace(targetPlace);
  };

  return (
    <Stack sx={{ m: "30px", minHeight: "80vh" }}>
      <h2
        style={{
          textAlign: "center",
          borderRadius: "10px",
          backgroundColor: "#4496d3",
          color: "white",
        }}
      >
        {place?.placeName || "読み込み中"}
      </h2>
    </Stack>
  );
}
