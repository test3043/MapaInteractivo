// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259]).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();


L.icon = function (options) {
    return new L.Icon(options);
};

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: '/imagenes/sombra.png',
        iconSize:     [22, 22], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 3],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

    }
});

var iconoPlaza = new LeafIcon({ iconUrl: '/imagenes/town-hall_3438358.png' }),
    iconoMuseo = new LeafIcon({ iconUrl: '/imagenes/skull_764760.png' }),
    iconoParque = new LeafIcon({ iconUrl: '/imagenes/pine-tree_3184640.png' }),
    iconoMuseo2 = new LeafIcon({ iconUrl: '/imagenes/temple_2276638.png' }),
    iconoFabrica = new LeafIcon({ iconUrl: '/imagenes/milk-factory_12687275.png' });

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoPlaza }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");
// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconoMuseo }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");
// Marcador en el Parque Rodolfo Landeros
var parqueRodolfo = L.marker([21.851175, -102.288122], { icon: iconoParque }).addTo(map);
parqueRodolfo.bindPopup("<b>Parque Rodolfo Landeros Gallegos</b><br>Acercamiento a la naturaleza.");
// Marcador en el Museo José Guadalupe Posada
var museoPosada = L.marker([21.875405, -102.292859], { icon: iconoMuseo2 }).addTo(map);
museoPosada.bindPopup("<b>Museo José Guadalupe Posada</b><br>Descubre el grabado de la caricatura política.");
// Marcador en el Parque Tres Centurias
var parqueTres = L.marker([21.884367, -102.280741], { icon: iconoFabrica }).addTo(map);
parqueTres.bindPopup("<b>Parque Tres Centurias</b><br>La historia del ferrocaril.");


// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");


var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");


var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};
var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};
L.control.layers(baseMaps, overlayMaps).addTo(map);


