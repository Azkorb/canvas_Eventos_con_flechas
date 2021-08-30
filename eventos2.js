var X;
var y;
var x2;
var y2;
var estado = 0;
var hoja = document.getElementById("cuadro");
var papel = hoja.getContext("2d");
document.addEventListener("mousedown", presionarMouse);
//document.addEventListener("mousemove",sostenidoMouse);
document.addEventListener("mouseup", soltarMouse);

/*dibujarLinea("red", 0, 0, 500, 0, papel)
dibujarLinea("red", 500, 0, 500, 500, papel)
dibujarLinea("red", 500, 500, 0, 500, papel)
dibujarLinea("red", 0, 500, 0, 0, papel)*/

// Funcion para mousedown
function presionarMouse(evento){
estado = 1; //click presionado
x = evento.layerX;
y = evento.layerY;
console.log(evento);
}

function soltarMouse(evento){
estado = 0; // click suelto
x2 = evento.layerX;
y2 = evento.layerY;
dibujarLinea("blue", x, y, x2, y2, papel);
console.log(evento);
}

/*function sostenidoMouse(evento){
    estado = 1; //click presionado
    x = evento.layerX;
    y = evento.layerY;
    x2 = evento.layerX;
    y2 = evento.layerY;
    dibujarLinea("blue", x, y, x2, y2, papel);
    console.log(evento);
    }*/
    
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
lienzo.beginPath();
lienzo.lineWidth = 10;
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}