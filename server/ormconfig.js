require('dotenv').config();

module.exports = {
   // "url": process.env.MONGODB_URI,
   "ssl": true,
   "authSource": "admin",
   "type": "mongodb",
   "host": process.env.database,
   "database": "safe-space",
   "port": 27017, 
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/models/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}