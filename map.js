const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let MyMap = L.map('MyMap').setView([-1.505,11.65],13)

L.tileLayer(tilesProvider, {
    maxZoom: 18,}).addTo(MyMap)

let marker = L.marker([-1.505,11.65]).addTo(MyMap)