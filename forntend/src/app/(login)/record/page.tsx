import RecordContent  from "./content";

export default function RecordPage() {
  return (
    <>
      {/*記録一覧*/}
      <><h1 style={{textAlign: "center", marginTop: 30}}>記録一覧</h1></>
      <RecordContent />
      <RecordContent />
    </>
  );
}