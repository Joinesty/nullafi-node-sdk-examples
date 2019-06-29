class GenderExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Gender
        var created = await this.create(this.staticVault);

        // Retrieving a existent Gender
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.gender);

        // Deleting a existent Gender
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.gender.createGender(name);

        console.log("//// GenderExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.gender.retrieveGender(id);

        console.log("//// GenderExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, gender) {
        var retrieved = await vault.gender.retrieveGenderFromRealData(gender);

        console.log("//// GenderExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.gender.deleteGender(id);

        console.log("//// GenderExample.delete:");
        console.log("ok");
    }
}

module.exports = GenderExample;