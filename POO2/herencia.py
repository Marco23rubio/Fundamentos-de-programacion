
class Pokemon:
    pass
    def __init__(self,nombre,tipo) -> None:
        self.nombre = nombre
        self.tipo = tipo 

    def descripcion(self):
        return "{} es un pokemón de tipo: {}".format(self.nombre,self.tipo)


class Pikachu(Pokemon):
    def ataque(self,ataque):
        return "{} tipo de ataque: {}".format(self.nombre,ataque)

class Charmander(Pokemon):
    def ataque(self,ataque):
        return "{} tipo de ataque: {}".format(self.nombre,ataque)

pokemon1 = Pikachu("Juan","Eléctrico")
print(pokemon1.descripcion())
print(pokemon1.ataque("Impactrueno"))


         