
function cancionesPorAlbum (nombreaArchivo, album) {
    let archivoCanciones = open(nombreaArchivo)
    let listadoCanciones = []
    for( linea in archivoCanciones.readlines() ) {
        let cancion = JSON.parse(linea);
        if (cancion[1] == album)
            listadoCanciones.append(cancion[0]);
    }
    return listadoCanciones
}
