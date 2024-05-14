
class Main {
    public static void main(String[] args) {
        UberX uberX = new UberX("AMQ123",new Account("Andres Herrera", "and123"),"Chevrolet","Sonic");
        // uberX.passenger = 4;
        uberX.setPassenger(5);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("GFH355",new Account("Andres Herrera","SDE856"));
        uberVan.setPassenger(6);
        uberVan.printDataCar();

        // Car car2 = new Car("WER589",new Account("Andrea Herrera", "hola852"));
        // car2.passenger = 5;
        // car2.printDataCar();
    }
}