const watcher       = require('./routes/watcher.routes');

const api_routes = function(app) {
    app.use(watcher)
};

module.exports = api_routes;