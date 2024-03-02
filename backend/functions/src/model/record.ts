export interface RecordData {
  userID: string;
  userName: string;
  courseID: string;
  distance: number;
  maxSpeed: number;
  totalTime: number;

  records: RawRecordData[];
}

export interface RawRecordData {
  time: number;
  lat: number;
  lon: number;
  speed: number;
}

export const RawRecord2Model = (data: any): RawRecordData[] => {
  const raw: RawRecordData[] = [];
  data.forEach((elm: { [prop: string]: any }) => {
    raw.push({
      time: elm["time"],
      lat: elm["lat"],
      lon: elm["lon"],
      speed: elm["speed"],
    });
  });

  return raw;
};

export const RecordData2Model = (data: { [prop: string]: any }): RecordData => {
  const rawData = RawRecord2Model(data.get("records"));

  return {
    userID: data.get("userId"),
    userName: data.get("userName"),
    courseID: data.get("courseID"),
    distance: data.get("distance"),
    maxSpeed: data.get("maxSpeed"),
    totalTime: data.get("totalTime"),
    records: rawData,
  };
};
