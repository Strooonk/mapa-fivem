// Tworzymy mapę
var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2
});

// ROZMIAR MAPY (MUSI PASOWAĆ DO ROZDZIELCZOŚCI OBRAZU!)
var bounds = [[0, 0], [8192, 8192]];

// Ładujemy obraz mapy GTA
L.imageOverlay('map/gta_map.jpg', bounds).addTo(map);

// Dopasowujemy widok
map.fitBounds(bounds);


// ===== PIERWSZA PINEZKA =====
L.marker([4567, 3740]).addTo(map)
  .bindPopup(`
    <h3>Skrytka X</h3>
    <img src="img/19.png" width="200">
   `);

// ===== DRUGA PINEZKA =====
L.marker([4526, 3668]).addTo(map)
  .bindPopup(`
    <h3>Skrytka Y</h3>
    <img src="img/sloma.png" width="200">
   `);

// ===== TRZECIA PINEZKA =====
L.marker([4545, 3927]).addTo(map)
  .bindPopup(`
    <h3>Skrytka Z</h3>
    <img src="img/fabryka.png" width="200">
   `);













// ===== KLIK NA MAPĘ → PINEZKA Z KOORDYNATAMI =====
let tempMarker = null;

map.on('click', function(e) {
  const x = Math.round(e.latlng.lat);
  const y = Math.round(e.latlng.lng);

  // usuwamy poprzednią tymczasową pinezkę
  if (tempMarker) {
    map.removeLayer(tempMarker);
  }

  tempMarker = L.marker([x, y]).addTo(map)
    .bindPopup(`
      <b>Koordynaty mapy</b><br>
      X: ${x}<br>
      Y: ${y}<br><br>
      <small>Skopiuj i użyj do pinezki</small>
    `)
    .openPopup();
});
