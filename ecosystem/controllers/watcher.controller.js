const Visit     = require('../models/Visit');
const geoip     = require('geoip-lite');


/**
 * Route to watch a new visit made by a user at certain point
 * @param req Possibly contains the ip of the user
 * @param res The return response, it will certainly be a 200
 */
exports.watchVisit = (req, res) => {

    const now = new Date();
    const who = req.connection.remoteAddress;
    let visitedURL;
    let wasFrontend;
    if(req.body.visitedURL) {
        visitedURL = req.body.visitedURL;
        wasFrontend = true;
    } else {
        visitedURL = req.originalUrl;
        wasFrontend = false;
    }
    const geo = geoip.lookup(who);
    console.log(geo);

    console.log(`Chimera Registered a new visit from: ${who}, at: ${now}, and he was in: ${visitedURL}`);

    let newVisit = new Visit();
    newVisit.date = now;
    newVisit.from = who;
    newVisit.visitedURL = visitedURL;
    newVisit.wasFrontend = wasFrontend;
    newVisit.geoip = geo;


    newVisit.save(
        (err) => {
            if(err) {
                // Todo add capabilities for Chimera to log errors
                console.log("Chimera registered an error, logging it");
            }else {
                console.log("Chimera succesfully saved a new visit");
            }

            res.sendStatus(200);
        }
    );

};