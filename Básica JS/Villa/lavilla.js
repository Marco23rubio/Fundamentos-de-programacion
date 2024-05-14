var villa = document.getElementById("villa_html");
var papel = villa.getContext("2d");
document.addEventListener("keydown",moverGranjero);
var ancho = villa.width;
var altura = villa.height;
var xGranjero = 250;
var yGranjero = 250;
var xVacas = new Array();
var yVacas = new Array();
var xPollos = new Array();
var yPollos = new Array();
var xCerdos = new Array();
var yCerdos = new Array ();


// cambia las imagenes a false para que no carguen por debajo del mapa
var mapa=
{
  url : "tile.png",cargaOK: false
};

var vaca =
{
  url : "vaca.png",cargaOK: false
};

var pollo=
{
  url : "pollo.png",cargaOK: false
};

var cerdo=
{
  url : "cerdo.png",cargaOK:false
};

var granjero=
{
  url:"granjero.png",cargaOK:false
};

// variables para poder cargar las imagenes
mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener ("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener ("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener ("load",cargarCerdo);

granjero.imagen =new Image();
granjero.imagen.src = granjero.url;
granjero.imagen.addEventListener ("load",cargarGranjero);

// Son las funciones para cambiar a TRUE las imagenes y que se puedan poner

function cargarMapa()
{
    mapa.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    mantener();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    mantener();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    mantener();
}

function cargarGranjero()
{
    granjero.cargaOK = true;
    dibujar();
}
// aqui se crean arrays para guardar la cantidad de vacas y posiciones y que asi no se muevan
function mantener()
{
  if(vaca.cargaOK)
  {
  var cantidad = aleatorio(1,5);
  for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio (1,5);
      var y = aleatorio (1,5);
      var x = x*60;
      var y = y*60;
      xVacas[i] = x;
      yVacas[i] = y;
    }
  }
  if(cerdo.cargaOK)
  {
    var cantidad = aleatorio(1,5);
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio (1,5);
      var y = aleatorio (1,5);
      var x = x*60;
      var y = y*60;
      xCerdos[i] = x;
      yCerdos[i] = y;
    }
   }
if (pollo.cargaOK)
  {
    var cantidad = aleatorio(1,5);
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio (1,5);
      var y = aleatorio (1,5);
      var x = x*60;
      var y = y*60;
      xPollos[i] = x;
      yPollos[i] = y;
    }
  }
    dibujar();
}
// se encarga de poner las imagenes en el orden que se le pone
function dibujar()
{

  if (mapa.cargaOK)
  {
    papel.drawImage(mapa.imagen,0,0);
  }
  if (vaca.cargaOK)
  {
      for (var i = 0; i < 5 ; i++)
    {
      papel.drawImage(vaca.imagen,xVacas[i],yVacas[i]);
    }
  }
  if (cerdo.cargaOK)
  {
    for (var i = 0; i <5 ; i++)
    {
    papel.drawImage(cerdo.imagen,xCerdos[i],yCerdos[i]);
    }
  }
  if (pollo.cargaOK)
  {
    for (var i = 0; i< 5; i++)
    {
    papel.drawImage(pollo.imagen,xPollos[i],yPollos[i]);
    }
  }
  if(granjero.cargaOK)
  {
    papel.drawImage(granjero.imagen,xGranjero,yGranjero);
  }
}

// lo que movera al granjero xd
function moverGranjero(tecla)
{
    var movimiento= 40
    var teclas = {LEFT:37,UP:38,RIGHT:39,DOWN:40};
    switch (tecla.keyCode)
    {
      case teclas.LEFT:
        xGranjero = xGranjero-movimiento;
        dibujar(xGranjero,yGranjero);
        break;
      case teclas.UP:
        yGranjero = yGranjero-movimiento;
        dibujar(xGranjero,yGranjero);
        break;
      case teclas.RIGHT:
        xGranjero = xGranjero+movimiento;
        dibujar(xGranjero,yGranjero);
        break;
      case teclas.DOWN:
        yGranjero= yGranjero+movimiento;
        dibujar(xGranjero,yGranjero);
        break;
    }
}

// razonamieto matematico para crear numeros aleatorios
function aleatorio(min,maxi)
{
    var resultado = Math.floor(Math.random()*(maxi - min +1)) + min ;
    return resultado;
}
