
class Animales:
    def __init__(self,nombre) -> None:
        self.nombre = nombre
        print(nombre)

    def tipo_animal(self):
        pass 
        
class Leon(Animales):
    def tipo_animal(self):
        print("Animal Salvaje")

class Perro(Animales):
    def tipo_animal(self):
        print("Animal domestico")

animal1 = Leon("Simba")
animal1.tipo_animal()

animal2 = Perro("Rex")
animal2.tipo_animal()

# class Auto:
#     rueda = 4

#     def desplazamiento(self):
#         print("El auto se mueve en 4 ruedas")

# class Moto:
#     rueda = 2

#     def desplazamiento(self):
#         print("La moto se mueve sobre dos ruedas")

