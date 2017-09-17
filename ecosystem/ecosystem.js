const mongoose          = require('mongoose');
const config            = require('./config');
const colors            = require('colors');
const express           = require('express');
const routes            = require('./routes');
const bodyParser        = require('body-parser');
const methodOverride    = require('method-override');
const app               = express();

/**
 * Connect to mongodb
 */
mongoose.connect(config.mongoConnectionString, function(err){
    if(err) {
        console.log(colors.red(err));
    }else {
        console.log(colors.green("Chimera is now connected to the database"));
    }
});

/** Parse incoming requests **/
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

/**
 * Launch the watcher service
 */
routes(app);
app.listen(config.port, () => { console.log(`Watcher is running on port: ${config.port}`.green); });

