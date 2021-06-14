const beneficierRepo = require('../persistency/beneficier-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createBeneficier = async(newBeneficier) => {
    return await beneficierRepo.create(newBeneficier);
}

const deleteBeneficier = async(beneficierId) => {
    return await beneficierRepo.remove(beneficierId);
}

const getAllBeneficiers = async() => {
    return await beneficierRepo.getAll();
}

const getBeneficierById = async(beneficierId) => {
    return await beneficierRepo.findById(beneficierId);
}

const updateBeneficier = async(beneficierId, beneficierToBeUpdated) => {
    let movie = await beneficierRepo.updateById(beneficierId, beneficierToBeUpdated);
    return movie;
}

module.exports = {createBeneficier, deleteBeneficier, getAllBeneficiers, 
    getBeneficierById, updateBeneficier};


