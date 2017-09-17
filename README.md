# Chimera

Version: 0.0.1

Author: ErnestoPM


### Database

The current database supported is MongoDB, future support for more databases will be aded.

Make sure you have mongodb installed and "mongod" running.

### Config object

The config object is available to pass information to Chimera about the configuration of the app itself.

It contains the following keys: 
      
    databaseName: Defaults to "chimera" or process.env.databaseName
    databaseHost: Defaults to "localhost" or process.env.databaseHost
    databaseUser: Defaults to "root" or process.env.databaseUser
    databasePass: Defaults to "password" or process.env.databasePass
    databasePort: Defaults to "27017" or process.env.databasePort
    mongoConnectionString: Generates a mongodb connection string based on the current config variables

If you want to change any of this keys, you can modify them directly, like so: 
```javascript
const config = require('./config');
config.databaseUser = "newUser"
```

Todo:
1. Add Support to additional databases
2. Expose global Chimera object