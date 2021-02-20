'use strict';

var winston = require('winston');
var path = require('path');
var logPath = path.normalize('../../../config/log');

// grabs the curent log level from the sails config/log file
var logLevel = Object.values(require(logPath).log);

winston.addColors({
  debug: 'blue',
  info: 'green',
  warn: 'yellow',
  error: 'red',
  verbose: 'cyan'
})

var logger = winston.createLogger({
  levels: {
    error: 4,
    warn: 3,
    debug: 2,
    info: 1,
    verbose: 0
  },
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console({
      consoleWarnLevels: logLevel,
    }),
  ]
});

module.exports = logger;