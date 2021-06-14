const bundleRepo = require('../persistency/bundle-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createBundle = async(newBundle) => {
    return await bundleRepo.create(newBundle);
}

const deleteBundle = async(bundleId) => {
    return await bundleRepo.remove(bundleId);
}

const getAllBundles = async() => {
    return await bundleRepo.getAll();
}

const getBundleById = async(bundleId) => {
    return await bundleRepo.findById(bundleId);
}

const updateBundle = async(bundleId, bundleToBeUpdated) => {
    let item = await bundleRepo.updateById(bundleId, bundleToBeUpdated);
    return item;
}

module.exports = {createBundle, deleteBundle, getAllBundles, 
    getBundleById, updateBundle};


