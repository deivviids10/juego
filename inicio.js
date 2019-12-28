//ctrl+f5 -> para reinicar la página  = recargar limpiando la cache
document, addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego(); //este es el namespace
}, false);
/*para q se ejecute el código dependiendo del evento*/
//DOM -> DOCUMENT OBJECT MODEL (como diagrama de arbol) creado por html
//function datos que le damos a la funcion para que haga cosas, el
//código se lo escribe dentro de las llaves == 'DOMContentLoadedd', function() {}, false
var inicio = {
    iniciarJuego: function() {
        console.log("JUEGO INICIADO");
        dimensiones.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();

    },
    recargarTiles: function() { //borrar el contenido y llenarlo de cuadrados
        document.getElementById("juego").innerHTML = "";
        for (var y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
            for (var x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles,
                    dimensiones.ladoTiles, dimensiones.ladoTiles); //para colocar en posicion
                //los rectangulos

            }
        }
    }
};