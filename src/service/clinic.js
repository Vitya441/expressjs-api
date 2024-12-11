const clinicRepository = require("../repository/clinic");

class ClinicService {
    
    async createClinic(clinicData) {
        return await clinicRepository.create(clinicData);
    }

    async getAllClinics() {
        return await clinicRepository.findAll();
    }

    async getClinicById(clinicId) {
        const user = await clinicRepository.findById(clinicId);
        if (!user) {
            throw new Error('Clinic not found');
        }
        return user;
    }

}

module.exports = new ClinicService();