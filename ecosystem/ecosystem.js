const express       = require('express');
const mongoose      = require('mongoose');
const _             = require('lodash');
const config        = require('./config');

//console.log(config.getDBConnectionString);
config.databaseUser = "chimera2";
console.log(config.mongoConnectionString);