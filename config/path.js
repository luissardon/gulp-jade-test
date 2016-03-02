var Path = { base: {} , frontend: {}, dest: {} };

Path.base = '.';

/**
 * Ruta base de la carpeta frontend
 *
 */
Path.frontend.base          = Path.base + '/frontend';

Path.frontend.source        = Path.frontend.base + '/source';

// ---------------------------------------------------------
Path.frontend.jade          = Path.frontend.source + '/jade'
Path.frontend.sass          = Path.frontend.source + '/sass'
// ---------------------------------------------------------


/**
 * Ruta de los archivos estáticos (js, css, imagenes y fuentes)
 *
 */
Path.dest.serverFiles       = Path.base + '/public';

Path.dest.statics           = '';

// -------------------------------------------------------------------------------
Path.dest.css               = Path.dest.serverFiles + Path.dest.statics + '/css';
Path.dest.html              = Path.dest.serverFiles + Path.dest.statics + '/html';
// -------------------------------------------------------------------------------


module.exports = Path;