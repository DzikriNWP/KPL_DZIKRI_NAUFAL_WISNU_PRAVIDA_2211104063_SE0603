window.addEventListener('DOMContentLoaded', () => {
  const tombol = document.getElementById('hitungBtn');

  tombol.addEventListener('click', () => {
    const a = document.getElementById('baseInput').value;
    const b = document.getElementById('exponentInput').value;

    if (!a || !b) {
      document.getElementById('outputLabel').innerText = 'Mohon isi semua input!';
      return;
    }

    if (!window.api || !window.api.pangkat) {
      document.getElementById('outputLabel').innerText = 'Error: preload gagal!';
      return;
    }

    const hasil = window.api.pangkat(a, b);
    document.getElementById('outputLabel').innerText = `Hasil: ${hasil}`;
  });
});
