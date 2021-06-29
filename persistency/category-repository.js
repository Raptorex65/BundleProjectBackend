const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.category.findAll();
};

const findById = async(catId) => {
    return await db.category.findByPk(catId);
}

const create = async(newCat) => {
    return await db.category.create(newCat);
}
  
const remove = async(catId)=> {
    return await db.category.destroy({
      where: { id: catId }
    })
}

const updateById = async(catId, catToBeUpdated)=> {
    return await db.category.update(catToBeUpdated, {
      where: { id: catId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





