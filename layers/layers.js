var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMapmonochrome_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_Region__Togo_2 = new ol.format.GeoJSON();
var features_Region__Togo_2 = format_Region__Togo_2.readFeatures(json_Region__Togo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region__Togo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region__Togo_2.addFeatures(features_Region__Togo_2);
var lyr_Region__Togo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region__Togo_2, 
                style: style_Region__Togo_2,
                interactive: true,
                title: '<img src="styles/legend/Region__Togo_2.png" /> Region__Togo'
            });
var format_Region_kara_3 = new ol.format.GeoJSON();
var features_Region_kara_3 = format_Region_kara_3.readFeatures(json_Region_kara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_kara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_kara_3.addFeatures(features_Region_kara_3);
var lyr_Region_kara_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region_kara_3, 
                style: style_Region_kara_3,
                interactive: true,
                title: '<img src="styles/legend/Region_kara_3.png" /> Region_kara'
            });
var format_District_sanitaire_Kara_4 = new ol.format.GeoJSON();
var features_District_sanitaire_Kara_4 = format_District_sanitaire_Kara_4.readFeatures(json_District_sanitaire_Kara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_sanitaire_Kara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_sanitaire_Kara_4.addFeatures(features_District_sanitaire_Kara_4);
var lyr_District_sanitaire_Kara_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_sanitaire_Kara_4, 
                style: style_District_sanitaire_Kara_4,
                interactive: true,
                title: '<img src="styles/legend/District_sanitaire_Kara_4.png" /> District_sanitaire_Kara'
            });
var format_USP_5 = new ol.format.GeoJSON();
var features_USP_5 = format_USP_5.readFeatures(json_USP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USP_5.addFeatures(features_USP_5);cluster_USP_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_USP_5
});
var lyr_USP_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_USP_5, 
                style: style_USP_5,
                interactive: true,
                title: '<img src="styles/legend/USP_5.png" /> USP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenStreetMapmonochrome_1.setVisible(true);lyr_Region__Togo_2.setVisible(true);lyr_Region_kara_3.setVisible(true);lyr_District_sanitaire_Kara_4.setVisible(true);lyr_USP_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenStreetMapmonochrome_1,lyr_Region__Togo_2,lyr_Region_kara_3,lyr_District_sanitaire_Kara_4,lyr_USP_5];
lyr_Region__Togo_2.set('fieldAliases', {'REGION': 'REGION', 'CHEF_LIEU': 'CHEF_LIEU', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'NEWFIELD1': 'NEWFIELD1', 'datecov': 'datecov', 'id': 'id', });
lyr_Region_kara_3.set('fieldAliases', {'REGION': 'REGION', 'CHEF_LIEU': 'CHEF_LIEU', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'NEWFIELD1': 'NEWFIELD1', 'datecov': 'datecov', 'id': 'id', });
lyr_District_sanitaire_Kara_4.set('fieldAliases', {'PAYS': 'PAYS', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'PRéFECTUR': 'PRéFECTUR', });
lyr_USP_5.set('fieldAliases', {'Code': 'Code', 'prefecture': 'prefecture', 'Type': 'Type', 'Nom': 'Nom', 'Population': 'Population', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Region__Togo_2.set('fieldImages', {'REGION': 'TextEdit', 'CHEF_LIEU': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'PERIMETER': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'datecov': 'DateTime', 'id': 'Range', });
lyr_Region_kara_3.set('fieldImages', {'REGION': 'TextEdit', 'CHEF_LIEU': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'PERIMETER': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'datecov': 'DateTime', 'id': 'Range', });
lyr_District_sanitaire_Kara_4.set('fieldImages', {'PAYS': 'Hidden', 'AREA': 'TextEdit', 'ACRES': 'Hidden', 'PERIMETER': 'Hidden', 'PRéFECTUR': 'Hidden', });
lyr_USP_5.set('fieldImages', {'Code': 'Hidden', 'prefecture': 'Hidden', 'Type': 'TextEdit', 'Nom': 'TextEdit', 'Population': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Region__Togo_2.set('fieldLabels', {'REGION': 'no label', 'CHEF_LIEU': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'PERIMETER': 'no label', 'NEWFIELD1': 'no label', 'datecov': 'no label', 'id': 'no label', });
lyr_Region_kara_3.set('fieldLabels', {'REGION': 'no label', 'CHEF_LIEU': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'PERIMETER': 'no label', 'NEWFIELD1': 'no label', 'datecov': 'no label', 'id': 'no label', });
lyr_District_sanitaire_Kara_4.set('fieldLabels', {'AREA': 'no label', });
lyr_USP_5.set('fieldLabels', {'Type': 'header label', 'Nom': 'header label', });
lyr_USP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});