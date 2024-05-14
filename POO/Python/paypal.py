from payment import Payment

class Paypal(Payment):
    correo = str
    
    
    def __init__(self, id,correo) -> None:
        super().__init__(id)
        self.correo = correo