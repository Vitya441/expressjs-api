const Clinic = require("../models/clinic")

class ClinicRepository {
    
    async create(clinicData) {
        return await Clinic.create(clinicData);
    }

    async findAll() {
        return await Clinic.findAll();
    }

    async findById(clinicId) {
        return await Clinic.findByPk(clinicId);
    }



}   

module.exports = new ClinicRepository();