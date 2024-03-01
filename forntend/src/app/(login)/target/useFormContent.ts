import { useState } from "react";
import { useCookies } from "react-cookie";

export function useFormContent() {
  const [cookies, setCookie, removeCookie] = useCookies(["distance", "time", "speed", "memo"]);

  const [distance, setDistance] = useState(cookies.distance as string);
  const [time, setTime] = useState(cookies.time as string);
  const [speed, setSpeed] = useState(cookies.speed as string);
  const [memo, setMemo] = useState(cookies.memo as string);

  function handleDistanceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDistance(e.target.value)
  }
  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(e.target.value)
  }
  function handleSpeedChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSpeed(e.target.value)
  }
  function handleMemoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMemo(e.target.value)
  }

  function handleSave() {
    setCookie("distance", distance);
    setCookie("time", time);
    setCookie("speed", speed);
    setCookie("memo", memo);
  }

  return [{distance, time, speed, memo}, {handleDistanceChange, handleTimeChange, handleSpeedChange, handleMemoChange, handleSave}]

}