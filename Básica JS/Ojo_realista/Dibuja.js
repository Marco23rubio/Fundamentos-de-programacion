var cosa = document.getElementById("dibujito");
var algo = document.getElementById("texto_HTML");
var boton = document.getElementById("boton_HTML");
var color = document.getElementById("color_cuadros");
var cuadro = cosa.getContext("2d");
var ancho = cosa.width;
boton.addEventListener("click", ojoPorClick);
    function ojoPorClick()
    {
      var figuras = parseInt(algo.value);
      var vueltas = 0;
      var resta, ancho_figura;
      var color1 = color.value;
  if(figuras <= 21 )
  {
    for(vueltas= 0; vueltas < figuras; vueltas++)
        {
        resta = 1 + (vueltas*9) + vueltas
        ancho_figura = ancho - (vueltas *10) - 1
        hacerLinea(color1,resta,resta,ancho_figura,resta,0);
        hacerLinea(color1,ancho_figura,resta,ancho_figura,ancho_figura,0);
        hacerLinea(color1,ancho_figura,ancho_figura,resta,ancho_figura,0);
        hacerLinea(color1,resta,ancho_figura,resta,resta,0);
        }
  }
  else if(figuras >= 22)
  {
    alert("Te dije que no te pasaras de 21 >:C");
  }
    }
    function hacerLinea(colorcito, x_move, y_move, x_line, y_line,grueso)
    {
      cuadro.beginPath();
      cuadro.strokeStyle = colorcito;
      cuadro.lineWidth = grueso;
      cuadro.moveTo(x_move,y_move);
      cuadro.lineTo(x_line,y_line);
      cuadro.stroke();
      cuadro.closePath();
    }
