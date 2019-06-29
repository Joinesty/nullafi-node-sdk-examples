const readline = require('readline');
const NullafiNodeSDK = require('@joinesty/nullafi-node-sdk');
const CommunicationVaultExample = require('./communication/communicationVaultExample');
const StaticVaultExample = require('./static/staticVaultExample');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Examples {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async Run() {
        const SDK = new NullafiNodeSDK(this.apiKey);
        const client = await SDK.createClient();

        await new CommunicationVaultExample(client).run();
        await new StaticVaultExample(client).run();
        
        rl.question('Type any key to close this program...', () => {
            rl.close();
        });
    }
}

module.exports = Examples;