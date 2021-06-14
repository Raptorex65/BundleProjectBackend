const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.item.findAll();
};

const findById = async(bundleId) => {
    return await db.item.findByPk(bundleId);
}

const create = async(newBundle) => {
    return await db.item.create(newBundle);
}
  
const remove = async(bundleId)=> {
    return await db.item.destroy({
      where: { id: bundleId }
    })
}

const updateById = async(bundleId, bundleToBeUpdated)=> {
    return await db.item.update(bundleToBeUpdated, {
      where: { id: bundleId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





