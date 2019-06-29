class GenericExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Generic
        var created = await this.create(this.staticVault);

        // Retrieving a existent Generic
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.data);

        // Deleting a existent Generic
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.generic.createGeneric(name, "\d{3}");

        console.log("//// GenericExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.generic.retrieveGeneric(id);

        console.log("//// GenericExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, generic) {
        var retrieved = await vault.generic.retrieveGenericFromRealData(generic);

        console.log("//// GenericExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.generic.deleteGeneric(id);

        console.log("//// GenericExample.delete:");
        console.log("ok");
    }
}

module.exports = GenericExample;