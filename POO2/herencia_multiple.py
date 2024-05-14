
class Telefono:
    def __init__(self) -> None:
        pass
    def llamar(self):
        print("Llamando")
    def ocupado(self):
        print("Ocupado")

class Camara:
    def __init__(self) -> None:
        pass
    def fotografia(self):
        print("Tomando fotos")
    
class Reproduccion:
    def __init__(self) -> None:
        pass
    def reproducciondemusica(self):
        print("Reproduciendo música")
    def reproducirvideo(self):
        print("Reproduciendo video")

class Smartphone(Telefono,Camara,Reproduccion):
    def __del__(self) -> None:
        print("Telefono apagado")

movil = Smartphone()
print(movil.fotografia())



