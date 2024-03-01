interface RecordData {
  userID: string;
  userName: string;
  courseID: string;
  distance: number;
  maxSpeed: number;
  totalTime: number;

  records: RawRecordData[];
}

interface RawRecordData {
  time: number;
  lat: number;
  lon: number;
  speed: number;
}
