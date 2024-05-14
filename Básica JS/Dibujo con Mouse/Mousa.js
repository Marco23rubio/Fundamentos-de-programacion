var cuadro = document.getElementById("canvas_HTML");
var lienzo = cuadro.getContext("2d");
var colorcito = document.getElementById("paleta_HTML");
var anchito = document.getElementById("rango_HTML");
document.addEventListener("mousedown", empezarDibujo);
document.addEventListener("mousemove", realizarDibujo);
document.addEventListener("mouseup", terminarDibujo);
var mousePresionado
var x_i, y_i;

function hacerLinea(xi,yi,xf,yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle= colorcito.value;
  lienzo.lineWidth= anchito.value;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath;
}

function empezarDibujo(evento)
{
  mousePresionado = true;
  x_i = evento.layerX;
  y_i = evento.layerY;
}
function realizarDibujo(evento)
{
    if (mousePresionado==true)
    {
      hacerLinea(x_i,y_i,evento.layerX,evento.layerY);
      x_i = evento.layerX;
      y_i = evento.layerY;
    }
}
function terminarDibujo()
{
  mousePresionado = false;
}
