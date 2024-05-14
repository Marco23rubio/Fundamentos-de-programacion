class Empleado:
    def __init__(self,nombre,salario) -> None:
        self.__nombre = nombre
        self.__salario = salario

    def __getnombre(self):
        return self.__nombre
    def __getsalario(self):
        return self.__salario

    def __setnombre(self,nombre):
        self.__nombre = nombre
    def __setsalario(self,salario):
        self.__salario = salario

    def __delnombre(self):
        del self.__nombre
    def __delsalario(self):
        del self.__salario  


# empleado_uno = Empleado("Diego",5000)
# print(empleado_uno.getnombre(),",",empleado_uno.getsalario())
# empleado_uno.setnombre("Raul")
# print(empleado_uno.getnombre(),",",empleado_uno.getsalario())

    nombre = property(fget=__getnombre,fset=__setnombre,fdel=__delnombre)
    salario = property(fget=__getsalario,fset=__setsalario,fdel=__delsalario)

empleado_uno = Empleado("Victor",3000)
empleado_uno.nombre = "Sara"
print(empleado_uno.nombre,empleado_uno.salario)