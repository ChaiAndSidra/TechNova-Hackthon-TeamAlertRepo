/*map related stuff goes here */

var map = L.map('map').setView([51.505, -0.09], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("Be aware!")
    .openOn(map);


const dummyDisasters = [{
        lat: 51.513,
        long: -0.09,
        disasterType: "Fire"
    },
    {
        lat: 52.513,
        long: -0.18,
        disasterType: "Earthquake"
    }, {
        lat: 51.513,
        long: -0.1,
        disasterType: "Flood"
    },
    {
        lat: 51.512,
        long: -0.1,
        disasterType: "Tsunami"
    },
    {
        lat: 51.517,
        long: -0.11,
        disasterType: "Crime"
    }
]

const disasterColors = {
        Fire: '#f03',
        Earthquake: '#CD7F32',
        Flood: "#0000F0",
        Tsunami: "#AF44AF",
        Crime: "#00FF00"
    }
    // disasterColors['Fire'] (equals '#f03')

/**
 * Input: datapoints: Array of objects, representing disasters. Draw on to main map.
 */
function drawAlerts(dataPoints) {

    // Javascript is flexibly typed!
    // Iterate through datapoints
    for (let i = 0; i < dataPoints.length; i++) {
        // for data, draw circle.
        let disaster = dataPoints[i]; // { lat: flt, long: flt, disasterType: str}
        console.log('disaster', disaster)
        console.log('disasterType', disaster.disasterType) // Fire, EarthQuake, Flood, Tsunami, Crime
        var circle = L.circle([disaster.lat, disaster.long], {
            color: disasterColors[disaster.disasterType],
            fillColor: disasterColors[disaster.disasterType],
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
    }

}

drawAlerts(dummyDisasters)