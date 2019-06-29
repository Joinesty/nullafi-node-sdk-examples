class PlaceOfBirthExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new PlaceOfBirth
        var created = await this.create(this.staticVault);

        // Retrieving a existent PlaceOfBirth
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.placeofbirth);

        // Deleting a existent PlaceOfBirth
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.placeOfBirth.createPlaceOfBirth(name);

        console.log("//// PlaceOfBirthExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.placeOfBirth.retrievePlaceOfBirth(id);

        console.log("//// PlaceOfBirthExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, placeOfBirth) {
        var retrieved = await vault.placeOfBirth.retrievePlaceOfBirthFromRealData(placeOfBirth);

        console.log("//// PlaceOfBirthExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.placeOfBirth.deletePlaceOfBirth(id);

        console.log("//// PlaceOfBirthExample.delete:");
        console.log("ok");
    }
}

module.exports = PlaceOfBirthExample;