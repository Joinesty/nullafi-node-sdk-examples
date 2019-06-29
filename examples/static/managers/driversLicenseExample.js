class DriversLicenseExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new DriversLicense
        var created = await this.create(this.staticVault);

        // Retrieving a existent DriversLicense
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.driverslicense);

        // Deleting a existent DriversLicense
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.driversLicense.createDriversLicense(name);

        console.log("//// DriversLicenseExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.driversLicense.retrieveDriversLicense(id);

        console.log("//// DriversLicenseExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, driversLicense) {
        var retrieved = await vault.driversLicense.retrieveDriversLicenseFromRealData(driversLicense);

        console.log("//// DriversLicenseExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.driversLicense.deleteDriversLicense(id);

        console.log("//// DriversLicenseExample.delete:");
        console.log("ok");
    }
}

module.exports = DriversLicenseExample;