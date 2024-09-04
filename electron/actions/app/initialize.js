import { app } from 'electron';

import setGlobalVariables from "./setGlobalVariables.js";
import setAppEvents from './setEvents.js';
import setupApp from './setup.js';

export default function (){
    //设置全局变量
    setGlobalVariables();

    //设置Electron的事务（event）
    setAppEvents();

    //启动窗口等初始化工作
    app.whenReady().then(setupApp);
}
