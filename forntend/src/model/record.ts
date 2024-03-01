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
