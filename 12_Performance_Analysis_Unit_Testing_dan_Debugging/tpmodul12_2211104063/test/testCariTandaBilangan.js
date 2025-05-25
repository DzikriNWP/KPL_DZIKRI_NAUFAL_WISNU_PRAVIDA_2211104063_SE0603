const assert = require('assert');

function cariTandaBilangan(a) {
  a = Number(a);
  if (a < 0) return 'Negatif';
  if (a > 0) return 'Positif';
  return 'Nol';
}

// Unit Test
try {
  assert.strictEqual(cariTandaBilangan(-10), 'Negatif');
  assert.strictEqual(cariTandaBilangan(0), 'Nol');
  assert.strictEqual(cariTandaBilangan(15), 'Positif');
  console.log('✅ Semua unit test berhasil dijalankan.');
} catch (error) {
  console.error('❌ Gagal:', error.message);
}
