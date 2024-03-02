"use client";

import { Loading } from "@/components/ui/loading";
import { GetWithLogin } from "@/lib/axios";
import { RecordData } from "@/model/record";
import { List, ListItem, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export const RecordList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recordsList, setRecordList] = useState<RecordData[]>([]);

  useEffect(() => {
    getRecordList();
  }, []);

  const getRecordList = async () => {
    const places = (await GetWithLogin("/records"))["records"];
    setRecordList(places);
    setIsLoading(false);
    return;
  };

  const recordListItems = recordsList.map((elm, index) => {
    return (
      <ListItem key={index}>
        {elm.courseID}: ({elm.distance}, {elm.maxSpeed}, {elm.totalTime})
      </ListItem>
    );
  }) || <></>;

  return (
    <>
      <Stack>
        <List>{recordListItems}</List>
      </Stack>
      <Loading open={isLoading} />
    </>
  );
};
