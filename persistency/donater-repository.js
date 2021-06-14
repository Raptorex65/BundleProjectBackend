const db = require('../util/sequelize-db.js')

const getAll = async() => {
  return await db.donater.findAll();
};

const findById = async(donaterId) => {
  return await db.donater.findByPk(donaterId);
}

const create = async(newDonater) => {
  return await db.donater.create(newDonater);
}

const remove = async(donaterId)=> {
  return await db.donater.destroy({
    where: { id: donaterId }
  })
}

const updateById = async(donaterId, donaterToBeUpdated)=> {
  return await db.donater.update(donaterToBeUpdated, {
    where: { id: donaterId }
  });
}
module.exports = {getAll, findById, create, remove, updateById};
