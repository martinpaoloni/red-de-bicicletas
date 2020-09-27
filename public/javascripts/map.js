var map = L.map('main_map').setView([-34.724225, -58.2817394], 13); // Quilmes

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.7253769, -58.2515929]).addTo(map); // Brandsen y Mitre
L.marker([-34.7198556, -58.2556818]).addTo(map); // Alsina y Mitre
L.marker([-34.7203426, -58.2566075]).addTo(map); // Alsina y Alvear