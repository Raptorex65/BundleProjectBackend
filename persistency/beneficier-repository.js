const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.beneficier.findAll();
};

const findById = async(beneficierId) => {
    return await db.beneficier.findByPk(beneficierId);
}

const create = async(newBeneficier) => {
    return await db.beneficier.create(newBeneficier);
}
  
const remove = async(beneficierId)=> {
    return await db.beneficier.destroy({
      where: { id: beneficierId }
    })
}

const updateById = async(beneficierId, beneficierToBeUpdated)=> {
    return await db.beneficier.update(beneficierToBeUpdated, {
      where: { id: beneficierId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





