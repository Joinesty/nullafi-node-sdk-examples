class TaxPayerExample {
    constructor(staticVault) {
        this.staticVault = staticVault;
    }

    async run() {
        // Creating a new TaxPayer
        var created = await this.create(this.staticVault);

        // Retrieving a existent TaxPayer
        var retrieved = await this.retrieve(this.staticVault, created.id);
        await this.retrieveFromRealData(this.staticVault, created.taxpayer);

        // Deleting a existent TaxPayer
        await this.delete(this.staticVault, retrieved.id);
    }

    async create(vault) {
        var name = "real data";

        var created = await vault.taxPayer.createTaxPayer(name);

        console.log("//// TaxPayerExample.create:");
        console.log("/// Name: " + name);
        console.log(created);

        return created;
    }

    async retrieve(vault, id) {
        const retrieved = await vault.taxPayer.retrieveTaxPayer(id);

        console.log("//// TaxPayerExample.retrieve:");
        console.log(retrieved);

        return retrieved;
    }

    async retrieveFromRealData(vault, taxPayer) {
        var retrieved = await vault.taxPayer.retrieveTaxPayerFromRealData(taxPayer);

        console.log("//// TaxPayerExample.retrieveFromRealData:");
        console.log(retrieved);
    }

    async delete(vault, id) {
        await vault.taxPayer.deleteTaxPayer(id);

        console.log("//// TaxPayerExample.delete:");
        console.log("ok");
    }
}

module.exports = TaxPayerExample;