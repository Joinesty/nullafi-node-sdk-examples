class PassportExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Passport
        var created = await this.create(this.staticVault);

        // Retrieving a existent Passport
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.passport);

        // Deleting a existent Passport
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.passport.createPassport(name);

        console.log("//// PassportExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.passport.retrievePassport(id);

        console.log("//// PassportExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, passport) {
        var retrieved = await vault.passport.retrievePassportFromRealData(passport);

        console.log("//// PassportExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.passport.deletePassport(id);

        console.log("//// PassportExample.delete:");
        console.log("ok");
    }
}

module.exports = PassportExample;