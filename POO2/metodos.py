# class Matematica:
#     def suma(self):
#         self.n1 = 2
#         self.n2 = 5

# s = Matematica()
# s.suma()
# print(s.n1 + s.n2)

# class Ropa:
#     def __init__(self) -> None:
#         self.marca = "Willow"
#         self.talla = "M"
#         self.color = "rojo"

# camisa = Ropa()
# print(camisa.talla +" "+ camisa.marca)

class Calculadora:
    def __init__(self,n1,n2):
        self.suma = n1 + n2
        self.resta = n1 - n2
        self.producto = n1 * n2
        self.division = n1 / n2

operacion = Calculadora(1,6)
print(operacion.producto)
