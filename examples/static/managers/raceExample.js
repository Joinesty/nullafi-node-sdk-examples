class RaceExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Race
        var created = await this.create(this.staticVault);

        // Retrieving a existent Race
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.race);

        // Deleting a existent Race
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.race.createRace(name);

        console.log("//// RaceExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.race.retrieveRace(id);

        console.log("//// RaceExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, race) {
        var retrieved = await vault.race.retrieveRaceFromRealData(race);

        console.log("//// RaceExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.race.deleteRace(id);

        console.log("//// RaceExample.delete:");
        console.log("ok");
    }
}

module.exports = RaceExample;