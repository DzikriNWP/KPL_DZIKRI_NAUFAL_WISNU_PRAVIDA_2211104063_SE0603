const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  cariTandaBilangan: (a) => {
    a = Number(a);
    if (a < 0) return 'Negatif';
    if (a > 0) return 'Positif';
    return 'Nol';
  }
});
