var d = document.getElementById("dibujito");
var numero = document.getElementById("textito");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoClick);
var lienzo = d.getContext("2d");
var ancho= dibujito.width;

dibujarLinea("black",1,1,299,1);
dibujarLinea("black",299,1,299,299);
dibujarLinea("black",299,299,1,299);
dibujarLinea("black",1,299,1,1);

function dibujoClick()
  {
    var lineas = parseInt(numero.value);
    var yi,xf,xi,yf;
    var espacio = ancho / lineas;
    for(l=0;l<lineas;l++)
    {
      yi = espacio * l;
      xf = espacio * (l+1);
      dibujarLinea("red",0,yi,xf,300);
    }

    for(l=0;l<lineas;l++)
    {
      yi = espacio * l;
      xf = (ancho-espacio) - (espacio*l);
      dibujarLinea("blue",300,yi,xf,300);
    }

    for(l=0;l<lineas;l++)
    {
      xi = espacio*l;
      yf = espacio * (l+1);
      dibujarLinea("green",xi,0,300,yf);
    }

    for(l=0;l<lineas;l++)
    {
      xi= (ancho-espacio) - (l*espacio);
      yf= espacio*(l+1);
      dibujarLinea("brown",xi,0,0,yf);
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
