class LastNameExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new LastName
        var created = await this.create(this.staticVault);

        // Retrieving a existent LastName
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.lastname);

        // Deleting a existent LastName
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.lastName.createLastName(name);

        console.log("//// LastNameExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.lastName.retrieveLastName(id);

        console.log("//// LastNameExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, lastName) {
        var retrieved = await vault.lastName.retrieveLastNameFromRealData(lastName);

        console.log("//// LastNameExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.lastName.deleteLastName(id);

        console.log("//// LastNameExample.delete:");
        console.log("ok");
    }
}

module.exports = LastNameExample;