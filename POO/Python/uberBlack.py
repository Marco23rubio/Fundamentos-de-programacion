from car import Car

class UberBlack(Car):
    typeCarAccepted =  []
    seatsMaterial = []

    def __init__(self,license,driver,typeCarAccepted,seatsMaterial) -> None:
        super().__init__(license,driver)
        self.typeCatypeCarAccepted = typeCarAccepted 
        self.seatsMaterial = seatsMaterial
        