class EmailExample {
    constructor(communicationVault) {
        this.communicationVault = communicationVault;
    }

    async run() {
        // Creating a new Email
        var created = await this.create(this.communicationVault);

        // Retrieving a existent Email
        var retrieved = await this.retrieve(this.communicationVault, created.id);
        await this.retrieveFromRealData(this.communicationVault, created.email);

        // Deleting a existent Email
        await this.delete(this.communicationVault, retrieved.id);
    }

    async create(vault) {
        var name = "real@data.com";

        var created = await vault.email.createEmail(name);

        console.log("//// EmailExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.email.retrieveEmail(id);

        console.log("//// EmailExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, email) {
        var retrieved = await vault.email.retrieveEmailFromRealData(email);

        console.log("//// EmailExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.email.deleteEmail(id);

        console.log("//// EmailExample.delete:");
        console.log("ok");
    }
}

module.exports = EmailExample;