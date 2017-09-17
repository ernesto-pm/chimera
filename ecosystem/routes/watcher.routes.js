const router = require('express').Router();
const WatcherController  = require('../controllers/watcher.controller');

router.route('/watch')
    .post(WatcherController.watchVisit);

module.exports = router;
