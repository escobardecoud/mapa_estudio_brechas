
// layers.js generado para qgis2web export
// Requiere: Leaflet ya cargado, variable global 'map' creada y scripts data/*.js incluidos antes.

// Utilidad para crear HTML de propiedades
function propertiesTable(props) {
    if (!props) return '';
    var rows = Object.keys(props).map(function(k){
        var v = props[k];
        if (v === null || typeof v === 'undefined') v = '';
        return '<tr><th style="text-align:left;padding-right:6px;">'+k+'</th><td>'+v+'</td></tr>';
    }).join('');
    return '<table class="popup-table">'+rows+'</table>';
}

// Estilos básicos
function stylePolygon() {
    return { color:'#555', weight:1, fillColor:'#cccccc', fillOpacity:0.3 };
}
function styleLine() {
    return { color:'#555', weight:2 };
}
function stylePoint(color) {
    return function(feature, latlng) {
        return L.circleMarker(latlng, { radius:5, color:'#222', weight:1, fillColor:color, fillOpacity:0.9 });
    }
}

// Crear capas
var overlayMaps = {};

// Distritos Paraguay INE 2022
var layer_json_distritos_paraguay_INE2022_1 = L.geoJson(json_distritos_paraguay_INE2022_1, {
    style: stylePolygon(),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_distritos_paraguay_INE2022_1.addTo(map);
overlayMaps["Distritos Paraguay INE 2022"] = layer_json_distritos_paraguay_INE2022_1;

// Departamentos Paraguay INE 2022
var layer_json_dptos_paraguay_INE2022_2 = L.geoJson(json_dptos_paraguay_INE2022_2, {
    style: stylePolygon(),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_dptos_paraguay_INE2022_2.addTo(map);
overlayMaps["Departamentos Paraguay INE 2022"] = layer_json_dptos_paraguay_INE2022_2;

// Locales UNA
var layer_json_locales_UNA_2_8 = L.geoJson(json_locales_UNA_2_8, {
    pointToLayer: stylePoint('#f94144'),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_locales_UNA_2_8.addTo(map);
overlayMaps["Locales UNA"] = layer_json_locales_UNA_2_8;

// Locales UNCA
var layer_json_locales_UNCA_2_3 = L.geoJson(json_locales_UNCA_2_3, {
    pointToLayer: stylePoint('#f8961e'),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_locales_UNCA_2_3.addTo(map);
overlayMaps["Locales UNCA"] = layer_json_locales_UNCA_2_3;

// Locales UNE
var layer_json_locales_UNE_2_6 = L.geoJson(json_locales_UNE_2_6, {
    pointToLayer: stylePoint('#43aa8b'),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_locales_UNE_2_6.addTo(map);
overlayMaps["Locales UNE"] = layer_json_locales_UNE_2_6;

// Locales UNICAN
var layer_json_locales_UNICAN_2_7 = L.geoJson(json_locales_UNICAN_2_7, {
    pointToLayer: stylePoint('#577590'),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_locales_UNICAN_2_7.addTo(map);
overlayMaps["Locales UNICAN"] = layer_json_locales_UNICAN_2_7;

// Locales UNI
var layer_json_locales_UNI_2_5 = L.geoJson(json_locales_UNI_2_5, {
    pointToLayer: stylePoint('#277da1'),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_locales_UNI_2_5.addTo(map);
overlayMaps["Locales UNI"] = layer_json_locales_UNI_2_5;

// Locales UNP
var layer_json_locales_UNP_2_4 = L.geoJson(json_locales_UNP_2_4, {
    pointToLayer: stylePoint('#90be6d'),
    onEachFeature: function(feature, layer) {
        layer.bindPopup(propertiesTable(feature.properties));
    }
});
layer_json_locales_UNP_2_4.addTo(map);
overlayMaps["Locales UNP"] = layer_json_locales_UNP_2_4;

// Control de capas
L.control.layers(null, overlayMaps, {collapsed:false}).addTo(map);
