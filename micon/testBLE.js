import { createBluetooth } from 'node-ble';
import sleep from 'sleep-promise';

const main = async () => {
  const { bluetooth, destroy } = createBluetooth();
  const adapter = await bluetooth.defaultAdapter();
  if (! await adapter.isDiscovering()) {
    console.log('Discovering:');
    await adapter.startDiscovery();
    while (true) {
      const devices = await adapter.devices();
      console.log(devices);
      await sleep(3000);
    }
  }
};

main();
