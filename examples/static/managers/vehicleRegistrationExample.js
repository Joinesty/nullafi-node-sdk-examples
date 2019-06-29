class VehicleRegistrationExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new VehicleRegistration
        var created = await this.create(this.staticVault);

        // Retrieving a existent VehicleRegistration
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.vehicleregistration);

        // Deleting a existent VehicleRegistration
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.vehicleRegistration.createVehicleRegistration(name);

        console.log("//// VehicleRegistrationExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.vehicleRegistration.retrieveVehicleRegistration(id);

        console.log("//// VehicleRegistrationExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, vehicleRegistration) {
        var retrieved = await vault.vehicleRegistration.retrieveVehicleRegistrationFromRealData(vehicleRegistration);

        console.log("//// VehicleRegistrationExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.vehicleRegistration.deleteVehicleRegistration(id);

        console.log("//// VehicleRegistrationExample.delete:");
        console.log("ok");
    }
}

module.exports = VehicleRegistrationExample;