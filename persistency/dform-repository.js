const db = require('../util/sequelize-db.js')

const create = async(newForm) => {
  return await db.dform.create(newForm);
}

const getAll = async() => {
  return await db.dform.findAll();
};




module.exports = {create, getAll};
