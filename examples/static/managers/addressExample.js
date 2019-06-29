class AddressExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new Address
        var created = await this.create(this.staticVault);

        // Retrieving a existent Address
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.address);

        // Deleting a existent Address
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.address.createAddress(name);

        console.log("//// AddressExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.address.retrieveAddress(id);

        console.log("//// AddressExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, address) {
        var retrieved = await vault.address.retrieveAddressFromRealData(address);

        console.log("//// AddressExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.address.deleteAddress(id);

        console.log("//// AddressExample.delete:");
        console.log("ok");
    }
}

module.exports = AddressExample;