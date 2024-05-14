class Mamifero:
    def __init__(self,nombre) -> None:
        print(nombre,"Es un animal de sangre caliente")
class Leon(Mamifero):
    def __init__(self,nombre) -> None:
        print("El leon es un animal de cuatro patas")
        super().__init__(nombre)
nuevo_leon = Leon("Simba")
