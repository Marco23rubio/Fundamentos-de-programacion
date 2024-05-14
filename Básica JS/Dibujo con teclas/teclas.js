//mis variables
document.addEventListener("keyup",dibujar_teclado);
var keyboard = { LEFT:37,UP:38,RIGHT:39,DOWN:40 }
var canva = document.getElementById("dibujando_ando");
var lienzo = canva.getContext("2d");
var ancho = canva.width;
var altura = canva.height;
var marco = "black"
var x_centro = 150;
var y_centro = 150;
//punto central
hacerLinea("red",3,x_centro-1,y_centro-1,x_centro+1,y_centro+1);
//marco del lienzo
hacerLinea(marco,1,0,0,ancho,0);
hacerLinea(marco,1,0,0,0,altura);
hacerLinea(marco,1,altura,0,ancho,altura);
hacerLinea(marco,1,0,altura,ancho,altura);
//funcion que dibuja las lineas como tal
function hacerLinea(color,grueso,x_inicial,y_inicial,x_final,y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grueso;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
//Funcion para dibujar las lineas con el teclado
function dibujar_teclado(acciones)
{
  //variables internas (y unicas) de esta funcion 
  colorcito = "blue";
  movimiento = 10;
  gruecito = 1;
  switch (acciones.keyCode)
  {
    case keyboard.LEFT:
        hacerLinea(colorcito,gruecito,x_centro,y_centro,x_centro-movimiento,y_centro);
        x_centro = x_centro - movimiento;
      break;
    case keyboard.UP:
        hacerLinea(colorcito,gruecito,x_centro,y_centro,x_centro,y_centro-movimiento);
        y_centro = y_centro-movimiento;
      break;
    case keyboard.RIGHT:
        hacerLinea(colorcito,gruecito,x_centro,y_centro,x_centro+movimiento,y_centro);
        x_centro = x_centro + movimiento;
      break;
    case keyboard.DOWN:
        hacerLinea(colorcito,gruecito,x_centro,y_centro,x_centro,y_centro+movimiento);
        y_centro = y_centro + movimiento;
      break;
     default:
        console.log("Ouch");
      break;
  }
}
