class Billete
{
  constructor(v,c)
  {
      this.imagen = new Image ();
      this.valor = v;
      this.cantidad = c;
      this.imagen.src = imagenes[this.valor];
  }
}

imagenes = []
imagenes ["500"] = "500.jpg";
imagenes ["200"] = "200.jpg";
imagenes ["100"] = "100.jpg";
imagenes ["50"] = "50.jpg";
imagenes ["20"] = "20.jpg";

var caja = [];
caja.push( new Billete(500,3));
caja.push( new Billete(200,3));
caja.push( new Billete(100,3));
caja.push( new Billete(50,2));
caja.push( new Billete(20,2));
var entregar = [];
var div = 0;
var papeles = 0;
var dinero = 0;
var boton = document.getElementById("boton_html");
var t = document.getElementById("dinero_html");
var resultado = document.getElementById("resultado_html");
var totalCaja = document.getElementById("total_html");
var totalDinero= 0;
boton.addEventListener("click", darDinero);

function saldo()
{
  for (var x of caja)
  {
    totalDinero += (x.cantidad * x.valor);
  }
}

saldo()
{
  totalCaja.innerHTML ="Saldo = $ " +totalDinero;
}

function darDinero()
{
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if(dinero >= 20)
    {
      div = Math.floor(dinero/bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
        totalDinero -= (papeles*bi.valor);
      }
      else
      {
        papeles = div;
        totalDinero -=(papeles*bi.valor);
      }
      entregar.push(new Billete(bi.valor,papeles));
      dinero -= (bi.valor*papeles);
    }
  }
  if (dinero > 0)
  {
    resultado.innerHTML = "Error 404, intente de nuevo";
  }
  else
  {
    for (var e of entregar)
    {
      if (e.cantidad > 0 && totalDinero >= 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
        for (var i = 0; i < e.cantidad; i++)
        {
        resultado.innerHTML += "<img src=" + e.imagen.src + ">" + "<br>";
        }
      }
    }
  }
  if (totalDinero >0)
  {
    totalCaja.innerHTML= "El saldo actual del cajero es de $ " +totalDinero;
  }
  else
  {
    totalCaja.innerHTML ="Se nos acabo papi";
  }
}
