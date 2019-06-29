var Examples = require('./examples/examples');

class Program
{
    static api_key()
    {
        return "YOUR_API_KEY";
    }

    static async main() 
    {
        try {
            const examples = new Examples(this.api_key());
            await examples.Run();
        }
        catch (ex) {
            console.log(ex);
        }
    }
}

Program.main();