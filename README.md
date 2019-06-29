
Nullafi Node.js SDK Examples
===============

A Node.js Application with examples to use the Nullafi Node.js SDK.

- [Pre Requisites](#pre-requisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Copyright and License](#copyright-and-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Pre Requisites
------------
- Node.js >= v10.14.0

Installation
------------
- Run `npm install` to install the SDK npm package

Getting Started
---------------

- To get started with the Examples, get a API Key from the Configuration page
of your app in the [Settings Page - API Key][settings-api-key]. You can use this token to make calls for your own Nullafi account.

- All vaults and tokens examples are in `examples` folder.

- Run `npm start` to view all examples working.

```javascript
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
```

[settings-api-key]: https://dashboard.nullafi.com/admin/settings/api


Copyright and License
---------------------

Copyright 2019 Joinesty, Inc. All rights reserved.
