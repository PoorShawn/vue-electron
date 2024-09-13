import setIpcStoreEvents from '../../events/ipc/store.js';
import setIpcElectronStoreEvents from '../../events/ipc/electronStore.js';
import setIpcTabEvents from '../../events/ipc/tab.js';
import setIpcTabsEvents from '../../events/ipc/tabs.js';

export default function (){
  setIpcStoreEvents();

  setIpcElectronStoreEvents();

  setIpcTabEvents();

  setIpcTabsEvents();
}

