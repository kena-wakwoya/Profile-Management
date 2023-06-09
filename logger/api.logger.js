
const winston = require('winston');

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      level: 'warn',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
          return `[${timestamp}] ${level}: ${message}`;
        })
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
      ]
    });
  }

  info(message) {
    this.logger.info(message);
  }

  error(message) {
    this.logger.error(message);
  }
  warn(message) {
    this.logger.warn(message);
  }
  debug(message) {
    this.logger.debug(message);
  }
  silly(message) {
    this.logger.silly(message);
  }
}

module.exports = Logger;
