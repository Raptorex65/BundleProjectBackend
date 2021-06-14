const donaterRepo = require('../persistency/donater-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createDonater = async(newDonater) => {
    return await donaterRepo.create(newDonater);
}

const deleteDonater = async(donaterId) => {
    return await donaterRepo.remove(donaterId);
}

const getAllDonaters = async() => {
    return await donaterRepo.getAll();
}

const getDonaterById = async(donaterId) => {
    return await donaterRepo.findById(donaterId);
}

const updateDonater = async(donaterId, donaterToBeUpdated) => {
    let updatedTeacher = await donaterRepo.updateById(donaterId, donaterToBeUpdated);
    return updatedTeacher;
}

module.exports = {createDonater, deleteDonater, getAllDonaters, 
    getDonaterById, updateDonater};


