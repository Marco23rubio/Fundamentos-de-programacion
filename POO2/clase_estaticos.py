import math

class Pastel:
    def __init__(self,ingredientes,tamaño) -> None:
        self.ingredientes = ingredientes
        self.tamaño = tamaño
         
    def __repr__(self) -> str:
        return (f"Ingredientes: {self.ingredientes} Tamaño{self.tamaño}")
    
    def area(self):
        return self.tamaño_area(self.tamaño)
    
    @staticmethod
    def tamaño_area(A):
        return A ** 2 * math.pi

nuevo_pastel = Pastel(["Harina","Leche","Huevos"],4)

print(nuevo_pastel.tamaño_area(4))


#     @classmethod
#     def Pastel_chocolate(cls):
#         return cls(["harina","leche","chocolate"])

#     @classmethod
#     def Pastel_vainilla(cls):
#         return cls(["harina","leche","vainilla"])

# print(Pastel.Pastel_chocolate())



     