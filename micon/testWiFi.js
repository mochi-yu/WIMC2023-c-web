import wifi from "node-wifi"
import sleep from 'sleep-promise';
import net from "net";

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});

// Scan networks
// await wifi.scan().then((error, networks) => {
//   if (error) {
//     console.log(error);
//   } else {
//     // console.log(networks);
//   }
// });

// Connect to a network
const espWiFiSSID = "ESP32AP-WiFi1"
const espWiFiPass = "esp32apwifi"
await wifi.connect({ ssid: espWiFiSSID, password: espWiFiPass }).then(() => {
  console.log('Connected'); 
});

// List the current wifi connections
await wifi.getCurrentConnections().then((error, currentConnections) => {
  if (error) {
    console.log(error);
  } else {
    console.log(currentConnections);
  }
});

main();

let count = 0
function main() {
  // ソケット通信の処理
  const espHost = '192.168.30.3'
  const espPort = "3030"
  const client = net.connect(espPort, espHost, () => {
    console.log('connected to server');
  });

  client.on("data", data => {
    count++
    console.log(data)
    if(count == 2) {
      client.destroy()
    }
  })
}

// Disconnect from a network
// not available on all os for now
// wifi.disconnect(error => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Disconnected');
//   }
// });

// Delete a saved network
// not available on all os for now
// wifi.deleteConnection({ ssid: 'ssid' }, error => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Deleted');
//   }
// });
