import setIpcStoreEvents from '../../events/ipc/store.js';
import setIpcElectronStoreEvents from '../../events/ipc/electronStore.js';

export default function (){
  setIpcStoreEvents();

  setIpcElectronStoreEvents();
}

