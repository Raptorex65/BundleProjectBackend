const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../environment-config.json')
const Item = require('../models/item.model');
const Beneficier = require('../models/beneficier.model')
const Donater = require('../models/donater.model')
const Bundle = require('../models/bundle.model')


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.item = Item(sequelize, Sequelize);
db.beneficier = Beneficier(sequelize, Sequelize);
db.donater = Donater(sequelize, Sequelize);
db.bundle = Bundle(sequelize, Sequelize);
// create relationship
db.donater.hasMany(db.item);
db.beneficier.hasMany(db.item);

db.bundle.hasMany(db.item, { foreignKey: 'itemId' });
db.item.belongsTo(db.bundle);

// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;



