function cekTanda() {
  const input = document.getElementById('inputAngka').value;
  const hasil = window.api.cariTandaBilangan(input);
  document.getElementById('outputLabel').innerText = hasil;
}
