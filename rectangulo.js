//creando un contructor
function Rectangulo(x, y, ancho, alto) { //x,y(ubicación rectangulo),lo demas tamaño
    //iniciar objeto con this
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.id = "r" + x + y; //para identificar cada rectangulo que creamos
    this.insertarDOM(); //aqui lo insertamos en el html
}
//DOM es el documento de html
Rectangulo.prototype.insertarDOM = function() {
    var div = '<div id="' + this.id + '"></div>'; //ejemplo <div id = "r12"></div>
    var html = document.getElementById("juego").innerHTML; //contiene todo el codigo de html el var html
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16); //para el color del rectangulo (var color = #fffff), floor = redonde valores
    //random genera un numero al azar, el 16 para comvertir a exadecimal 
    //(TODO LO ANTERIOR NOS DA UN COLOR ALEATORIO EN CSS, PARA CADA RECTÁNGULO)
    document.getElementById("juego").innerHTML = html + div; //insertamos html y el div a todo ese rectangulo
    //añadir estilos al rectangulo
    document.getElementById(this.id).style.position = "absolute"; //absolute es para dar coordenadas para colocar el rectangulo
    document.getElementById(this.id).style.left = this.x + "px"; //
    document.getElementById(this.id).style.top = this.y + "px";
    document.getElementById(this.id).style.width = this.ancho + "px";
    document.getElementById(this.id).style.height = this.alto + "px";
    document.getElementById(this.id).style.backgroundColor = color;
}