var AddressExample = require('./managers/addressExample');
var DateOfBirthExample = require('./managers/dateOfBirthExample');
var DriversLicenseExample = require('./managers/driversLicenseExample');
var FirstNameExample = require('./managers/firstNameExample');
var GenderExample = require('./managers/genderExample');
var GenericExample = require('./managers/genericExample');
var LastNameExample = require('./managers/lastNameExample');
var PassportExample = require('./managers/passportExample');
var PlaceOfBirthExample = require('./managers/placeOfBirthExample');
var RaceExample = require('./managers/raceExample');
var RandomExample = require('./managers/randomExample');
var SsnExample = require('./managers/ssnExample');
var TaxPayerExample = require('./managers/taxPayerExample');
var VehicleRegistrationExample = require('./managers/vehicleRegistrationExample');

class StaticVaultExample {
    constructor(client) {
        this.client = client;
    }

    async run() {

        /* Creating a new Static Vault
         *
         * IMPORTANT: Store your Vault Id and MasterKey, it will be necessary to retrieve this one
         */
        var created = await this.createStaticVault(this.client);
        var vaultId = created.id;
        var vaultMasterKey = created.masterKey;


        /*
         * Retrieving a existent Static Vault
         *
         * IMPORTANT: You will need your Id and MasterKey
         */
        var retrievedStaticVault = await this.retrieveStaticVault(this.client, vaultId, vaultMasterKey);


        /*
         *  Running Static Vault Managers Examples
         */
        await new AddressExample(retrievedStaticVault).run();
        await new DateOfBirthExample(retrievedStaticVault).run();
        await new DriversLicenseExample(retrievedStaticVault).run();
        await new FirstNameExample(retrievedStaticVault).run();
        await new GenderExample(retrievedStaticVault).run();
        await new GenericExample(retrievedStaticVault).run();
        await new LastNameExample(retrievedStaticVault).run();
        await new PassportExample(retrievedStaticVault).run();
        await new PlaceOfBirthExample(retrievedStaticVault).run();
        await new RaceExample(retrievedStaticVault).run();
        await new RandomExample(retrievedStaticVault).run();
        await new SsnExample(retrievedStaticVault).run();
        await new TaxPayerExample(retrievedStaticVault).run();
        await new VehicleRegistrationExample(retrievedStaticVault).run();

        await this.deleteStaticVault(this.client, vaultId);
    }

    async createStaticVault(client) {
        var name = "Node.js - Sample Static Vault Name";


        var staticVault = await client.createStaticVault(name);
        console.log("**** StaticVaultExample.createStaticVault:");
        console.log("-> Id: " + staticVault.id);
        console.log("-> Name: " + staticVault.name);
        console.log("-> MasterKey: " + staticVault.masterKey);
        console.log("\n");

        return staticVault;
    }

    async retrieveStaticVault(client, id, masterKey) {
        var staticVault = await client.retrieveStaticVault(id, masterKey);
        console.log("**** StaticVaultExample.retrieveStaticVault:");
        console.log("-> Id: " + staticVault.id);
        console.log("-> Name: " + staticVault.name);
        console.log("-> MasterKey: " + staticVault.masterKey);
        console.log("\n");

        return staticVault;
    }

    async deleteStaticVault(client, id) {
        await client.deleteStaticVault(id);
        console.log("**** StaticVaultExample.deleteStaticVault:");
        console.log("-> Id: " + id);
        console.log("-> ok: true");
        console.log("\n");
    }
}

module.exports = StaticVaultExample;