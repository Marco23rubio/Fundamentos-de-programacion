var numero = 100;

for (var i = 1; i <=numero; i++)
{
  divisible=false;
  if(esDivisible(i,3))
  {
    document.write("fizz");
  }
  if(esDivisible(i,5))
  {
    document.write("buzz");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
      document.write(i);
  }
  document.write("<br>")
}

function esDivisible(num,divisor)
{
  if(num % divisor ==0)
  {
  return true;
  }  
}
