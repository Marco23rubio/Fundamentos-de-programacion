class Cliente:
    def __init__(self) -> None:
        self.__codigo = 4231

    def __cuenta(self):
        print("Cuenta de procesamiento")

    def getcodigo(self):
        return self.__codigo

persona = Cliente()
print(persona._Cliente__codigo) 

persona._Cliente__cuenta()