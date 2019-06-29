class DateOfBirthExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new DateOfBirth
        var created = await this.create(this.staticVault);

        // Retrieving a existent DateOfBirth
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.dateofbirth);

        // Deleting a existent DateOfBirth
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "emai@example.com";

        var created = await vault.dateOfBirth.createDateOfBirth(name);

        console.log("//// DateOfBirthExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.dateOfBirth.retrieveDateOfBirth(id);

        console.log("//// DateOfBirthExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, dateOfBirth) {
        var retrieved = await vault.dateOfBirth.retrieveDateOfBirthFromRealData(dateOfBirth);

        console.log("//// DateOfBirthExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.dateOfBirth.deleteDateOfBirth(id);

        console.log("//// DateOfBirthExample.delete:");
        console.log("ok");
    }
}

module.exports = DateOfBirthExample;