from car import Car
from account import Account

if __name__ == "__main__":

    car = Car ("AMS234",Account("Andres Lopez","ANDA876"))
    print(vars(car))
    print(vars(car.driver))
    # car.printDataCar(5)
    # car = Car()
    # car.license ="WRD487"
    # car.driver = "Andres herrera"
    # print(vars(car))

    # car2 = Car()
    # car2.license = "AWE856"
    # car2.driver = "Martha"
    # print(vars(car2))
