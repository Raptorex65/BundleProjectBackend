const dformRepo = require('../persistency/dform-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createForm = async(newForm) => {
	return await dformRepo.create(newForm);
}

const getAllForms = async() => {
    return await dformRepo.getAll();
}

module.exports = {createForm, getAllForms}

