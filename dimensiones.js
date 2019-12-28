//son dimensiones pra la ventana
var dimensiones = { //ancho interno de la ventana(sin la barra de marcadores de la ventana)
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    //cuando se realicen cambios en la ventana (por minimización o hacerla maas pequeña)
    ladoTiles: 100, //son cuadraditos que forman el mapa
    escala: 1,
    iniciar: function() {
        window.addEventListener("resize", function(evento) {
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log("Ancho: " + dimensiones.ancho + " | Alto: " + dimensiones.alto);
            InputDeviceInfo.recargarTiles();
        });
    },
    obtenerTilesHorizontales: function() { //obtener cuantos tiles(cuadraditos) avanzan en la pantalla 
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala; //para redimensionar
        return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal); //para saber cuantos rectangulos nos caben en la pantalla
        //ceil redonde al siguiente numero entero
    },
    obtenerTilesVerticales: function() {
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal);
    },
    obtenerTotalTiltes: function() {
        return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
    }
};