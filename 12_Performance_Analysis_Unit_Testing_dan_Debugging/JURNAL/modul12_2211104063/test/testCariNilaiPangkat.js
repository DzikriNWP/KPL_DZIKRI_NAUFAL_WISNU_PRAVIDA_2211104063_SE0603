const assert = require('assert');
const { cariNilaiPangkat } = require('../utils');

try {
  assert.strictEqual(cariNilaiPangkat(2, 3), 8);
  assert.strictEqual(cariNilaiPangkat(0, 0), 1);
  assert.strictEqual(cariNilaiPangkat(4, -2), -1);
  assert.strictEqual(cariNilaiPangkat(101, 3), -2);
  assert.strictEqual(cariNilaiPangkat(2, 11), -2);
  assert.strictEqual(cariNilaiPangkat(9, 30), -3);
  console.log("✅ Semua test lulus!");
} catch (e) {
  console.error("❌ Test gagal:", e.message);
}
