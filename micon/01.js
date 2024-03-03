// For network
import wifi from "node-wifi"
import net from "net";
import axios from "axios"
import sleep from 'sleep-promise';

// For GPS
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import GPSpackage from 'gps';
const GPS = GPSpackage.GPS;

// 定数
// スイッチ用のWi-Fi設定値
const espWiFiSSID = "ESP32AP-WiFi1"
const espWiFiPass = "esp32apwifi"

// インターネット用のWi-Fi設定値
const netWiFiSSID = "hoge"
const netWiFiPass = "hogehoge"

// ソケット通信用の設定値
const espHost = '192.168.30.3'
const espPort = 3030

// APIの設定値
const APIBaseUrl = "https://us-central1-wimc2023-c-web.cloudfunctions.net/v1"

// 変数
let isReset = true;
let isStart = false;
let record = [];
let c = undefined;

// GPSの設定値
const GPSPort = new SerialPort({ path: '/dev/ttyS0', baudRate: 9600 })
const GPSParser = GPSPort.pipe(new ReadlineParser())
const gps = new GPS();

GPSParser.on('data', function (txtData) {
  gps.update(txtData);
});

// GPSのデータ取得時の処理
gps.on('data', function (data) {
  if (data.type == "RMC") { // "RMC"タイプデータを読むと速度(ノット)が得られる
    if(!data.lat) {
      console.log("gps get failed.")
      return
    } else {
      console.log("gps data get!")
      if(isStart) {
        console.log("\tlat: " +  data.lat)
        console.log("\tlon: " + data.lon)
        console.log("\tspeed: " + data.speed + " km/h")
      }
      return
    }
  }
});

wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});

await init()

// async function sendData() {
//   record.push({
//     time: 0,
//     lat: 0,
//     lon: 0,
//     speed: 0,
//   })
//   if(record.length != 0) {
//     // 接続先のWiFiを探す
//     while(1) {
//       let isFind = false
//       await wifi.scan().then((networks) => {
//         for(let i = 0; i < networks.length; i++) {
//           if(networks[i].ssid == netWiFiSSID) {
//             isFind = true;
//             break;
//           }
//         }
//       })

//       if(isFind) break;
//       console.log("wifi searching...")
//       sleep(1000)
//     }

//     // インターネットに接続する
//     await wifi.deleteConnection({ssid: espWiFiSSID})
//     await wifi.connect({ ssid: netWiFiSSID, password: netWiFiPass })
//       .then(() => {
//         console.log('net Connected.'); 
//       })
//       .catch((e) => {
//         console.log(e)
//       });

//     // データを送信
//     const data = {
//       rawRecords: record,
//       userId: "hoge"
//     }
//     await axios.post(APIBaseUrl + "/records", data)
//     .catch(e => {
//       console.log(e)
//     })
//     .then(() => {
//       console.log("data send.")
//     })

//     record = []
//   } else {
//     console.log("record is empty.")
//   }

//   init();
// }

async function init() {
  // スイッチ用にESPに接続する
  await wifi.connect({ ssid: espWiFiSSID, password: espWiFiPass })
    .then(() => {
      console.log('ESP32 Connected.'); 
    })
    .catch((e) => {
      console.log(e)
    });

  await wifi.getCurrentConnections().then((error, currentConnections) => {
    if (error) {
      console.log(error);
    } else {
      console.log(currentConnections);
    }
  });
  
  socketCommunicate()
}

function socketCommunicate() {
  console.log("call socketCommunicate()")
  c = net.createConnection({port: espPort, host: espHost});

  c.on("connect", () => {
    console.log('connected to socket.');
  })
  
  c.on("data", data => {
    if(!isStart) {
      console.log("record start.")
      isStart = true;
    } else {
      console.log("record stop.")
      isStart = false;
      // c.destroy()
      // sendData()
    }
  })
}