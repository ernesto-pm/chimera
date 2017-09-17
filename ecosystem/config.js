const CONFIG = Symbol.for("config");

var globalSymbols = Object.getOwnPropertySymbols(global);
var hasConfig = (globalSymbols.indexOf(CONFIG) > -1);

if(!hasConfig) {
    global[CONFIG] = {
        databaseName: process.env.databaseName || "chimera",
        databaseHost: process.env.databaseHost || "localhost",
        databaseUser: process.env.databaseUser || "root",
        databasePass: process.env.databasePass || "",
        databasePort: process.env.databasePort || 27017
    };
}

var singleton = {};

Object.defineProperty(singleton, "instance", {
    get: function () {
        return global[CONFIG];
    }
});

Object.defineProperty(singleton.instance, "mongoConnectionString", {
    get: function () {
        return `mongodb://${singleton.instance.databaseUser}:${singleton.instance.databasePass}@${singleton.instance.databaseHost}:${singleton.instance.databasePort}/${singleton.instance.databaseName}`
    }
});

Object.freeze(singleton);

module.exports = singleton.instance;