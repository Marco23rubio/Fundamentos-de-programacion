class Tomate:
    def tipo(self):
        print("Vegetal")
    def color(self):
        print("Rojo")

class Manzana:
    def tipo(self):
        print("Fruta")
    def color(self):
        print("Roja")

def funcion(objeto):
    objeto.tipo()
    objeto.color()

nuevo_tomate = Tomate()
funcion(nuevo_tomate)

nueva_manzana = Manzana()
funcion(nueva_manzana)