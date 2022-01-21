var wms_layers = [];

var format_Region__Togo_0 = new ol.format.GeoJSON();
var features_Region__Togo_0 = format_Region__Togo_0.readFeatures(json_Region__Togo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region__Togo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region__Togo_0.addFeatures(features_Region__Togo_0);
var lyr_Region__Togo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region__Togo_0, 
                style: style_Region__Togo_0,
                interactive: true,
                title: '<img src="styles/legend/Region__Togo_0.png" /> Region__Togo'
            });
var format_Region_kara_1 = new ol.format.GeoJSON();
var features_Region_kara_1 = format_Region_kara_1.readFeatures(json_Region_kara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_kara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_kara_1.addFeatures(features_Region_kara_1);
var lyr_Region_kara_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region_kara_1, 
                style: style_Region_kara_1,
                interactive: true,
                title: '<img src="styles/legend/Region_kara_1.png" /> Region_kara'
            });
var format_District_sanitaire_Kara_2 = new ol.format.GeoJSON();
var features_District_sanitaire_Kara_2 = format_District_sanitaire_Kara_2.readFeatures(json_District_sanitaire_Kara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_sanitaire_Kara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_sanitaire_Kara_2.addFeatures(features_District_sanitaire_Kara_2);
var lyr_District_sanitaire_Kara_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_sanitaire_Kara_2, 
                style: style_District_sanitaire_Kara_2,
                interactive: true,
                title: '<img src="styles/legend/District_sanitaire_Kara_2.png" /> District_sanitaire_Kara'
            });
var format_USP_3 = new ol.format.GeoJSON();
var features_USP_3 = format_USP_3.readFeatures(json_USP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USP_3.addFeatures(features_USP_3);cluster_USP_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_USP_3
});
var lyr_USP_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_USP_3, 
                style: style_USP_3,
                interactive: true,
                title: '<img src="styles/legend/USP_3.png" /> USP'
            });

lyr_Region__Togo_0.setVisible(true);lyr_Region_kara_1.setVisible(true);lyr_District_sanitaire_Kara_2.setVisible(true);lyr_USP_3.setVisible(true);
var layersList = [lyr_Region__Togo_0,lyr_Region_kara_1,lyr_District_sanitaire_Kara_2,lyr_USP_3];
lyr_Region__Togo_0.set('fieldAliases', {'REGION': 'REGION', });
lyr_Region_kara_1.set('fieldAliases', {'REGION': 'REGION', });
lyr_District_sanitaire_Kara_2.set('fieldAliases', {'PAYS': 'PAYS', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'PRéFECTUR': 'PRéFECTUR', });
lyr_USP_3.set('fieldAliases', {'Code': 'Code', 'prefecture': 'prefecture', 'Type': 'Type', 'Nom': 'Nom', });
lyr_Region__Togo_0.set('fieldImages', {'REGION': 'TextEdit', });
lyr_Region_kara_1.set('fieldImages', {'REGION': 'Hidden', });
lyr_District_sanitaire_Kara_2.set('fieldImages', {'PAYS': 'Hidden', 'AREA': 'TextEdit', 'ACRES': 'Hidden', 'PERIMETER': 'Hidden', 'PRéFECTUR': 'Hidden', });
lyr_USP_3.set('fieldImages', {'Code': 'Hidden', 'prefecture': 'Hidden', 'Type': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Region__Togo_0.set('fieldLabels', {'REGION': 'no label', });
lyr_Region_kara_1.set('fieldLabels', {});
lyr_District_sanitaire_Kara_2.set('fieldLabels', {'AREA': 'no label', });
lyr_USP_3.set('fieldLabels', {'Type': 'no label', 'Nom': 'header label', });
lyr_USP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});