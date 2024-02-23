import Homecontent from "./content";

export default function HomePage() {
  return (
    <>
      {/*ホーム*/}
      <><h1 style={{textAlign: "center", marginTop: 30}}>ホーム</h1></>
      <Homecontent />
      {/*ここに Google Map埋め込みたい*/}
    </>
  );
}