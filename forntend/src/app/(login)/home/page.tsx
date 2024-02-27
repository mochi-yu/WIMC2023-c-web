import { RecentRecordCard } from "./recent_record_card";

export default function HomePage() {
  return (
    <>
      {/*ホーム*/}
      <h1 style={{ textAlign: "center", marginTop: 30 }}>ホーム</h1>
      <RecentRecordCard />
      {/*ここに Google Map埋め込みたい*/}
    </>
  );
}
