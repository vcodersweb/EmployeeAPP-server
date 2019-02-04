const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  freezeTableName: true,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.employee = require('../models/employee.model.js')(sequelize, Sequelize);
db.salary = require('../models/salary.model.js')(sequelize, Sequelize);

//db.employee.hasOne(db.salary) 
db.salary.belongsTo(db.employee)  

module.exports = db;