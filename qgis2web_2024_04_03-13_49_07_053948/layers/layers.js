ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-11.485695, 4.352916, -7.365113, 8.551790]);
var wms_layers = [];

var format_LBR_adm1_0 = new ol.format.GeoJSON();
var features_LBR_adm1_0 = format_LBR_adm1_0.readFeatures(json_LBR_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LBR_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBR_adm1_0.addFeatures(features_LBR_adm1_0);
var lyr_LBR_adm1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBR_adm1_0, 
                style: style_LBR_adm1_0,
                popuplayertitle: "LBR_adm1",
                interactive: true,
    title: 'LBR_adm1<br />\
    <img src="styles/legend/LBR_adm1_0_0.png" /> Bomi<br />\
    <img src="styles/legend/LBR_adm1_0_1.png" /> Bong<br />\
    <img src="styles/legend/LBR_adm1_0_2.png" /> Gbapolu<br />\
    <img src="styles/legend/LBR_adm1_0_3.png" /> Grand Cape Mount<br />\
    <img src="styles/legend/LBR_adm1_0_4.png" /> GrandBassa<br />\
    <img src="styles/legend/LBR_adm1_0_5.png" /> GrandGedeh<br />\
    <img src="styles/legend/LBR_adm1_0_6.png" /> GrandKru<br />\
    <img src="styles/legend/LBR_adm1_0_7.png" /> Lofa<br />\
    <img src="styles/legend/LBR_adm1_0_8.png" /> Margibi<br />\
    <img src="styles/legend/LBR_adm1_0_9.png" /> Maryland<br />\
    <img src="styles/legend/LBR_adm1_0_10.png" /> Montserrado<br />\
    <img src="styles/legend/LBR_adm1_0_11.png" /> Nimba<br />\
    <img src="styles/legend/LBR_adm1_0_12.png" /> River Cess<br />\
    <img src="styles/legend/LBR_adm1_0_13.png" /> River Gee<br />\
    <img src="styles/legend/LBR_adm1_0_14.png" /> Sinoe<br />\
    <img src="styles/legend/LBR_adm1_0_15.png" /> <br />'
        });
var format_LBR_adm0_1 = new ol.format.GeoJSON();
var features_LBR_adm0_1 = format_LBR_adm0_1.readFeatures(json_LBR_adm0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LBR_adm0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBR_adm0_1.addFeatures(features_LBR_adm0_1);
var lyr_LBR_adm0_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBR_adm0_1, 
                style: style_LBR_adm0_1,
                popuplayertitle: "LBR_adm0",
                interactive: true,
                title: '<img src="styles/legend/LBR_adm0_1.png" /> LBR_adm0'
            });
var format_Lib_Rivers_2 = new ol.format.GeoJSON();
var features_Lib_Rivers_2 = format_Lib_Rivers_2.readFeatures(json_Lib_Rivers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lib_Rivers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lib_Rivers_2.addFeatures(features_Lib_Rivers_2);
var lyr_Lib_Rivers_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lib_Rivers_2, 
                style: style_Lib_Rivers_2,
                popuplayertitle: "Lib_Rivers",
                interactive: true,
                title: '<img src="styles/legend/Lib_Rivers_2.png" /> Lib_Rivers'
            });

