class Aves:
    def volar(self):
        print("La mayoría de las aves pueden volar")

class Aguila(Aves):
    def volar(self):
        print("Las aguilas pueden volar")

class Gallina(Aves):
    def volar(self):
        print("La gallina no puede volar")

obj_ave = Aves()
obj_aguila = Aguila()
obj_ave.volar()
obj_aguila.volar()