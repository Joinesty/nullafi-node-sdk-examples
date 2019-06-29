var EmailExample = require('./managers/emailExample');

class CommunicationVaultExample {
    constructor(client) {
        this.client = client;
    }

    async run() {

        /* Creating a new Communication Vault
         *
         * IMPORTANT: Store your Vault Id and MasterKey, it will be necessary to retrieve this one
         */
        var created = await this.createCommunicationVault(this.client);
        var vaultId = created.id;
        var vaultMasterKey = created.masterKey;


        /*
         * Retrieving a existent Communication Vault
         *
         * IMPORTANT: You will need your Id and MasterKey
         */
        var retrievedCommunicationVault = await this.retrieveCommunicationVault(this.client, vaultId, vaultMasterKey);


        /*
         *  Running Communication Vault Managers Examples
         */
        await new EmailExample(retrievedCommunicationVault).run();

        await this.deleteCommunicationVault(this.client, vaultId);
    }

    async createCommunicationVault(client) {
        var name = "Node.js - Sample Communication Vault Name";


        var communicationVault = await client.createCommunicationVault(name);
        console.log("**** CommunicationVaultExample.createCommunicationVault:");
        console.log("-> Id: " + communicationVault.id);
        console.log("-> Name: " + communicationVault.name);
        console.log("-> MasterKey: " + communicationVault.masterKey);
        console.log("\n");

        return communicationVault;
    }

    async retrieveCommunicationVault(client, id, masterKey) {
        var communicationVault = await client.retrieveCommunicationVault(id, masterKey);
        console.log("**** CommunicationVaultExample.retrieveCommunicationVault:");
        console.log("-> Id: " + communicationVault.id);
        console.log("-> Name: " + communicationVault.name);
        console.log("-> MasterKey: " + communicationVault.masterKey);
        console.log("\n");

        return communicationVault;
    }

    async deleteCommunicationVault(client, id) {
        await client.deleteCommunicationVault(id);
        console.log("**** CommunicationVaultExample.deleteCommunicationVault:");
        console.log("-> Id: " + id);
        console.log("-> ok: true");
        console.log("\n");
    }
}

module.exports = CommunicationVaultExample;