class FirstNameExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new FirstName
        var created = await this.create(this.staticVault);

        // Retrieving a existent FirstName
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.firstname);

        // Deleting a existent FirstName
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.firstName.createFirstName(name);

        console.log("//// FirstNameExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.firstName.retrieveFirstName(id);

        console.log("//// FirstNameExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, firstName) {
        var retrieved = await vault.firstName.retrieveFirstNameFromRealData(firstName);

        console.log("//// FirstNameExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.firstName.deleteFirstName(id);

        console.log("//// FirstNameExample.delete:");
        console.log("ok");
    }
}

module.exports = FirstNameExample;