var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highwayline_1 = new ol.format.GeoJSON();
var features_highwayline_1 = format_highwayline_1.readFeatures(json_highwayline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highwayline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highwayline_1.addFeatures(features_highwayline_1);
var lyr_highwayline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highwayline_1, 
                style: style_highwayline_1,
                interactive: true,
    title: 'highway-line<br />\
    <img src="styles/legend/highwayline_1_0.png" /> primary<br />\
    <img src="styles/legend/highwayline_1_1.png" /> residential<br />\
    <img src="styles/legend/highwayline_1_2.png" /> secondary<br />\
    <img src="styles/legend/highwayline_1_3.png" /> secondary_link<br />\
    <img src="styles/legend/highwayline_1_4.png" /> tertiary<br />\
    <img src="styles/legend/highwayline_1_5.png" /> trunk<br />\
    <img src="styles/legend/highwayline_1_6.png" /> <br />'
        });
var format_FreeWifi4All_2 = new ol.format.GeoJSON();
var features_FreeWifi4All_2 = format_FreeWifi4All_2.readFeatures(json_FreeWifi4All_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FreeWifi4All_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreeWifi4All_2.addFeatures(features_FreeWifi4All_2);
var lyr_FreeWifi4All_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FreeWifi4All_2, 
                style: style_FreeWifi4All_2,
                interactive: true,
                title: '<img src="styles/legend/FreeWifi4All_2.png" /> FreeWifi4All'
            });
var format_Tech4EdCenter_3 = new ol.format.GeoJSON();
var features_Tech4EdCenter_3 = format_Tech4EdCenter_3.readFeatures(json_Tech4EdCenter_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tech4EdCenter_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tech4EdCenter_3.addFeatures(features_Tech4EdCenter_3);
var lyr_Tech4EdCenter_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tech4EdCenter_3, 
                style: style_Tech4EdCenter_3,
                interactive: true,
    title: 'Tech4Ed Center<br />\
    <img src="styles/legend/Tech4EdCenter_3_0.png" /> Operational<br />\
    <img src="styles/legend/Tech4EdCenter_3_1.png" /> Non-operational<br />'
        });
var format_iBPLS_4 = new ol.format.GeoJSON();
var features_iBPLS_4 = format_iBPLS_4.readFeatures(json_iBPLS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iBPLS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iBPLS_4.addFeatures(features_iBPLS_4);
var lyr_iBPLS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iBPLS_4, 
                style: style_iBPLS_4,
                interactive: true,
                title: '<img src="styles/legend/iBPLS_4.png" /> iBPLS'
            });
var format_DICTMasbateProvincialOffice_5 = new ol.format.GeoJSON();
var features_DICTMasbateProvincialOffice_5 = format_DICTMasbateProvincialOffice_5.readFeatures(json_DICTMasbateProvincialOffice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DICTMasbateProvincialOffice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DICTMasbateProvincialOffice_5.addFeatures(features_DICTMasbateProvincialOffice_5);
var lyr_DICTMasbateProvincialOffice_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DICTMasbateProvincialOffice_5, 
                style: style_DICTMasbateProvincialOffice_5,
                interactive: true,
                title: '<img src="styles/legend/DICTMasbateProvincialOffice_5.png" /> DICT Masbate Provincial Office'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_highwayline_1.setVisible(false);lyr_FreeWifi4All_2.setVisible(true);lyr_Tech4EdCenter_3.setVisible(true);lyr_iBPLS_4.setVisible(true);lyr_DICTMasbateProvincialOffice_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_highwayline_1,lyr_FreeWifi4All_2,lyr_Tech4EdCenter_3,lyr_iBPLS_4,lyr_DICTMasbateProvincialOffice_5];
lyr_highwayline_1.set('fieldAliases', {'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'NAME_RU': 'NAME_RU', 'REF': 'REF', 'HIGHWAY': 'HIGHWAY', 'ONEWAY': 'ONEWAY', 'BRIDGE': 'BRIDGE', 'TUNNEL': 'TUNNEL', 'MAXSPEED': 'MAXSPEED', 'LANES': 'LANES', 'WIDTH': 'WIDTH', 'SURFACE': 'SURFACE', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr_FreeWifi4All_2.set('fieldAliases', {'Location Name': 'Location Name', 'Barangay': 'Barangay', 'Locality': 'Locality', 'Link Type': 'Link Type', 'Bandwith': 'Bandwith', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Tech4EdCenter_3.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'longitude': 'longitude', 'latitude': 'latitude', 'District': 'District', 'Muni/City': 'Muni/City', 'Barangay': 'Barangay', 'Status': 'Status', });
lyr_iBPLS_4.set('fieldAliases', {'MuniCity': 'MuniCity', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DICTMasbateProvincialOffice_5.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'longitude': 'longitude', 'latitude': 'latitude', 'Office Hou': 'Office Hou', });
lyr_highwayline_1.set('fieldImages', {'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_RU': 'TextEdit', 'REF': 'TextEdit', 'HIGHWAY': 'TextEdit', 'ONEWAY': 'TextEdit', 'BRIDGE': 'TextEdit', 'TUNNEL': 'TextEdit', 'MAXSPEED': 'TextEdit', 'LANES': 'TextEdit', 'WIDTH': 'TextEdit', 'SURFACE': 'TextEdit', 'OSM_TYPE': 'TextEdit', 'OSM_ID': 'TextEdit', });
lyr_FreeWifi4All_2.set('fieldImages', {'Location Name': 'TextEdit', 'Barangay': 'TextEdit', 'Locality': 'TextEdit', 'Link Type': 'TextEdit', 'Bandwith': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Tech4EdCenter_3.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'District': 'TextEdit', 'Muni/City': 'TextEdit', 'Barangay': 'TextEdit', 'Status': 'TextEdit', });
lyr_iBPLS_4.set('fieldImages', {'MuniCity': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DICTMasbateProvincialOffice_5.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Office Hou': '', });
lyr_highwayline_1.set('fieldLabels', {'NAME': 'no label', 'NAME_EN': 'no label', 'NAME_RU': 'no label', 'REF': 'no label', 'HIGHWAY': 'no label', 'ONEWAY': 'no label', 'BRIDGE': 'no label', 'TUNNEL': 'no label', 'MAXSPEED': 'no label', 'LANES': 'header label', 'WIDTH': 'no label', 'SURFACE': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr_FreeWifi4All_2.set('fieldLabels', {'Location Name': 'inline label', 'Barangay': 'inline label', 'Locality': 'inline label', 'Link Type': 'inline label', 'Bandwith': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Tech4EdCenter_3.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'longitude': 'inline label', 'latitude': 'inline label', 'District': 'inline label', 'Muni/City': 'inline label', 'Barangay': 'inline label', 'Status': 'inline label', });
lyr_iBPLS_4.set('fieldLabels', {'MuniCity': 'inline label', 'Status': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_DICTMasbateProvincialOffice_5.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'longitude': 'inline label', 'latitude': 'inline label', 'Office Hou': 'inline label', });
lyr_DICTMasbateProvincialOffice_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});