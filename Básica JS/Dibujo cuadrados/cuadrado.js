var cantidad = document.getElementById("cantidad_texto");
var tamaño = document.getElementById("tamaño_texto");
var color = document.getElementById("color_texto");
var boton = document.getElementById("hacer_texto");
var canva = document.getElementById("dibujo");
var lienzo = canva.getContext("2d");
boton.addEventListener("click",dibujoClick);


function dibujoClick()
{
  var dimesiones = parseInt(tamaño.value);
  canva.width=dimesiones;
  canva.height=dimesiones;
  var cuadritos = parseInt(cantidad.value);
  var colorsito = color.value;
  var xi,yi;
  for (var i = 0; i < cuadritos; i++)
  {
    xi = dimesiones - (10*i);
    yi = 10 * i;
    dibujarLinea(colorsito,yi,yi,xi,yi);
    dibujarLinea(colorsito,xi,yi,xi,xi);
    dibujarLinea(colorsito,xi,xi,yi,xi);
    dibujarLinea(colorsito,yi,xi,yi,yi);
    console.log(xi,yi);
  }
}

function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