lyr_LBR_adm1_0.setVisible(true);lyr_LBR_adm0_1.setVisible(true);lyr_Lib_Rivers_2.setVisible(true);
var layersList = [lyr_LBR_adm1_0,lyr_LBR_adm0_1,lyr_Lib_Rivers_2];
lyr_LBR_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_LBR_adm0_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'OBJECTID_1': 'OBJECTID_1', 'ISO3': 'ISO3', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', });
lyr_Lib_Rivers_2.set('fieldAliases', {'FID_af_str': 'FID_af_str', 'ARCID': 'ARCID', 'FROM_NODE': 'FROM_NODE', 'TO_NODE': 'TO_NODE', 'FID_sub_ba': 'FID_sub_ba', 'SUB_BAS': 'SUB_BAS', 'MAJ_BAS': 'MAJ_BAS', 'MAJ_NAME': 'MAJ_NAME', 'SUB_NAME': 'SUB_NAME', 'MAJ_AREA': 'MAJ_AREA', 'LEGEND': 'LEGEND', 'SUBBAS_ID': 'SUBBAS_ID', 'TOBAS_ID': 'TOBAS_ID', 'Strahler': 'Strahler', 'A_Strahler': 'A_Strahler', 'RASTERVA_2': 'RASTERVA_2', 'RASTERVA_1': 'RASTERVA_1', 'Regime': 'Regime', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_LBR_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_LBR_adm0_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'ISO3': 'TextEdit', 'NAME_ENGLI': 'TextEdit', 'NAME_ISO': 'TextEdit', 'NAME_FAO': 'TextEdit', 'NAME_LOCAL': 'TextEdit', 'NAME_OBSOL': 'TextEdit', 'NAME_VARIA': 'TextEdit', 'NAME_NONLA': 'TextEdit', 'NAME_FRENC': 'TextEdit', 'NAME_SPANI': 'TextEdit', 'NAME_RUSSI': 'TextEdit', 'NAME_ARABI': 'TextEdit', 'NAME_CHINE': 'TextEdit', 'WASPARTOF': 'TextEdit', 'CONTAINS': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'ISO2': 'TextEdit', 'WWW': 'TextEdit', 'FIPS': 'TextEdit', 'ISON': 'TextEdit', 'VALIDFR': 'TextEdit', 'VALIDTO': 'TextEdit', 'POP2000': 'TextEdit', 'SQKM': 'TextEdit', 'POPSQKM': 'TextEdit', 'UNREGION1': 'TextEdit', 'UNREGION2': 'TextEdit', 'DEVELOPING': 'TextEdit', 'CIS': 'TextEdit', 'Transition': 'TextEdit', 'OECD': 'TextEdit', 'WBREGION': 'TextEdit', 'WBINCOME': 'TextEdit', 'WBDEBT': 'TextEdit', 'WBOTHER': 'TextEdit', 'CEEAC': 'TextEdit', 'CEMAC': 'TextEdit', 'CEPLG': 'TextEdit', 'COMESA': 'TextEdit', 'EAC': 'TextEdit', 'ECOWAS': 'TextEdit', 'IGAD': 'TextEdit', 'IOC': 'TextEdit', 'MRU': 'TextEdit', 'SACU': 'TextEdit', 'UEMOA': 'TextEdit', 'UMA': 'TextEdit', 'PALOP': 'TextEdit', 'PARTA': 'TextEdit', 'CACM': 'TextEdit', 'EurAsEC': 'TextEdit', 'Agadir': 'TextEdit', 'SAARC': 'TextEdit', 'ASEAN': 'TextEdit', 'NAFTA': 'TextEdit', 'GCC': 'TextEdit', 'CSN': 'TextEdit', 'CARICOM': 'TextEdit', 'EU': 'TextEdit', 'CAN': 'TextEdit', 'ACP': 'TextEdit', 'Landlocked': 'TextEdit', 'AOSIS': 'TextEdit', 'SIDS': 'TextEdit', 'Islands': 'TextEdit', 'LDC': 'TextEdit', });
lyr_Lib_Rivers_2.set('fieldImages', {'FID_af_str': 'Range', 'ARCID': 'Range', 'FROM_NODE': 'Range', 'TO_NODE': 'Range', 'FID_sub_ba': 'Range', 'SUB_BAS': 'Range', 'MAJ_BAS': 'Range', 'MAJ_NAME': 'TextEdit', 'SUB_NAME': 'TextEdit', 'MAJ_AREA': 'Range', 'LEGEND': 'Range', 'SUBBAS_ID': 'TextEdit', 'TOBAS_ID': 'TextEdit', 'Strahler': 'Range', 'A_Strahler': 'Range', 'RASTERVA_2': 'TextEdit', 'RASTERVA_1': 'Range', 'Regime': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_LBR_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_LBR_adm0_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'OBJECTID_1': 'no label', 'ISO3': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', });
lyr_Lib_Rivers_2.set('fieldLabels', {'FID_af_str': 'no label', 'ARCID': 'no label', 'FROM_NODE': 'no label', 'TO_NODE': 'no label', 'FID_sub_ba': 'no label', 'SUB_BAS': 'no label', 'MAJ_BAS': 'no label', 'MAJ_NAME': 'no label', 'SUB_NAME': 'no label', 'MAJ_AREA': 'no label', 'LEGEND': 'no label', 'SUBBAS_ID': 'no label', 'TOBAS_ID': 'no label', 'Strahler': 'no label', 'A_Strahler': 'no label', 'RASTERVA_2': 'no label', 'RASTERVA_1': 'no label', 'Regime': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Lib_Rivers_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});