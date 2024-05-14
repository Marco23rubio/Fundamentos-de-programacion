import math
from socket import NI_NUMERICHOST

class Calculadora:
    def __init__(self,numero) -> None:
        self.n = numero
        self.datos = [0 for i in range(numero)]

    def IngresarDato(self):
        self.datos = [int(input("Ingresar datos " +str(i+1)+" = "))for i in range(self.n)]

class Op_basicas(Calculadora):
    def __init__(self) -> None:
        Calculadora.__init__(self,2)

    def Suma (self):
        a,b, = self.datos
        s = a+b 
        print("El resultado es: ",s)
    
    def Resta (self):
        a,b, = self.datos
        r = a-b 
        print("El resultado es: ",r)

class Raiz(Calculadora):
    def __init__(self) -> None:
        Calculadora.__init__(self,1)

    def cuadrada(self):
        a, = self.datos
        print("El resultado es: ",math.sqrt(a))

objeto = Op_basicas()
print(isinstance(objeto,Raiz))
print(issubclass(Op_basicas,Calculadora))
