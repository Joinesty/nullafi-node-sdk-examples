class RandomExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Random
        var created = await this.create(this.staticVault);

        // Retrieving a existent Random
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.data);

        // Deleting a existent Random
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.random.createRandom(name);

        console.log("//// RandomExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.random.retrieveRandom(id);

        console.log("//// RandomExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, random) {
        var retrieved = await vault.random.retrieveRandomFromRealData(random);

        console.log("//// RandomExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.random.deleteRandom(id);

        console.log("//// RandomExample.delete:");
        console.log("ok");
    }
}

module.exports = RandomExample;