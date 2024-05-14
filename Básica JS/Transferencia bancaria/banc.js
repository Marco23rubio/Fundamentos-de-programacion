var cuenta = document.getElementById("cuenta_html");
var cantidad = document.getElementById("cantidad_html");
var boton = document.getElementById("listo_html");
var saldo = document.getElementById("saldo_html");
var mensaje = document.getElementById("mensaje_html");
boton.addEventListener("click",atun);
var banco_igual = false;
var cuenta_verificada = true;
var saldo_cliente = 30000;
var comision = 5;
var hora = 19 ;
var kuenta = 0;
var  monto = 0;

saldo.innerHTML = "Saldo: $" + saldo_cliente;

function atun()
{
  kuenta = parseInt(cuenta.value);
  monto = parseInt(cantidad.value);
  if ( banco_igual == true && cuenta_verificada == true && hora >= 9 && hora <= 20 && monto <= saldo_cliente)
  {
    mensaje.innerHTML = "Su transferencia por $" +monto +" se ha realizado con éxito a la cuenta num:"+kuenta;
  }
  else if (banco_igual == false && cuenta_verificada == true && hora >= 9 && hora <= 20 && (monto + comision <= saldo_cliente))
  {
    mensaje.innerHTML = "Su transferencia por $" +monto + " se ha realizado con éxito a la cuenta num:"+kuenta;
  }
  else
  {
    mensaje.innerHTML = "Error 404, intente de nuevo";
  }
  if (banco_igual==false)
  {
    saldo.innerHTML = "Saldo $" + (saldo_cliente-monto-comision);
  }
  else if (banco_igual)
  {
    saldo.innerHTML = "Saldo $" + (saldo_cliente-monto);
  }
}
