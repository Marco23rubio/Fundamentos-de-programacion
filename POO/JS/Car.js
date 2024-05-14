class Car {

    constructor(license, Account) {
        this.id;
        this.license = license;
        this.driver = Account;
        this.passenger;
    }

    printDataCar() {
        console.table(this.driver)
        console.log(this.driver.name)
        console.log(this.driver.document)
    }
    
}