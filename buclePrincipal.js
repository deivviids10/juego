//namespace - espacio de nombres
//main loop - bucle princial
var buclePrincipal = { /* ATRIBUTOS */
    idEjecucion: null, //null significa q esta vacio
    ultimoRegistro: 0,
    aps: 0, //actualizaciones por segundo
    fps: 0, //frames por segundo
    /*FUNCIONES*/
    iterar: function(registroTemporal) {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        //solicita el cuadro de animacion
        //el de arriba sicroniza el juego 60veces por segundo
        //abajo ejecutamos dos funciones
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar(); //para volver a dibujar lo del juego
        //abajo ponemos un contador para actualizar
        if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            //esto es para un segundo porq 1s = 1000ms -> por eso el 999
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0; //es para reiniciar los valores :V
            buclePrincipal.fps = 0;
        }
    },
    detener: function(registroTemporal) {

    },
    actualizar: function(registroTemporal) {
        buclePrincipal.aps++;
    },
    dibujar: function(registroTemporal) {
        buclePrincipal.fps++;
    }
};