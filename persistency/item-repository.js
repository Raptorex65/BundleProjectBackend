const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.item.findAll();
};

const findById = async(pId) => {
    return await db.item.findByPk(pId);
}

const create = async(newItem) => {
    return await db.item.create(newItem);
}
  
const remove = async(pId)=> {
    return await db.item.destroy({
      where: { id: pId }
    })
}

const updateById = async(pId, pUpdatedItem)=> {
    return await db.item.update(pUpdatedItem, {
      where: { id: pId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





