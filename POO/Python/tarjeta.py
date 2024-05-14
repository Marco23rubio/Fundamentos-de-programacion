from payment import Payment

class Tarjeta(Payment):
    number = int
    cvv = int
    
    def __init__(self, id,number,cvv) -> None:
        super().__init__(id)
        self.number = number
        self.cvv = cvv