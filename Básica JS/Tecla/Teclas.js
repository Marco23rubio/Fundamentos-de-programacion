var teclas =
{
  UP: 38,DOWN:40,LEFT:37,RIGHT:39
};

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("canva");
var papel = cuadrito.getContext("2d");
var x = 50;
var y = 50;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);
dibujarLinea("black",1,1,299,1,papel);
dibujarLinea("black",299,1,299,299,papel);
dibujarLinea("black",299,299,1,299,papel);
dibujarLinea("black",1,299,1,1,papel);

function dibujarTeclado(evento)
{
  colorcito="red";
  movimiento=3;
  switch (evento.keyCode)
   {
    case teclas.UP: dibujarLinea(colorcito,x,y,x,y-movimiento,papel)
      y = y-movimiento;
      break;
    case teclas.DOWN:dibujarLinea(colorcito,x,y,x,y+movimiento,papel)
      y = y+movimiento;
      break;
    case teclas.LEFT:dibujarLinea(colorcito,x,y,x-movimiento,y,papel)
      x = x-movimiento
      break;
    case teclas.RIGHT:dibujarLinea(colorcito,x,y,x+movimiento,y,papel)
      x = x+movimiento
      break;
    default: alert("solo usa las flechas prro");
  }
}

function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal,lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
