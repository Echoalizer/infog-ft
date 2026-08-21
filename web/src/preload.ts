// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// To expose an API in the renderer, we need to load it to 'window' global in preload.js
// Native API: menus, dialogs, files...

import {contextBridge, ipcRenderer} from 'electron/renderer';

contextBridge.exposeInMainWorld("ElectronAPI", {
    openFileBrowser: () => {
        ipcRenderer.send('openFileBrowser');
    },
})
