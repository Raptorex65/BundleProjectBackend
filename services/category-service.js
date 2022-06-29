const catRepo = require('../persistency/category-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createCategory = async(newCat) => {
    return await catRepo.create(newCat);
}

const deleteCategory = async(catId) => {
    return await catRepo.remove(catId);
}

const getAllCategories = async() => {
    return await catRepo.getAll();
}

const getCategoryById = async(catId) => {
    return await catRepo.findById(catId);
}

const updateCategory = async(catId, catToBeUpdated) => {
    let category = await catRepo.updateById(catId, catToBeUpdated);
    return category;
}

module.exports = {createCategory, deleteCategory, getAllCategories, 
    getCategoryById, updateCategory};


