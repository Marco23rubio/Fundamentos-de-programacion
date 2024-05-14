
# curso = "Python"
# print("Tutoriales de %s"%curso)

# nombre = "Victor"
# edad = 25
# # print("Hola soy %s y tengo %s años"%(nombre,edad))

# print(f"El valor de {nombre} es de {edad} pesos")

class Estudiante:
    def __init__(self,nombre,apellido,edad) -> None:
        self.nombre = nombre
        self.apellido = apellido 
        self.edad = edad 
    
    def __repr__(self) -> str:
        return f"Nombre:{self.nombre} Apellido:{self.apellido} Edad:{self.edad}"

nuevo_estudiante = Estudiante("Victor","Perez",17)
print(nuevo_estudiante)

