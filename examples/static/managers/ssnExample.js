class SsnExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Ssn
        var created = await this.create(this.staticVault);

        // Retrieving a existent Ssn
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.ssn);

        // Deleting a existent Ssn
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.ssn.createSSN(name);

        console.log("//// SsnExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.ssn.retrieveSSN(id);

        console.log("//// SsnExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, ssn) {
        var retrieved = await vault.ssn.retrieveSSNFromRealData(ssn);

        console.log("//// SsnExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.ssn.deleteSSN(id);

        console.log("//// SsnExample.delete:");
        console.log("ok");
    }
}

module.exports = SsnExample;