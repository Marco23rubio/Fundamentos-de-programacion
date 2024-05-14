from account import Account

class Car:
    id = int
    license = int
    driver= Account("","")
    passenger = int 

    def __init__(self,license,driver):
        self.license = license
        self.driver = driver
        # self.passenger = passenger

    def printDataCar():
        print("Car license:" +license)

    # def setPassenger(self,passengerNum):
    #     if passengerNum >= 4:
    #         self.__passenger = int (passengerNum)
    #         print("Passenger: "+ str(self.__passenger))
        
    #     else:
    #         print("El número de pasajeros debe ser mayor o igual a 4")


