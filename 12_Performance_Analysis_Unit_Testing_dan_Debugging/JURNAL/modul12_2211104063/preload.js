const { contextBridge } = require('electron');
const { cariNilaiPangkat } = require('./utils');

contextBridge.exposeInMainWorld('api', {
  pangkat: cariNilaiPangkat
});
