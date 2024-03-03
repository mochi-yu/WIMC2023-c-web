"use client";

import { Loading } from "@/components/ui/loading";
import { GetWithLogin } from "@/lib/axios";
import { PlaceData } from "@/model/place";
import { List, ListItem, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export const PlaceList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [placeList, setPlaceList] = useState<PlaceData[]>([]);

  useEffect(() => {
    getPlaceList();
  }, []);

  const getPlaceList = async () => {
    const places = (await GetWithLogin("/places"))["places"];
    setPlaceList(places);
    setIsLoading(false);
    return;
  };

  const PlaceListItems = placeList.map((elm, index) => {
    return (
      <ListItem key={index}>
        {elm.placeName}: ({elm.lat}, {elm.lon})
      </ListItem>
    );
  }) || <></>;

  return (
    <>
      <Stack>
        <List>{PlaceListItems}</List>
      </Stack>
      <Loading open={isLoading} />
    </>
  );
};
