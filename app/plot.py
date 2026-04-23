import arcgis as gis

m1 = gis.map('Pasadena, California')
m1.basemap.basemap = 'topo-vector'
m1

