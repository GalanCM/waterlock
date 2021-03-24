"use strict";

var winston = require("winston");
var path = require("path");
var logPath = path.normalize("../../../config/log");

var logger = require(logPath).log.custom;

module.exports = logger;
